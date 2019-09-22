(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-branch-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branch/branch-list.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branch/branch-list.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/branch\" text=\"Cancel\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Search Branch List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-searchbar placeholder=\"Search branches here\" [(ngModel)] = \"searchText\"></ion-searchbar>\r\n    <ion-list *ngFor=\"let branch of branchesOrderBy('distance') | branchesSearch: searchText\">\r\n          <ion-item>\r\n            <ion-avatar slot=\"end\" (click)=\"viewPhoto(branch)\">\r\n              <img [src]=\"(branch.img) ? branch.img:'assets/img/default_list_image.jpg'\">\r\n            </ion-avatar>\r\n            <ion-label text-wrap (click)= goToMap(branch)>\r\n              <ion-text color=\"Danger\">\r\n                <h3>{{ branch.branch_name }}</h3>\r\n              </ion-text>\r\n              <p class=\"list_subHeader\">\r\n                {{ (branch.distance)/1000 | number: '0.1-2' }} km away from your current location\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n"

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

module.exports = ".list_subHeader {\n  display: block;\n  color: #6c757d;\n  font-style: italic;\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmNoL2M6XFxVc2Vyc1xcUmlkYSBMZWVcXERlc2t0b3BcXFROQyBBcHBzXFxpb25pY1xcdG5jYXBwL3NyY1xcYXBwXFxicmFuY2hcXGJyYW5jaC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnJhbmNoL2JyYW5jaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYnJhbmNoL2JyYW5jaC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0X3N1YkhlYWRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuIiwiLmxpc3Rfc3ViSGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */"

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
/* harmony import */ var _branches_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branches-list.service */ "./src/app/branch/branches-list.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");







let BranchListPage = class BranchListPage {
    constructor(navCtrl, branchesList, branchList, photoViewer, platform, file) {
        this.navCtrl = navCtrl;
        this.branchesList = branchesList;
        this.branchList = branchList;
        this.photoViewer = photoViewer;
        this.platform = platform;
        this.file = file;
    }
    ngOnInit() {
        this.branches = this.branchesList.getBranches();
    }
    branchesOrderBy(prop) {
        return this.branches.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    }
    goToMap(branch) {
        this.navCtrl.navigateBack('/branch', { queryParams: { id: 3, brandName: this.branchList.getBrandName(), selectedBranch: branch } });
    }
    viewPhoto(branch) {
        var url = branch.img;
        const options = {
            share: true,
            closeButton: true,
            copyToReference: true,
            headers: "",
            piccasoOptions: {}
        };
        // var url = 'www/assets/img/tnc.png';
        this.photoViewer.show(this.file.applicationDirectory + 'www/' + url, branch.branch_name, options);
    }
};
BranchListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _branches_list_service__WEBPACK_IMPORTED_MODULE_2__["BranchesListService"] },
    { type: _branches_list_service__WEBPACK_IMPORTED_MODULE_2__["BranchesListService"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] }
];
BranchListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branch-list',
        template: __webpack_require__(/*! raw-loader!./branch-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/branch/branch-list.page.html"),
        styles: [__webpack_require__(/*! ./branch-list.page.scss */ "./src/app/branch/branch-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _branches_list_service__WEBPACK_IMPORTED_MODULE_2__["BranchesListService"],
        _branches_list_service__WEBPACK_IMPORTED_MODULE_2__["BranchesListService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]])
], BranchListPage);



/***/ })

}]);
//# sourceMappingURL=branch-branch-list-module-es2015.js.map