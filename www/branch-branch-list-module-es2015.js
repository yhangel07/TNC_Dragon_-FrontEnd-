(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-branch-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branch/branch-list.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branch/branch-list.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/branch\" text=\"Cancel\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search Branch List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar placeholder=\"Search branches here\" [(ngModel)] = \"searchText\"></ion-searchbar>\n    <ion-list *ngFor=\"let branch of branchesOrderBy('distance') | branchesSearch: searchText\">\n        <ion-item detail>\n            <ion-label text-wrap>\n              <ion-text color=\"Danger\">\n                <h3>{{ branch.branch_name }}</h3>\n              </ion-text>\n              <p class=\"list_subHeader\">\n                {{ (branch.distance)/1000 | number: '0.1-2' }} km away from your current location\n              </p>\n            </ion-label>\n          </ion-item>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/branch/branch-list.module.ts":
/*!**********************************************!*\
  !*** ./src/app/branch/branch-list.module.ts ***!
  \**********************************************/
/*! exports provided: BranchListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListPageModule", function() { return BranchListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");
/* harmony import */ var _branch_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branch-list.page */ "./src/app/branch/branch-list.page.ts");








const routes = [
    {
        path: '',
        component: _branch_list_page__WEBPACK_IMPORTED_MODULE_7__["BranchListPage"]
    }
];
let BranchListPageModule = class BranchListPageModule {
};
BranchListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ],
        declarations: [_branch_list_page__WEBPACK_IMPORTED_MODULE_7__["BranchListPage"]]
    })
], BranchListPageModule);



/***/ }),

/***/ "./src/app/branch/branch-list.page.scss":
/*!**********************************************!*\
  !*** ./src/app/branch/branch-list.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list_subHeader {\n  display: block;\n  color: #6c757d;\n  font-style: italic;\n  font-size: 0.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2JyYW5jaC9icmFuY2gtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaC9icmFuY2gtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdF9zdWJIZWFkZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/branch/branch-list.page.ts":
/*!********************************************!*\
  !*** ./src/app/branch/branch-list.page.ts ***!
  \********************************************/
/*! exports provided: BranchListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListPage", function() { return BranchListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _branches_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branches-list.service */ "./src/app/branch/branches-list.service.ts");




let BranchListPage = class BranchListPage {
    constructor(http, branchesList) {
        this.http = http;
        this.branchesList = branchesList;
    }
    ngOnInit() {
        this.branches = this.branchesList.getBranches();
        console.log(this.branches);
    }
    branchesOrderBy(prop) {
        return this.branches.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }
};
BranchListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"] }
];
BranchListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branch-list',
        template: __webpack_require__(/*! raw-loader!./branch-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/branch/branch-list.page.html"),
        styles: [__webpack_require__(/*! ./branch-list.page.scss */ "./src/app/branch/branch-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"]])
], BranchListPage);



/***/ })

}]);
//# sourceMappingURL=branch-branch-list-module-es2015.js.map