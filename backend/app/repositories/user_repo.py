from sqlalchemy import or_, select
from sqlalchemy.orm import Session
from app.models.user import User

class UserRepository:
    def get_by_username_or_email(self, db: Session, username_or_email: str) -> User | None:
        stmt = select(User).where(
            or_(User.username == username_or_email, User.email == username_or_email)
        )
        return db.execute(stmt).scalars().first()
    def get_by_id(self, db: Session, user_id: int) -> User | None:
        stmt = select(User).where(User.id == user_id)
        return db.execute(stmt).scalars().first()

    def create(self, db: Session, *, username: str, email: str | None, password_hash: str) -> User:
        user = User(username=username, email=email, password_hash=password_hash, best_score=0)
        db.add(user)
        db.flush()
        return user

