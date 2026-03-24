import {
  AuthService,
  init_auth_service
} from "./chunk-4HZNOIMW.js";
import {
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
  init_core,
  init_testing,
  init_tslib_es6,
  inject,
  signal
} from "./chunk-MI2ZW43Q.js";

// angular:jit:template:src\app\features\dashboard\dashboard.page.html
var dashboard_page_default;
var init_dashboard_page = __esm({
  "angular:jit:template:src\\app\\features\\dashboard\\dashboard.page.html"() {
    dashboard_page_default = '<section class="hero">\r\n  <h1>Dashboard</h1>\r\n  <p>\r\n    Inicie uma nova partida, acompanhe seu melhor score e veja o ranking.\r\n  </p>\r\n</section>\r\n\r\n<section class="grid">\r\n  <a class="tile" routerLink="/app/game">\r\n    <h2>Jogar!</h2>\r\n    <p>Voc\xEA tem at\xE9 10 tentativas para acertar 4 posi\xE7\xF5es.</p>\r\n  </a>\r\n\r\n  <a class="tile" routerLink="/app/ranking">\r\n    <h2>Ranking</h2>\r\n    <p>Veja os melhores jogadores!</p>\r\n  </a>\r\n\r\n  <div class="tile muted">\r\n    <h2>Seu perfil</h2>\r\n    @if (auth.me()) {\r\n      <p><strong>{{ auth.me()!.username }}</strong></p>\r\n      <p>Melhor pontua\xE7\xE3o: <strong>{{ auth.me()!.best_score }}</strong></p>\r\n    } @else {\r\n      <p>Entre com sua conta para ver sua pontua\xE7\xE3o</p>\r\n    }\r\n  </div>\r\n</section>';
  }
});

// angular:jit:style:src\app\features\dashboard\dashboard.page.scss
var dashboard_page_default2;
var init_dashboard_page2 = __esm({
  "angular:jit:style:src\\app\\features\\dashboard\\dashboard.page.scss"() {
    dashboard_page_default2 = "/* src/app/features/dashboard/dashboard.page.scss */\n.hero {\n  margin-bottom: 1rem;\n}\nh1 {\n  margin: 0 0 0.25rem;\n}\np {\n  margin: 0;\n  color: #cfd6ff;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 900px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n.tile {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 1rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.tile:hover {\n  border-color: rgba(140, 156, 255, 0.4);\n}\n.tile.muted {\n  background: rgba(255, 255, 255, 0.04);\n}\nh2 {\n  margin: 0 0 0.4rem;\n}\n/*# sourceMappingURL=dashboard.page.css.map */\n";
  }
});

// src/app/features/dashboard/dashboard.page.ts
var DashboardPage;
var init_dashboard_page3 = __esm({
  "src/app/features/dashboard/dashboard.page.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard_page();
    init_dashboard_page2();
    init_core();
    init_router();
    init_auth_service();
    DashboardPage = class DashboardPage2 {
      auth = inject(AuthService);
    };
    DashboardPage = __decorate([
      Component({
        standalone: true,
        selector: "app-dashboard",
        imports: [RouterLink],
        template: dashboard_page_default,
        styles: [dashboard_page_default2]
      })
    ], DashboardPage);
  }
});

// src/app/features/dashboard/dashboard.page.spec.ts
var require_dashboard_page_spec = __commonJS({
  "src/app/features/dashboard/dashboard.page.spec.ts"(exports) {
    init_testing();
    init_router();
    init_core();
    init_dashboard_page3();
    init_auth_service();
    var mockMe = {
      id: 1,
      username: "usuario",
      email: "user@email.com",
      best_score: 100
    };
    describe("DashboardPage", () => {
      let fixture;
      let component;
      let authServiceMock;
      beforeEach(() => __async(null, null, function* () {
        authServiceMock = {
          me: signal(null),
          isLoggedIn: true,
          logout: jasmine.createSpy()
        };
        yield TestBed.configureTestingModule({
          imports: [DashboardPage],
          providers: [
            provideRouter([]),
            { provide: AuthService, useValue: authServiceMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(DashboardPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should have auth service injected", () => {
        expect(component.auth).toBeTruthy();
      });
      it("should have me as null initially", () => {
        expect(component.auth.me()).toBeNull();
      });
      it("should reflect user data when me is set", () => {
        authServiceMock.me.set(mockMe);
        fixture.detectChanges();
        expect(component.auth.me()).toEqual(mockMe);
        expect(component.auth.me()?.username).toBe("usuario");
        expect(component.auth.me()?.best_score).toBe(100);
      });
      it("should be logged in", () => {
        expect(component.auth.isLoggedIn).toBe(true);
      });
    });
  }
});
export default require_dashboard_page_spec();
//# sourceMappingURL=spec-app-features-dashboard-dashboard.page.spec.js.map
