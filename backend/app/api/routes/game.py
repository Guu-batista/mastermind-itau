from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_current_user_id
from app.core.db import get_db
from app.schemas.game import GuessRequest, GuessResponse, StartGameResponse
from app.services.game_service import GameService

router = APIRouter(prefix="/games", tags=["games"])

@router.post("/start", response_model=StartGameResponse)
def start_game(
    db: Session = Depends(get_db),
    user_id: int = Depends(get_current_user_id),
):
    game = GameService().start_game(db, user_id=user_id)
    return StartGameResponse(game_code=game.code)

@router.post("/{game_code}/guess", response_model=GuessResponse)
def submit_guess(
    game_code: str,
    payload: GuessRequest,
    db: Session = Depends(get_db),
    user_id: int = Depends(get_current_user_id),
):
    try:
        result = GameService().submit_guess(db, user_id=user_id, game_code=game_code, guess=payload.guess)
        return GuessResponse(**result)
    except LookupError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

