import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { signal } from '@angular/core';
import { ShellPage } from './shell.page';
import { AuthService, MeResponse } from '../../core/auth/auth.service';

const mockMe: MeResponse = {
  id: 1,
  username: 'usuario',
  email: 'user@email.com',
  best_score: 100,
};

describe('ShellPage', () => {
  let fixture: ComponentFixture<ShellPage>;
  let component: ShellPage;
  let authServiceMock: {
    me: ReturnType<typeof signal<MeResponse | null>>;
    isLoggedIn: boolean;
    refreshMe: jasmine.Spy;
    logout: jasmine.Spy;
  };
  let router: Router;

  beforeEach(async () => {
    authServiceMock = {
      me: signal<MeResponse | null>(null),
      isLoggedIn: true,
      refreshMe: jasmine.createSpy().and.returnValue(of(null)),
      logout: jasmine.createSpy(),
    };

    await TestBed.configureTestingModule({
      imports: [ShellPage],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    fixture.detectChanges();
  });

  // Criação
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Auth service injetado
  it('should have auth service injected', () => {
    expect(component.auth).toBeTruthy();
  });

  // refreshMe chamado no constructor
  it('should call refreshMe on init', () => {
    expect(authServiceMock.refreshMe).toHaveBeenCalled();
  });

  // onLogout
  describe('onLogout', () => {
    it('should call auth.logout', () => {
      component.onLogout();
      expect(authServiceMock.logout).toHaveBeenCalled();
    });

    it('should redirect to /login after logout', () => {
      component.onLogout();
      expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
    });
  });
});