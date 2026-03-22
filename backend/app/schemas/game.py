from pydantic import BaseModel, Field

class StartGameResponse(BaseModel):
    game_code: str
    max_attempts: int = 10
    code_length: int = 7
    alphabet: list[str] = ["A", "B", "C", "D", "E", "F", "G"]

class GuessRequest(BaseModel):
    guess: list[str] = Field(min_length=1, max_length=7)

class GuessResponse(BaseModel):
    correct_positions: int
    correct_mask: list[bool] = Field(min_length=1, max_length=7)
    attempt_number: int
    remaining_attempts: int
    status: str
    score: int

class GameSummaryResponse(BaseModel):
    game_code: str
    status: str
    score: int
    duration_seconds: int
    attempts: int
    created_at: str
    finished_at: str | None

class RankingRow(BaseModel):
    username: str
    best_score: int