(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~register-login-register-login-module~staffs-staffs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-login/login/login.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-login/login/login.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex my-5\">\r\n  <mat-card class=\"container col-sm-12 col-md-6 col-lg-4\">\r\n    <mat-card-title class=\"text-center\">\r\n      <h2>Welcome! Please login.</h2>\r\n    </mat-card-title>\r\n    <mat-card-content class=\"row no-gutters\">\r\n      <mat-form-field class=\"col-12\">\r\n        <mat-label>Username</mat-label>\r\n        <input #uid matInput id=\"uid\" required />\r\n        <span matSuffix><i class=\"fa fa-user m-2\"></i></span>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"col-12\">\r\n        <mat-label>Password</mat-label>\r\n        <input #pwd matInput id=\"pwd\" type=\"password\" required />\r\n        <span matSuffix><i class=\"fa fa-key m-2\"></i></span>\r\n      </mat-form-field>\r\n      <mat-error>{{errMsg}}</mat-error>\r\n      <span *ngIf=\"!bStaffLogin\" class=\"small\"><a>New memober Register</a></span>\r\n      <button mat-raised-button color=\"primary\" (click)='login(uid.value, pwd.value)'>Login</button>\r\n    </mat-card-content>\r\n    <!-- <mat-card-footer class=\"text-center\">&copy; 2019</mat-card-footer> -->\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-login/register/register.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-login/register/register.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\r\n  <mat-card class='container col-sm-12 col-md-8 col-lg-6 my-5 py-3'>\r\n    <mat-card-title class=\"text-center\">\r\n      <h2>Register</h2>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <form [formGroup]=\"registerForm\" clss=\"row no-gutters\">\r\n        <mat-form-field appearance=\"outline\" class=\"col-sm-12 col-md-6\">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput formControlName=\"firstName\" [ngClass]=\"{ 'is-invalid': submitted && fg.firstName.errors }\"\r\n            required />\r\n          <mat-error *ngIf=\"submitted && fg['firstName'].errors\">\r\n            First Name is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"col-sm-12 col-md-6\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput formControlName=\"lastName\" [ngClass]=\"{ 'is-invalid': submitted && fg.lastName.errors }\"\r\n            required />\r\n          <mat-error *ngIf=\"submitted && fg['lastName'].errors\">\r\n            Last Name is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"col-12\">\r\n          <mat-label>Username</mat-label>\r\n          <input matInput formControlName=\"uid\" [ngClass]=\"{ 'is-invalid': submitted && fg.uid.errors }\" required />\r\n          <mat-error *ngIf=\"submitted && fg['uid'].errors\">\r\n            Username is required\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"col-12\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"email\" required />\r\n          <mat-error *ngIf=\"submitted && fg['email'].errors.required\">\r\n            Email is required\r\n          </mat-error>\r\n          <mat-error *ngIf=\"submitted && fg['email'].errors.email\">\r\n            Email is invalid\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"col-12\">\r\n          <mat-label>Password</mat-label>\r\n          <input matInput type=\"password\" formControlName=\"pwd\" [ngClass]=\"{ 'is-invalid': submitted && fg.pwd.errors }\"\r\n            required />\r\n          <mat-error *ngIf=\"submitted && fg['pwd'].errors\">\r\n            <div *ngIf=\"fg['pwd'].errors.required\">Password is required</div>\r\n            <div *ngIf=\"fg['pwd'].errors.minlength\">\r\n              Password must be at least 6 characters\r\n            </div>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <div>\r\n          <mat-error>{{errMsg}}</mat-error>\r\n          <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\" [disabled]=\"loading\">Register</button>\r\n          <img *ngIf=\"loading\" class=\"pl-3\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n          <button mat-button routerLink=\"/gifts\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register-login/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/register-login/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWxvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register-login/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/register-login/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        console.log('routes.url : ', router);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.bStaffLogin = false;
        this.uid = '';
        this.pwd = '';
        this.errMsg = '';
        this.bStaffLogin = this.router.url.includes('/staffs/registerLogin/');
    };
    LoginComponent.prototype.login = function (uid, pwd) {
        var _this = this;
        this.usersService.login(this.bStaffLogin, uid, pwd).subscribe(function (data) {
            _this.errMsg = '';
            console.log('login succeed: ', data);
            _this.usersService.sendLoginStatus(true);
            if (_this.bStaffLogin) {
                _this.router.navigate(['/staffs']);
            }
            else {
                _this.router.navigate(['/gifts']);
            }
        }, function (err) {
            _this.errMsg = err;
            console.error('login failed, ', err);
            _this.usersService.sendLoginStatus(false);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'registerlogin-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/register-login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register-login/register-login-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/register-login/register-login-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginRoutingModule", function() { return RegisterLoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/register-login/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register-login/register/register.component.ts");





var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
var RegisterLoginRoutingModule = /** @class */ (function () {
    function RegisterLoginRoutingModule() {
    }
    RegisterLoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterLoginRoutingModule);
    return RegisterLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/register-login/register-login.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/register-login/register-login.module.ts ***!
  \*********************************************************/
/*! exports provided: RegisterLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLoginModule", function() { return RegisterLoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _register_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-login-routing.module */ "./src/app/register-login/register-login-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/register-login/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register-login/register/register.component.ts");






var RegisterLoginModule = /** @class */ (function () {
    function RegisterLoginModule() {
    }
    RegisterLoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _register_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterLoginRoutingModule"]],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]]
        })
    ], RegisterLoginModule);
    return RegisterLoginModule;
}());



/***/ }),

/***/ "./src/app/register-login/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/register-login/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWxvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register-login/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/register-login/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, usersService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.submitted = false;
        this.errMsg = '';
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            uid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "fg", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Register onSubmit()');
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.errMsg = '';
        this.usersService.register(this.registerForm).subscribe(function (data) {
            console.log('Register successfully.', data);
            _this.loading = false;
        }, function (error) {
            console.log('Register failed.', error);
            _this.loading = false;
            _this.errMsg = error;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'registerlogin-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register-login/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~register-login-register-login-module~staffs-staffs-module-es5.js.map