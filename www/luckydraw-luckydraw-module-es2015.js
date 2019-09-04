(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["luckydraw-luckydraw-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/luckydraw/luckydraw.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/luckydraw/luckydraw.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Lucky Draw\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar style=\"z-index:17\" placeholder=\"Search for Branch name\"\n    id=\"search\" [(ngModel)]=\"branchFilter\"></ion-searchbar>\n  <ion-list *ngIf=\"branchFilter.length != 0\">\n    <ion-item *ngFor=\"let item of items | branchesSearch: branchFilter\">\n          {{ item.branch_name }}\n    </ion-item>\n  </ion-list>\n\n  <div class=\"mapContainer\">\n    <div class=\"btn-container overlay\" (click)=\"userCurrentLocation()\" *ngIf=\"mapInit\">\n          <ion-icon name=\"locate\" class=\"custom-btn\"></ion-icon>\n    </div>\n\n    <div *ngIf=\"mapInit\" style=\"height: 100%; width:100%\" leaflet \n      [leafletOptions]=\"options\"\n      [(leafletCenter)]=\"center\"\n      [leafletLayers]=\"layers\"\n      [(leafletZoom)]=\"zoom\"\n      (leafletMapReady)=\"onMapReady($event)\">\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/luckydraw/luckydraw.module.ts":
/*!***********************************************!*\
  !*** ./src/app/luckydraw/luckydraw.module.ts ***!
  \***********************************************/
/*! exports provided: LuckydrawPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuckydrawPageModule", function() { return LuckydrawPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _luckydraw_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./luckydraw.page */ "./src/app/luckydraw/luckydraw.page.ts");







const routes = [
    {
        path: '',
        component: _luckydraw_page__WEBPACK_IMPORTED_MODULE_6__["LuckydrawPage"]
    }
];
let LuckydrawPageModule = class LuckydrawPageModule {
};
LuckydrawPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_luckydraw_page__WEBPACK_IMPORTED_MODULE_6__["LuckydrawPage"]]
    })
], LuckydrawPageModule);



/***/ }),

/***/ "./src/app/luckydraw/luckydraw.page.scss":
/*!***********************************************!*\
  !*** ./src/app/luckydraw/luckydraw.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1Y2t5ZHJhdy9sdWNreWRyYXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/luckydraw/luckydraw.page.ts":
/*!*********************************************!*\
  !*** ./src/app/luckydraw/luckydraw.page.ts ***!
  \*********************************************/
/*! exports provided: LuckydrawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuckydrawPage", function() { return LuckydrawPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LuckydrawPage = class LuckydrawPage {
    constructor() { }
    ngOnInit() {
    }
};
LuckydrawPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-luckydraw',
        template: __webpack_require__(/*! raw-loader!./luckydraw.page.html */ "./node_modules/raw-loader/index.js!./src/app/luckydraw/luckydraw.page.html"),
        styles: [__webpack_require__(/*! ./luckydraw.page.scss */ "./src/app/luckydraw/luckydraw.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LuckydrawPage);



/***/ })

}]);
//# sourceMappingURL=luckydraw-luckydraw-module-es2015.js.map