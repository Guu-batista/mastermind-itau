from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session
from app.core.db import get_db
from app.core.security import decode_token
from app.repositories.user_repo import UserRepository

auth_scheme = HTTPBearer(auto_error=False)

def db_dep() -> Session:
    return next(get_db())

def get_current_user_id(
    creds: HTTPAuthorizationCredentials | None = Depends(auth_scheme),
) -> int:
    if not creds:
        raise HTTPException(status_code=401, detail="Nao autenticado")
    try:
        return int(decode_token(creds.credentials))
    except Exception:
        raise HTTPException(status_code=401, detail="Token invalido")

def get_current_user(
    db: Session = Depends(get_db),
    user_id: int = Depends(get_current_user_id),
):
    user = UserRepository().get_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=401, detail="Usuario nao encontrado")
    return user

