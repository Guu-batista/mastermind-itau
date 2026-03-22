import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../api/api.tokens';

export type StartGameResponse = {
  game_code: string;
  max_attempts: number;
  code_length: number;
  alphabet: string[];
};

export type GuessResponse = {
  correct_positions: number;
  correct_mask: boolean[];
  attempt_number: number;
  remaining_attempts: number;
  status: 'IN_PROGRESS' | 'WON' | 'LOST' | string;
  score: number;
};

@Injectable({ providedIn: 'root' })
export class GameService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  start() {
    return this.http.post<StartGameResponse>(`${this.baseUrl}/games/start`, {});
  }

  guess(gameCode: string, guess: string[]) {
    return this.http.post<GuessResponse>(`${this.baseUrl}/games/${gameCode}/guess`, { guess });
  }
}

