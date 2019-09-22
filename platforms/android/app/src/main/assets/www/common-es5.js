(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-353a032e.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-4e92c885.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-c90aaa66.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/chunk-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./src/app/loginExtras/user.service.ts":
/*!*********************************************!*\
  !*** ./src/app/loginExtras/user.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8100';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/users/" + id);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/wordpress.service.ts":
/*!**************************************!*\
  !*** ./src/app/wordpress.service.ts ***!
  \**************************************/
/*! exports provided: WordpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordpressService", function() { return WordpressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WordpressService = /** @class */ (function () {
    function WordpressService(http) {
        this.http = http;
        this.url = 'https://tncesports.com/wp-json/wp/v2/';
        this.totalPosts = null;
    }
    WordpressService.prototype.getPosts = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        var options = {
            observe: "response",
            params: {
                per_page: '5',
                page: '' + page
            }
        };
        return this.http.get(this.url + "posts?_embed", options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            _this.pages = resp['headers'].get('x-wp-totalpages');
            _this.totalPosts = resp['headers'].get('x-wp-total');
            var data = resp['body'];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var post = data_1[_i];
                post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
            }
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log('Empty pipe')); }));
    };
    WordpressService.prototype.getPostContent = function (id) {
        return this.http.get(this.url + "posts/" + id + "?_embed").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (post) {
            post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
            return post;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log('Empty pipe')); }));
    };
    WordpressService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WordpressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WordpressService);
    return WordpressService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map