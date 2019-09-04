(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branchprofile-branchprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branchprofile/branchprofile.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Branch Profile\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/branchprofile/branchprofile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/branchprofile/branchprofile.module.ts ***!
  \*******************************************************/
/*! exports provided: BranchprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchprofilePageModule", function() { return BranchprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branchprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branchprofile.page */ "./src/app/branchprofile/branchprofile.page.ts");







const routes = [
    {
        path: '',
        component: _branchprofile_page__WEBPACK_IMPORTED_MODULE_6__["BranchprofilePage"]
    }
];
let BranchprofilePageModule = class BranchprofilePageModule {
};
BranchprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_branchprofile_page__WEBPACK_IMPORTED_MODULE_6__["BranchprofilePage"]]
    })
], BranchprofilePageModule);



/***/ }),

/***/ "./src/app/branchprofile/branchprofile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/branchprofile/branchprofile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaHByb2ZpbGUvYnJhbmNocHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/branchprofile/branchprofile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/branchprofile/branchprofile.page.ts ***!
  \*****************************************************/
/*! exports provided: BranchprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchprofilePage", function() { return BranchprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BranchprofilePage = class BranchprofilePage {
    constructor() { }
    ngOnInit() { }
};
BranchprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branchprofile',
        template: __webpack_require__(/*! raw-loader!./branchprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html"),
        styles: [__webpack_require__(/*! ./branchprofile.page.scss */ "./src/app/branchprofile/branchprofile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BranchprofilePage);



/***/ })

}]);
//# sourceMappingURL=branchprofile-branchprofile-module-es2015.js.map