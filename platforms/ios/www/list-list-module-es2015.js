(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Branches\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar style=\"z-index:17\"></ion-searchbar>\n  <div class=\"btn-container overlay\" (click)=\"userCurrentLocation()\" *ngIf=\"mapInit\">\n    <ion-icon name=\"locate\" class=\"custom-btn\"></ion-icon>\n  </div>\n  <div class=\"mapContainer\">\n    <div *ngIf=\"mapInit\" style=\"height: 100%; width:100%\" leaflet \n      [leafletOptions]=\"options\"\n      [(leafletCenter)]=\"center\"\n      [leafletLayers]=\"layers\"\n      (leafletMapReady)=\"onMapReady($event)\">\n    </div>\n  </div>\n</ion-content>\n"
=======
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Branches\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"
>>>>>>> 70c992c793d7bbb7befe6ff32aa5852bb9c896e8

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");
<<<<<<< HEAD
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");

=======
>>>>>>> 70c992c793d7bbb7befe6ff32aa5852bb9c896e8







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
<<<<<<< HEAD
            ]),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"]
=======
            ])
>>>>>>> 70c992c793d7bbb7befe6ff32aa5852bb9c896e8
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".mapContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n\n.overlay {\n  position: absolute;\n  left: 11px;\n  top: 150px;\n  z-index: 999; }\n\n.btn-container {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  height: 34px;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n.custom-btn {\n  border-radius: 2px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksb0NBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0RBQW9ELEVBQUE7O0FBRXhEO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9EQUFvRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbn1cbi5vdmVybGF5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMXB4O1xuICAgIHRvcDogMTUwcHg7XG4gICAgei1pbmRleDogOTk5O1xufVxuLmJ0bi1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcbn1cbi5jdXN0b20tYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xufSJdfQ== */"
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"
>>>>>>> 70c992c793d7bbb7befe6ff32aa5852bb9c896e8

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
<<<<<<< HEAD
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ListPage = class ListPage {
    constructor(geolocation, alertController) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.mapInit = false;
        this.center = null;
        this.layers = null;
        this.streetMaps = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.options = {
            layers: [this.streetMaps],
            zoom: 17,
            center: this.userCurrentLocation()
        };
    }
    ngOnInit() {
        this.userCurrentLocation();
    }
    userCurrentLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.center = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(resp.coords.latitude, resp.coords.longitude);
            this.userLoc = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([resp.coords.latitude, resp.coords.longitude], {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/img/default_location_marker.png',
                    shadowUrl: 'assets/marker-shadow.png'
                })
            });
            this.layers = [this.streetMaps, this.userLoc];
            this.mapInit = true;
            //console.log(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
            this.presentAlert();
        });
    }
    onMapReady(map) {
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Access to geolocation was blocked',
                message: 'Please allow location detection to use feature',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list.page',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ListPage);

// add back when alpha.4 is out
// navigate(item) {
//   this.router.navigate(['/list', JSON.stringify(item)]);
// }
=======


let ListPage = class ListPage {
    ngOnInit() {
    }
};
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    })
], ListPage);

>>>>>>> 70c992c793d7bbb7befe6ff32aa5852bb9c896e8


/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map