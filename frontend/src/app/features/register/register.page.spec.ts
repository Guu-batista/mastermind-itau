import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { RegisterPage } from './register.page';
import { AuthService } from '../../core/auth/auth.service';

describe('RegisterPage', () => {
  let fixture: ComponentFixture<RegisterPage>;
  let component: RegisterPage;
  let authServiceMock: { register: ReturnType<typeof vi.fn> };
  let router: Router;

  beforeEach(async () => {
    authServiceMock = { register: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [RegisterPage],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true); // 👈 spy no router real
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with empty form and no messages', () => {
    expect(component.form.value).toEqual({ username: '', email: '', password: '' });
    expect(component.loading()).toBe(false);
    expect(component.error()).toBeNull();
    expect(component.success()).toBeNull();
  });

  describe('form validation', () => {
    it('should be invalid when empty', () => {
      expect(component.form.invalid).toBe(true);
    });

    it('should be invalid when username has less than 3 characters', () => {
      component.form.patchValue({ username: 'ab', password: '123456' });
      expect(component.form.invalid).toBe(true);
    });

    it('should be invalid when password has less than 6 characters', () => {
      component.form.patchValue({ username: 'usuario', password: '123' });
      expect(component.form.invalid).toBe(true);
    });

    it('should be invalid when email is malformed', () => {
      component.form.patchValue({ username: 'usuario', password: '123456', email: 'emailerrado' });
      expect(component.form.invalid).toBe(true);
    });

    it('should be valid without email (email is optional)', () => {
      component.form.patchValue({ username: 'usuario', password: '123456', email: '' });
      expect(component.form.valid).toBe(true);
    });

    it('should be valid with all fields correct', () => {
      component.form.patchValue({ username: 'usuario', password: '123456', email: 'user@email.com' });
      expect(component.form.valid).toBe(true);
    });
  });

  describe('onSubmit with invalid form', () => {
    it('should not call auth.register if form is invalid', () => {
      component.onSubmit();
      expect(authServiceMock.register).not.toHaveBeenCalled();
    });
  });

  describe('onSubmit with success', () => {
    beforeEach(() => {
      component.form.patchValue({ username: 'usuario', password: '123456', email: 'user@email.com' });
      authServiceMock.register.mockReturnValue(of({}));
    });

    it('should call auth.register with correct values', () => {
      component.onSubmit();
      expect(authServiceMock.register).toHaveBeenCalledWith({
        username: 'usuario',
        email: 'user@email.com',
        password: '123456',
      });
    });

    it('should set success message and stop loading', () => {
      component.onSubmit();
      expect(component.success()).toBe('Conta criada! Agora faça login.');
      expect(component.loading()).toBe(false);
    });

    it('should redirect to /login after 800ms', async () => {
      vi.useFakeTimers();
      component.onSubmit();
      await vi.advanceTimersByTimeAsync(800);
      expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
      vi.useRealTimers();
    });

    it('should send email as null when empty', () => {
      component.form.patchValue({ email: '' });
      component.onSubmit();
      expect(authServiceMock.register).toHaveBeenCalledWith(
        expect.objectContaining({ email: null })
      );
    });
  });

  describe('onSubmit with error', () => {
    beforeEach(() => {
      component.form.patchValue({ username: 'usuario', password: '123456' });
    });

    it('should set error message from API', () => {
      authServiceMock.register.mockReturnValue(
        throwError(() => ({ error: { detail: 'Usuário já existe.' } }))
      );
      component.onSubmit();
      expect(component.error()).toBe('Usuário já existe.');
    });

    it('should set fallback error message when API has no detail', () => {
      authServiceMock.register.mockReturnValue(throwError(() => ({})));
      component.onSubmit();
      expect(component.error()).toBe('Não foi possível criar a conta.');
    });

    it('should stop loading on error', () => {
      authServiceMock.register.mockReturnValue(throwError(() => ({})));
      component.onSubmit();
      expect(component.loading()).toBe(false);
    });
  });
});