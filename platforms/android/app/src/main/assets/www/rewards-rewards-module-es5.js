(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rewards-rewards-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rewards/rewards.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rewards/rewards.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Rewards\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rewards/rewards.module.ts":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.module.ts ***!
  \*******************************************/
/*! exports provided: RewardsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPageModule", function() { return RewardsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rewards.page */ "./src/app/rewards/rewards.page.ts");







var routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]
    }
];
var RewardsPageModule = /** @class */ (function () {
    function RewardsPageModule() {
    }
    RewardsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_6__["RewardsPage"]]
        })
    ], RewardsPageModule);
    return RewardsPageModule;
}());



/***/ }),

/***/ "./src/app/rewards/rewards.page.scss":
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jld2FyZHMvcmV3YXJkcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rewards/rewards.page.ts":
/*!*****************************************!*\
  !*** ./src/app/rewards/rewards.page.ts ***!
  \*****************************************/
/*! exports provided: RewardsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsPage", function() { return RewardsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RewardsPage = /** @class */ (function () {
    function RewardsPage() {
    }
    RewardsPage.prototype.ngOnInit = function () {
    };
    RewardsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rewards',
            template: __webpack_require__(/*! raw-loader!./rewards.page.html */ "./node_modules/raw-loader/index.js!./src/app/rewards/rewards.page.html"),
            styles: [__webpack_require__(/*! ./rewards.page.scss */ "./src/app/rewards/rewards.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RewardsPage);
    return RewardsPage;
}());



/***/ })

}]);
//# sourceMappingURL=rewards-rewards-module-es5.js.map