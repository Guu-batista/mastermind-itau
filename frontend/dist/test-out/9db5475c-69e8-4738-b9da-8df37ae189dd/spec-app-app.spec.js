import {
  RouterOutlet,
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
  init_tslib_es6
} from "./chunk-MI2ZW43Q.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<router-outlet />\r\n";
  }
});

// angular:jit:style:src\app\app.scss
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.scss"() {
    app_default2 = "/* src/app/app.scss */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    App = class App2 {
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_router();
    init_app3();
    describe("App", () => {
      let fixture;
      let app;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(App);
        app = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the app", () => {
        expect(app).toBeTruthy();
      });
      it("should render router outlet", () => __async(null, null, function* () {
        yield fixture.whenStable();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("router-outlet")).toBeTruthy();
      }));
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
