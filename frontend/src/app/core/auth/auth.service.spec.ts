import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { AuthService, LoginRequest, MeResponse } from './auth.service';
import { API_BASE_URL } from '../api/api.tokens';

const mockToken = { access_token: 'fake-token-123', token_type: 'bearer' };
const mockMe: MeResponse = { id: 1, username: 'usuario', email: 'user@email.com', best_score: 100 };

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: { post: jasmine.Spy; get: jasmine.Spy };

  beforeEach(() => {
    httpMock = {
      post: jasmine.createSpy(),
      get: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: HttpClient, useValue: httpMock },
        { provide: API_BASE_URL, useValue: 'http://localhost:8000' },
      ],
    });

    service = TestBed.inject(AuthService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // token
  describe('token', () => {
    it('should return null when no token in localStorage', () => {
      expect(service.token).toBeNull();
    });

    it('should return token when present in localStorage', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      expect(service.token).toBe('fake-token-123');
    });
  });

  // isLoggedIn
  describe('isLoggedIn', () => {
    it('should return false when no token', () => {
      expect(service.isLoggedIn).toBe(false);
    });

    it('should return true when token exists', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      expect(service.isLoggedIn).toBe(true);
    });
  });

  // login
  describe('login', () => {
    const payload: LoginRequest = { username_or_email: 'usuario', password: '123456' };

    it('should call POST /auth/login with correct payload', () => {
      httpMock.post.and.returnValue(of(mockToken));
      httpMock.get.and.returnValue(of(mockMe));
      service.login(payload).subscribe();
      expect(httpMock.post).toHaveBeenCalledWith(
        'http://localhost:8000/auth/login',
        payload
      );
    });

    it('should save token to localStorage after login', () => {
      httpMock.post.and.returnValue(of(mockToken));
      httpMock.get.and.returnValue(of(mockMe));
      service.login(payload).subscribe();
      expect(localStorage.getItem('mm_token')).toBe('fake-token-123');
    });

    it('should call refreshMe after login', () => {
      httpMock.post.and.returnValue(of(mockToken));
      httpMock.get.and.returnValue(of(mockMe));
      service.login(payload).subscribe();
      expect(httpMock.get).toHaveBeenCalledWith('http://localhost:8000/auth/me');
    });
  });

  // register
  describe('register', () => {
    it('should call POST /auth/register with correct payload', () => {
      httpMock.post.and.returnValue(of({}));
      service.register({ username: 'usuario', password: '123456', email: 'user@email.com' }).subscribe();
      expect(httpMock.post).toHaveBeenCalledWith(
        'http://localhost:8000/auth/register',
        { username: 'usuario', password: '123456', email: 'user@email.com' }
      );
    });

    it('should call POST /auth/register without email', () => {
      httpMock.post.and.returnValue(of({}));
      service.register({ username: 'usuario', password: '123456' }).subscribe();
      expect(httpMock.post).toHaveBeenCalledWith(
        'http://localhost:8000/auth/register',
        { username: 'usuario', password: '123456' }
      );
    });
  });

  // refreshMe
  describe('refreshMe', () => {
    it('should set me to null and return of(null) when no token', () => {
      let result: MeResponse | null | undefined;
      service.refreshMe().subscribe((r) => (result = r));
      expect(result).toBeNull();
      expect(service.me()).toBeNull();
    });

    it('should call GET /auth/me when token exists', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      httpMock.get.and.returnValue(of(mockMe));
      service.refreshMe().subscribe();
      expect(httpMock.get).toHaveBeenCalledWith('http://localhost:8000/auth/me');
    });

    it('should update me signal after refreshMe', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      httpMock.get.and.returnValue(of(mockMe));
      service.refreshMe().subscribe();
      expect(service.me()).toEqual(mockMe);
    });

    it('should logout and return null when refreshMe fails', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      httpMock.get.and.returnValue(throwError(() => new Error('Unauthorized')));
      service.refreshMe().subscribe();
      expect(service.me()).toBeNull();
      expect(localStorage.getItem('mm_token')).toBeNull();
    });
  });

  // ✅ logout
  describe('logout', () => {
    it('should remove token from localStorage', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      service.logout();
      expect(localStorage.getItem('mm_token')).toBeNull();
    });

    it('should set me signal to null', () => {
      service.logout();
      expect(service.me()).toBeNull();
    });

    it('should set isLoggedIn to false after logout', () => {
      localStorage.setItem('mm_token', 'fake-token-123');
      service.logout();
      expect(service.isLoggedIn).toBe(false);
    });
  });
});