import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { GameService } from '../../core/game/game.service';

type AttemptView = {
  guess: string[];
  correct_positions: number | null;
  correct_mask: boolean[] | null;
  submitted: boolean;
};

@Component({
  standalone: true,
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.page.html',
  styleUrl: './game.page.scss',
})
export class GamePage {
  private readonly fb = inject(FormBuilder);
  private readonly games = inject(GameService);
  readonly showModal = signal(false);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly gameCode = signal<string | null>(null);
  readonly alphabet = signal<string[]>(['A', 'B', 'C', 'D']);
  readonly status = signal<'IN_PROGRESS' | 'WON' | 'LOST' | string>('IN_PROGRESS');
  readonly score = signal<number>(0);

  readonly attempts = signal<AttemptView[]>(
    Array.from({ length: 10 }, () => ({
      guess: ['A', 'A', 'A', 'A'],
      correct_positions: null,
      correct_mask: null,
      submitted: false,
    })),
  );

  readonly currentIndex = computed(() => this.attempts().findIndex((a) => !a.submitted));
  readonly isFinished = computed(() => this.status() !== 'IN_PROGRESS');

  newGame() {
    this.error.set(null);
    this.loading.set(true);
    this.games.start().subscribe({
      next: (res) => {
        this.loading.set(false);
        this.gameCode.set(res.game_code);
        this.alphabet.set(res.alphabet);
        this.status.set('IN_PROGRESS');
        this.score.set(0);
        this.attempts.set(
          Array.from({ length: res.max_attempts }, () => ({
            guess: Array.from({ length: res.code_length }, () => res.alphabet[0]),
            correct_positions: null,
            correct_mask: null,
            submitted: false,
          })),
        );
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.detail ?? 'Não foi possível iniciar a partida.');
      },
    });
  }

  setCell(rowIndex: number, colIndex: number, value: string) {
    const list = this.attempts().slice();
    if (!list[rowIndex]) return;
    list[rowIndex] = {
      ...list[rowIndex],
      guess: list[rowIndex].guess.map((v, i) => (i === colIndex ? value : v)),
    };
    this.attempts.set(list);
  }

  submit() {
    const idx = this.currentIndex();
    if (idx < 0) return;
    const code = this.gameCode();
    if (!code) return;

    this.error.set(null);
    this.loading.set(true);
    const attempt = this.attempts()[idx];
    this.games.guess(code, attempt.guess).subscribe({
      next: (res) => {
        this.loading.set(false);
        const list = this.attempts().slice();
        list[idx] = {
          ...list[idx],
          correct_positions: res.correct_positions,
          correct_mask: res.correct_mask,
          submitted: true,
        };
        this.attempts.set(list);
        this.status.set(res.status);
        this.score.set(res.score);
        if (res.status !== 'IN_PROGRESS') {
          this.showModal.set(true);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.detail ?? 'Erro: Tentativa inválida');
      },
    });
  }
}