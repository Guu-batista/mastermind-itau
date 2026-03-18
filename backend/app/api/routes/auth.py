from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.db import get_db
from app.schemas.auth import LoginRequest, MeResponse, RegisterRequest, TokenResponse
from app.services.auth_service import AuthService
from app.api.deps import get_current_user

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", status_code=201)
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    try:
        AuthService().register(
            db, username=payload.username, email=payload.email, password=payload.password
        )
        return {"message": "Usuário criado certo"}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    try:
        token = AuthService().login(
            db, username_or_email=payload.username_or_email, password=payload.password
        )
        return TokenResponse(access_token=token)
    except PermissionError as e:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))

@router.get("/me", response_model=MeResponse)
def me(user=Depends(get_current_user)):
    return MeResponse(id=user.id, username=user.username, email=user.email, best_score=user.best_score)

