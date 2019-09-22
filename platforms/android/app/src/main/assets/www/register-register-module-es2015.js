(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\" text=\"Cancel\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"dark\">\r\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-row>\r\n      <ion-item>\r\n          <ion-input type=\"text\" placeholder=\"First Name\" formControlName=\"firstName\" \r\n            class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" >\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-input type=\"text\" placeholder=\"Last Name\"\r\n          formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" >\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-input type=\"text\" placeholder=\"User ID\"\r\n          formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" >\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Password\"\r\n          formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n        </ion-input>\r\n      </ion-item>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-item lines=\"none\">\r\n        <ion-button type=\"submit\" expand=\"block\">\r\n            <ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner>\r\n            REGISTER\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #f26925;\n  --color: #fff;\n}\n\nion-item {\n  border-color: rgba(0, 0, 0, 0);\n  color: white;\n  --background: #222428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvYzpcXFVzZXJzXFxSaWRhIExlZVxcRGVza3RvcFxcVE5DIEFwcHNcXGlvbmljXFx0bmNhcHAvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMjY5MjU7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjI0Mjg7XHJcbn0iLCJpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjI2OTI1O1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6ICMyMjI0Mjg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loginExtras/user.service */ "./src/app/loginExtras/user.service.ts");
/* harmony import */ var _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loginExtras/authentication.service */ "./src/app/loginExtras/authentication.service.ts");







let RegisterPage = class RegisterPage {
    constructor(formBuilder, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log('ERROR: form not valid');
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(data => {
            // this.alertService.success('Registration successful', true); TODO Change to alert
            this.router.navigate(['/login']);
        }, error => {
            // this.alertService.error(error); TODO change to alert
            console.log('ERROR: ' + JSON.stringify(error));
            this.loading = false;
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
        _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map