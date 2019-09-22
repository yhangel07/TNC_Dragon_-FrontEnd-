(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"dark\">\r\n    <ion-card class=\"welcome-card\" color=\"secondary\">\r\n      <img src=\"/assets/shapes.svg\" alt=\"\" />\r\n      <ion-card-header>\r\n        <ion-card-title>Good Afternoon, User</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    \r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button routerLink=\"/luckydraw\" router-direction=\"back\" color=\"medium\">\r\n        <ion-icon name=\"star-outline\" color=\"dark\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n  <div class=\"news\">\r\n    <ion-card *ngFor=\"let post of posts\" class=\"nCard\" color=\"secondary\">\r\n        <ion-card-content>\r\n          <img [src]=\"post.media_url\">\r\n        </ion-card-content>\r\n        <ion-card-header>\r\n          <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\r\n          <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/', 'home', post.id]\" text-right>Read More...</ion-button>\r\n      </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.news {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.news .nCard {\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jOlxcVXNlcnNcXFJpZGEgTGVlXFxEZXNrdG9wXFxUTkMgQXBwc1xcaW9uaWNcXHRuY2FwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIC5uQ2FyZCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5uZXdzIC5uQ2FyZCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../wordpress.service */ "./src/app/wordpress.service.ts");
/* harmony import */ var _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loginExtras/authentication.service */ "./src/app/loginExtras/authentication.service.ts");
/* harmony import */ var _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loginExtras/user.service */ "./src/app/loginExtras/user.service.ts");






let HomePage = class HomePage {
    constructor(wp, loadingCtrl, authenticationService, userService) {
        this.wp = wp;
        this.loadingCtrl = loadingCtrl;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.posts = [];
        this.page = 1;
        this.count = null;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    ngOnInit() {
        this.loadPosts();
    }
    ngOnDestroy() {
        this.currentUserSubscription.unsubscribe();
    }
    loadPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading Data...'
            });
            yield loading.present();
            this.wp.getPosts().subscribe(res => {
                this.count = this.wp.totalPosts;
                this.posts = res;
                loading.dismiss();
            });
        });
    }
    loadMore(event) {
        this.page++;
        this.wp.getPosts(this.page).subscribe(res => {
            this.posts = [...this.posts, ...res];
            event.target.complete();
            // Disable infinite loading when maximum reached
            if (this.page == this.wp.pages) {
                event.target.disabled = true;
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _loginExtras_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _loginExtras_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map