import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';

import { LoginPage } from './login.page';
import { AuthService } from '../../core/auth/auth.service';

describe('LoginPage', () => {
  let fixture: ComponentFixture<LoginPage>;
  let component: LoginPage;
  let authServiceMock: { login: jasmine.Spy };
  let router: Router;

  beforeEach(async () => {
    authServiceMock = { login: jasmine.createSpy() };

    await TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    fixture.detectChanges();
  });

  // ✅ Criação
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ✅ Estado inicial
  it('should start with empty form and no errors', () => {
    expect(component.form.value).toEqual({ username_or_email: '', password: '' });
    expect(component.loading()).toBe(false);
    expect(component.error()).toBeNull();
  });

  // ✅ Validação
  describe('form validation', () => {
    it('should be invalid when empty', () => {
      expect(component.form.invalid).toBe(true);
    });

    it('should be invalid when username_or_email has less than 3 characters', () => {
      component.form.patchValue({ username_or_email: 'ab', password: '123456' });
      expect(component.form.invalid).toBe(true);
    });

    it('should be invalid when password is empty', () => {
      component.form.patchValue({ username_or_email: 'usuario', password: '' });
      expect(component.form.invalid).toBe(true);
    });

    it('should be valid with all fields correct', () => {
      component.form.patchValue({ username_or_email: 'usuario', password: '123456' });
      expect(component.form.valid).toBe(true);
    });
  });

  // ✅ Submit inválido
  describe('onSubmit with invalid form', () => {
    it('should not call auth.login if form is invalid', () => {
      component.onSubmit();
      expect(authServiceMock.login).not.toHaveBeenCalled();
    });

    it('should clear error on submit', () => {
      component.error.set('erro anterior');
      component.onSubmit();
      expect(component.error()).toBeNull();
    });
  });

  // ✅ Submit com sucesso
  describe('onSubmit with success', () => {
    beforeEach(() => {
      component.form.patchValue({ username_or_email: 'usuario', password: '123456' });
      authServiceMock.login.and.returnValue(of({}));
    });

    it('should call auth.login with correct values', () => {
      component.onSubmit();
      expect(authServiceMock.login).toHaveBeenCalledWith({
        username_or_email: 'usuario',
        password: '123456',
      });
    });

    it('should stop loading after success', () => {
      component.onSubmit();
      expect(component.loading()).toBe(false);
    });

    it('should redirect to /app after success', fakeAsync(() => {
      component.onSubmit();
      tick();
      expect(router.navigateByUrl).toHaveBeenCalledWith('/app');
    }));
  });

  // ✅ Submit com erro
  describe('onSubmit with error', () => {
    beforeEach(() => {
      component.form.patchValue({ username_or_email: 'usuario', password: '123456' });
    });

    it('should set error message from API', () => {
      authServiceMock.login.and.returnValue(
        throwError(() => ({ error: { detail: 'Credenciais inválidas.' } }))
      );
      component.onSubmit();
      expect(component.error()).toBe('Credenciais inválidas.');
    });

    it('should set fallback error message when API has no detail', () => {
      authServiceMock.login.and.returnValue(throwError(() => ({})));
      component.onSubmit();
      expect(component.error()).toBe('Não foi possível entrar.');
    });

    it('should stop loading on error', () => {
      authServiceMock.login.and.returnValue(throwError(() => ({})));
      component.onSubmit();
      expect(component.loading()).toBe(false);
    });
  });
});