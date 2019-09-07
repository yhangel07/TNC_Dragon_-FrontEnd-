(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choosecomp-choosecomp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/choosecomp/choosecomp.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choosecomp/choosecomp.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Choose Shop\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content no-padding no-bounce>\n <ion-grid no-padding>\n    <ion-row>\n      <ion-col class=\"flex\" [routerLink]= \"['/branch']\" \n        [queryParams]=\"{ id:1, brandName: 'High Grounds'}\" routerDirection=\"forward\">\n            <ion-avatar>\n              <img src=\"./assets/img/grdzero.png\"> \n            </ion-avatar>\n        <p padding>High Grounds</p>\n      </ion-col>\n      <ion-col class=\"flex\" [routerLink]= \"['/branch']\" \n        [queryParams]=\"{ id: 2, brandName: 'TNC'}\" routerDirection=\"forward\">\n          <ion-avatar>\n            <img src=\"./assets/img/tnc.png\"> \n          </ion-avatar>\n        <p padding>TNC</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n"

/***/ }),

/***/ "./src/app/choosecomp/choosecomp.module.ts":
/*!*************************************************!*\
  !*** ./src/app/choosecomp/choosecomp.module.ts ***!
  \*************************************************/
/*! exports provided: ChoosecompPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosecompPageModule", function() { return ChoosecompPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _choosecomp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choosecomp.page */ "./src/app/choosecomp/choosecomp.page.ts");







var routes = [
    {
        path: '',
        component: _choosecomp_page__WEBPACK_IMPORTED_MODULE_6__["ChoosecompPage"]
    }
];
var ChoosecompPageModule = /** @class */ (function () {
    function ChoosecompPageModule() {
    }
    ChoosecompPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_choosecomp_page__WEBPACK_IMPORTED_MODULE_6__["ChoosecompPage"]]
        })
    ], ChoosecompPageModule);
    return ChoosecompPageModule;
}());



/***/ }),

/***/ "./src/app/choosecomp/choosecomp.page.scss":
/*!*************************************************!*\
  !*** ./src/app/choosecomp/choosecomp.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  margin-top: 30%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2Nob29zZWNvbXAvY2hvb3NlY29tcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaG9vc2Vjb21wL2Nob29zZWNvbXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgge1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/choosecomp/choosecomp.page.ts":
/*!***********************************************!*\
  !*** ./src/app/choosecomp/choosecomp.page.ts ***!
  \***********************************************/
/*! exports provided: ChoosecompPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosecompPage", function() { return ChoosecompPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChoosecompPage = /** @class */ (function () {
    function ChoosecompPage() {
        this.shops = [
            {
                id: 1,
                name: 'TNC',
            }
        ];
        this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
    }
    ChoosecompPage.prototype.ngOnInit = function () {
    };
    ChoosecompPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choosecomp',
            template: __webpack_require__(/*! raw-loader!./choosecomp.page.html */ "./node_modules/raw-loader/index.js!./src/app/choosecomp/choosecomp.page.html"),
            styles: [__webpack_require__(/*! ./choosecomp.page.scss */ "./src/app/choosecomp/choosecomp.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChoosecompPage);
    return ChoosecompPage;
}());



/***/ })

}]);
//# sourceMappingURL=choosecomp-choosecomp-module-es5.js.map