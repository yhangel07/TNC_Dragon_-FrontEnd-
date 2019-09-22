(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-branch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branch/branch.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branch/branch.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/choosecomp\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ brand }} Branches</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content scroll=\"false\" color=\"dark\" >\r\n    <ion-searchbar placeholder=\"Search branches here\" (click)=\"showList()\" \r\n        class=\"disabled_search\" *ngIf=\"mapInit\" color=\"secondary\"></ion-searchbar>\r\n    <ion-button expand=\"full\" color=\"dark\" (click)=\"showAdvancedPicker()\" *ngIf=\"mapInit\">\r\n      {{ filter }}\r\n    </ion-button>\r\n\r\n    <div class=\"spin\" *ngIf=\"!mapInit\">\r\n      <ion-spinner name=\"dots\"></ion-spinner>\r\n    </div>\r\n    <div *ngIf=\"mapInit\" class=\"mapContainer\">\r\n      <div class=\"btn-container overlay\" (click)=\"initializeMap()\">\r\n        <ion-icon class=\"custom-btn\" name=\"locate\"></ion-icon>\r\n      </div>\r\n      <div id=\"map\" style=\"height: 100%;\" leaflet \r\n        [leafletOptions]=\"options\"\r\n        [(leafletZoom)]=\"zoom\"\r\n        [(leafletCenter)]=\"center\"\r\n        [leafletLayers]=\"branches\"\r\n        (leafletMapReady)=\"onMapReady($event)\">\r\n      </div>\r\n    </div>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/filter.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm2015/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/filter.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/filter.js ***!
  \**************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function filter(predicate, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(predicate, thisArg)(this);
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/branch/branch.module.ts":
/*!*****************************************!*\
  !*** ./src/app/branch/branch.module.ts ***!
  \*****************************************/
/*! exports provided: BranchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPageModule", function() { return BranchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch.page */ "./src/app/branch/branch.page.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");









const routes = [
    {
        path: '',
        component: _branch_page__WEBPACK_IMPORTED_MODULE_6__["BranchPage"]
    }
];
let BranchPageModule = class BranchPageModule {
};
BranchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"],
            _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_branch_page__WEBPACK_IMPORTED_MODULE_6__["BranchPage"]]
    })
], BranchPageModule);



/***/ }),

/***/ "./src/app/branch/branch.page.scss":
/*!*****************************************!*\
  !*** ./src/app/branch/branch.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapContainer {\n  position: relative;\n  height: 100%;\n  z-index: 1;\n}\n\n.overlay {\n  position: absolute;\n  right: 10px;\n  bottom: 150px;\n  z-index: 999;\n}\n\n.btn-container {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  height: 34px;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n\n.custom-btn {\n  border-radius: 2px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nion-spinner {\n  width: 28px;\n  height: 28px;\n  --color: #a0a4ab;\n}\n\n.disabled_search input[disabled] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmNoL2M6XFxVc2Vyc1xcUmlkYSBMZWVcXERlc2t0b3BcXFROQyBBcHBzXFxpb25pY1xcdG5jYXBwL3NyY1xcYXBwXFxicmFuY2hcXGJyYW5jaC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JyYW5jaC9icmFuY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7QUNJSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNJSjs7QURGQztFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURGSTtFQUNJLFVBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL2JyYW5jaC9icmFuY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcENvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDE1MHB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcbi5idG4tY29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcclxufVxyXG4uY3VzdG9tLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSg1MSwgMTgxLCAyMjksIDAuNCk7XHJcbn1cclxuXHJcbi5zcGlue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuIH1cclxuIGlvbi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgLS1jb2xvcjogI2EwYTRhYjtcclxuIH1cclxuIC5kaXNhYmxlZF9zZWFyY2h7XHJcbiAgICBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gIiwiLm1hcENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTUwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJ0bi1jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xufVxuXG4uY3VzdG9tLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcbn1cblxuLnNwaW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIC0tY29sb3I6ICNhMGE0YWI7XG59XG5cbi5kaXNhYmxlZF9zZWFyY2ggaW5wdXRbZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/branch/branch.page.ts":
/*!***************************************!*\
  !*** ./src/app/branch/branch.page.ts ***!
  \***************************************/
/*! exports provided: BranchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPage", function() { return BranchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branches_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branches-list.service */ "./src/app/branch/branches-list.service.ts");









let BranchPage = class BranchPage {
    constructor(route, geolocation, alertController, navCtrl, pickerCtrl, router, branchesList, locationAccuracy) {
        this.route = route;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.pickerCtrl = pickerCtrl;
        this.router = router;
        this.branchesList = branchesList;
        this.locationAccuracy = locationAccuracy;
        this.center = null;
        this.mapInit = false;
        this.branchesMarkers = [];
        this.branchesMarkersLessFiveKM = [];
        this.filter = 'All Branches';
        this.streetMaps = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        route.queryParams.subscribe(val => {
            this.brand = val.brandName;
            branchesList.setBrandName(this.brand);
            this.id = val.id;
            this.branch = val.selectedBranch;
            this.initializeMap();
            this.getBranches(false);
            if (this.id == 3) {
                this.onMarkerClick(this.branch);
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { });
    }
    getBranches(filtered) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let ref = yield this.getUserLocation();
            this.branchesList.getRawBranches()
                .subscribe(branches => {
                this.branch_list = branches;
                this.branch_list.forEach(branch => {
                    this.branchesCoords = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(branch.coordinates, {
                        icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                            iconSize: [30, 46],
                            iconAnchor: [17, 46],
                            iconUrl: 'assets/img/tnc_map_marker.png',
                            shadowUrl: 'assets/marker-shadow.png',
                            popupAnchor: [0, -41]
                        })
                    }).on('click', this.onMarkerClick.bind(this, branch))
                        .bindPopup('<h4>' + branch.branch_name + '</h4>');
                    //check distance from user
                    let distance = this.branchesCoords.getLatLng().distanceTo(ref);
                    branch.distance = distance;
                    this.branchesList.setBranches(this.branch_list);
                    if (distance < 5000) {
                        this.branchesMarkersLessFiveKM.push(this.branchesCoords);
                    }
                    this.branchesMarkers.push(this.branchesCoords);
                    if (filtered) {
                        this.branches = this.branchesMarkersLessFiveKM;
                    }
                    else {
                        this.branches = this.branchesMarkers;
                    }
                });
            });
        });
    }
    getUserLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            try {
                let resp = yield this.geolocation.getCurrentPosition(options);
                this.coords = [resp.coords.latitude, resp.coords.longitude];
                return this.coords;
            }
            catch (error) {
                console.log('Error getting location', error);
                this.presentAlert({
                    subHeader: 'Access to geolocation was blocked',
                    message: 'Please allow location detection to use feature'
                });
            }
        });
    }
    initializeMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let coords = yield this.getUserLocation();
            this.center = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["latLng"])(coords);
            this.zoom = 14;
            this.userLoc = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(coords, {
                icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/img/default_location_marker.png',
                    shadowUrl: 'assets/marker-shadow.png'
                })
            });
            this.options = {
                layers: [this.streetMaps, this.userLoc],
                zoom: this.zoom,
                zoomControl: false,
                center: this.center
            };
            this.mapInit = true;
        });
    }
    ;
    onMapReady(map) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            setTimeout(() => {
                map.invalidateSize();
            }, 0);
            this.map = map;
        });
    }
    ;
    meterToKM(dist) {
        dist = dist / 1000;
        return Math.round(dist * 100 + Number.EPSILON) / 100;
    }
    ;
    onMarkerClick(branch, marker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.map.setView(branch.coordinates, 18);
            // var popup = new L.Popup({
            //   offset:  new L.Point(0, -40)
            // });
            // popup.setLatLng(branch.coordinates);
            // popup.setContent('<h4>'+ branch.branch_name + '</h4>');
            // this.map.openPopup(popup);
            const branchPopUp = yield this.alertController.create({
                header: branch.branch_name,
                subHeader: branch.address,
                message: `
        <div>
          <p>
            <a href="` + branch.facebook_link + `">` +
                    branch.facebook_link +
                    `</a>
          </p>
          <hr>
          <p>
            <span>Branch Distance: </span>` + this.meterToKM(branch.distance) + ` km
          </p>
        </div>
        `,
                buttons: [
                    {
                        text: 'View Details',
                        handler: () => {
                            this.navCtrl.navigateForward('/branchprofile', { queryParams: { id: branch.id } });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield branchPopUp.present();
            branchPopUp.onDidDismiss().then((data) => { });
        });
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: message.subHeader,
                message: message.message,
                buttons: ['OK']
            });
            yield alert.present();
            alert.onDidDismiss().then((data) => {
                this.navCtrl.navigateRoot('/choosecomp');
            });
        });
    }
    showAdvancedPicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let opts = {
                cssClass: 'branch-picker',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Done',
                        cssClass: 'special-done'
                    }
                ],
                columns: [
                    {
                        name: 'filter',
                        options: [
                            { text: 'All Branches', value: 'all' },
                            { text: 'Nearest Branches (5 KM)', value: 'nearest' }
                        ]
                    }
                ]
            };
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
            picker.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let col = yield picker.getColumn('filter');
                this.filter = col.options[col.selectedIndex].text;
                if (col.options[col.selectedIndex].value == 'all') {
                    this.getBranches(false);
                }
                else {
                    this.getBranches(true);
                }
            }));
        });
    }
    showList() {
        this.navCtrl.navigateForward('/branch-list');
    }
};
BranchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _branches_list_service__WEBPACK_IMPORTED_MODULE_8__["BranchesListService"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"] }
];
BranchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-branch',
        template: __webpack_require__(/*! raw-loader!./branch.page.html */ "./node_modules/raw-loader/index.js!./src/app/branch/branch.page.html"),
        styles: [__webpack_require__(/*! ./branch.page.scss */ "./src/app/branch/branch.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _branches_list_service__WEBPACK_IMPORTED_MODULE_8__["BranchesListService"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]])
], BranchPage);



/***/ })

}]);
//# sourceMappingURL=branch-branch-module-es2015.js.map