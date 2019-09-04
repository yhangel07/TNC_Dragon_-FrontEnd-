(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <img src=\"/assets/shapes.svg\" alt=\"\" />\n      <ion-card-header>\n        <ion-card-title>Good Afternoon, User</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n    \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button routerLink=\"/luckydraw\" router-direction=\"back\">\n        <ion-icon name=\"star-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n  <div class=\"news\">\n    <ion-card *ngFor=\"let post of posts\" class=\"nCard\">\n        <ion-card-content>\n          <img [src]=\"post.media_url\">\n        </ion-card-content>\n        <ion-card-header>\n          <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n          <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/', 'posts', post.id]\" text-right>Read More...</ion-button>\n      </ion-card>\n  </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.news {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto; }\n\n.news .nCard {\n    -webkit-box-flex: 0;\n            flex: 0 0 auto;\n    height: 100%;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUhsQjtJQU1JLG1CQUFjO1lBQWQsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIC5uQ2FyZCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wordpress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../wordpress.service */ "./src/app/wordpress.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(wp, loadingCtrl) {
        this.wp = wp;
        this.loadingCtrl = loadingCtrl;
        this.posts = [];
        this.page = 1;
        this.count = null;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadPosts();
    };
    HomePage.prototype.loadPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading Data...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.wp.getPosts().subscribe(function (res) {
                            _this.count = _this.wp.totalPosts;
                            _this.posts = res;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadMore = function (event) {
        var _this = this;
        this.page++;
        this.wp.getPosts(this.page).subscribe(function (res) {
            _this.posts = _this.posts.concat(res);
            event.target.complete();
            // Disable infinite loading when maximum reached
            if (_this.page == _this.wp.pages) {
                event.target.disabled = true;
            }
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_wordpress_service__WEBPACK_IMPORTED_MODULE_3__["WordpressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/wordpress.service.ts":
/*!**************************************!*\
  !*** ./src/app/wordpress.service.ts ***!
  \**************************************/
/*! exports provided: WordpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressService", function() { return WordpressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WordpressService = /** @class */ (function () {
    function WordpressService(http) {
        this.http = http;
        this.url = 'https://tncesports.com/wp-json/wp/v2/';
        this.totalPosts = null;
    }
    WordpressService.prototype.getPosts = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var options = {
            observe: "response",
            params: {
                per_page: '5',
                page: '' + page
            }
        };
        return this.http.get(this.url + "posts?_embed", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            _this.pages = resp['headers'].get('x-wp-totalpages');
            _this.totalPosts = resp['headers'].get('x-wp-total');
            var data = resp['body'];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var post = data_1[_i];
                post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
            }
            return data;
        }));
    };
    WordpressService.prototype.getPostContent = function (id) {
        return this.http.get(this.url + "posts/" + id + "?_embed").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (post) {
            post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
            return post;
        }));
    };
    WordpressService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WordpressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WordpressService);
    return WordpressService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map