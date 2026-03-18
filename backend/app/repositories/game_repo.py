from sqlalchemy import select
from sqlalchemy.orm import Session
from app.models.game import Game

class GameRepository:
    def get_by_code(self, db: Session, code: str) -> Game | None:
        stmt = select(Game).where(Game.code == code)
        return db.execute(stmt).scalars().first()
    def list_by_user(self, db: Session, user_id: int, limit: int = 50) -> list[Game]:
        stmt = (
            select(Game)
            .where(Game.user_id == user_id)
            .order_by(Game.created_at.desc())
            .limit(limit)
        )
        return list(db.execute(stmt).scalars().all())
    def create(self, db: Session, game: Game) -> Game:
        db.add(game)
        db.flush()
        return game

