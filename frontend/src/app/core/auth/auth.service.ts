import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';

import { API_BASE_URL } from '../api/api.tokens';

export type LoginRequest = { username_or_email: string; password: string };
export type TokenResponse = { access_token: string; token_type: string };
export type MeResponse = { id: number; username: string; email: string | null; best_score: number };

const TOKEN_KEY = 'mm_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  readonly me = signal<MeResponse | null>(null);

  get token(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }

  login(payload: LoginRequest) {
    return this.http.post<TokenResponse>(`${this.baseUrl}/auth/login`, payload).pipe(
      tap((res) => localStorage.setItem(TOKEN_KEY, res.access_token)),
      tap(() => this.refreshMe().subscribe()),
    );
  }

  register(payload: { username: string; email?: string | null; password: string }) {
    return this.http.post(`${this.baseUrl}/auth/register`, payload);
  }

  refreshMe() {
    if (!this.token) {
      this.me.set(null);
      return of(null);
    }
    return this.http.get<MeResponse>(`${this.baseUrl}/auth/me`).pipe(
      tap((me) => this.me.set(me)),
      catchError(() => {
        // token expired/invalid
        this.logout();
        return of(null);
      }),
    );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.me.set(null);
  }
}

