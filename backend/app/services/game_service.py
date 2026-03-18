import json
import random
import uuid
from datetime import datetime
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.models.game import Game
from app.models.user import User
from app.repositories.game_repo import GameRepository
from datetime import datetime, timezone

class GameService:
    MAX_ATTEMPTS = 10
    CODE_LENGTH = 4
    ALPHABET = ["A", "B", "C", "D"]

    def __init__(self) -> None:
        self.games = GameRepository()

    def start_game(self, db: Session, *, user_id: int) -> Game:
        secret = [random.choice(self.ALPHABET) for _ in range(self.CODE_LENGTH)]
        game = Game(
            code=str(uuid.uuid4()),
            user_id=user_id,
            secret="".join(secret),
            attempts_matrix="[]",
            score=0,
            duration_seconds=0,
            status="IN_PROGRESS",
            created_at=datetime.now(timezone.utc),
            finished_at=None,
        )
        self.games.create(db, game)
        db.commit()
        return game

    def _load_attempts(self, game: Game) -> list[dict]:
        try:
            data = json.loads(game.attempts_matrix)
            return data if isinstance(data, list) else []
        except Exception:
            return []

    def _save_attempts(self, game: Game, attempts: list[dict]) -> None:
        game.attempts_matrix = json.dumps(attempts, ensure_ascii=False)

    def _count_correct_positions(self, secret: str, guess: list[str]) -> int:
        return sum(1 for i,
                    ch in enumerate(guess)
                    if secret[i] == ch)

    def _correct_mask(self, secret: str, guess: list[str]) -> list[bool]:
        return [secret[i] == guess[i]
                 for i in range(self.CODE_LENGTH)]

    def submit_guess(self, db: Session, *, user_id: int, game_code: str, guess: list[str]) -> dict:
        game = self.games.get_by_code(db, game_code)
        if not game or game.user_id != user_id:
            raise LookupError("Partida não encontrada.")
        if game.status != "IN_PROGRESS":
            raise ValueError("Partida já finalizada.")

        if len(guess) != self.CODE_LENGTH or any(g not in self.ALPHABET for g in guess):
            raise ValueError("Tentativa inválida.")

        attempts = self._load_attempts(game)
        if len(attempts) >= self.MAX_ATTEMPTS:
            raise ValueError("Limite de tentativas atingido.")

        correct_mask = self._correct_mask(game.secret, guess)
        correct_positions = sum(1 for v in correct_mask if v)
        attempts.append(
            {"guess": guess, "correct_positions": correct_positions, "correct_mask": correct_mask}
        )
        self._save_attempts(game, attempts)

        attempt_number = len(attempts)
        won = correct_positions == self.CODE_LENGTH
        lost = (attempt_number >= self.MAX_ATTEMPTS) and not won

        if won or lost:
            game.status = "WON" if won else "LOST"
            game.finished_at = datetime.now(timezone.utc)
            game.duration_seconds = int((game.finished_at - game.created_at).total_seconds())
            total_correct = sum(a["correct_positions"] for a in attempts)
            game.score = total_correct * 50

            user = db.execute(select(User).where(User.id == user_id)).scalars().first()
            if user and game.score > user.best_score:
                user.best_score = game.score
        db.commit()

        remaining = self.MAX_ATTEMPTS - attempt_number
        return {
            "correct_positions": correct_positions,
            "correct_mask": correct_mask,
            "attempt_number": attempt_number,
            "remaining_attempts": remaining,
            "status": game.status,
            "score": game.score,
        }

