webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"common",
		"admin.module"
	],
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"common",
		"auth.module"
	],
	"./configuration/configuration.module": [
		"../../../../../src/app/admin/configuration/configuration.module.ts",
		"common",
		"configuration.module"
	],
	"./error/error.module": [
		"../../../../../src/app/error/error.module.ts",
		"common",
		"error.module"
	],
	"./financial/financial.module": [
		"../../../../../src/app/main/financial/financial.module.ts",
		"common",
		"financial.module"
	],
	"./main/main.module": [
		"../../../../../src/app/main/main.module.ts",
		"common",
		"main.module"
	],
	"./operational/operational.module": [
		"../../../../../src/app/main/operational/operational.module.ts",
		"common",
		"operational.module"
	],
	"./processes/processes.module": [
		"../../../../../src/app/main/processes/processes.module.ts",
		"common",
		"processes.module"
	],
	"./reports/reports.module": [
		"../../../../../src/app/main/reports/reports.module.ts",
		"common",
		"reports.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_auth) {
        var _this = this;
        this._auth = _auth;
        this._auth.getclientDetails().subscribe(function (data) {
            // console.log(data);
            sessionStorage.setItem('clientDetails', JSON.stringify(data));
            _this._auth.setAppFavicon('appIcon', data.browserTitle, data.favIcon);
        }, function (error) {
            console.log(error);
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_shared_shared_services_auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_keycloak_angular__ = __webpack_require__("../../../../keycloak-angular/fesm5/keycloak-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_app_init__ = __webpack_require__("../../../../../src/app/utils/app-init.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_services_shared_services_module__ = __webpack_require__("../../../../../src/app/shared/shared-services/shared-services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_shared_shared_modules_props_provider_injector_service__ = __webpack_require__("../../../../../src/app/shared/shared-modules/props-provider/injector.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_quill__ = __webpack_require__("../../../../ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_config__ = __webpack_require__("../../../../../src/environments/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_directives_shared_directive_module__ = __webpack_require__("../../../../../src/app/shared/shared-directives/shared-directive.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_sendemail_page_sendemail_component__ = __webpack_require__("../../../../../src/app/page-sendemail/page-sendemail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_shared_modules_custom_material_custom_material_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/custom-material/custom-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Page404Component } from './page-404/page-404.component';









// import {NgxEditorModule} from 'ngx-editor';

// import {NgxEditorModule} from 'ngx-editor';





var providers = [];
if (!__WEBPACK_IMPORTED_MODULE_15__environments_config__["a" /* SERVE_THTOUGH_FLASK */]) {
    providers = [{
            provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"],
            useFactory: __WEBPACK_IMPORTED_MODULE_6__utils_app_init__["a" /* initializer */],
            multi: true,
            deps: [__WEBPACK_IMPORTED_MODULE_4_keycloak_angular__["b" /* KeycloakService */]]
        }];
}
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
        __WEBPACK_IMPORTED_MODULE_10__app_shared_shared_modules_props_provider_injector_service__["a" /* ServiceInjector */].injector = this.injector;
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__page_sendemail_page_sendemail_component__["a" /* PageSendemailComponent */]
                // Page404Component
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_20__shared_shared_modules_custom_material_custom_material_module__["a" /* CustomMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routeRoot */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_services_shared_services_module__["a" /* SharedServicesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12_ng2_nvd3__["NvD3Module"],
                __WEBPACK_IMPORTED_MODULE_11_ngx_quill__["a" /* QuillModule */],
                __WEBPACK_IMPORTED_MODULE_4_keycloak_angular__["a" /* KeycloakAngularModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_shared_directives_shared_directive_module__["a" /* SharedDirectivesModule */]
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: providers,
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_sendemail_page_sendemail_component__ = __webpack_require__("../../../../../src/app/page-sendemail/page-sendemail.component.ts");


// import { Page404Component } from './page-404/page-404.component';
var routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'app', loadChildren: './main/main.module#MainModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    // { path: '**', redirectTo: 'error' },
    { path: 'error', loadChildren: './error/error.module#ErrorModule' },
    { path: 'unauthorize', component: __WEBPACK_IMPORTED_MODULE_1__page_sendemail_page_sendemail_component__["a" /* PageSendemailComponent */] }
];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/page-sendemail/page-sendemail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".emailtext{\r\n    margin-top: 40px;\r\n}\r\n.logo_sec {\r\n    min-width: 100px !important;\r\n    max-width: 120px !important;\r\n    text-align: right;\r\n}\r\n.header_title{\r\n    margin-top: -10px;\r\n    font-size: 19px;\r\n    color: #ff5a11;\r\n    padding-left: 4px;\r\n    font-weight: bold;\r\n}\r\n.header_subtitle{\r\n    margin-top: -13px;\r\n    margin-left: 8px;\r\n    font-size: 12px;\r\n    color: #363535;\r\n    font-weight: 100;\r\n}\r\n.spacer{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n.profile-name{\r\n    line-height: 13px;\r\n    font-size: 13px;\r\n}\r\n.profile-designation{\r\n    line-height: 11px;\r\n    font-size: 11px;\r\n}\r\n.profile-img{\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 30px;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    -webkit-box-shadow: 0 0 1px 2px #e6e6e6;\r\n            box-shadow: 0 0 1px 2px #e6e6e6;\r\n}\r\n.profile-name-wrapper{\r\n    margin: 0 10px;\r\n    text-align: right;\r\n}\r\n.stop-circle_icon{\r\n    font-size: 14px !important;\r\n    padding-right: 5px ;\r\n  }\r\n.mat-toolbar-single-row {\r\n    height: 41px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-sendemail/page-sendemail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <div class=\"logo_sec\">\r\n      <img class=\"header-logo1\" src=\"{{client_profile? client_profile.logo: 'assets/images/pl_logo.png'}}\" alt=\"profile-logo\">\r\n  </div>\r\n  <div class=\"header_title\">DOC<div class=\"header_subtitle\">{{client_profile? client_profile.version: ''}}</div>\r\n</div>\r\n<span class=\"spacer\"></span>\r\n\r\n<div  class=\"profile flex full-height flex-justify-center flex-align-center pointer\"\r\n                [matMenuTriggerFor]=\"profileMenu\">\r\n                <div class=\"profile-name-wrapper \">\r\n                    <div class=\"profile-name\">{{firstname}} {{lastname}}</div>\r\n                    <div class=\"profile-designation\">{{email}}</div>\r\n                </div>\r\n                <div class=\"profile-img\" [ngStyle]=\"{'background-image': 'url(assets/images/bg-no-profile.png)'}\">\r\n                </div>\r\n                <div class=\"down-arrow full-height flex flex-align-center\">\r\n                    <mat-icon>keyboard_arrow_down</mat-icon>\r\n                </div>\r\n            </div>\r\n            <mat-menu class=\"pointer\" #profileMenu=\"matMenu\" overlapTrigger=\"false\">\r\n              <button mat-menu-item [routerLink]=\"['/admin/configuration']\" *ngIf=\"isSuperAdmin\">\r\n                <mat-icon>settings</mat-icon>\r\n                <span>switch to DOC Admin</span>\r\n            </button>\r\n                <button mat-menu-item (click)=\"logout()\">\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n                    <span>Logout</span>\r\n                </button>\r\n            </mat-menu>\r\n</mat-toolbar>\r\n<mat-drawer-container>\r\n  <div class=\"text-center emailtext\">\r\n    <h4>You are not associated to any Organizational Unit.</h4> <p>Please click on Send Email button to notify the administrator</p>\r\n  </div>\r\n  <div class=\"col-sm-12 text-center\">\r\n    <button *ngIf=\"!isbuttonactive\" [disabled]=\"isdisabled\"  type=\"button\" class=\"btn btn-primary\" (click)=\"sendemail()\">Send Email</button>\r\n\r\n    <button *ngIf=\"isbuttonactive\"  type=\"button\" class=\"btn btn-primary\">\r\n    <em class=\"fas fa-spinner stop-circle_icon\"></em>Sending...\r\n    </button>\r\n    \r\n  </div>\r\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/page-sendemail/page-sendemail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSendemailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_admin_admin_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageSendemailComponent = /** @class */ (function () {
    function PageSendemailComponent(_config, _admin, _router, toastr, _auth) {
        this._config = _config;
        this._admin = _admin;
        this._router = _router;
        this.toastr = toastr;
        this._auth = _auth;
        this.isSuperAdmin = false;
        this.isbuttonactive = false;
        this.isdisabled = false;
        this.isSuperAdmin = this._auth.isSuperAdmin;
    }
    PageSendemailComponent.prototype.ngOnInit = function () {
        var data = JSON.parse(localStorage.getItem("_u"));
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
    };
    PageSendemailComponent.prototype.logout = function () {
        var _this = this;
        // this._auth.logout().subscribe((data) => {
        //   this._router.navigate(['/auth/logout']);
        // });
        var userInfo = JSON.parse(localStorage.getItem("_u"));
        if (userInfo.client === "ciox") {
            this._auth.logout().subscribe(function (data) {
                _this._router.navigate(['/auth/logout']);
            });
        }
        else {
            window.location.assign(this._config.config.apiUrl + "/users/logout");
            localStorage.clear();
        }
    };
    PageSendemailComponent.prototype.sendemail = function () {
        var _this = this;
        var obj = { firstname: this.firstname, lastname: this.lastname, email: this.email };
        this.isbuttonactive = true;
        this._admin.sendEmail(obj).subscribe(function (data) {
            if (data.result.status === "success") {
                _this.toastr.info(data.result.message, 'Information!');
                _this.isbuttonactive = false;
                _this.isdisabled = true;
            }
            else {
                _this.toastr.error(data.result.message, 'Information!');
                _this.isbuttonactive = false;
                _this.isdisabled = false;
            }
        });
    };
    PageSendemailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-sendemail',
            template: __webpack_require__("../../../../../src/app/page-sendemail/page-sendemail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-sendemail/page-sendemail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_config_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_admin_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_auth_auth_service__["a" /* AuthService */]])
    ], PageSendemailComponent);
    return PageSendemailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-directives/shared-directive.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ScrollSpyDirective } from './scroll-spy.directive';
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            exports: [],
            declarations: []
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-modules/custom-material/custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressBarModule */]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-modules/props-provider/injector.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInjector; });
var ServiceInjector = /** @class */ (function () {
    function ServiceInjector() {
    }
    return ServiceInjector;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/admin/admin-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdminSecuredGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Handles all the authenticated and un-authenticated routes
 */
var AdminLoginGuardService = /** @class */ (function () {
    function AdminLoginGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    AdminLoginGuardService.prototype.canActivate = function (route, state) {
        if (!this.authService.isAdminAuthenticated()) {
            return true;
        }
        this.router.navigate(["/admin/configuration/processlist"]);
        return false;
    };
    AdminLoginGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminLoginGuardService);
    return AdminLoginGuardService;
}());

/**
 * Handles all the authenticated and un-authenticated routes
 */
var AdminSecuredGuardService = /** @class */ (function () {
    function AdminSecuredGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    AdminSecuredGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isAdminAuthenticated() || this.authService.isAdmin) {
            return true;
        }
        this.router.navigate(["/admin/login"]);
        return false;
    };
    AdminSecuredGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminSecuredGuardService);
    return AdminSecuredGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/admin/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* unused harmony export getProcessViewNames */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = /** @class */ (function () {
    function AdminService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.isSave = false;
    }
    AdminService.prototype.changePassword = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminChangePassword.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/password', data);
        }
    };
    AdminService.prototype.filterProcessRecords = function (data1) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminProcessRecords.json');
        }
        else {
            // return this._httpClient.get('assets/mock-data/adminProcessRecords.json');
            return this._httpClient.post(this._config.config.adminApiUrl + '/processes', data1);
        }
    };
    AdminService.prototype.updateUser = function (user) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/admin/users', user);
        }
    };
    AdminService.prototype.createUser = function (user) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/users', user);
        }
    };
    // public deleteUser(data: { username: string }) {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminDeleteUser.json');
    //   } else {
    //     return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/users/' + data.username);
    //   }
    // }
    AdminService.prototype.deleteRoleById = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminDeleteUser.json');
        }
        else {
            return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/roles/' + data.id);
        }
    };
    AdminService.prototype.getUserByUsername = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminUserByUserName.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/users/' + data.username);
        }
    };
    // public getUsersList(data: { start?: number, limit?: number }) {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminUsersList.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/users');
    //   }
    // }
    // public getDivisions() {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminDivisions.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/divisions');
    //   }
    // }
    // public getRoles() {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminRoles.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/roles');
    //   }
    // }
    AdminService.prototype.getRoleById = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminRoles.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/roles/' + data.id);
        }
    };
    AdminService.prototype.updateRole = function (user1) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/admin/roles', user1);
        }
    };
    AdminService.prototype.createRole = function (dataCreate) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateUser.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/roles', dataCreate);
        }
    };
    // public getBasicInfo() {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminGetBasicInfo.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/config');
    //   }
    // }
    AdminService.prototype.updateBasicInfo = function (data2) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminGetBasicInfo.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/config', data2);
        }
    };
    // public getProcessInfo() {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminGetProcesses.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/processNames');
    //   }
    // }
    AdminService.prototype.updateProcessInfo = function (updatedata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminGetProcessesInfo.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/processNames', updatedata);
        }
    };
    /*admin processList collection */
    AdminService.prototype.getProcessList = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminGetProcessesList.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/processes?module=subwaymap ');
            // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
        }
    };
    AdminService.prototype.getProcesslistselect = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/process_namesbyshow.json');
        }
        else {
            var queryParams = "?";
            queryParams += 'configure=1';
            //  return this._httpClient.get(this._config.config.adminApiUrl + '/processes')
            return this._httpClient.get(this._config.config.adminApiUrl + '/processes' + queryParams);
            // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
        }
    };
    AdminService.prototype.operationgetProcessList = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/process_names.json');
        }
        else {
            var queryParams = "?";
            queryParams += 'flat_child=1';
            //  return this._httpClient.get(this._config.config.adminApiUrl + '/processes')
            return this._httpClient.get(this._config.config.adminApiUrl + '/processes' + queryParams);
            // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/');
        }
    };
    AdminService.prototype.getLOBProcessList = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/lob_processes_names.json');
        }
        else {
            var queryParams = "?";
            queryParams += 'flat_child=1';
            return this._httpClient.get(this._config.config.adminApiUrl + '/lobs/processes');
        }
    };
    /* admin subway process and subprocess list  */
    // public getProcessListforSubway() {
    //   if (this._config.config.useMockData) {
    //     return this._httpClient.get('assets/mock-data/adminGetProcessesListforSubway.json');
    //   } else {
    //     return this._httpClient.get(this._config.config.adminApiUrl + '/admin/process_sub_processes/');
    //   }
    // }
    /*get processs from admin processList collection */
    AdminService.prototype.getProcessById = function (processname) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminGetProcessesById.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/read/master_configuration/name/' + processname);
            // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + processId);
        }
    };
    AdminService.prototype.GetsmtpServer = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/email_config');
        }
    };
    AdminService.prototype.testSmtp = function (smtpdata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/email_config/test', smtpdata);
        }
    };
    AdminService.prototype.putsmtpServer = function (smtpId, smtpData) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/admin/email_config/' + smtpId, smtpData);
        }
    };
    AdminService.prototype.postsmtpServer = function (smtpdata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/email_config', smtpdata);
        }
    };
    // get userslist
    AdminService.prototype.getUmUsersList = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/umUsers.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/um/users');
        }
    };
    AdminService.prototype.updateLobs = function (data) {
        console.log(data);
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs/assign', data);
        }
    };
    AdminService.prototype.getLobsTemplate = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/lobtemplate.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/lobs?module=settings');
        }
    };
    AdminService.prototype.updateLobTemplate = function (lob_id, templatedata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs/' + lob_id, templatedata);
        }
    };
    AdminService.prototype.postLobTemplate = function (templatedata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/lobtemplate.json');
        }
        else {
            // url: baseurl/api/um/create_lob
            return this._httpClient.post(this._config.config.adminApiUrl + '/um/lobs', templatedata);
        }
    };
    AdminService.prototype.deleteLobById = function (lob_id) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            // url: baseurl/api/um/delete_lob/756cbce7-6af7-4631-8382-6319df9cb6f2
            return this._httpClient.delete(this._config.config.adminApiUrl + '/um/lobs/' + lob_id);
        }
    };
    AdminService.prototype.getEmailTemplate = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/email_templates/');
        }
    };
    AdminService.prototype.updateEmailTemplate = function (template_id, templatedata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/email_templates/' + template_id, templatedata);
        }
    };
    AdminService.prototype.PostEmailTemplate = function (templatedata) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/email_templates/', templatedata);
        }
    };
    AdminService.prototype.deleteTemplateById = function (template_id) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/emailtemplateget.json');
        }
        else {
            return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/email_templates/' + template_id);
        }
    };
    /*update new process*/
    AdminService.prototype.updateProcess = function (process) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/update/master_configuration', process);
            // return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + process._id, process);
        }
    };
    /*add new subprocess*/
    AdminService.prototype.createsubProcess = function (process) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/insert/master_configuration', process);
            // return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/', process);
        }
    };
    /*delete process*/
    AdminService.prototype.deleteProcessById = function (processId) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminCreateUpdateProcess.json');
        }
        else {
            return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/processes_and_subprocesses/' + processId);
        }
    };
    /*set custom financial weekly count  */
    AdminService.prototype.setCustomvalueforWeeklyreport = function (customWeek) {
        delete customWeek._id;
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.post(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/', customWeek);
        }
    };
    //update //
    AdminService.prototype.updateCustomvalueforWeeklyreport = function (customWeek) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.put(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/' + customWeek._id, customWeek);
        }
    };
    //delete //
    AdminService.prototype.deleteCustomvalueforWeeklyreport = function (id) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.delete(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/' + id);
        }
    };
    AdminService.prototype.getweeklyprocessCount = function (request) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/weekly_pname_count/' + request.pname + "/" + request.week_num + "/" + request.year);
        }
    };
    // public getgeneralMock() {
    //   return this._httpClient.get('assets/mock-data/generalMockData.json');
    // }
    AdminService.prototype.getCustomValuesofWeeklyReport = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/operation/custom_weekly_fin/');
        }
    };
    AdminService.prototype.getDrillDowndataforWeeklyReport = function (processName, week, year, filterBy) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/wrdrilldown.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/weekly_count/' + processName + '/' + week + '/' + year + '/' + filterBy);
        }
    };
    AdminService.prototype.getDrillDowndataforhealthReport = function (processName, week, year, filterBy) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/wrdrilldown.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/admin/health_check_weekly_count/' + processName + '/' + week + '/' + year);
        }
    };
    AdminService.prototype.getProcessScheduleData = function (host, pname) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/schedule.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/process/schedules/' + host + '?operation=crud&process_name=' + pname);
        }
    };
    AdminService.prototype.deleteProcessScheduleddata = function (host, schedule_id) {
        return this._httpClient.delete(this._config.config.adminApiUrl + '/process/schedules/' + host + '?operation=crud&schedule_id=' + schedule_id);
    };
    AdminService.prototype.updateProcessScheduleddata = function (host, schedule_id, data) {
        return this._httpClient.put(this._config.config.adminApiUrl + '/process/schedules/' + host + '?operation=crud&schedule_id=' + schedule_id, data);
    };
    AdminService.prototype.saveProcessScheduleddata = function (host, data) {
        return this._httpClient.post(this._config.config.adminApiUrl + '/process/schedules/' + host + '?operation=crud', data);
    };
    AdminService.prototype.getProcessAssetsData = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/assets.json');
        }
        else {
            // return this._httpClient.get(this._config.config.adminApiUrl + '/admin/health_check_weekly_count/'+processName+'/'+week+'/'+year);
        }
    };
    AdminService.prototype.getProcessStakeholdersData = function (id) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/stakeholders.json');
        }
        else {
            return this._httpClient.get(this._config.config.adminApiUrl + '/read/specific/master_configuration/' + id + '/stakeholder_information');
        }
    };
    AdminService.prototype.saveStakeholderData = function (data) {
        return this._httpClient.put(this._config.config.adminApiUrl + '/update/specific/master_configuration', data);
    };
    AdminService.prototype.sendEmail = function (data) {
        return this._httpClient.post(this._config.config.adminApiUrl + '/email/send', data);
    };
    AdminService.prototype.deleteUser = function (data) {
        return this._httpClient.delete(this._config.config.adminApiUrl + '/users/delete/um_user/' + data);
    };
    AdminService.prototype.updateSchedule = function (data, hosted) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/updateSchedule.json');
        }
        else {
            return this._httpClient.post(this._config.config.apiUrl + '/process/schedules/' + hosted + '?operation=toggle', data);
        }
    };
    AdminService.prototype.getprocessCodes = function () {
        return {
            "RS": 201,
            "RE": 210,
            "RERR": 400,
            "RPRE": 301,
            "RPRO": 302,
            "RPOS": 303,
            "PSTART": 102,
            "PEND": 110,
            "PERR": 500
        };
    };
    /**
     * Sets Label text  for the basic info items as API does not sends it.
     * @param data BasicInfo details which API sends.
     */
    AdminService.formatBasicInfo = function (data) {
        for (var i = 0; i < data.length; i++) {
            switch (data[i].key) {
                case 'es_host':
                    data[i].label = 'Elasticseach URL';
                    break;
                case 'orch_host':
                    data[i].label = 'Orchestrator URL';
                    break;
                case 'orch_user':
                    data[i].label = 'Orchestrator User Name';
                    break;
                case 'orch_pwd':
                    data[i].label = 'Orchestrator Password';
                    break;
            }
        }
        return data;
    };
    Object.defineProperty(AdminService, "roleTypes", {
        get: function () {
            return [__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["d" /* ROLE_TYPE_SUPER_ADMIN */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["b" /* ROLE_TYPE_ADMIN */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["c" /* ROLE_TYPE_OPERATOR */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["e" /* ROLE_TYPE_SUPPORT */]];
        },
        enumerable: true,
        configurable: true
    });
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_config_service__["a" /* ConfigService */]])
    ], AdminService);
    return AdminService;
}());

var ProcessViewNames = {
    "_Id": "Process Id",
    "NAME": "Process Name",
    "RS": "Record Start Code",
    "RE": "Record End Code",
    "RERR": "Record Error Code",
    "RPRE": "Record Pre Process Code",
    "RPRO": "Record Process Code",
    "RPOS": "Record Post Process Code",
    "THR": "Threshold Value",
    "HTHR": "Hight Threshold Value"
};
var getProcessViewNames = /** @class */ (function () {
    function getProcessViewNames() {
    }
    return getProcessViewNames;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/auth-guard/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLoginGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthSecuredGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Handles all the authenticated and un-authenticated routes
 */
var AuthLoginGuardService = /** @class */ (function () {
    function AuthLoginGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    AuthLoginGuardService.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(["/app/operational"]);
        return false;
    };
    AuthLoginGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthLoginGuardService);
    return AuthLoginGuardService;
}());

/**
 * Handles all the authenticated and un-authenticated routes
 */
var AuthSecuredGuardService = /** @class */ (function () {
    function AuthSecuredGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * Gets called when `canActivate` is called from any spacified route.
     * @param route Router Service
     * @param state Router state snapshot
     */
    AuthSecuredGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(["/auth/login"]);
        return false;
    };
    AuthSecuredGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthSecuredGuardService);
    return AuthSecuredGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ROLE_TYPE_SUPER_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROLE_TYPE_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROLE_TYPE_OPERATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ROLE_TYPE_SUPPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ROLE_TYPE_SUPER_ADMIN = 'SG-ROCSA';
var ROLE_TYPE_ADMIN = 'SG-ROCBO';
var ROLE_TYPE_OPERATOR = 'SG-ROCPO';
var ROLE_TYPE_SUPPORT = 'SG-ROCTS';
var AuthService = /** @class */ (function () {
    function AuthService(_httpClient, _configService) {
        this._httpClient = _httpClient;
        this._configService = _configService;
        this.authUser = AuthService_1.getLocalStorageUserInfo();
    }
    AuthService_1 = AuthService;
    AuthService.getLocalStorageUserInfo = function () {
        var tmpLocalStorageData = window.localStorage.getItem('_u');
        if (!tmpLocalStorageData) {
            return null;
        }
        var aU = null;
        if (tmpLocalStorageData) {
            try {
                aU = JSON.parse(tmpLocalStorageData);
            }
            catch (e) {
                aU = null;
            }
        }
        return aU;
    };
    AuthService.prototype.isAuthenticated = function () {
        if (!this.authUser) {
            return false;
        }
        return true;
    };
    AuthService.prototype.isAdminAuthenticated = function () {
        return this.isSuperAdmin;
        //return true; 
    };
    Object.defineProperty(AuthService.prototype, "authUser", {
        get: function () {
            return this._authUser;
        },
        set: function (authUser) {
            this._authUser = { "email": "Raghuram.Pulla@cioxhealth.com", "firstname": "Raghuram", "groups": ["SG-ROCTS", "SG-ROCSA"], "lastname": "Pulla", "client": "" };
            // this._authUser= authUser;
            window.localStorage.setItem('_u', JSON.stringify(this._authUser));
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        return this._httpClient.get(this._configService.config.apiUrl + '/userInfo').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            _this.authUser = data;
            console.log('from getUserInfo()', data);
            return _this.authUser;
        }));
    };
    AuthService.prototype.login = function (data) {
        // if (data.username != 'admin' || data.password != 'ciox@123') {
        //   return Observable.throw("Username or password is wrong!");
        // }
        var _this = this;
        if (this._configService.config.useMockData) {
            return this._httpClient.get('assets/mock-data/login.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = data;
                return _this.authUser;
            }));
        }
        else {
            return this._httpClient.post(this._configService.config.apiUrl + '/users/login', data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = data;
                return _this.authUser;
            }));
        }
    };
    // public logout(): Observable<any> {
    //   let username = this.authUser.username;
    //   return this._httpClient.post(this._configService.config.adminApiUrl + '/users/logout',
    //     { username: username }
    //   ).pipe(map((data: any) => {
    //     this.authUser = null;
    //     return true;
    //   }));
    AuthService.prototype.logout = function () {
        // let username = this.authUser.username;
        var _this = this;
        return this._httpClient.get(this._configService.config.adminApiUrl + '/users/logout').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            _this.authUser = null;
            return true;
        }));
        // this.authUser = null;    
        // return Observable.of({});
    };
    AuthService.prototype.adminLogin = function (data) {
        var _this = this;
        if (this._configService.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminLogin.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = data;
                return _this.authUser;
            }));
        }
        else {
            return this._httpClient.post(this._configService.config.adminApiUrl + '/admin/login', data).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = data;
                return _this.authUser;
            }));
        }
    };
    AuthService.prototype.adminLogout = function () {
        var _this = this;
        if (this._configService.config.useMockData) {
            return this._httpClient.get('assets/mock-data/adminLogout.json').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = null;
                return data;
            }));
        }
        else {
            return this._httpClient.post(this._configService.config.adminApiUrl + '/admin/logout', { username: this.authUser.username }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
                _this.authUser = null;
                return true;
            }));
        }
    };
    AuthService.prototype.isValidRoleCheck = function () {
        if (!this.authUser) {
            return false;
        }
        if (!this.authUser.groups) {
            return false;
        }
        return true;
    };
    Object.defineProperty(AuthService.prototype, "isSuperAdmin", {
        get: function () {
            console.log('user', this.authUser);
            if (!this.isValidRoleCheck()) {
                console.log('isValidRoleCheck FALSE ');
                return false;
            }
            if (this.authUser.groups.indexOf(ROLE_TYPE_SUPER_ADMIN) != -1) {
                console.log('GROUP - ROLE SUPERADMIN TRUE');
                return true;
            }
            console.log('GROUP - ROLE SUPERADMIN FALSE');
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAdmin", {
        get: function () {
            console.log('user', this.authUser);
            if (!this.isValidRoleCheck()) {
                console.log('isValidRoleCheck FALSE');
                return false;
            }
            if (this.authUser.groups.indexOf(ROLE_TYPE_ADMIN) != -1) {
                console.log('GROUP - ROLE ADMIN TRUE');
                return true;
            }
            console.log('ADMIN false');
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isOperator", {
        get: function () {
            this.roleCheck();
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isSupport", {
        get: function () {
            this.roleCheck();
            return false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.roleCheck = function () {
        if (!this.isValidRoleCheck()) {
            return false;
        }
        if (this.authUser.groups.indexOf(ROLE_TYPE_OPERATOR) != -1) {
            return true;
        }
    };
    AuthService.prototype.getclientDetails = function () {
        if (this._configService.config.useMockData) {
            return this._httpClient.get('assets/mock-data/clientProfile.json');
        }
        else {
            return this._httpClient.get(this._configService.config.adminApiUrl + '/client/profile');
        }
    };
    AuthService.prototype.setAppFavicon = function (id, browser_title, icon) {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#' + id).attr('href', icon);
        document.title = browser_title ? browser_title : 'ROC';
    };
    AuthService.prototype.logoutPost = function () {
        if (this._configService.config.useMockData) {
            return this._httpClient.get('assets/mock-data/clientProfile.json');
        }
        else {
            return this._httpClient.post('/saml/logout?GLO=true', {});
        }
    };
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/bpmn/bpmn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpmnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BpmnService = /** @class */ (function () {
    function BpmnService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
    }
    BpmnService.prototype.loadProcessMap = function () {
        return this._httpClient.get('/assets/bpmn/subway_map_v_0_3.bpmn', {
            headers: { observe: 'response' }, responseType: 'text'
        });
    };
    ///* get bpmn xml file from db */
    BpmnService.prototype.loadProcessMapxml = function () {
        if (this.settingsPage === true) {
            if (this._config.config.useMockData) {
                return this._httpClient.get('/assets/mock-data/subwaymapold.json');
            }
            else {
                var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpParams */]().set('module', 'settings');
                return this._httpClient.get(this._config.config.apiUrl + '/admin/operation/subway_map_persist/', { params: params });
            }
        }
        else {
            if (this._config.config.useMockData) {
                return this._httpClient.get('/assets/mock-data/subwaymap.json');
            }
            else {
                return this._httpClient.get(this._config.config.apiUrl + '/admin/operation/subway_map_persist/');
            }
        }
    };
    BpmnService.prototype.updateProcessMapxml = function (bpmnId, bpmnxml) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('/assets/mock-data/subwaymap.json');
        }
        else {
            return this._httpClient.put(this._config.config.apiUrl + '/admin/operation/subway_map_persist/' + bpmnId, bpmnxml);
        }
    };
    BpmnService.prototype.getProcessesCurrentState = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/processesCurrentStatus.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/admin/process_metrics');
        }
    };
    BpmnService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_config_service__["a" /* ConfigService */]])
    ], BpmnService);
    return BpmnService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/config/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(_httpClient) {
        this._httpClient = _httpClient;
    }
    Object.defineProperty(ConfigService.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.initializeApp = function () {
        var _this = this;
        var promise = this._httpClient.get('assets/config.json')
            .toPromise()
            .then(function (configData) {
            _this.config = configData;
            return configData;
        });
        return promise;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/financial/financial.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinancialService = /** @class */ (function () {
    function FinancialService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.leftScreenHeight = screen.height + "px";
    }
    /*get financial api records */
    FinancialService.prototype.loadFinancaildata = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financialgetdata.json');
        }
        else {
            //return this._httpClient.get('assets/mock-data/financialgetdata.json');
            return this._httpClient.post(this._config.config.apiUrl + '/financial', { agg_type: data.aggType, from: data.tmStart, to: data.tmEnd, lob: data.lob });
        }
    };
    FinancialService.prototype.loadLobsdata = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financialgetdata.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/lobs');
        }
    };
    /*  report data*/
    FinancialService.prototype.loadReportData = function (filterBy, year, dimentions) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/reportsdatareports.json');
        }
        else {
            var queryParams = "?";
            queryParams += 'dimension=' + dimentions;
            queryParams += '&year=' + year;
            return this._httpClient.get(this._config.config.apiUrl + '/weekly-files-processed/' + filterBy + queryParams);
        }
    };
    FinancialService.prototype.loadHealthData = function (filterBy) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/reportsdata.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/health-check-weekly');
        }
    };
    /*get drilldownl data based on processName */
    FinancialService.prototype.getdrillDownData = function (processName) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/financial_drill_down.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/financial_drill_down/' + processName);
        }
    };
    FinancialService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_config_service__["a" /* ConfigService */]])
    ], FinancialService);
    return FinancialService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/interceptor/app.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var APPInterceptor = /** @class */ (function () {
    function APPInterceptor(inj) {
        this.inj = inj;
    }
    APPInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["h" /* HttpResponse */]) {
                if (event.body && event.body.result && !event.body.total) {
                    return event.clone({
                        body: event.body.result
                    });
                }
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this._router = _this.inj.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]);
                _this._authService = _this.inj.get(__WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]);
                if (err.status === 401) {
                    window.localStorage.clear();
                    _this._authService.authUser = null;
                    _this._router.navigate(["/auth/logout"]);
                    // redirect to the login route
                    // or show a modal
                }
            }
        });
    };
    APPInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], APPInterceptor);
    return APPInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/shared-services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServicesModule; });
/* unused harmony export configInitFactory */
/* unused harmony export MyHttpInterceptor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_items_work_items_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/work-items/work-items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth-guard/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_guard_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bpmn_bpmn_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/bpmn/bpmn.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__financial_financial_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/financial/financial.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__interceptor_app_interceptor__ = __webpack_require__("../../../../../src/app/shared/shared-services/interceptor/app.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/catch';
var SharedServicesModule = /** @class */ (function () {
    function SharedServicesModule() {
    }
    SharedServicesModule_1 = SharedServicesModule;
    SharedServicesModule.forRoot = function () {
        return {
            ngModule: SharedServicesModule_1,
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */],
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]
                    ]
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_4__work_items_work_items_service__["a" /* WorkItemsService */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4__work_items_work_items_service__["a" /* WorkItemsService */],
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
                        __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */]
                    ]
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["APP_INITIALIZER"],
                    useFactory: configInitFactory,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */]
                    ],
                    multi: true
                }, {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__interceptor_app_interceptor__["a" /* APPInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_service__["a" /* AdminService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_guard_auth_guard_service__["a" /* AuthLoginGuardService */],
                __WEBPACK_IMPORTED_MODULE_7__auth_guard_auth_guard_service__["b" /* AuthSecuredGuardService */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_guard_service__["a" /* AdminLoginGuardService */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_guard_service__["b" /* AdminSecuredGuardService */],
                __WEBPACK_IMPORTED_MODULE_10__bpmn_bpmn_service__["a" /* BpmnService */],
                __WEBPACK_IMPORTED_MODULE_11__financial_financial_service__["a" /* FinancialService */]
            ]
        };
    };
    SharedServicesModule = SharedServicesModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: []
        })
    ], SharedServicesModule);
    return SharedServicesModule;
    var SharedServicesModule_1;
}());

function configInitFactory(_configService) {
    return function () { return _configService.initializeApp(); };
}
var MyHttpInterceptor = /** @class */ (function () {
    function MyHttpInterceptor() {
    }
    MyHttpInterceptor.prototype.intercept = function (req, next) {
        var headers = null;
        // let authUser: SAMLUser = AuthService.getLocalStorageUserInfo();
        // if (authUser && authUser.session_user) {
        //   headers = { headers: req.headers.set("session_user", authUser.session_user) };
        // }
        var authReq;
        if (headers) {
            authReq = req.clone(headers);
        }
        else {
            authReq = req.clone();
        }
        //send the newly created request
        return next.handle(authReq)
            .map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["h" /* HttpResponse */]) {
                // if (event.body && event.body.status && event.body.status == 'FAIL') {
                //   if (event.body.message == 'Invalid Session !') {
                //     setTimeout(() => {
                //       window.localStorage.clear();
                //       window.location.reload(true);
                //     }, 1000);
                //     throw Observable.throw(
                //       event.body.message
                //     );
                //   }
                //   throw Observable.throw(
                //     event.body.message || 'Something went wrong. Please try again later!'
                //   );
                // }
                if (event.body && event.body.result && !event.body.total) {
                    return event.clone({
                        body: event.body.result
                    });
                }
            }
            return event;
        })
            .catch(function (error, caught) {
            // handle the errors 
            switch (error.status) {
                case 401:
                case 403:
                    //this._router.navigate(['/auth/logout']);
                    setTimeout(function () {
                        window.localStorage.clear();
                        window.location.href = "#/auth/logout";
                    }, 1000);
                    break;
            }
            return __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    MyHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MyHttpInterceptor);
    return MyHttpInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared-services/work-items/work-items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/config/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Work-items
 */
var WorkItemsService = /** @class */ (function () {
    function WorkItemsService(_httpClient, _config) {
        this._httpClient = _httpClient;
        this._config = _config;
        this.activeProcess = '';
        this.isViewRecordDetails = false;
        this.activePage = '';
        this.subwayMapSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.workItemDetails = {};
        this.workItemDetailsFilter = 'All';
        this.subwayMapData = {};
        this.hasChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.hasChangedObserver = this.hasChanged.asObservable();
        this.queryParam = '';
        this.processesListSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.processesListObserver = this.processesListSubject.asObservable();
        this._workItems = [];
        this.SubwayMapActive$ = this.subwayMapSubject.asObservable();
    }
    Object.defineProperty(WorkItemsService.prototype, "workItems", {
        get: function () {
            return this._workItems;
        },
        set: function (workItems) {
            this._workItems = workItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkItemsService.prototype, "subwayMap", {
        get: function () {
            return this.subwayMapData;
        },
        set: function (subwaymap) {
            this.subwayMapData = subwaymap;
        },
        enumerable: true,
        configurable: true
    });
    WorkItemsService.prototype.putActivesubway = function (data) {
        // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.subwayMapSubject.next(data);
    };
    /**
     * Makes an API call to get all the workItems
     * @param data pass the start and limit for the API, if type=all is passed than all processes are passed
     */
    WorkItemsService.prototype.getWorkItems = function (data) {
        if (data.type) {
            this.queryParam = '?type=' + data.type;
        }
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/workItems.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/workitems/active');
            // return this._httpClient.get(this._config.config.apiUrl + '/workitems' + queryParam);
        }
    };
    WorkItemsService.prototype.getWorkItemDetails = function (id, process) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/workItemDetail.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/workitems/details/' + id + '/' + process);
        }
    };
    WorkItemsService.prototype.getLogsForTimelineBySourceId = function (sourceId, paginationData) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/errorRecords.json');
        }
        else {
            // return this._httpClient.get(this._config.config.apiUrl + '/errorRecords/' + sourceId);
            return this._httpClient.get(this._config.config.apiUrl + '/workitems/details/errors/' + sourceId);
        }
    };
    WorkItemsService.prototype.updateBotsForWorkItem = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.put(this._config.config.apiUrl + '/updateBotForWorkItem.json', data);
        }
        else {
            return this._httpClient.post(this._config.config.apiUrl + '/addBotToProcess', { processKey: data.processKey, qty: data.qty });
        }
    };
    WorkItemsService.prototype.getRecordsBySourceId = function (sourceId, paginationData) {
        var total = (this.workItemDetails.recordDetails) ? this.workItemDetails.recordDetails.length : 0;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of({ result: this.workItemDetails.recordDetails || [], total: total });
    };
    WorkItemsService.prototype.getCurrentPreProcessingInfo = function (sourceId, paginationData) {
        return this._httpClient.get('assets/mock-data/preProcessingInfoBySourceId.json');
    };
    WorkItemsService.prototype.getCurrentProcessingInfo = function (sourceId, paginationData) {
        return this._httpClient.get('assets/mock-data/processingInfoBySourceId.json');
    };
    WorkItemsService.prototype.getCurrentPostProcessingInfo = function (sourceId, paginationData) {
        return this._httpClient.get('assets/mock-data/postProcessingInfoBySourceId.json');
    };
    WorkItemsService.prototype.getWorkItemMetaDataByIdAndTime = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/workItemMetadataByIdAndTime.json');
        }
        else {
            return this._httpClient.post(this._config.config.apiUrl + '/process/aggregates', { Key: data.key, agg_type: data.aggType, from: data.tmStart, to: data.tmEnd });
        }
    };
    WorkItemsService.checkIfPendingExists = function (source) {
        var isPendingExists = false;
        //  for (let i = 0; i < source.length; i++) {
        if (source.status == 'PENDING') {
            isPendingExists = true;
            //   }
        }
        return isPendingExists;
    };
    WorkItemsService.checkIfPendingExistsrecord = function (source) {
        console.log(source);
        var isPendingExists = false;
        for (var i = 0; i < source.length; i++) {
            if (source[i].status == 'PENDING') {
                isPendingExists = true;
                break;
            }
        }
        return isPendingExists;
    };
    WorkItemsService.prototype.getActiveWorkItemsByProcessName = function (processName) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/processActiveWorkItems.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/workitems/active/' + processName + '?processing_failures=true');
        }
    };
    WorkItemsService.prototype.getIncompleyteWorkItemsByProcessName = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/processedWorkItems.json');
        }
        else {
            var queryParams = "?";
            queryParams += 'start=' + data.start;
            queryParams += '&limit=' + data.limit;
            return this._httpClient.get(this._config.config.apiUrl + '/incompleteWorkitems/' + data.processName + queryParams);
        }
    };
    WorkItemsService.prototype.getProcessedWorkItemsByProcessName = function (data) {
        // console.log("data: ", data);
        if (this._config.config.useMockData) {
            // return this._httpClient.get('assets/mock-data/processedWorkItems.json');
            return this._httpClient.get('assets/mock-data/completedWorkItems.json');
        }
        else {
            console.log(data);
            var queryParams = "?";
            // queryParams += 'start=' + data.start;
            // queryParams += '&limit=' + data.limit;
            if (data.keyvalue && data.selectedmetakey) {
                queryParams += '&source_type=' + data.selectedmetakey;
                queryParams += '&source_name=' + data.keyvalue;
                return this._httpClient.get(this._config.config.apiUrl + '/workitems/completed/' + data.processName + '/' + data.start + '/' + data.limit + queryParams);
            }
            else {
                return this._httpClient.get(this._config.config.apiUrl + '/workitems/completed/' + data.processName + '/' + data.start + '/' + data.limit);
            }
            // return this._httpClient.get(this._config.config.apiUrl + '/processedWorkitems/' + data.processName + queryParams);
        }
    };
    WorkItemsService.prototype.getUserProcesses = function () {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/userProcesses.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/processNames');
        }
    };
    WorkItemsService.prototype.updateSchedule = function (data, hosted) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/updateSchedule.json');
        }
        else {
            return this._httpClient.post(this._config.config.apiUrl + '/process/schedules/' + hosted + '?operation=toggle', data);
        }
    };
    WorkItemsService.prototype.getSchedule = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/updateSchedule.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/processes/schedules/' + data);
        }
    };
    WorkItemsService.prototype.getStakeholderData = function (pname) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/stakeholders.json');
        }
        else {
            return this._httpClient.get(this._config.config.apiUrl + '/read/master_configuration/name/' + pname + '?module=processes_tab');
        }
    };
    WorkItemsService.prototype.killTheProcess = function (data) {
        if (this._config.config.useMockData) {
            return this._httpClient.get('assets/mock-data/killTheProcess.json');
        }
        else {
            return this._httpClient.post(this._config.config.apiUrl + '/workitems/active/kill', data);
        }
    };
    WorkItemsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__config_config_service__["a" /* ConfigService */]])
    ], WorkItemsService);
    return WorkItemsService;
}());



/***/ }),

/***/ "../../../../../src/app/utils/app-init.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initializer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function initializer(keycloak) {
    var _this = this;
    return function () {
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, keycloak.init({
                                config: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].keycloak,
                                initOptions: {
                                    onLoad: 'login-required',
                                    checkLoginIframe: false
                                },
                                bearerExcludedUrls: []
                            })];
                    case 1:
                        _a.sent();
                        resolve();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
}


/***/ }),

/***/ "../../../../../src/environments/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVE_THTOUGH_FLASK; });
//If SERVE_THTOUGH_FLASK is set to 1
// The implementation will be from OKTA via FLASK.
// This will be used for both client and server.
var SERVE_THTOUGH_FLASK = 1;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var keycloakConfig = {
    url: 'http://localhost:8080/auth/',
    realm: 'ciox',
    clientId: 'ciox' //location.href.split(".")[0].split("//")[1]
};
var environment = {
    production: false,
    keycloak: keycloakConfig
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map