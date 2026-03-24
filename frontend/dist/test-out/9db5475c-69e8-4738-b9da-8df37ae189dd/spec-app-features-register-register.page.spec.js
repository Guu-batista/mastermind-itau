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
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  TestBed,
  Version,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  computed,
  core_exports,
  fakeAsync,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  init_common,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  isPromise,
  isSubscribable,
  map,
  of,
  signal,
  throwError,
  tick,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
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

// node_modules/@angular/forms/fesm2022/forms.mjs
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup or formArray directive. You'll want to add a formGroup/formArray
      directive and pass it an existing FormGroup/FormArray instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
function ngModelWarning(directiveName) {
  const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://${versionSubDomain}angular.dev/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  dir?.valueAccessor?.registerOnChange(noop);
  dir?.valueAccessor?.registerOnTouched(noop);
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName);
}
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof AbstractFormDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var BaseControlValueAccessor, BuiltInControlValueAccessor, NG_VALUE_ACCESSOR, CHECKBOX_VALUE_ACCESSOR, CheckboxControlValueAccessor, DEFAULT_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NG_VALIDATORS, NG_ASYNC_VALIDATORS, EMAIL_REGEXP, Validators, AbstractControlDirective, ControlContainer, NgControl, AbstractControlStatus, ngControlStatusHost, NgControlStatus, NgControlStatusGroup, formControlNameExample, formGroupNameExample, formArrayNameExample, ngModelGroupExample, ngModelWithFormGroupExample, VERSION, disabledAttrWarning, asyncValidatorsDroppedWithOptsWarning, VALID, INVALID, PENDING, DISABLED, ControlEvent, ValueChangeEvent, PristineChangeEvent, TouchedChangeEvent, StatusChangeEvent, FormSubmittedEvent, FormResetEvent, AbstractControl, FormGroup, FormRecord, CALL_SET_DISABLED_STATE, setDisabledStateDefault, formDirectiveProvider$2, resolvedPromise$1, NgForm, FormControl, isFormControl, AbstractFormGroupDirective, modelGroupProvider, NgModelGroup, formControlBinding$1, resolvedPromise, NgModel, \u0275NgNoValidate, NUMBER_VALUE_ACCESSOR, NumberValueAccessor, RADIO_VALUE_ACCESSOR, RadioControlRegistry, RadioControlValueAccessor, RANGE_VALUE_ACCESSOR, RangeValueAccessor, FormArray, AbstractFormDirective, formDirectiveProvider$1, FormArrayDirective, NG_MODEL_WITH_FORM_CONTROL_WARNING, formControlBinding, FormControlDirective, formGroupNameProvider, FormGroupName, formArrayNameProvider, FormArrayName, controlNameBinding, FormControlName, formDirectiveProvider, FormGroupDirective, SELECT_VALUE_ACCESSOR, SelectControlValueAccessor, NgSelectOption, SELECT_MULTIPLE_VALUE_ACCESSOR, SelectMultipleControlValueAccessor, \u0275NgSelectMultipleOption, AbstractValidatorDirective, MAX_VALIDATOR, MaxValidator, MIN_VALIDATOR, MinValidator, REQUIRED_VALIDATOR, CHECKBOX_REQUIRED_VALIDATOR, RequiredValidator, CheckboxRequiredValidator, EMAIL_VALIDATOR, EmailValidator, MIN_LENGTH_VALIDATOR, MinLengthValidator, MAX_LENGTH_VALIDATOR, MaxLengthValidator, PATTERN_VALIDATOR, PatternValidator, SHARED_FORM_DIRECTIVES, TEMPLATE_DRIVEN_DIRECTIVES, REACTIVE_DRIVEN_DIRECTIVES, \u0275InternalFormsSharedModule, FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, FormsModule, ReactiveFormsModule;
var init_forms = __esm({
  "node_modules/@angular/forms/fesm2022/forms.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_esm();
    init_operators();
    BaseControlValueAccessor = class _BaseControlValueAccessor {
      _renderer;
      _elementRef;
      onChange = (_) => {
      };
      onTouched = () => {
      };
      constructor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
      }
      setProperty(key, value) {
        this._renderer.setProperty(this._elementRef.nativeElement, key, value);
      }
      registerOnTouched(fn) {
        this.onTouched = fn;
      }
      registerOnChange(fn) {
        this.onChange = fn;
      }
      setDisabledState(isDisabled) {
        this.setProperty("disabled", isDisabled);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _BaseControlValueAccessor,
        deps: [{
          token: Renderer2
        }, {
          token: ElementRef
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _BaseControlValueAccessor,
        isStandalone: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: BaseControlValueAccessor,
      decorators: [{
        type: Directive
      }],
      ctorParameters: () => [{
        type: Renderer2
      }, {
        type: ElementRef
      }]
    });
    BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _BuiltInControlValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _BuiltInControlValueAccessor,
        isStandalone: true,
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: BuiltInControlValueAccessor,
      decorators: [{
        type: Directive
      }]
    });
    NG_VALUE_ACCESSOR = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValueAccessor" : "");
    CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxControlValueAccessor),
      multi: true
    };
    CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
      writeValue(value) {
        this.setProperty("checked", value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _CheckboxControlValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _CheckboxControlValueAccessor,
        isStandalone: false,
        selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
        host: {
          listeners: {
            "change": "onChange($any($event.target).checked)",
            "blur": "onTouched()"
          }
        },
        providers: [CHECKBOX_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: CheckboxControlValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
          host: {
            "(change)": "onChange($any($event.target).checked)",
            "(blur)": "onTouched()"
          },
          providers: [CHECKBOX_VALUE_ACCESSOR],
          standalone: false
        }]
      }]
    });
    DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultValueAccessor),
      multi: true
    };
    COMPOSITION_BUFFER_MODE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "CompositionEventMode" : "");
    DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
      _compositionMode;
      _composing = false;
      constructor(renderer, elementRef, _compositionMode) {
        super(renderer, elementRef);
        this._compositionMode = _compositionMode;
        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      _handleInput(value) {
        if (!this._compositionMode || this._compositionMode && !this._composing) {
          this.onChange(value);
        }
      }
      _compositionStart() {
        this._composing = true;
      }
      _compositionEnd(value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _DefaultValueAccessor,
        deps: [{
          token: Renderer2
        }, {
          token: ElementRef
        }, {
          token: COMPOSITION_BUFFER_MODE,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _DefaultValueAccessor,
        isStandalone: false,
        selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
        host: {
          listeners: {
            "input": "_handleInput($any($event.target).value)",
            "blur": "onTouched()",
            "compositionstart": "_compositionStart()",
            "compositionend": "_compositionEnd($any($event.target).value)"
          }
        },
        providers: [DEFAULT_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: DefaultValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
          host: {
            "(input)": "_handleInput($any($event.target).value)",
            "(blur)": "onTouched()",
            "(compositionstart)": "_compositionStart()",
            "(compositionend)": "_compositionEnd($any($event.target).value)"
          },
          providers: [DEFAULT_VALUE_ACCESSOR],
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: Renderer2
      }, {
        type: ElementRef
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }]
    });
    NG_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgValidators" : "");
    NG_ASYNC_VALIDATORS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgAsyncValidators" : "");
    EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    Validators = class {
      static min(min) {
        return minValidator(min);
      }
      static max(max) {
        return maxValidator(max);
      }
      static required(control) {
        return requiredValidator(control);
      }
      static requiredTrue(control) {
        return requiredTrueValidator(control);
      }
      static email(control) {
        return emailValidator(control);
      }
      static minLength(minLength) {
        return minLengthValidator(minLength);
      }
      static maxLength(maxLength) {
        return maxLengthValidator(maxLength);
      }
      static pattern(pattern) {
        return patternValidator(pattern);
      }
      static nullValidator(control) {
        return nullValidator();
      }
      static compose(validators) {
        return compose(validators);
      }
      static composeAsync(validators) {
        return composeAsync(validators);
      }
    };
    AbstractControlDirective = class {
      get value() {
        return this.control ? this.control.value : null;
      }
      get valid() {
        return this.control ? this.control.valid : null;
      }
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      get pending() {
        return this.control ? this.control.pending : null;
      }
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      get errors() {
        return this.control ? this.control.errors : null;
      }
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      get touched() {
        return this.control ? this.control.touched : null;
      }
      get status() {
        return this.control ? this.control.status : null;
      }
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      get path() {
        return null;
      }
      _composedValidatorFn;
      _composedAsyncValidatorFn;
      _rawValidators = [];
      _rawAsyncValidators = [];
      _setValidators(validators) {
        this._rawValidators = validators || [];
        this._composedValidatorFn = composeValidators(this._rawValidators);
      }
      _setAsyncValidators(validators) {
        this._rawAsyncValidators = validators || [];
        this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
      }
      get validator() {
        return this._composedValidatorFn || null;
      }
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      _onDestroyCallbacks = [];
      _registerOnDestroy(fn) {
        this._onDestroyCallbacks.push(fn);
      }
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((fn) => fn());
        this._onDestroyCallbacks = [];
      }
      reset(value = void 0) {
        this.control?.reset(value);
      }
      hasError(errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
      }
      getError(errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
      }
    };
    ControlContainer = class extends AbstractControlDirective {
      name;
      get formDirective() {
        return null;
      }
      get path() {
        return null;
      }
    };
    NgControl = class extends AbstractControlDirective {
      _parent = null;
      name = null;
      valueAccessor = null;
    };
    AbstractControlStatus = class {
      _cd;
      constructor(cd) {
        this._cd = cd;
      }
      get isTouched() {
        this._cd?.control?._touched?.();
        return !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        this._cd?.control?._pristine?.();
        return !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        this._cd?.control?._status?.();
        return !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        this._cd?._submitted?.();
        return !!this._cd?.submitted;
      }
    };
    ngControlStatusHost = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending"
    };
    NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgControlStatus,
        deps: [{
          token: NgControl,
          self: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgControlStatus,
        isStandalone: false,
        selector: "[formControlName],[ngModel],[formControl]",
        host: {
          properties: {
            "class.ng-untouched": "isUntouched",
            "class.ng-touched": "isTouched",
            "class.ng-pristine": "isPristine",
            "class.ng-dirty": "isDirty",
            "class.ng-valid": "isValid",
            "class.ng-invalid": "isInvalid",
            "class.ng-pending": "isPending"
          }
        },
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgControlStatus,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formControlName],[ngModel],[formControl]",
          host: ngControlStatusHost,
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: NgControl,
        decorators: [{
          type: Self
        }]
      }]
    });
    NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
      constructor(cd) {
        super(cd);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgControlStatusGroup,
        deps: [{
          token: ControlContainer,
          optional: true,
          self: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgControlStatusGroup,
        isStandalone: false,
        selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
        host: {
          properties: {
            "class.ng-untouched": "isUntouched",
            "class.ng-touched": "isTouched",
            "class.ng-pristine": "isPristine",
            "class.ng-dirty": "isDirty",
            "class.ng-valid": "isValid",
            "class.ng-invalid": "isInvalid",
            "class.ng-pending": "isPending",
            "class.ng-submitted": "isSubmitted"
          }
        },
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgControlStatusGroup,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]",
          host: __spreadProps(__spreadValues({}, ngControlStatusHost), {
            "[class.ng-submitted]": "isSubmitted"
          }),
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }]
      }]
    });
    formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
    formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
    formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
    ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
    ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
    VERSION = /* @__PURE__ */ new Version("21.2.4");
    disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
    asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
    VALID = "VALID";
    INVALID = "INVALID";
    PENDING = "PENDING";
    DISABLED = "DISABLED";
    ControlEvent = class {
    };
    ValueChangeEvent = class extends ControlEvent {
      value;
      source;
      constructor(value, source) {
        super();
        this.value = value;
        this.source = source;
      }
    };
    PristineChangeEvent = class extends ControlEvent {
      pristine;
      source;
      constructor(pristine, source) {
        super();
        this.pristine = pristine;
        this.source = source;
      }
    };
    TouchedChangeEvent = class extends ControlEvent {
      touched;
      source;
      constructor(touched, source) {
        super();
        this.touched = touched;
        this.source = source;
      }
    };
    StatusChangeEvent = class extends ControlEvent {
      status;
      source;
      constructor(status, source) {
        super();
        this.status = status;
        this.source = source;
      }
    };
    FormSubmittedEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    FormResetEvent = class extends ControlEvent {
      source;
      constructor(source) {
        super();
        this.source = source;
      }
    };
    AbstractControl = class {
      _pendingDirty = false;
      _hasOwnPendingAsyncValidator = null;
      _pendingTouched = false;
      _onCollectionChange = () => {
      };
      _updateOn;
      _parent = null;
      _asyncValidationSubscription;
      _composedValidatorFn;
      _composedAsyncValidatorFn;
      _rawValidators;
      _rawAsyncValidators;
      value;
      constructor(validators, asyncValidators) {
        this._assignValidators(validators);
        this._assignAsyncValidators(asyncValidators);
      }
      get validator() {
        return this._composedValidatorFn;
      }
      set validator(validatorFn) {
        this._rawValidators = this._composedValidatorFn = validatorFn;
      }
      get asyncValidator() {
        return this._composedAsyncValidatorFn;
      }
      set asyncValidator(asyncValidatorFn) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
      }
      get parent() {
        return this._parent;
      }
      get status() {
        return untracked(this.statusReactive);
      }
      set status(v) {
        untracked(() => this.statusReactive.set(v));
      }
      _status = computed(() => this.statusReactive(), ...ngDevMode ? [{
        debugName: "_status"
      }] : []);
      statusReactive = signal(void 0, ...ngDevMode ? [{
        debugName: "statusReactive"
      }] : []);
      get valid() {
        return this.status === VALID;
      }
      get invalid() {
        return this.status === INVALID;
      }
      get pending() {
        return this.status == PENDING;
      }
      get disabled() {
        return this.status === DISABLED;
      }
      get enabled() {
        return this.status !== DISABLED;
      }
      errors;
      get pristine() {
        return untracked(this.pristineReactive);
      }
      set pristine(v) {
        untracked(() => this.pristineReactive.set(v));
      }
      _pristine = computed(() => this.pristineReactive(), ...ngDevMode ? [{
        debugName: "_pristine"
      }] : []);
      pristineReactive = signal(true, ...ngDevMode ? [{
        debugName: "pristineReactive"
      }] : []);
      get dirty() {
        return !this.pristine;
      }
      get touched() {
        return untracked(this.touchedReactive);
      }
      set touched(v) {
        untracked(() => this.touchedReactive.set(v));
      }
      _touched = computed(() => this.touchedReactive(), ...ngDevMode ? [{
        debugName: "_touched"
      }] : []);
      touchedReactive = signal(false, ...ngDevMode ? [{
        debugName: "touchedReactive"
      }] : []);
      get untouched() {
        return !this.touched;
      }
      _events = new Subject();
      events = this._events.asObservable();
      valueChanges;
      statusChanges;
      get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
      }
      setValidators(validators) {
        this._assignValidators(validators);
      }
      setAsyncValidators(validators) {
        this._assignAsyncValidators(validators);
      }
      addValidators(validators) {
        this.setValidators(addValidators(validators, this._rawValidators));
      }
      addAsyncValidators(validators) {
        this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
      }
      removeValidators(validators) {
        this.setValidators(removeValidators(validators, this._rawValidators));
      }
      removeAsyncValidators(validators) {
        this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
      }
      hasValidator(validator) {
        return hasValidator(this._rawValidators, validator);
      }
      hasAsyncValidator(validator) {
        return hasValidator(this._rawAsyncValidators, validator);
      }
      clearValidators() {
        this.validator = null;
      }
      clearAsyncValidators() {
        this.asyncValidator = null;
      }
      markAsTouched(opts = {}) {
        const changed = this.touched === false;
        this.touched = true;
        const sourceControl = opts.sourceControl ?? this;
        if (!opts.onlySelf) {
          this._parent?.markAsTouched(__spreadProps(__spreadValues({}, opts), {
            sourceControl
          }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(true, sourceControl));
        }
      }
      markAllAsDirty(opts = {}) {
        this.markAsDirty({
          onlySelf: true,
          emitEvent: opts.emitEvent,
          sourceControl: this
        });
        this._forEachChild((control) => control.markAllAsDirty(opts));
      }
      markAllAsTouched(opts = {}) {
        this.markAsTouched({
          onlySelf: true,
          emitEvent: opts.emitEvent,
          sourceControl: this
        });
        this._forEachChild((control) => control.markAllAsTouched(opts));
      }
      markAsUntouched(opts = {}) {
        const changed = this.touched === true;
        this.touched = false;
        this._pendingTouched = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsUntouched({
            onlySelf: true,
            emitEvent: opts.emitEvent,
            sourceControl
          });
        });
        if (!opts.onlySelf) {
          this._parent?._updateTouched(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new TouchedChangeEvent(false, sourceControl));
        }
      }
      markAsDirty(opts = {}) {
        const changed = this.pristine === true;
        this.pristine = false;
        const sourceControl = opts.sourceControl ?? this;
        if (!opts.onlySelf) {
          this._parent?.markAsDirty(__spreadProps(__spreadValues({}, opts), {
            sourceControl
          }));
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(false, sourceControl));
        }
      }
      markAsPristine(opts = {}) {
        const changed = this.pristine === false;
        this.pristine = true;
        this._pendingDirty = false;
        const sourceControl = opts.sourceControl ?? this;
        this._forEachChild((control) => {
          control.markAsPristine({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        });
        if (!opts.onlySelf) {
          this._parent?._updatePristine(opts, sourceControl);
        }
        if (changed && opts.emitEvent !== false) {
          this._events.next(new PristineChangeEvent(true, sourceControl));
        }
      }
      markAsPending(opts = {}) {
        this.status = PENDING;
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.statusChanges.emit(this.status);
        }
        if (!opts.onlySelf) {
          this._parent?.markAsPending(__spreadProps(__spreadValues({}, opts), {
            sourceControl
          }));
        }
      }
      disable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild((control) => {
          control.disable(__spreadProps(__spreadValues({}, opts), {
            onlySelf: true
          }));
        });
        this._updateValue();
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
          skipPristineCheck
        }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(true));
      }
      enable(opts = {}) {
        const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
        this.status = VALID;
        this._forEachChild((control) => {
          control.enable(__spreadProps(__spreadValues({}, opts), {
            onlySelf: true
          }));
        });
        this.updateValueAndValidity({
          onlySelf: true,
          emitEvent: opts.emitEvent
        });
        this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
          skipPristineCheck
        }), this);
        this._onDisabledChange.forEach((changeFn) => changeFn(false));
      }
      _updateAncestors(opts, sourceControl) {
        if (!opts.onlySelf) {
          this._parent?.updateValueAndValidity(opts);
          if (!opts.skipPristineCheck) {
            this._parent?._updatePristine({}, sourceControl);
          }
          this._parent?._updateTouched({}, sourceControl);
        }
      }
      setParent(parent) {
        this._parent = parent;
      }
      getRawValue() {
        return this.value;
      }
      updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
          const shouldHaveEmitted = this._cancelExistingSubscription();
          this.errors = this._runValidator();
          this.status = this._calculateStatus();
          if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
          }
        }
        const sourceControl = opts.sourceControl ?? this;
        if (opts.emitEvent !== false) {
          this._events.next(new ValueChangeEvent(this.value, sourceControl));
          this._events.next(new StatusChangeEvent(this.status, sourceControl));
          this.valueChanges.emit(this.value);
          this.statusChanges.emit(this.status);
        }
        if (!opts.onlySelf) {
          this._parent?.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
            sourceControl
          }));
        }
      }
      _updateTreeValidity(opts = {
        emitEvent: true
      }) {
        this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
        this.updateValueAndValidity({
          onlySelf: true,
          emitEvent: opts.emitEvent
        });
      }
      _setInitialStatus() {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
      }
      _runValidator() {
        return this.validator ? this.validator(this) : null;
      }
      _runAsyncValidator(shouldHaveEmitted, emitEvent) {
        if (this.asyncValidator) {
          this.status = PENDING;
          this._hasOwnPendingAsyncValidator = {
            emitEvent: emitEvent !== false,
            shouldHaveEmitted: shouldHaveEmitted !== false
          };
          const obs = toObservable(this.asyncValidator(this));
          this._asyncValidationSubscription = obs.subscribe((errors) => {
            this._hasOwnPendingAsyncValidator = null;
            this.setErrors(errors, {
              emitEvent,
              shouldHaveEmitted
            });
          });
        }
      }
      _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
          this._asyncValidationSubscription.unsubscribe();
          const shouldHaveEmitted = (this._hasOwnPendingAsyncValidator?.emitEvent || this._hasOwnPendingAsyncValidator?.shouldHaveEmitted) ?? false;
          this._hasOwnPendingAsyncValidator = null;
          return shouldHaveEmitted;
        }
        return false;
      }
      setErrors(errors, opts = {}) {
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
      }
      get(path) {
        let currPath = path;
        if (currPath == null) return null;
        if (!Array.isArray(currPath)) currPath = currPath.split(".");
        if (currPath.length === 0) return null;
        return currPath.reduce((control, name) => control && control._find(name), this);
      }
      getError(errorCode, path) {
        const control = path ? this.get(path) : this;
        return control?.errors ? control.errors[errorCode] : null;
      }
      hasError(errorCode, path) {
        return !!this.getError(errorCode, path);
      }
      get root() {
        let x = this;
        while (x._parent) {
          x = x._parent;
        }
        return x;
      }
      _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
        this.status = this._calculateStatus();
        if (emitEvent) {
          this.statusChanges.emit(this.status);
        }
        if (emitEvent || shouldHaveEmitted) {
          this._events.next(new StatusChangeEvent(this.status, changedControl));
        }
        if (this._parent) {
          this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
        }
      }
      _initObservables() {
        this.valueChanges = new EventEmitter();
        this.statusChanges = new EventEmitter();
      }
      _calculateStatus() {
        if (this._allControlsDisabled()) return DISABLED;
        if (this.errors) return INVALID;
        if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
        if (this._anyControlsHaveStatus(INVALID)) return INVALID;
        return VALID;
      }
      _anyControlsHaveStatus(status) {
        return this._anyControls((control) => control.status === status);
      }
      _anyControlsDirty() {
        return this._anyControls((control) => control.dirty);
      }
      _anyControlsTouched() {
        return this._anyControls((control) => control.touched);
      }
      _updatePristine(opts, changedControl) {
        const newPristine = !this._anyControlsDirty();
        const changed = this.pristine !== newPristine;
        this.pristine = newPristine;
        if (!opts.onlySelf) {
          this._parent?._updatePristine(opts, changedControl);
        }
        if (changed) {
          this._events.next(new PristineChangeEvent(this.pristine, changedControl));
        }
      }
      _updateTouched(opts = {}, changedControl) {
        this.touched = this._anyControlsTouched();
        this._events.next(new TouchedChangeEvent(this.touched, changedControl));
        if (!opts.onlySelf) {
          this._parent?._updateTouched(opts, changedControl);
        }
      }
      _onDisabledChange = [];
      _registerOnCollectionChange(fn) {
        this._onCollectionChange = fn;
      }
      _setUpdateStrategy(opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
          this._updateOn = opts.updateOn;
        }
      }
      _parentMarkedDirty(onlySelf) {
        return !onlySelf && !!this._parent?.dirty && !this._parent._anyControlsDirty();
      }
      _find(name) {
        return null;
      }
      _assignValidators(validators) {
        this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedValidatorFn = coerceToValidator(this._rawValidators);
      }
      _assignAsyncValidators(validators) {
        this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
        this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
      }
    };
    FormGroup = class extends AbstractControl {
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      registerControl(name, control) {
        if (this.controls[name]) return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
      }
      addControl(name, control, options = {}) {
        this.registerControl(name, control);
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
        this._onCollectionChange();
      }
      removeControl(name, options = {}) {
        if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
        });
        delete this.controls[name];
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
        this._onCollectionChange();
      }
      setControl(name, control, options = {}) {
        if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
        });
        delete this.controls[name];
        if (control) this.registerControl(name, control);
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
        this._onCollectionChange();
      }
      contains(controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
      }
      setValue(value, options = {}) {
        assertAllValuesPresent(this, true, value);
        Object.keys(value).forEach((name) => {
          assertControlPresent(this, true, name);
          this.controls[name].setValue(value[name], {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        if (value == null) return;
        Object.keys(value).forEach((name) => {
          const control = this.controls[name];
          if (control) {
            control.patchValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          }
        });
        this.updateValueAndValidity(options);
      }
      reset(value = {}, options = {}) {
        this._forEachChild((control, name) => {
          control.reset(value ? value[name] : null, __spreadProps(__spreadValues({}, options), {
            onlySelf: true
          }));
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      getRawValue() {
        return this._reduceChildren({}, (acc, control, name) => {
          acc[name] = control.getRawValue();
          return acc;
        });
      }
      _syncPendingControls() {
        let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
          return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated) this.updateValueAndValidity({
          onlySelf: true
        });
        return subtreeUpdated;
      }
      _forEachChild(cb) {
        Object.keys(this.controls).forEach((key) => {
          const control = this.controls[key];
          control && cb(control, key);
        });
      }
      _setUpControls() {
        this._forEachChild((control) => {
          control.setParent(this);
          control._registerOnCollectionChange(this._onCollectionChange);
        });
      }
      _updateValue() {
        this.value = this._reduceValue();
      }
      _anyControls(condition) {
        for (const [controlName, control] of Object.entries(this.controls)) {
          if (this.contains(controlName) && condition(control)) {
            return true;
          }
        }
        return false;
      }
      _reduceValue() {
        let acc = {};
        return this._reduceChildren(acc, (acc2, control, name) => {
          if (control.enabled || this.disabled) {
            acc2[name] = control.value;
          }
          return acc2;
        });
      }
      _reduceChildren(initValue, fn) {
        let res = initValue;
        this._forEachChild((control, name) => {
          res = fn(res, control, name);
        });
        return res;
      }
      _allControlsDisabled() {
        for (const controlName of Object.keys(this.controls)) {
          if (this.controls[controlName].enabled) {
            return false;
          }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
      }
      _find(name) {
        return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
      }
    };
    FormRecord = class extends FormGroup {
    };
    CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
      factory: () => setDisabledStateDefault
    });
    setDisabledStateDefault = "always";
    formDirectiveProvider$2 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgForm)
    };
    resolvedPromise$1 = (() => Promise.resolve())();
    NgForm = class _NgForm extends ControlContainer {
      callSetDisabledState;
      get submitted() {
        return untracked(this.submittedReactive);
      }
      _submitted = computed(() => this.submittedReactive(), ...ngDevMode ? [{
        debugName: "_submitted"
      }] : []);
      submittedReactive = signal(false, ...ngDevMode ? [{
        debugName: "submittedReactive"
      }] : []);
      _directives = /* @__PURE__ */ new Set();
      form;
      ngSubmit = new EventEmitter();
      options;
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          dir.control = container.registerControl(dir.name, dir.control);
          setUpControl(dir.control, dir, this.callSetDisabledState);
          dir.control.updateValueAndValidity({
            emitEvent: false
          });
          this._directives.add(dir);
        });
      }
      getControl(dir) {
        return this.form.get(dir.path);
      }
      removeControl(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          container?.removeControl(dir.name);
          this._directives.delete(dir);
        });
      }
      addFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          const group = new FormGroup({});
          setUpFormContainer(group, dir);
          container.registerControl(dir.name, group);
          group.updateValueAndValidity({
            emitEvent: false
          });
        });
      }
      removeFormGroup(dir) {
        resolvedPromise$1.then(() => {
          const container = this._findContainer(dir.path);
          container?.removeControl?.(dir.name);
        });
      }
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      updateModel(dir, value) {
        resolvedPromise$1.then(() => {
          const ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        });
      }
      setValue(value) {
        this.control.setValue(value);
      }
      onSubmit($event) {
        this.submittedReactive.set(true);
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      onReset() {
        this.resetForm();
      }
      resetForm(value = void 0) {
        this.form.reset(value);
        this.submittedReactive.set(false);
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.form._updateOn = this.options.updateOn;
        }
      }
      _findContainer(path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgForm,
        deps: [{
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: CALL_SET_DISABLED_STATE,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgForm,
        isStandalone: false,
        selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        host: {
          listeners: {
            "submit": "onSubmit($event)",
            "reset": "onReset()"
          }
        },
        providers: [formDirectiveProvider$2],
        exportAs: ["ngForm"],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgForm,
      decorators: [{
        type: Directive,
        args: [{
          selector: "form:not([ngNoForm]):not([formGroup]):not([formArray]),ng-form,[ngForm]",
          providers: [formDirectiveProvider$2],
          host: {
            "(submit)": "onSubmit($event)",
            "(reset)": "onReset()"
          },
          outputs: ["ngSubmit"],
          exportAs: "ngForm",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [CALL_SET_DISABLED_STATE]
        }]
      }],
      propDecorators: {
        options: [{
          type: Input,
          args: ["ngFormOptions"]
        }]
      }
    });
    FormControl = class FormControl2 extends AbstractControl {
      defaultValue = null;
      _onChange = [];
      _pendingValue;
      _pendingChange = false;
      constructor(formState = null, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this._applyFormState(formState);
        this._setUpdateStrategy(validatorOrOpts);
        this._initObservables();
        this.updateValueAndValidity({
          onlySelf: true,
          emitEvent: !!this.asyncValidator
        });
        if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
          if (isFormControlState(formState)) {
            this.defaultValue = formState.value;
          } else {
            this.defaultValue = formState;
          }
        }
      }
      setValue(value, options = {}) {
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
          this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
        }
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        this.setValue(value, options);
      }
      reset(formState = this.defaultValue, options = {}) {
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        if (options.overwriteDefaultValue) {
          this.defaultValue = this.value;
        }
        this._pendingChange = false;
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      _updateValue() {
      }
      _anyControls(condition) {
        return false;
      }
      _allControlsDisabled() {
        return this.disabled;
      }
      registerOnChange(fn) {
        this._onChange.push(fn);
      }
      _unregisterOnChange(fn) {
        removeListItem(this._onChange, fn);
      }
      registerOnDisabledChange(fn) {
        this._onDisabledChange.push(fn);
      }
      _unregisterOnDisabledChange(fn) {
        removeListItem(this._onDisabledChange, fn);
      }
      _forEachChild(cb) {
      }
      _syncPendingControls() {
        if (this.updateOn === "submit") {
          if (this._pendingDirty) this.markAsDirty();
          if (this._pendingTouched) this.markAsTouched();
          if (this._pendingChange) {
            this.setValue(this._pendingValue, {
              onlySelf: true,
              emitModelToViewChange: false
            });
            return true;
          }
        }
        return false;
      }
      _applyFormState(formState) {
        if (isFormControlState(formState)) {
          this.value = this._pendingValue = formState.value;
          formState.disabled ? this.disable({
            onlySelf: true,
            emitEvent: false
          }) : this.enable({
            onlySelf: true,
            emitEvent: false
          });
        } else {
          this.value = this._pendingValue = formState;
        }
      }
    };
    isFormControl = (control) => control instanceof FormControl;
    AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
      _parent;
      ngOnInit() {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
      }
      ngOnDestroy() {
        this.formDirective?.removeFormGroup(this);
      }
      get control() {
        return this.formDirective.getFormGroup(this);
      }
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _checkParentType() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _AbstractFormGroupDirective,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _AbstractFormGroupDirective,
        isStandalone: false,
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: AbstractFormGroupDirective,
      decorators: [{
        type: Directive,
        args: [{
          standalone: false
        }]
      }]
    });
    modelGroupProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => NgModelGroup)
    };
    NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
      name = "";
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      _checkParentType() {
        if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw modelGroupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgModelGroup,
        deps: [{
          token: ControlContainer,
          host: true,
          skipSelf: true
        }, {
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgModelGroup,
        isStandalone: false,
        selector: "[ngModelGroup]",
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        providers: [modelGroupProvider],
        exportAs: ["ngModelGroup"],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgModelGroup,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[ngModelGroup]",
          providers: [modelGroupProvider],
          exportAs: "ngModelGroup",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Host
        }, {
          type: SkipSelf
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }],
      propDecorators: {
        name: [{
          type: Input,
          args: ["ngModelGroup"]
        }]
      }
    });
    formControlBinding$1 = {
      provide: NgControl,
      useExisting: forwardRef(() => NgModel)
    };
    resolvedPromise = (() => Promise.resolve())();
    NgModel = class _NgModel extends NgControl {
      _changeDetectorRef;
      callSetDisabledState;
      control = new FormControl();
      static ngAcceptInputType_isDisabled;
      _registered = false;
      viewModel;
      name = "";
      isDisabled;
      model;
      options;
      update = new EventEmitter();
      constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this.callSetDisabledState = callSetDisabledState;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      ngOnChanges(changes) {
        this._checkForErrors();
        if (!this._registered || "name" in changes) {
          if (this._registered) {
            this._checkName();
            if (this.formDirective) {
              const oldName = changes["name"].previousValue;
              this.formDirective.removeControl({
                name: oldName,
                path: this._getPath(oldName)
              });
            }
          }
          this._setUpControl();
        }
        if ("isDisabled" in changes) {
          this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          this._updateValue(this.model);
          this.viewModel = this.model;
        }
      }
      ngOnDestroy() {
        this.formDirective?.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _setUpControl() {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
        this._registered = true;
      }
      _setUpdateStrategy() {
        if (this.options && this.options.updateOn != null) {
          this.control._updateOn = this.options.updateOn;
        }
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        setUpControl(this.control, this, this.callSetDisabledState);
        this.control.updateValueAndValidity({
          emitEvent: false
        });
      }
      _checkForErrors() {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
          checkParentType$1(this._parent);
        }
        this._checkName();
      }
      _checkName() {
        if (this.options && this.options.name) this.name = this.options.name;
        if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingNameException();
        }
      }
      _updateValue(value) {
        resolvedPromise.then(() => {
          this.control.setValue(value, {
            emitViewToModelChange: false
          });
          this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(changes) {
        const disabledValue = changes["isDisabled"].currentValue;
        const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
        resolvedPromise.then(() => {
          if (isDisabled && !this.control.disabled) {
            this.control.disable();
          } else if (!isDisabled && this.control.disabled) {
            this.control.enable();
          }
          this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(controlName) {
        return this._parent ? controlPath(controlName, this._parent) : [controlName];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgModel,
        deps: [{
          token: ControlContainer,
          host: true,
          optional: true
        }, {
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_VALUE_ACCESSOR,
          optional: true,
          self: true
        }, {
          token: ChangeDetectorRef,
          optional: true
        }, {
          token: CALL_SET_DISABLED_STATE,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgModel,
        isStandalone: false,
        selector: "[ngModel]:not([formControlName]):not([formControl])",
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        providers: [formControlBinding$1],
        exportAs: ["ngModel"],
        usesInheritance: true,
        usesOnChanges: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgModel,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[ngModel]:not([formControlName]):not([formControl])",
          providers: [formControlBinding$1],
          exportAs: "ngModel",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: ChangeDetectorRef,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [ChangeDetectorRef]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [CALL_SET_DISABLED_STATE]
        }]
      }],
      propDecorators: {
        name: [{
          type: Input
        }],
        isDisabled: [{
          type: Input,
          args: ["disabled"]
        }],
        model: [{
          type: Input,
          args: ["ngModel"]
        }],
        options: [{
          type: Input,
          args: ["ngModelOptions"]
        }],
        update: [{
          type: Output,
          args: ["ngModelChange"]
        }]
      }
    });
    \u0275NgNoValidate = class _\u0275NgNoValidate {
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _\u0275NgNoValidate,
        deps: [],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _\u0275NgNoValidate,
        isStandalone: false,
        selector: "form:not([ngNoForm]):not([ngNativeValidate])",
        host: {
          attributes: {
            "novalidate": ""
          }
        },
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: \u0275NgNoValidate,
      decorators: [{
        type: Directive,
        args: [{
          selector: "form:not([ngNoForm]):not([ngNativeValidate])",
          host: {
            "novalidate": ""
          },
          standalone: false
        }]
      }]
    });
    NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberValueAccessor),
      multi: true
    };
    NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
      writeValue(value) {
        const normalizedValue = value == null ? "" : value;
        this.setProperty("value", normalizedValue);
      }
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NumberValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NumberValueAccessor,
        isStandalone: false,
        selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
        host: {
          listeners: {
            "input": "onChange($any($event.target).value)",
            "blur": "onTouched()"
          }
        },
        providers: [NUMBER_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NumberValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
          host: {
            "(input)": "onChange($any($event.target).value)",
            "(blur)": "onTouched()"
          },
          providers: [NUMBER_VALUE_ACCESSOR],
          standalone: false
        }]
      }]
    });
    RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlValueAccessor),
      multi: true
    };
    RadioControlRegistry = class _RadioControlRegistry {
      _accessors = [];
      add(control, accessor) {
        this._accessors.push([control, accessor]);
      }
      remove(accessor) {
        for (let i = this._accessors.length - 1; i >= 0; --i) {
          if (this._accessors[i][1] === accessor) {
            this._accessors.splice(i, 1);
            return;
          }
        }
      }
      select(accessor) {
        this._accessors.forEach((c) => {
          if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
            c[1].fireUncheck(accessor.value);
          }
        });
      }
      _isSameGroup(controlPair, accessor) {
        if (!controlPair[0].control) return false;
        return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _RadioControlRegistry,
        deps: [],
        target: FactoryTarget.Injectable
      });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _RadioControlRegistry,
        providedIn: "root"
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: RadioControlRegistry,
      decorators: [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }]
    });
    RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
      _registry;
      _injector;
      _state;
      _control;
      _fn;
      setDisabledStateFired = false;
      onChange = () => {
      };
      name;
      formControlName;
      value;
      callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
        optional: true
      }) ?? setDisabledStateDefault;
      constructor(renderer, elementRef, _registry, _injector) {
        super(renderer, elementRef);
        this._registry = _registry;
        this._injector = _injector;
      }
      ngOnInit() {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
      }
      ngOnDestroy() {
        this._registry.remove(this);
      }
      writeValue(value) {
        this._state = value === this.value;
        this.setProperty("checked", this._state);
      }
      registerOnChange(fn) {
        this._fn = fn;
        this.onChange = () => {
          fn(this.value);
          this._registry.select(this);
        };
      }
      setDisabledState(isDisabled) {
        if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
          this.setProperty("disabled", isDisabled);
        }
        this.setDisabledStateFired = true;
      }
      fireUncheck(value) {
        this.writeValue(value);
      }
      _checkName() {
        if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwNameError();
        }
        if (!this.name && this.formControlName) this.name = this.formControlName;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _RadioControlValueAccessor,
        deps: [{
          token: Renderer2
        }, {
          token: ElementRef
        }, {
          token: RadioControlRegistry
        }, {
          token: Injector
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _RadioControlValueAccessor,
        isStandalone: false,
        selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        host: {
          listeners: {
            "change": "onChange()",
            "blur": "onTouched()"
          }
        },
        providers: [RADIO_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: RadioControlValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
          host: {
            "(change)": "onChange()",
            "(blur)": "onTouched()"
          },
          providers: [RADIO_VALUE_ACCESSOR],
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: Renderer2
      }, {
        type: ElementRef
      }, {
        type: RadioControlRegistry
      }, {
        type: Injector
      }],
      propDecorators: {
        name: [{
          type: Input
        }],
        formControlName: [{
          type: Input
        }],
        value: [{
          type: Input
        }]
      }
    });
    RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeValueAccessor),
      multi: true
    };
    RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
      writeValue(value) {
        this.setProperty("value", parseFloat(value));
      }
      registerOnChange(fn) {
        this.onChange = (value) => {
          fn(value == "" ? null : parseFloat(value));
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _RangeValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _RangeValueAccessor,
        isStandalone: false,
        selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
        host: {
          listeners: {
            "change": "onChange($any($event.target).value)",
            "input": "onChange($any($event.target).value)",
            "blur": "onTouched()"
          }
        },
        providers: [RANGE_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: RangeValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
          host: {
            "(change)": "onChange($any($event.target).value)",
            "(input)": "onChange($any($event.target).value)",
            "(blur)": "onTouched()"
          },
          providers: [RANGE_VALUE_ACCESSOR],
          standalone: false
        }]
      }]
    });
    FormArray = class extends AbstractControl {
      constructor(controls, validatorOrOpts, asyncValidator) {
        super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
        this.controls = controls;
        this._initObservables();
        this._setUpdateStrategy(validatorOrOpts);
        this._setUpControls();
        this.updateValueAndValidity({
          onlySelf: true,
          emitEvent: !!this.asyncValidator
        });
      }
      controls;
      at(index) {
        return this.controls[this._adjustIndex(index)];
      }
      push(control, options = {}) {
        if (Array.isArray(control)) {
          control.forEach((ctrl) => {
            this.controls.push(ctrl);
            this._registerControl(ctrl);
          });
        } else {
          this.controls.push(control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
        this._onCollectionChange();
      }
      insert(index, control, options = {}) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
      }
      removeAt(index, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0) adjustedIndex = 0;
        if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
        });
        this.controls.splice(adjustedIndex, 1);
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
      }
      setControl(index, control, options = {}) {
        let adjustedIndex = this._adjustIndex(index);
        if (adjustedIndex < 0) adjustedIndex = 0;
        if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
        });
        this.controls.splice(adjustedIndex, 1);
        if (control) {
          this.controls.splice(adjustedIndex, 0, control);
          this._registerControl(control);
        }
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
        this._onCollectionChange();
      }
      get length() {
        return this.controls.length;
      }
      setValue(value, options = {}) {
        assertAllValuesPresent(this, false, value);
        value.forEach((newValue, index) => {
          assertControlPresent(this, false, index);
          this.at(index).setValue(newValue, {
            onlySelf: true,
            emitEvent: options.emitEvent
          });
        });
        this.updateValueAndValidity(options);
      }
      patchValue(value, options = {}) {
        if (value == null) return;
        value.forEach((newValue, index) => {
          if (this.at(index)) {
            this.at(index).patchValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          }
        });
        this.updateValueAndValidity(options);
      }
      reset(value = [], options = {}) {
        this._forEachChild((control, index) => {
          control.reset(value[index], __spreadProps(__spreadValues({}, options), {
            onlySelf: true
          }));
        });
        this._updatePristine(options, this);
        this._updateTouched(options, this);
        this.updateValueAndValidity(options);
        if (options?.emitEvent !== false) {
          this._events.next(new FormResetEvent(this));
        }
      }
      getRawValue() {
        return this.controls.map((control) => control.getRawValue());
      }
      clear(options = {}) {
        if (this.controls.length < 1) return;
        this._forEachChild((control) => control._registerOnCollectionChange(() => {
        }));
        this.controls.splice(0);
        this.updateValueAndValidity({
          emitEvent: options.emitEvent
        });
      }
      _adjustIndex(index) {
        return index < 0 ? index + this.length : index;
      }
      _syncPendingControls() {
        let subtreeUpdated = this.controls.reduce((updated, child) => {
          return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated) this.updateValueAndValidity({
          onlySelf: true
        });
        return subtreeUpdated;
      }
      _forEachChild(cb) {
        this.controls.forEach((control, index) => {
          cb(control, index);
        });
      }
      _updateValue() {
        this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
      }
      _anyControls(condition) {
        return this.controls.some((control) => control.enabled && condition(control));
      }
      _setUpControls() {
        this._forEachChild((control) => this._registerControl(control));
      }
      _allControlsDisabled() {
        for (const control of this.controls) {
          if (control.enabled) return false;
        }
        return this.controls.length > 0 || this.disabled;
      }
      _registerControl(control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
      }
      _find(name) {
        return this.at(name) ?? null;
      }
    };
    AbstractFormDirective = class _AbstractFormDirective extends ControlContainer {
      callSetDisabledState;
      get submitted() {
        return untracked(this._submittedReactive);
      }
      set submitted(value) {
        this._submittedReactive.set(value);
      }
      _submitted = computed(() => this._submittedReactive(), ...ngDevMode ? [{
        debugName: "_submitted"
      }] : []);
      _submittedReactive = signal(false, ...ngDevMode ? [{
        debugName: "_submittedReactive"
      }] : []);
      _oldForm;
      _onCollectionChange = () => this._updateDomValue();
      directives = [];
      constructor(validators, asyncValidators, callSetDisabledState) {
        super();
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      ngOnChanges(changes) {
        this.onChanges(changes);
      }
      ngOnDestroy() {
        this.onDestroy();
      }
      onChanges(changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty("form")) {
          this._updateValidators();
          this._updateDomValue();
          this._updateRegistrations();
          this._oldForm = this.form;
        }
      }
      onDestroy() {
        if (this.form) {
          cleanUpValidators(this.form, this);
          if (this.form._onCollectionChange === this._onCollectionChange) {
            this.form._registerOnCollectionChange(() => {
            });
          }
        }
      }
      get formDirective() {
        return this;
      }
      get path() {
        return [];
      }
      addControl(dir) {
        const ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir, this.callSetDisabledState);
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
        this.directives.push(dir);
        return ctrl;
      }
      getControl(dir) {
        return this.form.get(dir.path);
      }
      removeControl(dir) {
        cleanUpControl(dir.control || null, dir, false);
        removeListItem$1(this.directives, dir);
      }
      addFormGroup(dir) {
        this._setUpFormContainer(dir);
      }
      removeFormGroup(dir) {
        this._cleanUpFormContainer(dir);
      }
      getFormGroup(dir) {
        return this.form.get(dir.path);
      }
      getFormArray(dir) {
        return this.form.get(dir.path);
      }
      addFormArray(dir) {
        this._setUpFormContainer(dir);
      }
      removeFormArray(dir) {
        this._cleanUpFormContainer(dir);
      }
      updateModel(dir, value) {
        const ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
      }
      onReset() {
        this.resetForm();
      }
      resetForm(value = void 0, options = {}) {
        this.form.reset(value, options);
        this._submittedReactive.set(false);
      }
      onSubmit($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        this.form._events.next(new FormSubmittedEvent(this.control));
        return $event?.target?.method === "dialog";
      }
      _updateDomValue() {
        this.directives.forEach((dir) => {
          const oldCtrl = dir.control;
          const newCtrl = this.form.get(dir.path);
          if (oldCtrl !== newCtrl) {
            cleanUpControl(oldCtrl || null, dir);
            if (isFormControl(newCtrl)) {
              setUpControl(newCtrl, dir, this.callSetDisabledState);
              dir.control = newCtrl;
            }
          }
        });
        this.form._updateTreeValidity({
          emitEvent: false
        });
      }
      _setUpFormContainer(dir) {
        const ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({
          emitEvent: false
        });
      }
      _cleanUpFormContainer(dir) {
        const ctrl = this.form?.get(dir.path);
        if (ctrl) {
          const isControlUpdated = cleanUpFormContainer(ctrl, dir);
          if (isControlUpdated) {
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange);
        this._oldForm?._registerOnCollectionChange(() => {
        });
      }
      _updateValidators() {
        setUpValidators(this.form, this);
        if (this._oldForm) {
          cleanUpValidators(this._oldForm, this);
        }
      }
      _checkFormPresent() {
        if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw missingFormException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _AbstractFormDirective,
        deps: [{
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: CALL_SET_DISABLED_STATE,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _AbstractFormDirective,
        isStandalone: true,
        usesInheritance: true,
        usesOnChanges: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: AbstractFormDirective,
      decorators: [{
        type: Directive
      }],
      ctorParameters: () => [{
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [CALL_SET_DISABLED_STATE]
        }]
      }]
    });
    formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayDirective)
    };
    FormArrayDirective = class _FormArrayDirective extends AbstractFormDirective {
      form = null;
      ngSubmit = new EventEmitter();
      get control() {
        return this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormArrayDirective,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormArrayDirective,
        isStandalone: false,
        selector: "[formArray]",
        inputs: {
          form: ["formArray", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        host: {
          listeners: {
            "submit": "onSubmit($event)",
            "reset": "onReset()"
          }
        },
        providers: [formDirectiveProvider$1],
        exportAs: ["ngForm"],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormArrayDirective,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formArray]",
          providers: [formDirectiveProvider$1],
          host: {
            "(submit)": "onSubmit($event)",
            "(reset)": "onReset()"
          },
          exportAs: "ngForm",
          standalone: false
        }]
      }],
      propDecorators: {
        form: [{
          type: Input,
          args: ["formArray"]
        }],
        ngSubmit: [{
          type: Output
        }]
      }
    });
    NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NgModelWithFormControlWarning" : "");
    formControlBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlDirective)
    };
    FormControlDirective = class _FormControlDirective extends NgControl {
      _ngModelWarningConfig;
      callSetDisabledState;
      viewModel;
      form;
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      model;
      update = new EventEmitter();
      static _ngModelWarningSentOnce = false;
      _ngModelWarningSent = false;
      constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this.callSetDisabledState = callSetDisabledState;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      ngOnChanges(changes) {
        if (this._isControlChanged(changes)) {
          const previousForm = changes["form"].previousValue;
          if (previousForm) {
            cleanUpControl(previousForm, this, false);
          }
          setUpControl(this.form, this, this.callSetDisabledState);
          this.form.updateValueAndValidity({
            emitEvent: false
          });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
          }
          this.form.setValue(this.model);
          this.viewModel = this.model;
        }
      }
      ngOnDestroy() {
        if (this.form) {
          cleanUpControl(this.form, this, false);
        }
      }
      get path() {
        return [];
      }
      get control() {
        return this.form;
      }
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      _isControlChanged(changes) {
        return changes.hasOwnProperty("form");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormControlDirective,
        deps: [{
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_VALUE_ACCESSOR,
          optional: true,
          self: true
        }, {
          token: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          optional: true
        }, {
          token: CALL_SET_DISABLED_STATE,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormControlDirective,
        isStandalone: false,
        selector: "[formControl]",
        inputs: {
          form: ["formControl", "form"],
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        providers: [formControlBinding],
        exportAs: ["ngForm"],
        usesInheritance: true,
        usesOnChanges: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormControlDirective,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formControl]",
          providers: [formControlBinding],
          exportAs: "ngForm",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [CALL_SET_DISABLED_STATE]
        }]
      }],
      propDecorators: {
        form: [{
          type: Input,
          args: ["formControl"]
        }],
        isDisabled: [{
          type: Input,
          args: ["disabled"]
        }],
        model: [{
          type: Input,
          args: ["ngModel"]
        }],
        update: [{
          type: Output,
          args: ["ngModelChange"]
        }]
      }
    });
    formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupName)
    };
    FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      _checkParentType() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw groupParentException();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormGroupName,
        deps: [{
          token: ControlContainer,
          host: true,
          optional: true,
          skipSelf: true
        }, {
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormGroupName,
        isStandalone: false,
        selector: "[formGroupName]",
        inputs: {
          name: ["formGroupName", "name"]
        },
        providers: [formGroupNameProvider],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormGroupName,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formGroupName]",
          providers: [formGroupNameProvider],
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }, {
          type: SkipSelf
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }],
      propDecorators: {
        name: [{
          type: Input,
          args: ["formGroupName"]
        }]
      }
    });
    formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormArrayName)
    };
    FormArrayName = class _FormArrayName extends ControlContainer {
      _parent;
      name = null;
      constructor(parent, validators, asyncValidators) {
        super();
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
      }
      ngOnInit() {
        if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw arrayParentException();
        }
        this.formDirective.addFormArray(this);
      }
      ngOnDestroy() {
        this.formDirective?.removeFormArray(this);
      }
      get control() {
        return this.formDirective.getFormArray(this);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormArrayName,
        deps: [{
          token: ControlContainer,
          host: true,
          optional: true,
          skipSelf: true
        }, {
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormArrayName,
        isStandalone: false,
        selector: "[formArrayName]",
        inputs: {
          name: ["formArrayName", "name"]
        },
        providers: [formArrayNameProvider],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormArrayName,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formArrayName]",
          providers: [formArrayNameProvider],
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }, {
          type: SkipSelf
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }],
      propDecorators: {
        name: [{
          type: Input,
          args: ["formArrayName"]
        }]
      }
    });
    controlNameBinding = {
      provide: NgControl,
      useExisting: forwardRef(() => FormControlName)
    };
    FormControlName = class _FormControlName extends NgControl {
      _ngModelWarningConfig;
      _added = false;
      viewModel;
      control;
      name = null;
      set isDisabled(isDisabled) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(disabledAttrWarning);
        }
      }
      model;
      update = new EventEmitter();
      static _ngModelWarningSentOnce = false;
      _ngModelWarningSent = false;
      constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        super();
        this._ngModelWarningConfig = _ngModelWarningConfig;
        this._parent = parent;
        this._setValidators(validators);
        this._setAsyncValidators(asyncValidators);
        this.valueAccessor = selectValueAccessor(this, valueAccessors);
      }
      ngOnChanges(changes) {
        if (!this._added) this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
          }
          this.viewModel = this.model;
          this.formDirective.updateModel(this, this.model);
        }
      }
      ngOnDestroy() {
        this.formDirective?.removeControl(this);
      }
      viewToModelUpdate(newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
      }
      get path() {
        return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      _setUpControl() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          checkParentType(this._parent, this.name);
        }
        this.control = this.formDirective.addControl(this);
        this._added = true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormControlName,
        deps: [{
          token: ControlContainer,
          host: true,
          optional: true,
          skipSelf: true
        }, {
          token: NG_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_ASYNC_VALIDATORS,
          optional: true,
          self: true
        }, {
          token: NG_VALUE_ACCESSOR,
          optional: true,
          self: true
        }, {
          token: NG_MODEL_WITH_FORM_CONTROL_WARNING,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormControlName,
        isStandalone: false,
        selector: "[formControlName]",
        inputs: {
          name: ["formControlName", "name"],
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        providers: [controlNameBinding],
        usesInheritance: true,
        usesOnChanges: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormControlName,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formControlName]",
          providers: [controlNameBinding],
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ControlContainer,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }, {
          type: SkipSelf
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Self
        }, {
          type: Inject,
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: void 0,
        decorators: [{
          type: Optional
        }, {
          type: Inject,
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }],
      propDecorators: {
        name: [{
          type: Input,
          args: ["formControlName"]
        }],
        isDisabled: [{
          type: Input,
          args: ["disabled"]
        }],
        model: [{
          type: Input,
          args: ["ngModel"]
        }],
        update: [{
          type: Output,
          args: ["ngModelChange"]
        }]
      }
    });
    formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: forwardRef(() => FormGroupDirective)
    };
    FormGroupDirective = class _FormGroupDirective extends AbstractFormDirective {
      form = null;
      ngSubmit = new EventEmitter();
      get control() {
        return this.form;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormGroupDirective,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _FormGroupDirective,
        isStandalone: false,
        selector: "[formGroup]",
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        host: {
          listeners: {
            "submit": "onSubmit($event)",
            "reset": "onReset()"
          }
        },
        providers: [formDirectiveProvider],
        exportAs: ["ngForm"],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormGroupDirective,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[formGroup]",
          providers: [formDirectiveProvider],
          host: {
            "(submit)": "onSubmit($event)",
            "(reset)": "onReset()"
          },
          exportAs: "ngForm",
          standalone: false
        }]
      }],
      propDecorators: {
        form: [{
          type: Input,
          args: ["formGroup"]
        }],
        ngSubmit: [{
          type: Output
        }]
      }
    });
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlValueAccessor),
      multi: true
    };
    SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
      value;
      _optionMap = /* @__PURE__ */ new Map();
      _idCounter = 0;
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      appRefInjector = inject(ApplicationRef).injector;
      destroyRef = inject(DestroyRef);
      cdr = inject(ChangeDetectorRef);
      _queuedWrite = false;
      _writeValueAfterRender() {
        if (this._queuedWrite || this.appRefInjector.destroyed) {
          return;
        }
        this._queuedWrite = true;
        afterNextRender({
          write: () => {
            if (this.destroyRef.destroyed) {
              return;
            }
            this._queuedWrite = false;
            this.writeValue(this.value);
          }
        }, {
          injector: this.appRefInjector
        });
      }
      writeValue(value) {
        this.cdr.markForCheck();
        this.value = value;
        const id = this._getOptionId(value);
        const valueString = _buildValueString$1(id, value);
        this.setProperty("value", valueString);
      }
      registerOnChange(fn) {
        this.onChange = (valueString) => {
          this.value = this._getOptionValue(valueString);
          fn(this.value);
        };
      }
      _registerOption() {
        return (this._idCounter++).toString();
      }
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id), value)) return id;
        }
        return null;
      }
      _getOptionValue(valueString) {
        const id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _SelectControlValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _SelectControlValueAccessor,
        isStandalone: false,
        selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
        inputs: {
          compareWith: "compareWith"
        },
        host: {
          listeners: {
            "change": "onChange($any($event.target).value)",
            "blur": "onTouched()"
          }
        },
        providers: [SELECT_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: SelectControlValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
          host: {
            "(change)": "onChange($any($event.target).value)",
            "(blur)": "onTouched()"
          },
          providers: [SELECT_VALUE_ACCESSOR],
          standalone: false
        }]
      }],
      propDecorators: {
        compareWith: [{
          type: Input
        }]
      }
    });
    NgSelectOption = class _NgSelectOption {
      _element;
      _renderer;
      _select;
      id;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      set ngValue(value) {
        if (this._select == null) return;
        this._select._optionMap.set(this.id, value);
        this._setElementValue(_buildValueString$1(this.id, value));
        this._select._writeValueAfterRender();
      }
      set value(value) {
        this._setElementValue(value);
        this._select?._writeValueAfterRender();
      }
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      ngOnDestroy() {
        this._select?._optionMap.delete(this.id);
        this._select?._writeValueAfterRender();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NgSelectOption,
        deps: [{
          token: ElementRef
        }, {
          token: Renderer2
        }, {
          token: SelectControlValueAccessor,
          host: true,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _NgSelectOption,
        isStandalone: false,
        selector: "option",
        inputs: {
          ngValue: "ngValue",
          value: "value"
        },
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NgSelectOption,
      decorators: [{
        type: Directive,
        args: [{
          selector: "option",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ElementRef
      }, {
        type: Renderer2
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }]
      }],
      propDecorators: {
        ngValue: [{
          type: Input,
          args: ["ngValue"]
        }],
        value: [{
          type: Input,
          args: ["value"]
        }]
      }
    });
    SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
      multi: true
    };
    SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
      value;
      _optionMap = /* @__PURE__ */ new Map();
      _idCounter = 0;
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
        }
        this._compareWith = fn;
      }
      _compareWith = Object.is;
      writeValue(value) {
        this.value = value;
        let optionSelectedStateSetter;
        if (Array.isArray(value)) {
          const ids = value.map((v) => this._getOptionId(v));
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(ids.indexOf(o.toString()) > -1);
          };
        } else {
          optionSelectedStateSetter = (opt, o) => {
            opt._setSelected(false);
          };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
      }
      registerOnChange(fn) {
        this.onChange = (element) => {
          const selected = [];
          const selectedOptions = element.selectedOptions;
          if (selectedOptions !== void 0) {
            const options = selectedOptions;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              const val = this._getOptionValue(opt.value);
              selected.push(val);
            }
          } else {
            const options = element.options;
            for (let i = 0; i < options.length; i++) {
              const opt = options[i];
              if (opt.selected) {
                const val = this._getOptionValue(opt.value);
                selected.push(val);
              }
            }
          }
          this.value = selected;
          fn(selected);
        };
      }
      _registerOption(value) {
        const id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
      }
      _getOptionId(value) {
        for (const id of this._optionMap.keys()) {
          if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
        }
        return null;
      }
      _getOptionValue(valueString) {
        const id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _SelectMultipleControlValueAccessor,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _SelectMultipleControlValueAccessor,
        isStandalone: false,
        selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
        inputs: {
          compareWith: "compareWith"
        },
        host: {
          listeners: {
            "change": "onChange($event.target)",
            "blur": "onTouched()"
          }
        },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: SelectMultipleControlValueAccessor,
      decorators: [{
        type: Directive,
        args: [{
          selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
          host: {
            "(change)": "onChange($event.target)",
            "(blur)": "onTouched()"
          },
          providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
          standalone: false
        }]
      }],
      propDecorators: {
        compareWith: [{
          type: Input
        }]
      }
    });
    \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
      _element;
      _renderer;
      _select;
      id;
      _value;
      constructor(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      set ngValue(value) {
        if (this._select == null) return;
        this._value = value;
        this._setElementValue(_buildValueString(this.id, value));
        this._select.writeValue(this._select.value);
      }
      set value(value) {
        if (this._select) {
          this._value = value;
          this._setElementValue(_buildValueString(this.id, value));
          this._select.writeValue(this._select.value);
        } else {
          this._setElementValue(value);
        }
      }
      _setElementValue(value) {
        this._renderer.setProperty(this._element.nativeElement, "value", value);
      }
      _setSelected(selected) {
        this._renderer.setProperty(this._element.nativeElement, "selected", selected);
      }
      ngOnDestroy() {
        if (this._select) {
          this._select._optionMap.delete(this.id);
          this._select.writeValue(this._select.value);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _\u0275NgSelectMultipleOption,
        deps: [{
          token: ElementRef
        }, {
          token: Renderer2
        }, {
          token: SelectMultipleControlValueAccessor,
          host: true,
          optional: true
        }],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _\u0275NgSelectMultipleOption,
        isStandalone: false,
        selector: "option",
        inputs: {
          ngValue: "ngValue",
          value: "value"
        },
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: \u0275NgSelectMultipleOption,
      decorators: [{
        type: Directive,
        args: [{
          selector: "option",
          standalone: false
        }]
      }],
      ctorParameters: () => [{
        type: ElementRef
      }, {
        type: Renderer2
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: Optional
        }, {
          type: Host
        }]
      }],
      propDecorators: {
        ngValue: [{
          type: Input,
          args: ["ngValue"]
        }],
        value: [{
          type: Input,
          args: ["value"]
        }]
      }
    });
    AbstractValidatorDirective = class _AbstractValidatorDirective {
      _validator = nullValidator;
      _onChange;
      _enabled;
      ngOnChanges(changes) {
        if (this.inputName in changes) {
          const input = this.normalizeInput(changes[this.inputName].currentValue);
          this._enabled = this.enabled(input);
          this._validator = this._enabled ? this.createValidator(input) : nullValidator;
          this._onChange?.();
        }
      }
      validate(control) {
        return this._validator(control);
      }
      registerOnValidatorChange(fn) {
        this._onChange = fn;
      }
      enabled(input) {
        return input != null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _AbstractValidatorDirective,
        deps: [],
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _AbstractValidatorDirective,
        isStandalone: true,
        usesOnChanges: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: AbstractValidatorDirective,
      decorators: [{
        type: Directive
      }]
    });
    MAX_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxValidator),
      multi: true
    };
    MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
      max;
      inputName = "max";
      normalizeInput = (input) => toFloat(input);
      createValidator = (max) => maxValidator(max);
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _MaxValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _MaxValidator,
        isStandalone: false,
        selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
        inputs: {
          max: "max"
        },
        host: {
          properties: {
            "attr.max": "_enabled ? max : null"
          }
        },
        providers: [MAX_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: MaxValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
          providers: [MAX_VALIDATOR],
          host: {
            "[attr.max]": "_enabled ? max : null"
          },
          standalone: false
        }]
      }],
      propDecorators: {
        max: [{
          type: Input
        }]
      }
    });
    MIN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinValidator),
      multi: true
    };
    MinValidator = class _MinValidator extends AbstractValidatorDirective {
      min;
      inputName = "min";
      normalizeInput = (input) => toFloat(input);
      createValidator = (min) => minValidator(min);
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _MinValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _MinValidator,
        isStandalone: false,
        selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
        inputs: {
          min: "min"
        },
        host: {
          properties: {
            "attr.min": "_enabled ? min : null"
          }
        },
        providers: [MIN_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: MinValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
          providers: [MIN_VALIDATOR],
          host: {
            "[attr.min]": "_enabled ? min : null"
          },
          standalone: false
        }]
      }],
      propDecorators: {
        min: [{
          type: Input
        }]
      }
    });
    REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RequiredValidator),
      multi: true
    };
    CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckboxRequiredValidator),
      multi: true
    };
    RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
      required;
      inputName = "required";
      normalizeInput = booleanAttribute;
      createValidator = (input) => requiredValidator;
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _RequiredValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _RequiredValidator,
        isStandalone: false,
        selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
        inputs: {
          required: "required"
        },
        host: {
          properties: {
            "attr.required": '_enabled ? "" : null'
          }
        },
        providers: [REQUIRED_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: RequiredValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
          providers: [REQUIRED_VALIDATOR],
          host: {
            "[attr.required]": '_enabled ? "" : null'
          },
          standalone: false
        }]
      }],
      propDecorators: {
        required: [{
          type: Input
        }]
      }
    });
    CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
      createValidator = (input) => requiredTrueValidator;
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _CheckboxRequiredValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _CheckboxRequiredValidator,
        isStandalone: false,
        selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
        host: {
          properties: {
            "attr.required": '_enabled ? "" : null'
          }
        },
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: CheckboxRequiredValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
          providers: [CHECKBOX_REQUIRED_VALIDATOR],
          host: {
            "[attr.required]": '_enabled ? "" : null'
          },
          standalone: false
        }]
      }]
    });
    EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    };
    EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
      email;
      inputName = "email";
      normalizeInput = booleanAttribute;
      createValidator = (input) => emailValidator;
      enabled(input) {
        return input;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _EmailValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _EmailValidator,
        isStandalone: false,
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        inputs: {
          email: "email"
        },
        providers: [EMAIL_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: EmailValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[email][formControlName],[email][formControl],[email][ngModel]",
          providers: [EMAIL_VALIDATOR],
          standalone: false
        }]
      }],
      propDecorators: {
        email: [{
          type: Input
        }]
      }
    });
    MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinLengthValidator),
      multi: true
    };
    MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
      minlength;
      inputName = "minlength";
      normalizeInput = (input) => toInteger(input);
      createValidator = (minlength) => minLengthValidator(minlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _MinLengthValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _MinLengthValidator,
        isStandalone: false,
        selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
        inputs: {
          minlength: "minlength"
        },
        host: {
          properties: {
            "attr.minlength": "_enabled ? minlength : null"
          }
        },
        providers: [MIN_LENGTH_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: MinLengthValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
          providers: [MIN_LENGTH_VALIDATOR],
          host: {
            "[attr.minlength]": "_enabled ? minlength : null"
          },
          standalone: false
        }]
      }],
      propDecorators: {
        minlength: [{
          type: Input
        }]
      }
    });
    MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxLengthValidator),
      multi: true
    };
    MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
      maxlength;
      inputName = "maxlength";
      normalizeInput = (input) => toInteger(input);
      createValidator = (maxlength) => maxLengthValidator(maxlength);
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _MaxLengthValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _MaxLengthValidator,
        isStandalone: false,
        selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
        inputs: {
          maxlength: "maxlength"
        },
        host: {
          properties: {
            "attr.maxlength": "_enabled ? maxlength : null"
          }
        },
        providers: [MAX_LENGTH_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: MaxLengthValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
          providers: [MAX_LENGTH_VALIDATOR],
          host: {
            "[attr.maxlength]": "_enabled ? maxlength : null"
          },
          standalone: false
        }]
      }],
      propDecorators: {
        maxlength: [{
          type: Input
        }]
      }
    });
    PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PatternValidator),
      multi: true
    };
    PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
      pattern;
      inputName = "pattern";
      normalizeInput = (input) => input;
      createValidator = (input) => patternValidator(input);
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _PatternValidator,
        deps: null,
        target: FactoryTarget.Directive
      });
      static \u0275dir = \u0275\u0275ngDeclareDirective({
        minVersion: "14.0.0",
        version: "21.2.4",
        type: _PatternValidator,
        isStandalone: false,
        selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
        inputs: {
          pattern: "pattern"
        },
        host: {
          properties: {
            "attr.pattern": "_enabled ? pattern : null"
          }
        },
        providers: [PATTERN_VALIDATOR],
        usesInheritance: true,
        ngImport: core_exports
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: PatternValidator,
      decorators: [{
        type: Directive,
        args: [{
          selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
          providers: [PATTERN_VALIDATOR],
          host: {
            "[attr.pattern]": "_enabled ? pattern : null"
          },
          standalone: false
        }]
      }],
      propDecorators: {
        pattern: [{
          type: Input
        }]
      }
    });
    SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
    TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName];
    \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _\u0275InternalFormsSharedModule,
        deps: [],
        target: FactoryTarget.NgModule
      });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({
        minVersion: "14.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _\u0275InternalFormsSharedModule,
        declarations: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator],
        exports: [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator]
      });
      static \u0275inj = \u0275\u0275ngDeclareInjector({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _\u0275InternalFormsSharedModule
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: \u0275InternalFormsSharedModule,
      decorators: [{
        type: NgModule,
        args: [{
          declarations: SHARED_FORM_DIRECTIVES,
          exports: SHARED_FORM_DIRECTIVES
        }]
      }]
    });
    FormBuilder = class _FormBuilder {
      useNonNullable = false;
      get nonNullable() {
        const nnfb = new _FormBuilder();
        nnfb.useNonNullable = true;
        return nnfb;
      }
      group(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        let newOptions = {};
        if (isAbstractControlOptions(options)) {
          newOptions = options;
        } else if (options !== null) {
          newOptions.validators = options.validator;
          newOptions.asyncValidators = options.asyncValidator;
        }
        return new FormGroup(reducedControls, newOptions);
      }
      record(controls, options = null) {
        const reducedControls = this._reduceControls(controls);
        return new FormRecord(reducedControls, options);
      }
      control(formState, validatorOrOpts, asyncValidator) {
        let newOptions = {};
        if (!this.useNonNullable) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        if (isAbstractControlOptions(validatorOrOpts)) {
          newOptions = validatorOrOpts;
        } else {
          newOptions.validators = validatorOrOpts;
          newOptions.asyncValidators = asyncValidator;
        }
        return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
          nonNullable: true
        }));
      }
      array(controls, validatorOrOpts, asyncValidator) {
        const createdControls = controls.map((c) => this._createControl(c));
        return new FormArray(createdControls, validatorOrOpts, asyncValidator);
      }
      _reduceControls(controls) {
        const createdControls = {};
        Object.keys(controls).forEach((controlName) => {
          createdControls[controlName] = this._createControl(controls[controlName]);
        });
        return createdControls;
      }
      _createControl(controls) {
        if (controls instanceof FormControl) {
          return controls;
        } else if (controls instanceof AbstractControl) {
          return controls;
        } else if (Array.isArray(controls)) {
          const value = controls[0];
          const validator = controls.length > 1 ? controls[1] : null;
          const asyncValidator = controls.length > 2 ? controls[2] : null;
          return this.control(value, validator, asyncValidator);
        } else {
          return this.control(controls);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormBuilder,
        deps: [],
        target: FactoryTarget.Injectable
      });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormBuilder,
        providedIn: "root"
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormBuilder,
      decorators: [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }]
    });
    NonNullableFormBuilder = class _NonNullableFormBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NonNullableFormBuilder,
        deps: [],
        target: FactoryTarget.Injectable
      });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _NonNullableFormBuilder,
        providedIn: "root",
        useFactory: () => inject(FormBuilder).nonNullable
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: NonNullableFormBuilder,
      decorators: [{
        type: Injectable,
        args: [{
          providedIn: "root",
          useFactory: () => inject(FormBuilder).nonNullable
        }]
      }]
    });
    UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
      group(controlsConfig, options = null) {
        return super.group(controlsConfig, options);
      }
      control(formState, validatorOrOpts, asyncValidator) {
        return super.control(formState, validatorOrOpts, asyncValidator);
      }
      array(controlsConfig, validatorOrOpts, asyncValidator) {
        return super.array(controlsConfig, validatorOrOpts, asyncValidator);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _UntypedFormBuilder,
        deps: null,
        target: FactoryTarget.Injectable
      });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _UntypedFormBuilder,
        providedIn: "root"
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: UntypedFormBuilder,
      decorators: [{
        type: Injectable,
        args: [{
          providedIn: "root"
        }]
      }]
    });
    FormsModule = class _FormsModule {
      static withConfig(opts) {
        return {
          ngModule: _FormsModule,
          providers: [{
            provide: CALL_SET_DISABLED_STATE,
            useValue: opts.callSetDisabledState ?? setDisabledStateDefault
          }]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormsModule,
        deps: [],
        target: FactoryTarget.NgModule
      });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({
        minVersion: "14.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormsModule,
        declarations: [NgModel, NgModelGroup, NgForm],
        exports: [\u0275InternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
      });
      static \u0275inj = \u0275\u0275ngDeclareInjector({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _FormsModule,
        imports: [\u0275InternalFormsSharedModule]
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: FormsModule,
      decorators: [{
        type: NgModule,
        args: [{
          declarations: TEMPLATE_DRIVEN_DIRECTIVES,
          exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
        }]
      }]
    });
    ReactiveFormsModule = class _ReactiveFormsModule {
      static withConfig(opts) {
        return {
          ngModule: _ReactiveFormsModule,
          providers: [{
            provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
            useValue: opts.warnOnNgModelWithFormControl ?? "always"
          }, {
            provide: CALL_SET_DISABLED_STATE,
            useValue: opts.callSetDisabledState ?? setDisabledStateDefault
          }]
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _ReactiveFormsModule,
        deps: [],
        target: FactoryTarget.NgModule
      });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({
        minVersion: "14.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _ReactiveFormsModule,
        declarations: [FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName],
        exports: [\u0275InternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormArrayDirective, FormControlName, FormGroupName, FormArrayName]
      });
      static \u0275inj = \u0275\u0275ngDeclareInjector({
        minVersion: "12.0.0",
        version: "21.2.4",
        ngImport: core_exports,
        type: _ReactiveFormsModule,
        imports: [\u0275InternalFormsSharedModule]
      });
    };
    \u0275\u0275ngDeclareClassMetadata({
      minVersion: "12.0.0",
      version: "21.2.4",
      ngImport: core_exports,
      type: ReactiveFormsModule,
      decorators: [{
        type: NgModule,
        args: [{
          declarations: [REACTIVE_DRIVEN_DIRECTIVES],
          exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
        }]
      }]
    });
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
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v21.2.4
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=spec-app-features-register-register.page.spec.js.map
