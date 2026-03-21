import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);
  readonly success = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.error.set(null);
    this.success.set(null);
    if (this.form.invalid) return;

    const raw = this.form.getRawValue();
    this.loading.set(true);
    this.auth
      .register({
        username: raw.username,
        email: raw.email?.trim() ? raw.email.trim() : null,
        password: raw.password,
      })
      .subscribe({
        next: () => {
          this.loading.set(false);
          this.success.set('Conta criada! Agora faça login.');
          setTimeout(() => this.router.navigateByUrl('/login'), 800);
        },
        error: (err) => {
          this.loading.set(false);
          this.error.set(err?.error?.detail ?? 'Não foi possível criar a conta.');
        },
      });
  }
}