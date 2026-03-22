import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    username_or_email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    this.error.set(null);
    if (this.form.invalid) return;

    this.loading.set(true);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigateByUrl('/app');
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.detail ?? 'Não foi possível entrar.');
      },
    });
  }
}