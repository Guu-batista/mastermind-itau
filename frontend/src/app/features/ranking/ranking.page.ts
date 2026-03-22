import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../core/api/api.tokens';

type RankingRow = { username: string; best_score: number };

@Component({
  standalone: true,
  selector: 'app-ranking',
  imports: [CommonModule],
  templateUrl: './ranking.page.html',
  styleUrl: './ranking.page.scss',
})
export class RankingPage {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  readonly rows = signal<RankingRow[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  constructor() {
    this.load();
  }

  load() {
    this.error.set(null);
    this.loading.set(true);
    this.http.get<RankingRow[]>(`${this.baseUrl}/ranking`).subscribe({
      next: (rows) => {
        this.rows.set(rows);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.detail ?? 'Não foi possível carregar o ranking.');
        this.loading.set(false);
      },
    });
  }
}