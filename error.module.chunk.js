webpackJsonp(["error.module"],{

/***/ "../../../../../src/app/error/error-init/error-init.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo_sec {\r\n    min-width: 100px !important;\r\n    max-width: 120px !important;\r\n    text-align: right;\r\n}\r\n.header_title{\r\n    margin-top: -10px;\r\n    font-size: 19px;\r\n    color: #ff5a11;\r\n    padding-left: 4px;\r\n    font-weight: bold;\r\n}\r\n.header_subtitle{\r\n    margin-top: -13px;\r\n    margin-left: 8px;\r\n    font-size: 12px;\r\n    color: #363535;\r\n    font-weight: 100;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error-init/error-init.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n        <div class=\"logo_sec\">\r\n            <img class=\"header-logo1\" alt=\"header-logo\" src=\"{{client_profile? client_profile.logo: 'assets/images/pl_logo.png'}}\">\r\n        </div>\r\n        <div class=\"header_title\">DOC<div class=\"header_subtitle\">{{client_profile? client_profile.version: ''}}</div>\r\n    </div>\r\n</mat-toolbar>\r\n    \r\n<mat-drawer-container>\r\n    <div>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/error/error-init/error-init.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorInitComponent = /** @class */ (function () {
    function ErrorInitComponent() {
    }
    ErrorInitComponent.prototype.ngOnInit = function () {
    };
    ErrorInitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-init',
            template: __webpack_require__("../../../../../src/app/error/error-init/error-init.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/error-init/error-init.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorInitComponent);
    return ErrorInitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_404_page_404_component__ = __webpack_require__("../../../../../src/app/error/page-404/page-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_401_page_401_component__ = __webpack_require__("../../../../../src/app/error/page-401/page-401.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_init_error_init_component__ = __webpack_require__("../../../../../src/app/error/error-init/error-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error_routes__ = __webpack_require__("../../../../../src/app/error/error.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__error_routes__["a" /* routeRoot */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__page_401_page_401_component__["a" /* Page401Component */], __WEBPACK_IMPORTED_MODULE_2__page_404_page_404_component__["a" /* Page404Component */], __WEBPACK_IMPORTED_MODULE_4__error_init_error_init_component__["a" /* ErrorInitComponent */]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "../../../../../src/app/error/error.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_init_error_init_component__ = __webpack_require__("../../../../../src/app/error/error-init/error-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_401_page_401_component__ = __webpack_require__("../../../../../src/app/error/page-401/page-401.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_404_page_404_component__ = __webpack_require__("../../../../../src/app/error/page-404/page-404.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__error_init_error_init_component__["a" /* ErrorInitComponent */],
        children: [
            { path: '', redirectTo: '404', pathMatch: 'full' },
            { path: '401', component: __WEBPACK_IMPORTED_MODULE_2__page_401_page_401_component__["a" /* Page401Component */] },
            { path: '404', component: __WEBPACK_IMPORTED_MODULE_3__page_404_page_404_component__["a" /* Page404Component */] }
        ]
    }
];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/error/page-401/page-401.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/page-401/page-401.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>401 - Unauthorized access</mat-card-title>\r\n    <div>\r\n        You might have logged out. Please click <a href=\"/\">here</a> to login.\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/error/page-401/page-401.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page401Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page401Component = /** @class */ (function () {
    function Page401Component() {
    }
    Page401Component.prototype.ngOnInit = function () {
    };
    Page401Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-401',
            template: __webpack_require__("../../../../../src/app/error/page-401/page-401.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/page-401/page-401.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page401Component);
    return Page401Component;
}());



/***/ }),

/***/ "../../../../../src/app/error/page-404/page-404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/page-404/page-404.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>404 - Page Not Found</mat-card-title>\r\n    <div>\r\n        The page you are looking for is not found!\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/error/page-404/page-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-404',
            template: __webpack_require__("../../../../../src/app/error/page-404/page-404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error/page-404/page-404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ })

});
//# sourceMappingURL=error.module.chunk.js.map