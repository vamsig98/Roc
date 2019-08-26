webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/auth/auth-init/auth-init.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth-init/auth-init.component.html":
/***/ (function(module, exports) {

module.exports = "<app-body></app-body>"

/***/ }),

/***/ "../../../../../src/app/auth/auth-init/auth-init.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInitComponent; });
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

var AuthInitComponent = /** @class */ (function () {
    function AuthInitComponent() {
    }
    AuthInitComponent.prototype.ngOnInit = function () {
    };
    AuthInitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-init',
            template: __webpack_require__("../../../../../src/app/auth/auth-init/auth-init.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth-init/auth-init.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthInitComponent);
    return AuthInitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_init_auth_init_component__ = __webpack_require__("../../../../../src/app/auth/auth-init/auth-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_components_shared_components_module__["a" /* SharedComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__auth_routes__["a" /* routeRoot */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_5__auth_init_auth_init_component__["a" /* AuthInitComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_init_auth_init_component__ = __webpack_require__("../../../../../src/app/auth/auth-init/auth-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__ = __webpack_require__("../../../../../src/app/auth/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth-guard/auth-guard.service.ts");





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__auth_init_auth_init_component__["a" /* AuthInitComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_shared_services_auth_guard_auth_guard_service__["a" /* AuthLoginGuardService */]],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
            { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_3__logout_logout_component__["a" /* LogoutComponent */] }
        ]
    }
];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card{\r\n    margin: 100px auto;\r\n    width: 300px;\r\n}\r\n.align-center{\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title></mat-card-title>\r\n  <div>\r\n    <div class=\"align-center\"> checking session</div>\r\n    <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n  </div>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.username = '';
        this.password = '';
        this.errorMessage = '';
        this.isSuperAdmin = false;
        this.checkingSession = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getLoggedInUserInfo();
    };
    LoginComponent.prototype.getLoggedInUserInfo = function () {
        var _this = this;
        this.checkingSession = true;
        setTimeout(function () {
            var user = _this._auth.authUser;
            if (user === null) {
                _this.checkingSession = false;
                window.location.assign("/saml/sso");
            }
            else {
                _this._auth.getUserInfo().subscribe(function (data) {
                    _this.gotoDashboard();
                });
            }
        }, 3000);
        this._auth.getUserInfo().subscribe(function (data) {
            _this.gotoDashboard();
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._auth.login({
            username: this.username,
            password: this.password
        }).subscribe(function (data) {
            _this.gotoDashboard();
        }, function (error) {
            _this.errorMessage = error.error;
        });
    };
    LoginComponent.prototype.gotoDashboard = function () {
        this.isSuperAdmin = this._auth.isSuperAdmin;
        console.log('this.isSuperAdmin', this.isSuperAdmin);
        // if (!this.isSuperAdmin) {
        //   this._router.navigate(['/app/operational/dashboard']);
        // } else {
        //   console.log("not nav to gotoDashboard");
        // }
        this._router.navigate(['/app/processes/DECRYPT']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>Logged out of the Application</mat-card-title>\r\n    <div>\r\n        Please click <a href=\"/\">here</a> to Login again.\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/auth/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(_auth) {
        this._auth = _auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        window.localStorage.clear();
        this._auth.authUser = null;
        // window.localStorage.clear();
        this.deleteAllCookies();
        // this._auth.authUser = null;
        // this._auth.logoutPost().subscribe((data)=>{
        //   window.location.reload();
        // });
    };
    LogoutComponent.prototype.deleteAllCookies = function () {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__["a" /* AuthService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map