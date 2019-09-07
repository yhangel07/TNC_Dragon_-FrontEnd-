(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-branch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/branch/branch.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/branch/branch.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/choosecomp\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ brand }} Branches</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll=\"false\">\n    <ion-searchbar placeholder=\"Search branches here\" (click)=\"showList()\" \n        class=\"disabled_search\" *ngIf=\"mapInit\"></ion-searchbar>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"showBasicPicker()\" *ngIf=\"mapInit\">\n      {{ filter }}\n    </ion-button>\n\n    <div class=\"spin\" *ngIf=\"!mapInit\">\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </div>\n    <div *ngIf=\"mapInit\" class=\"mapContainer\">\n      <div class=\"btn-container overlay\" (click)=\"initializeMap()\">\n        <ion-icon class=\"custom-btn\" name=\"locate\"></ion-icon>\n      </div>\n      <div id=\"map\" style=\"height: 100%;\" leaflet \n        [leafletOptions]=\"options\"\n        [(leafletZoom)]=\"zoom\"\n        [(leafletCenter)]=\"center\"\n        [leafletLayers]=\"branches\"\n        (leafletMapReady)=\"onMapReady($event)\">\n      </div>\n    </div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/filter.js ***!
  \***********************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch.page */ "./src/app/branch/branch.page.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipe/pipe.module */ "./src/app/pipe/pipe.module.ts");









var routes = [
    {
        path: '',
        component: _branch_page__WEBPACK_IMPORTED_MODULE_6__["BranchPage"]
    }
];
var BranchPageModule = /** @class */ (function () {
    function BranchPageModule() {
    }
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
    return BranchPageModule;
}());



/***/ }),

/***/ "./src/app/branch/branch.page.scss":
/*!*****************************************!*\
  !*** ./src/app/branch/branch.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapContainer {\n  position: relative;\n  height: 100%;\n  z-index: 1; }\n\n.overlay {\n  position: absolute;\n  right: 10px;\n  bottom: 150px;\n  z-index: 999; }\n\n.btn-container {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  height: 34px;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n.custom-btn {\n  border-radius: 2px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n.spin {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\nion-spinner {\n  width: 28px;\n  height: 28px;\n  stroke: #444;\n  fill: #222; }\n\n.disabled_search input[disabled] {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXN0ZXJ5aGFuL0RldmVsb3BtZW50L1ROQ19EcmFnb25fLUZyb250RW5kLS9zcmMvYXBwL2JyYW5jaC9icmFuY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksb0NBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0RBQW9ELEVBQUE7O0FBRXhEO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9EQUFvRCxFQUFBOztBQUd4RDtFQUNJLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTs7QUFFbkM7RUFDRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBRWI7RUFFTyxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icmFuY2gvYnJhbmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXBDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbn1cbi5vdmVybGF5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBib3R0b206IDE1MHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbi5idG4tY29udGFpbmVye1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSg1MSwgMTgxLCAyMjksIDAuNCk7XG59XG4uY3VzdG9tLWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcbn1cblxuLnNwaW57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiB9XG4gaW9uLXNwaW5uZXIge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBzdHJva2U6ICM0NDQ7XG4gICAgZmlsbDogIzIyMjtcbiB9XG4gLmRpc2FibGVkX3NlYXJjaHtcbiAgICBpbnB1dFtkaXNhYmxlZF0ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branches_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./branches-list.service */ "./src/app/branch/branches-list.service.ts");








var BranchPage = /** @class */ (function () {
    function BranchPage(route, geolocation, alertController, navCtrl, pickerCtrl, router, branchesList) {
        var _this = this;
        this.route = route;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.pickerCtrl = pickerCtrl;
        this.router = router;
        this.branchesList = branchesList;
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
        route.queryParams.subscribe(function (val) {
            _this.brand = val.brandName;
            branchesList.setBrandName(_this.brand);
            _this.id = val.id;
            _this.branch = val.selectedBranch;
            _this.initializeMap();
            _this.getBranches(false);
            if (_this.id == 3) {
                _this.onMarkerClick(_this.branch);
            }
        });
    }
    BranchPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    BranchPage.prototype.getBranches = function (filtered) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserLocation()];
                    case 1:
                        ref = _a.sent();
                        this.branchesList.getRawBranches()
                            .subscribe(function (branches) {
                            _this.branch_list = branches;
                            _this.branch_list.forEach(function (branch) {
                                _this.branchesCoords = Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"])(branch.coordinates, {
                                    icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["icon"])({
                                        iconSize: [30, 46],
                                        iconAnchor: [17, 46],
                                        iconUrl: '../assets/img/tnc_map_marker.png',
                                        shadowUrl: 'assets/marker-shadow.png',
                                        popupAnchor: [0, -41]
                                    })
                                }).on('click', _this.onMarkerClick.bind(_this, branch))
                                    .bindPopup('<h4>' + branch.branch_name + '</h4>');
                                //check distance from user
                                var distance = _this.branchesCoords.getLatLng().distanceTo(ref);
                                branch.distance = distance;
                                _this.branchesList.setBranches(_this.branch_list);
                                if (distance < 5000) {
                                    _this.branchesMarkersLessFiveKM.push(_this.branchesCoords);
                                }
                                _this.branchesMarkers.push(_this.branchesCoords);
                                if (filtered) {
                                    _this.branches = _this.branchesMarkersLessFiveKM;
                                }
                                else {
                                    _this.branches = _this.branchesMarkers;
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchPage.prototype.getUserLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resp, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        resp = _a.sent();
                        this.coords = [resp.coords.latitude, resp.coords.longitude];
                        return [2 /*return*/, this.coords];
                    case 2:
                        error_1 = _a.sent();
                        console.log('Error getting location', error_1);
                        this.presentAlert({
                            subHeader: 'Access to geolocation was blocked',
                            message: 'Please allow location detection to use feature'
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BranchPage.prototype.initializeMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coords;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserLocation()];
                    case 1:
                        coords = _a.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    BranchPage.prototype.onMapReady = function (map) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    map.invalidateSize();
                }, 0);
                this.map = map;
                return [2 /*return*/];
            });
        });
    };
    ;
    BranchPage.prototype.meterToKM = function (dist) {
        dist = dist / 1000;
        return Math.round(dist * 100 + Number.EPSILON) / 100;
    };
    ;
    BranchPage.prototype.onMarkerClick = function (branch, marker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var branchPopUp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.map.setView(branch.coordinates, 18)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.alertController.create({
                                header: branch.branch_name,
                                subHeader: branch.address,
                                message: "\n        <div>\n          <p>\n            <a href=\"" + branch.facebook_link + "\">" +
                                    branch.facebook_link +
                                    "</a>\n          </p>\n          <hr>\n          <p>\n            <span>Branch Distance: </span>" + this.meterToKM(branch.distance) + " km\n          </p>\n        </div>\n        ",
                                buttons: [
                                    {
                                        text: 'View Details',
                                        handler: function () {
                                            _this.navCtrl.navigateForward('/branchprofile', { queryParams: { id: branch.id } });
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary'
                                    }
                                ]
                            })];
                    case 2:
                        branchPopUp = _a.sent();
                        return [4 /*yield*/, branchPopUp.present()];
                    case 3:
                        _a.sent();
                        branchPopUp.onDidDismiss().then(function (data) { });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchPage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: message.subHeader,
                            message: message.message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        alert.onDidDismiss().then(function (data) {
                            _this.navCtrl.navigateRoot('/choosecomp');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchPage.prototype.showBasicPicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Done'
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
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var col;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn('filter')];
                                    case 1:
                                        col = _a.sent();
                                        this.filter = col.options[col.selectedIndex].text;
                                        if (col.options[col.selectedIndex].value == 'all') {
                                            this.getBranches(false);
                                        }
                                        else {
                                            this.getBranches(true);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchPage.prototype.showList = function () {
        this.navCtrl.navigateForward('/branch-list');
    };
    BranchPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _branches_list_service__WEBPACK_IMPORTED_MODULE_7__["BranchesListService"] }
    ]; };
    BranchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! raw-loader!./branch.page.html */ "./node_modules/raw-loader/index.js!./src/app/branch/branch.page.html"),
            styles: [__webpack_require__(/*! ./branch.page.scss */ "./src/app/branch/branch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PickerController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _branches_list_service__WEBPACK_IMPORTED_MODULE_7__["BranchesListService"]])
    ], BranchPage);
    return BranchPage;
}());



/***/ })

}]);
//# sourceMappingURL=branch-branch-module-es5.js.map