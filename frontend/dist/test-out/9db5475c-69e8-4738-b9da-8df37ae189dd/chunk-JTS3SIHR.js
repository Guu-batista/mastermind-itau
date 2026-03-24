import {
  HttpClient,
  init_http
} from "./chunk-G56DYFNG.js";
import {
  Injectable,
  InjectionToken,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_tslib_es6,
  inject,
  of,
  signal,
  tap
} from "./chunk-S7FML5I3.js";
import {
  __esm
} from "./chunk-KD2YQCV6.js";

// src/app/core/api/api.tokens.ts
var API_BASE_URL;
var init_api_tokens = __esm({
  "src/app/core/api/api.tokens.ts"() {
    "use strict";
    init_core();
    API_BASE_URL = new InjectionToken("API_BASE_URL");
  }
});

// src/app/core/auth/auth.service.ts
var TOKEN_KEY, AuthService;
var init_auth_service = __esm({
  "src/app/core/auth/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    init_esm();
    init_api_tokens();
    TOKEN_KEY = "mm_token";
    AuthService = class AuthService2 {
      http = inject(HttpClient);
      baseUrl = inject(API_BASE_URL);
      me = signal(null);
      get token() {
        return localStorage.getItem(TOKEN_KEY);
      }
      get isLoggedIn() {
        return !!this.token;
      }
      login(payload) {
        return this.http.post(`${this.baseUrl}/auth/login`, payload).pipe(tap((res) => localStorage.setItem(TOKEN_KEY, res.access_token)), tap(() => this.refreshMe().subscribe()));
      }
      register(payload) {
        return this.http.post(`${this.baseUrl}/auth/register`, payload);
      }
      refreshMe() {
        if (!this.token) {
          this.me.set(null);
          return of(null);
        }
        return this.http.get(`${this.baseUrl}/auth/me`).pipe(tap((me) => this.me.set(me)), catchError(() => {
          this.logout();
          return of(null);
        }));
      }
      logout() {
        localStorage.removeItem(TOKEN_KEY);
        this.me.set(null);
      }
    };
    AuthService = __decorate([
      Injectable({ providedIn: "root" })
    ], AuthService);
  }
});

export {
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-JTS3SIHR.js.map
