webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/main-init/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.close-popup{\r\n    position: absolute;\r\n    right: -20px;\r\n    top: -20px;\r\n}\r\n\r\n.modal-items-wrapper{\r\n    position: relative;\r\n}\r\n\r\nmat-card{\r\n    margin: 100px auto;\r\n    width: 300px;\r\n    padding: 5px;\r\n    z-index: 3;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main-init/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-items-wrapper\" >\r\n    <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isLoading\"></mat-spinner>\r\n    <mat-card class=\"\" *ngIf=\"!isLoading\">\r\n      <mat-card-title>Change Password</mat-card-title>\r\n      <app-error-message [msg]=\"errorMessage\" *ngIf=\"errorMessage\"></app-error-message>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required >\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" required>\r\n      </mat-form-field>\r\n      \r\n      <button color=\"primary\" class=\"full-width\" mat-raised-button (click)=\"savePassword()\" [disabled]=\"(!password || !confirmPassword)\">\r\n        {{buttonText}}\r\n        <mat-spinner color=\"accent\" diameter=\"20\" *ngIf=\"isSaving\"></mat-spinner>\r\n      </button>\r\n    </mat-card>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/main/main-init/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_admin_admin_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(_adminService, _authService) {
        this._adminService = _adminService;
        this._authService = _authService;
        this.isLoading = true;
        this.isSaving = false;
        this.errorMessage = '';
        this.buttonText = 'Save';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    ChangePasswordComponent.prototype.savePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.errorMessage = "Password and confirm passoword should match";
            setTimeout(function () {
                _this.errorMessage = '';
            }, 2000);
            return;
        }
        this.isSaving = true;
        this.errorMessage = '';
        this._adminService.changePassword({
            username: this._authService.authUser.username,
            password: this.password
        }).subscribe(function (data) {
            if (data.status == 'SUCCESS') {
                // this.dialogRef.close('yes');
                _this.buttonText = 'logging you out. Please login again...';
                setTimeout(function () {
                    _this._authService.logout().subscribe(function (data) {
                        window.location.reload();
                    });
                }, 2000);
            }
            else {
                _this.errorMessage = "Something went wrong. Please contact your admin.";
            }
            _this.isSaving = false;
        }, function (error) {
            _this.isSaving = false;
            _this.errorMessage = error.error;
        });
    };
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__("../../../../../src/app/main/main-init/change-password/change-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main-init/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_admin_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_auth_auth_service__["a" /* AuthService */]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main-init/main-init.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main-init/main-init.component.html":
/***/ (function(module, exports) {

module.exports = "<app-body></app-body>"

/***/ }),

/***/ "../../../../../src/app/main/main-init/main-init.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainInitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainInitComponent = /** @class */ (function () {
    function MainInitComponent(_authService, _router, dialog) {
        this._authService = _authService;
        this._router = _router;
        this.dialog = dialog;
    }
    MainInitComponent.prototype.ngOnInit = function () {
    };
    MainInitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-init',
            template: __webpack_require__("../../../../../src/app/main/main-init/main-init.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main-init/main-init.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], MainInitComponent);
    return MainInitComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_init_main_init_component__ = __webpack_require__("../../../../../src/app/main/main-init/main-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_routes__ = __webpack_require__("../../../../../src/app/main/main.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_modules_shared_modules_module__ = __webpack_require__("../../../../../src/app/shared/shared-modules/shared-modules.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_components_shared_components_module__ = __webpack_require__("../../../../../src/app/shared/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_init_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/main/main-init/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__main_routes__["a" /* routeRoot */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_modules_shared_modules_module__["a" /* SharedModulesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_components_shared_components_module__["a" /* SharedComponentsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__main_init_change_password_change_password_component__["a" /* ChangePasswordComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__main_init_main_init_component__["a" /* MainInitComponent */], __WEBPACK_IMPORTED_MODULE_7__main_init_change_password_change_password_component__["a" /* ChangePasswordComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_init_main_init_component__ = __webpack_require__("../../../../../src/app/main/main-init/main-init.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_services_auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/auth-guard/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_init_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/main/main-init/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_services_admin_admin_guard_service__ = __webpack_require__("../../../../../src/app/shared/shared-services/admin/admin-guard.service.ts");





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__main_init_main_init_component__["a" /* MainInitComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_shared_services_auth_guard_auth_guard_service__["b" /* AuthSecuredGuardService */]],
        children: [
            { path: '', redirectTo: 'operational', pathMatch: 'full' },
            { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_3__main_init_change_password_change_password_component__["a" /* ChangePasswordComponent */], },
            { path: 'operational', loadChildren: './operational/operational.module#OperationalModule' },
            { path: 'processes', loadChildren: './processes/processes.module#ProcessesModule' },
            { path: 'financial', loadChildren: './financial/financial.module#FinancialModule', canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_shared_services_admin_admin_guard_service__["b" /* AdminSecuredGuardService */]] },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
        ]
    }
];
var routeRoot = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);


/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map