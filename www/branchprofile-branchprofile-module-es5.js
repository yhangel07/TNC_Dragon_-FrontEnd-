(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branchprofile-branchprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branchprofile/branchprofile.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/branch\" text=\"Back\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Branch Profile</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-margin-top\">\r\n      <ion-col>\r\n        <div>\r\n          <ion-img class=\"img-thumbnail-size img-horizontal-center\" \r\n            src=\"../../assets/img/tnc.png\" alt=\"TNC logo\"></ion-img>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"\" text-center>\r\n      <ion-col>\r\n        <div>\r\n          <h2>{{ branch.branch_name }}</h2>\r\n          <p class=\"sub-head\">{{ branch.address }}</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid class=\"profile_menu\">\r\n    <ion-row class=\"\">\r\n      <ion-col col-12 class=\"col_profile\">\r\n        <ion-label>\r\n          Branch Details:\r\n        </ion-label>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p>\r\n              <ion-icon style=\"font-size:8px\" name=\"checkbox-outline\"></ion-icon>\r\n              Premium\r\n            </p>\r\n            <p>\r\n              <ion-icon style=\"font-size:8px\" name=\"checkbox-outline\"></ion-icon>\r\n              VIP PCs Available\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"\" *ngIf=\"brand != 'TNC'\">\r\n      <ion-col col-12>\r\n        <ion-item lines=\"full\">\r\n            <ion-icon name=\"pizza\" slot=\"start\"></ion-icon>\r\n            <ion-label>\r\n              Food Menu\r\n            </ion-label>\r\n            <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"\">\r\n      <ion-col col-12>\r\n        <ion-item lines=\"full\">\r\n          <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            Available Promos\r\n          </ion-label>\r\n          <ion-icon [name]=\"(showPromos) ? 'arrow-dropdown':'arrow-dropright'\" slot=\"end\" (click)=\"showPromos = !showPromos\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"showPromos\">\r\n        <ion-col col-12 class=\"col_profile\">\r\n          <img src=\"../../assets/img/promos/promo1.png\">\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"\">\r\n      <ion-col col-12>\r\n        <ion-item lines=\"full\">      \r\n          <ion-icon name=\"trophy\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            Tournaments\r\n          </ion-label>\r\n          <ion-icon name=\"arrow-dropright\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"showTournament\">\r\n        <ion-col col-12 class=\"col_profile\">\r\n          <img src=\"../../assets/img/tournaments/tournament1.png\">\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branchprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branchprofile.page */ "./src/app/branchprofile/branchprofile.page.ts");







var routes = [
    {
        path: '',
        component: _branchprofile_page__WEBPACK_IMPORTED_MODULE_6__["BranchprofilePage"]
    }
];
var BranchprofilePageModule = /** @class */ (function () {
    function BranchprofilePageModule() {
    }
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
    return BranchprofilePageModule;
}());



/***/ }),

/***/ "./src/app/branchprofile/branchprofile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/branchprofile/branchprofile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-head {\n  font-size: 0.8rem;\n  font-style: italic;\n  color: #6c757d;\n}\n\n.profile_menu {\n  color: #f26925;\n  margin: 30px;\n}\n\n.profile_menu ion-label {\n  color: #f26925;\n}\n\n.col_profile {\n  border: 1px solid #6c757d;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.col_profile p {\n  font-style: italic;\n  font-size: 0.8rem;\n  display: block;\n  margin: 0;\n}\n\nion-item {\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmNocHJvZmlsZS9jOlxcVXNlcnNcXFJpZGEgTGVlXFxEZXNrdG9wXFxUTkMgQXBwc1xcaW9uaWNcXHRuY2FwcC9zcmNcXGFwcFxcYnJhbmNocHJvZmlsZVxcYnJhbmNocHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5jaHByb2ZpbGUvYnJhbmNocHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaHByb2ZpbGUvYnJhbmNocHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zdWItaGVhZHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5wcm9maWxlX21lbnV7XHJcbiAgICBjb2xvcjogI2YyNjkyNTtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLnByb2ZpbGVfbWVudSBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogI2YyNjkyNTtcclxufVxyXG5cclxuLmNvbF9wcm9maWxle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNvbF9wcm9maWxlIHB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG5cclxuIiwiLnN1Yi1oZWFkIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5wcm9maWxlX21lbnUge1xuICBjb2xvcjogI2YyNjkyNTtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG4ucHJvZmlsZV9tZW51IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZjI2OTI1O1xufVxuXG4uY29sX3Byb2ZpbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29sX3Byb2ZpbGUgcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../branch/branches-list.service */ "./src/app/branch/branches-list.service.ts");




var BranchprofilePage = /** @class */ (function () {
    function BranchprofilePage(route, branchesList) {
        this.route = route;
        this.branchesList = branchesList;
    }
    BranchprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.showPromos = false;
        this.showTournament = false;
        this.route.queryParams
            .filter(function (params) { return params.id; })
            .subscribe(function (params) {
            _this.id = params.id;
            _this.branch = _this.branchesList.getBranchById(_this.id);
            _this.brand = _this.branchesList.getBrandName();
        });
        console.log(this.branch);
    };
    BranchprofilePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"] }
    ]; };
    BranchprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branchprofile',
            template: __webpack_require__(/*! raw-loader!./branchprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/branchprofile/branchprofile.page.html"),
            styles: [__webpack_require__(/*! ./branchprofile.page.scss */ "./src/app/branchprofile/branchprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _branch_branches_list_service__WEBPACK_IMPORTED_MODULE_3__["BranchesListService"]])
    ], BranchprofilePage);
    return BranchprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=branchprofile-branchprofile-module-es5.js.map