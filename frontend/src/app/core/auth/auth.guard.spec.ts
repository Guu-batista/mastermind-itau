import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
  let authServiceMock: { isLoggedIn: boolean };
  let router: Router;

  const runGuard = () => {
    return TestBed.runInInjectionContext(() =>
      authGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
    );
  };

  beforeEach(() => {
    authServiceMock = { isLoggedIn: false };

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
      ],
    });

    router = TestBed.inject(Router);
  });

  it('should return true when user is logged in', () => {
    authServiceMock.isLoggedIn = true;
    const result = runGuard();
    expect(result).toBe(true);
  });

  it('should return a UrlTree when user is not logged in', () => {
    authServiceMock.isLoggedIn = false;
    const result = runGuard();
    expect(result).toBeInstanceOf(UrlTree);
  });

  it('should redirect to /login when not logged in', () => {
    authServiceMock.isLoggedIn = false;
    const result = runGuard() as UrlTree;
    expect(result.toString()).toBe('/login');
  });
});