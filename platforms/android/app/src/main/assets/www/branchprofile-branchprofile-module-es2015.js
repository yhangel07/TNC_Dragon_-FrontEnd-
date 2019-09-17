(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branchprofile-branchprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branchprofile/branchprofile.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/branch\" text=\"Back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Branch Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col>\n        <div>\n          <ion-img class=\"img-thumbnail-size img-horizontal-center\" \n            src=\"../../assets/img/tnc.png\" alt=\"TNC logo\"></ion-img>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\" text-center>\n      <ion-col>\n        <div>\n          <h2>{{ branch.branch_name }}</h2>\n          <p class=\"sub-head\">{{ branch.address }}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"profile_menu\">\n    <ion-row class=\"\">\n      <ion-col col-12 class=\"col_profile\">\n        <ion-label>\n          Branch Details:\n        </ion-label>\n        <ion-row>\n          <ion-col>\n            <p>\n              <ion-icon style=\"font-size:8px\" name=\"checkbox-outline\"></ion-icon>\n              Premium\n            </p>\n            <p>\n              <ion-icon style=\"font-size:8px\" name=\"checkbox-outline\"></ion-icon>\n              VIP PCs Available\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col col-12>\n        <ion-item lines=\"full\">\n            <ion-icon name=\"pizza\" slot=\"start\"></ion-icon>\n            <ion-label>\n              Food Menu\n            </ion-label>\n            <ion-icon name=\"arrow-dropleft\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col col-12>\n        <ion-item lines=\"full\">\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Available Promos\n          </ion-label>\n          <ion-icon name=\"arrow-dropleft\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col col-12>\n        <ion-item lines=\"full\">      \n          <ion-icon name=\"trophy\" slot=\"start\"></ion-icon>\n          <ion-label>\n            Tournaments\n          </ion-label>\n          <ion-icon name=\"arrow-dropleft\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

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

module.exports = ".img-horizontal-center {\n  margin: 0 auto; }\n\n.img-thumbnail-size {\n  width: 80px;\n  height: 80px; }\n\n.sub-head {\n  font-size: 0.8rem;\n  font-style: italic;\n  color: #6c757d; }\n\n.profile_menu {\n  color: #f26925;\n  margin: 30px 40px; }\n\n.profile_menu ion-label {\n  color: #f26925; }\n\n.col_profile {\n  border: 1px solid #6c757d;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.col_profile p {\n  font-style: italic;\n  font-size: 0.8rem;\n  display: block;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2JyYW5jaHByb2ZpbGUvYnJhbmNocHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icmFuY2hwcm9maWxlL2JyYW5jaHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1ob3Jpem9udGFsLWNlbnRlcntcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmltZy10aHVtYm5haWwtc2l6ZXtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5zdWItaGVhZHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5wcm9maWxlX21lbnV7XG4gICAgY29sb3I6ICNmMjY5MjU7XG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XG59XG5cbi5wcm9maWxlX21lbnUgaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjZjI2OTI1O1xufVxuXG4uY29sX3Byb2ZpbGV7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbF9wcm9maWxlIHB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbn1cblxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../branch/branches-list.service */ "./src/app/branch/branches-list.service.ts");




let BranchprofilePage = class BranchprofilePage {
    constructor(route, branchesList) {
        this.route = route;
        this.branchesList = branchesList;
    }
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.id)
            .subscribe(params => {
            this.id = params.id;
            this.branch = this.branchesList.getBranchById(this.id);
        });
        console.log(this.branch);
    }
};
BranchprofilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"] }
];
BranchprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branchprofile',
        template: __webpack_require__(/*! raw-loader!./branchprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html"),
        styles: [__webpack_require__(/*! ./branchprofile.page.scss */ "./src/app/branchprofile/branchprofile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"]])
], BranchprofilePage);



/***/ })

}]);
//# sourceMappingURL=branchprofile-branchprofile-module-es2015.js.map