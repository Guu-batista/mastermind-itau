import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-MJTI7LEH.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-4HZNOIMW.js";
import {
  Router,
  RouterLink,
  init_router,
  provideRouter
} from "./chunk-BTDSAAD4.js";
import {
  Component,
  TestBed,
  __async,
  __commonJS,
  __decorate,
  __esm,
  fakeAsync,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  of,
  signal,
  throwError,
  tick
} from "./chunk-MI2ZW43Q.js";

// angular:jit:template:src\app\features\login\login.page.html
var login_page_default;
var init_login_page = __esm({
  "angular:jit:template:src\\app\\features\\login\\login.page.html"() {
    login_page_default = `<div class="wrap">\r
  <div class="card">\r
    <h1>Entrar</h1>\r
    <p class="sub">Use usu\xE1rio ou e-mail e sua senha.</p>\r
\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
      <label>\r
        <span>Usu\xE1rio / e-mail</span>\r
        <input formControlName="username_or_email" placeholder="ex: guilherme" />\r
        @if (form.controls.username_or_email.touched && form.controls.username_or_email.invalid) {\r
          <small class="err">Informe um usu\xE1rio/e-mail v\xE1lido.</small>\r
        }\r
      </label>\r
\r
      <label>\r
        <span>Senha</span>\r
        <input type="password" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\r
        @if (form.controls.password.touched && form.controls.password.invalid) {\r
          <small class="err">Informe sua senha.</small>\r
        }\r
      </label>\r
\r
      @if (error()) {\r
        <div class="alert">{{ error() }}</div>\r
      }\r
\r
      <button class="btn" type="submit" [disabled]="form.invalid || loading()">\r
        {{ loading() ? 'Entrando\u2026' : 'Entrar' }}\r
      </button>\r
    </form>\r
\r
    <div class="footer">\r
      <a class="btn" routerLink="/register">Criar conta</a>\r
    </div>\r
  </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\features\login\login.page.scss
var login_page_default2;
var init_login_page2 = __esm({
  "angular:jit:style:src\\app\\features\\login\\login.page.scss"() {
    login_page_default2 = "/* src/app/features/login/login.page.scss */\n.wrap {\n  min-height: 100dvh;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background:\n    radial-gradient(\n      1000px 500px at 20% 10%,\n      rgba(120, 90, 255, 0.35),\n      transparent),\n    radial-gradient(\n      900px 600px at 80% 60%,\n      rgba(0, 190, 255, 0.22),\n      transparent),\n    #0b1020;\n  color: #e9ecf5;\n}\n.card {\n  width: min(420px, 100%);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\nh1 {\n  margin: 0 0 0.25rem;\n}\n.sub {\n  margin: 0 0 1rem;\n  color: #cfd6ff;\n}\nform {\n  display: grid;\n  gap: 0.9rem;\n}\nlabel {\n  display: grid;\n  gap: 0.35rem;\n}\nlabel span {\n  font-weight: 600;\n  color: #cfd6ff;\n}\ninput {\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(10, 16, 32, 0.6);\n  color: #ffffff;\n  padding: 0.7rem 0.8rem;\n  outline: none;\n}\ninput:focus {\n  border-color: rgba(140, 156, 255, 0.7);\n  box-shadow: 0 0 0 3px rgba(140, 156, 255, 0.15);\n}\n.err {\n  color: #ffb4b4;\n}\n.alert {\n  border-radius: 0.75rem;\n  padding: 0.7rem 0.8rem;\n  background: rgba(255, 80, 80, 0.16);\n  border: 1px solid rgba(255, 80, 80, 0.25);\n}\n.btn {\n  border: 0;\n  border-radius: 0.9rem;\n  padding: 0.8rem;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  text-decoration: none;\n}\n.btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.footer {\n  margin-top: 0.9rem;\n  display: block;\n  text-align: center;\n}\n.footer .btn {\n  width: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=login.page.css.map */\n";
  }
});

// src/app/features/login/login.page.ts
var LoginPage;
var init_login_page3 = __esm({
  "src/app/features/login/login.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_page();
    init_login_page2();
    init_core();
    init_forms();
    init_router();
    init_auth_service();
    LoginPage = class LoginPage2 {
      fb = inject(FormBuilder);
      auth = inject(AuthService);
      router = inject(Router);
      loading = signal(false);
      error = signal(null);
      form = this.fb.nonNullable.group({
        username_or_email: ["", [Validators.required, Validators.minLength(3)]],
        password: ["", [Validators.required]]
      });
      onSubmit() {
        this.error.set(null);
        if (this.form.invalid)
          return;
        this.loading.set(true);
        this.auth.login(this.form.getRawValue()).subscribe({
          next: () => {
            this.loading.set(false);
            this.router.navigateByUrl("/app");
          },
          error: (err) => {
            this.loading.set(false);
            this.error.set(err?.error?.detail ?? "N\xE3o foi poss\xEDvel entrar.");
          }
        });
      }
    };
    LoginPage = __decorate([
      Component({
        standalone: true,
        selector: "app-login",
        imports: [ReactiveFormsModule, RouterLink],
        template: login_page_default,
        styles: [login_page_default2]
      })
    ], LoginPage);
  }
});

// src/app/features/login/login.page.spec.ts
var require_login_page_spec = __commonJS({
  "src/app/features/login/login.page.spec.ts"(exports) {
    init_testing();
    init_router();
    init_esm();
    init_login_page3();
    init_auth_service();
    describe("LoginPage", () => {
      let fixture;
      let component;
      let authServiceMock;
      let router;
      beforeEach(() => __async(null, null, function* () {
        authServiceMock = { login: jasmine.createSpy() };
        yield TestBed.configureTestingModule({
          imports: [LoginPage],
          providers: [
            provideRouter([]),
            { provide: AuthService, useValue: authServiceMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        spyOn(router, "navigateByUrl").and.returnValue(Promise.resolve(true));
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should start with empty form and no errors", () => {
        expect(component.form.value).toEqual({ username_or_email: "", password: "" });
        expect(component.loading()).toBe(false);
        expect(component.error()).toBeNull();
      });
      describe("form validation", () => {
        it("should be invalid when empty", () => {
          expect(component.form.invalid).toBe(true);
        });
        it("should be invalid when username_or_email has less than 3 characters", () => {
          component.form.patchValue({ username_or_email: "ab", password: "123456" });
          expect(component.form.invalid).toBe(true);
        });
        it("should be invalid when password is empty", () => {
          component.form.patchValue({ username_or_email: "usuario", password: "" });
          expect(component.form.invalid).toBe(true);
        });
        it("should be valid with all fields correct", () => {
          component.form.patchValue({ username_or_email: "usuario", password: "123456" });
          expect(component.form.valid).toBe(true);
        });
      });
      describe("onSubmit with invalid form", () => {
        it("should not call auth.login if form is invalid", () => {
          component.onSubmit();
          expect(authServiceMock.login).not.toHaveBeenCalled();
        });
        it("should clear error on submit", () => {
          component.error.set("erro anterior");
          component.onSubmit();
          expect(component.error()).toBeNull();
        });
      });
      describe("onSubmit with success", () => {
        beforeEach(() => {
          component.form.patchValue({ username_or_email: "usuario", password: "123456" });
          authServiceMock.login.and.returnValue(of({}));
        });
        it("should call auth.login with correct values", () => {
          component.onSubmit();
          expect(authServiceMock.login).toHaveBeenCalledWith({
            username_or_email: "usuario",
            password: "123456"
          });
        });
        it("should stop loading after success", () => {
          component.onSubmit();
          expect(component.loading()).toBe(false);
        });
        it("should redirect to /app after success", fakeAsync(() => {
          component.onSubmit();
          tick();
          expect(router.navigateByUrl).toHaveBeenCalledWith("/app");
        }));
      });
      describe("onSubmit with error", () => {
        beforeEach(() => {
          component.form.patchValue({ username_or_email: "usuario", password: "123456" });
        });
        it("should set error message from API", () => {
          authServiceMock.login.and.returnValue(throwError(() => ({ error: { detail: "Credenciais inv\xE1lidas." } })));
          component.onSubmit();
          expect(component.error()).toBe("Credenciais inv\xE1lidas.");
        });
        it("should set fallback error message when API has no detail", () => {
          authServiceMock.login.and.returnValue(throwError(() => ({})));
          component.onSubmit();
          expect(component.error()).toBe("N\xE3o foi poss\xEDvel entrar.");
        });
        it("should stop loading on error", () => {
          authServiceMock.login.and.returnValue(throwError(() => ({})));
          component.onSubmit();
          expect(component.loading()).toBe(false);
        });
      });
    });
  }
});
export default require_login_page_spec();
//# sourceMappingURL=spec-app-features-login-login.page.spec.js.map
