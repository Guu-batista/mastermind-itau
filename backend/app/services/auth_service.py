from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.core.security import create_access_token, hash_password, verify_password
from app.repositories.user_repo import UserRepository

class AuthService:
    def __init__(self) -> None:
        self.users = UserRepository()

    def register(self, db: Session, *, username: str, email: str | None, password: str) -> str:
        password_hash = hash_password(password)
        try:
            self.users.create(db, username=username, email=email, password_hash=password_hash)
            db.commit()
        except IntegrityError as e:
            db.rollback()
            raise ValueError("Usuário ja cadastrado") from e
        return "ok"

    def login(self, db: Session, *, username_or_email: str, password: str) -> str:
        user = self.users.get_by_username_or_email(db, username_or_email)
        if not user or not verify_password(password, user.password_hash):
            raise PermissionError("Algo esta errado!")
        return create_access_token(str(user.id))