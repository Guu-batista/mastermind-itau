import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

describe('authInterceptor', () => {
  let authServiceMock: { token: string | null };

  const runInterceptor = (req: HttpRequest<unknown>) => {
    const next: HttpHandlerFn = (r) => of(new HttpResponse({ body: r }));
    return TestBed.runInInjectionContext(() => authInterceptor(req, next));
  };

  beforeEach(() => {
    authServiceMock = { token: null };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
      ],
    });
  });

  it('should be created', () => {
    expect(authInterceptor).toBeTruthy();
  });

  // Sem token
  describe('without token', () => {
    it('should pass request unchanged when no token', () => {
      authServiceMock.token = null;
      const req = new HttpRequest('GET', '/api/test');
      let result: HttpRequest<unknown> | undefined;

      runInterceptor(req).subscribe((res) => {
        result = (res as HttpResponse<HttpRequest<unknown>>).body ?? undefined;
      });

      expect(result?.headers.has('Authorization')).toBeFalse();
    });
  });

  // Com token
  describe('with token', () => {
    it('should add Authorization header when token exists', () => {
      authServiceMock.token = 'meu-token-123';
      const req = new HttpRequest('GET', '/api/test');
      let result: HttpRequest<unknown> | undefined;

      runInterceptor(req).subscribe((res) => {
        result = (res as HttpResponse<HttpRequest<unknown>>).body ?? undefined;
      });

      expect(result?.headers.get('Authorization')).toBe('Bearer meu-token-123');
    });

    it('should not modify other headers', () => {
      authServiceMock.token = 'meu-token-123';
      const req = new HttpRequest('GET', '/api/test', null, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        });
      let result: HttpRequest<unknown> | undefined;

      runInterceptor(req).subscribe((res) => {
        result = (res as HttpResponse<HttpRequest<unknown>>).body ?? undefined;
      });

      expect(result?.headers.get('Content-Type')).toBe('application/json');
      expect(result?.headers.get('Authorization')).toBe('Bearer meu-token-123');
    });

    it('should use Bearer scheme in Authorization header', () => {
      authServiceMock.token = 'abc.def.ghi';
      const req = new HttpRequest('POST', '/api/data', {});
      let result: HttpRequest<unknown> | undefined;

      runInterceptor(req).subscribe((res) => {
        result = (res as HttpResponse<HttpRequest<unknown>>).body ?? undefined;
      });

      expect(result?.headers.get('Authorization')).toMatch(/^Bearer /);
    });
  });
});