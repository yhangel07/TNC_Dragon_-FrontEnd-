(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\r\n  <ion-card class=\"welcome-card\" color=\"secondary\" padding>\r\n      <ion-img class=\"img-thumbnail-size img-horizontal-center\" \r\n      src=\"../../assets/img/tnc.png\" alt=\"TNC logo\" padding></ion-img>\r\n\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n          <ion-item>      \r\n            <ion-icon name=\"body\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"text\" placeholder=\"User ID\"\r\n              formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-row *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n          </ion-row>\r\n\r\n          <ion-item>      \r\n            <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\r\n            <ion-input type=\"password\" placeholder=\"Password\"\r\n              formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-row *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n          </ion-row>\r\n            \r\n          <ion-button type=\"submit\" expand=\"block\">\r\n              <ion-spinner name=\"lines\" *ngIf=\"loading\"></ion-spinner>\r\n              LOGIN\r\n          </ion-button>\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col col-9>\r\n                <a routerLink=\"/register\">Register</a>\r\n              </ion-col>\r\n              <ion-col col-9>\r\n                <!-- TODO create help -->\r\n                <a routerLink=\"/help\">NEED HELP?</a>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </form>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --background: #f26925;\n  --color: #fff;\n}\n\nion-item {\n  border-radius: 15px !important;\n  padding-left: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #000000;\n  border-bottom: 2px !important;\n  box-shadow: none !important;\n  --ion-background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYzpcXFVzZXJzXFxSaWRhIExlZVxcRGVza3RvcFxcVE5DIEFwcHNcXGlvbmljXFx0bmNhcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogI2YyNjkyNTtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iLCJpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjI2OTI1O1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loginExtras/authentication.service */ "./src/app/loginExtras/authentication.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            console.log('ERROR: Form not valid');
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            // this.alertService.error(error);
            console.log('ERROR: ' + error['error'].message);
            _this.loading = false;
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map