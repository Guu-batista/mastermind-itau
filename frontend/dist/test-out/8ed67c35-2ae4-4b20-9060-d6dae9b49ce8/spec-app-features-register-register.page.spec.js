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

// angular:jit:template:src\app\features\register\register.page.html
var register_page_default;
var init_register_page = __esm({
  "angular:jit:template:src\\app\\features\\register\\register.page.html"() {
    register_page_default = `<div class="wrap">\r
  <div class="card">\r
    <h1>Criar conta</h1>\r
    <p class="sub">Crie um usu\xE1rio para salvar hist\xF3rico e pontua\xE7\xE3o.</p>\r
\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()">\r
      <label>\r
        <span>Usu\xE1rio</span>\r
        <input formControlName="username" placeholder="ex: guilherme" />\r
        @if (form.controls.username.touched && form.controls.username.invalid) {\r
          <small class="err">M\xEDnimo 3 caracteres.</small>\r
        }\r
      </label>\r
\r
      <label>\r
        <span>E-mail (opcional)</span>\r
        <input formControlName="email" placeholder="ex: eu@exemplo.com" />\r
        @if (form.controls.email.touched && form.controls.email.invalid) {\r
          <small class="err">E-mail inv\xE1lido.</small>\r
        }\r
      </label>\r
\r
      <label>\r
        <span>Senha</span>\r
        <input type="password" formControlName="password" placeholder="m\xEDnimo 6 caracteres" />\r
        @if (form.controls.password.touched && form.controls.password.invalid) {\r
          <small class="err">M\xEDnimo 6 caracteres.</small>\r
        }\r
      </label>\r
\r
      @if (error()) {\r
        <div class="alert">{{ error() }}</div>\r
      }\r
\r
      @if (success()) {\r
        <div class="ok">{{ success() }}</div>\r
      }\r
\r
      <button class="btn" type="submit" [disabled]="form.invalid || loading()">\r
        {{ loading() ? 'Criando\u2026' : 'Criar conta' }}\r
      </button>\r
    </form>\r
\r
    <div class="footer">\r
      <a routerLink="/login">Voltar para login</a>\r
    </div>\r
  </div>\r
</div>`;
  }
});

// angular:jit:style:src\app\features\register\register.page.scss
var register_page_default2;
var init_register_page2 = __esm({
  "angular:jit:style:src\\app\\features\\register\\register.page.scss"() {
    register_page_default2 = "/* src/app/features/register/register.page.scss */\n.wrap {\n  min-height: 100dvh;\n  display: grid;\n  place-items: center;\n  padding: 1rem;\n  background:\n    radial-gradient(\n      1000px 500px at 20% 10%,\n      rgba(120, 90, 255, 0.35),\n      transparent),\n    radial-gradient(\n      900px 600px at 80% 60%,\n      rgba(0, 190, 255, 0.22),\n      transparent),\n    #0b1020;\n  color: #e9ecf5;\n}\n.card {\n  width: min(460px, 100%);\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 1rem;\n  padding: 1.25rem;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\nh1 {\n  margin: 0 0 0.25rem;\n}\n.sub {\n  margin: 0 0 1rem;\n  color: #cfd6ff;\n}\nform {\n  display: grid;\n  gap: 0.9rem;\n}\nlabel {\n  display: grid;\n  gap: 0.35rem;\n}\nlabel span {\n  font-weight: 600;\n  color: #cfd6ff;\n}\ninput {\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  background: rgba(10, 16, 32, 0.6);\n  color: #ffffff;\n  padding: 0.7rem 0.8rem;\n  outline: none;\n}\ninput:focus {\n  border-color: rgba(140, 156, 255, 0.7);\n  box-shadow: 0 0 0 3px rgba(140, 156, 255, 0.15);\n}\n.err {\n  color: #ffb4b4;\n}\n.alert {\n  border-radius: 0.75rem;\n  padding: 0.7rem 0.8rem;\n  background: rgba(255, 80, 80, 0.16);\n  border: 1px solid rgba(255, 80, 80, 0.25);\n}\n.ok {\n  border-radius: 0.75rem;\n  padding: 0.7rem 0.8rem;\n  background: rgba(0, 190, 255, 0.12);\n  border: 1px solid rgba(0, 190, 255, 0.2);\n}\n.btn {\n  border: 0;\n  border-radius: 0.9rem;\n  padding: 0.8rem;\n  cursor: pointer;\n  font-weight: 700;\n  display: inline-block;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.08);\n  color: #ffffff;\n  text-decoration: none;\n}\n.btn:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.footer {\n  margin-top: 0.9rem;\n  display: flex;\n  justify-content: center;\n}\na {\n  color: #cfd6ff;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.page.css.map */\n";
  }
});

// src/app/features/register/register.page.ts
var RegisterPage;
var init_register_page3 = __esm({
  "src/app/features/register/register.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_register_page();
    init_register_page2();
    init_core();
    init_forms();
    init_router();
    init_auth_service();
    RegisterPage = class RegisterPage2 {
      fb = inject(FormBuilder);
      auth = inject(AuthService);
      router = inject(Router);
      loading = signal(false);
      error = signal(null);
      success = signal(null);
      form = this.fb.nonNullable.group({
        username: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]]
      });
      onSubmit() {
        this.error.set(null);
        this.success.set(null);
        if (this.form.invalid)
          return;
        const raw = this.form.getRawValue();
        this.loading.set(true);
        this.auth.register({
          username: raw.username,
          email: raw.email?.trim() ? raw.email.trim() : null,
          password: raw.password
        }).subscribe({
          next: () => {
            this.loading.set(false);
            this.success.set("Conta criada! Agora fa\xE7a login.");
            setTimeout(() => this.router.navigateByUrl("/login"), 800);
          },
          error: (err) => {
            this.loading.set(false);
            this.error.set(err?.error?.detail ?? "N\xE3o foi poss\xEDvel criar a conta.");
          }
        });
      }
    };
    RegisterPage = __decorate([
      Component({
        standalone: true,
        selector: "app-register",
        imports: [ReactiveFormsModule, RouterLink],
        template: register_page_default,
        styles: [register_page_default2]
      })
    ], RegisterPage);
  }
});

// src/app/features/register/register.page.spec.ts
var require_register_page_spec = __commonJS({
  "src/app/features/register/register.page.spec.ts"(exports) {
    init_testing();
    init_router();
    init_esm();
    init_register_page3();
    init_auth_service();
    describe("RegisterPage", () => {
      let fixture;
      let component;
      let authServiceMock;
      let router;
      beforeEach(() => __async(null, null, function* () {
        authServiceMock = { register: jasmine.createSpy() };
        yield TestBed.configureTestingModule({
          imports: [RegisterPage],
          providers: [
            provideRouter([]),
            { provide: AuthService, useValue: authServiceMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterPage);
        component = fixture.componentInstance;
        router = TestBed.inject(Router);
        spyOn(router, "navigateByUrl").and.returnValue(Promise.resolve(true));
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should start with empty form and no messages", () => {
        expect(component.form.value).toEqual({ username: "", email: "", password: "" });
        expect(component.loading()).toBe(false);
        expect(component.error()).toBeNull();
        expect(component.success()).toBeNull();
      });
      describe("form validation", () => {
        it("should be invalid when empty", () => {
          expect(component.form.invalid).toBe(true);
        });
        it("should be invalid when username has less than 3 characters", () => {
          component.form.patchValue({ username: "ab", password: "123456" });
          expect(component.form.invalid).toBe(true);
        });
        it("should be invalid when password has less than 6 characters", () => {
          component.form.patchValue({ username: "usuario", password: "123" });
          expect(component.form.invalid).toBe(true);
        });
        it("should be invalid when email is malformed", () => {
          component.form.patchValue({ username: "usuario", password: "123456", email: "emailerrado" });
          expect(component.form.invalid).toBe(true);
        });
        it("should be valid without email (email is optional)", () => {
          component.form.patchValue({ username: "usuario", password: "123456", email: "" });
          expect(component.form.valid).toBe(true);
        });
        it("should be valid with all fields correct", () => {
          component.form.patchValue({ username: "usuario", password: "123456", email: "user@email.com" });
          expect(component.form.valid).toBe(true);
        });
      });
      describe("onSubmit with invalid form", () => {
        it("should not call auth.register if form is invalid", () => {
          component.onSubmit();
          expect(authServiceMock.register).not.toHaveBeenCalled();
        });
      });
      describe("onSubmit with success", () => {
        beforeEach(() => {
          component.form.patchValue({ username: "usuario", password: "123456", email: "user@email.com" });
          authServiceMock.register.and.returnValue(of({}));
        });
        it("should call auth.register with correct values", () => {
          component.onSubmit();
          expect(authServiceMock.register).toHaveBeenCalledWith({
            username: "usuario",
            email: "user@email.com",
            password: "123456"
          });
        });
        it("should set success message and stop loading", () => {
          component.onSubmit();
          expect(component.success()).toBe("Conta criada! Agora fa\xE7a login.");
          expect(component.loading()).toBe(false);
        });
        it("should redirect to /login after 800ms", fakeAsync(() => {
          component.onSubmit();
          tick(800);
          expect(router.navigateByUrl).toHaveBeenCalledWith("/login");
        }));
        it("should send email as null when empty", () => {
          component.form.patchValue({ email: "" });
          component.onSubmit();
          expect(authServiceMock.register).toHaveBeenCalledWith(jasmine.objectContaining({ email: null }));
        });
      });
      describe("onSubmit with error", () => {
        beforeEach(() => {
          component.form.patchValue({ username: "usuario", password: "123456" });
        });
        it("should set error message from API", () => {
          authServiceMock.register.and.returnValue(throwError(() => ({ error: { detail: "Usu\xE1rio j\xE1 existe." } })));
          component.onSubmit();
          expect(component.error()).toBe("Usu\xE1rio j\xE1 existe.");
        });
        it("should set fallback error message when API has no detail", () => {
          authServiceMock.register.and.returnValue(throwError(() => ({})));
          component.onSubmit();
          expect(component.error()).toBe("N\xE3o foi poss\xEDvel criar a conta.");
        });
        it("should stop loading on error", () => {
          authServiceMock.register.and.returnValue(throwError(() => ({})));
          component.onSubmit();
          expect(component.loading()).toBe(false);
        });
      });
    });
  }
});
export default require_register_page_spec();
//# sourceMappingURL=spec-app-features-register-register.page.spec.js.map
