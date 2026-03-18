from fastapi import APIRouter, Depends
from sqlalchemy import desc, select
from sqlalchemy.orm import Session
from app.core.db import get_db
from app.models.user import User
from app.schemas.game import RankingRow

router = APIRouter(prefix="/ranking", tags=["ranking"])

@router.get("", response_model=list[RankingRow])
def get_ranking(db: Session = Depends(get_db), limit: int = 20):
    stmt = select(User).order_by(desc(User.best_score), User.username).limit(min(limit, 100))
    users = list(db.execute(stmt).scalars().all())
    return [RankingRow(username=u.username, best_score=u.best_score) for u in users]

