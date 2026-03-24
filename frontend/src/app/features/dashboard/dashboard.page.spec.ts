import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';
import { DashboardPage } from './dashboard.page';
import { AuthService, MeResponse } from '../../core/auth/auth.service';

const mockMe: MeResponse = {
  id: 1,
  username: 'usuario',
  email: 'user@email.com',
  best_score: 100,
};

describe('DashboardPage', () => {
  let fixture: ComponentFixture<DashboardPage>;
  let component: DashboardPage;
  let authServiceMock: { me: ReturnType<typeof signal<MeResponse | null>>; isLoggedIn: boolean; logout: jasmine.Spy };

  beforeEach(async () => {
    authServiceMock = {
      me: signal<MeResponse | null>(null),
      isLoggedIn: true,
      logout: jasmine.createSpy(),
    };

    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [
        provideRouter([]),
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have auth service injected', () => {
    expect(component.auth).toBeTruthy();
  });

  it('should have me as null initially', () => {
    expect(component.auth.me()).toBeNull();
  });

  it('should reflect user data when me is set', () => {
    authServiceMock.me.set(mockMe);
    fixture.detectChanges();
    expect(component.auth.me()).toEqual(mockMe);
    expect(component.auth.me()?.username).toBe('usuario');
    expect(component.auth.me()?.best_score).toBe(100);
  });

  it('should be logged in', () => {
    expect(component.auth.isLoggedIn).toBe(true);
  });
});