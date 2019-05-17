(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staffs-staffs-module"],{

/***/ "./src/app/staffs/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/staffs/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/staffs/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/staffs/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<staffs-navbar></staffs-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/staffs/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/staffs/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'staff-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/staffs/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/staffs/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/staffs/staffs-navbar/staffs-navbar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/staffs/staffs-navbar/staffs-navbar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmcy9zdGFmZnMtbmF2YmFyL3N0YWZmcy1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/staffs/staffs-navbar/staffs-navbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/staffs/staffs-navbar/staffs-navbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"shadow\">\r\n  <span>\r\n    <button mat-button matTooltip=\"sidebar\">\r\n      <i>sidebar-icon</i>\r\n    </button>\r\n  </span>\r\n  <span class=\"mr-auto\">Tiptop Staffs</span>\r\n  <span class=\"text-white\">\r\n    <button mat-button routerLink=\"/staffs/inventory\">\r\n      Inventory\r\n    </button>\r\n    <button mat-button (click)=\"signOut()\" matTooltip=\"User Info\">\r\n      <i class=\"fa fa-fw fa-info\"></i>\r\n    </button>\r\n    <button mat-button routerLink=\"/staffs/registerLogin/login\" matTooltip=\"sign in\">\r\n      <i class=\"fa fa-sign-in\"></i>\r\n    </button>\r\n    <button mat-button (click)=\"signOut()\" matTooltip=\"sign out\">\r\n      <i class=\"fa fa-sign-out\"></i>\r\n    </button>\r\n  </span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/staffs/staffs-navbar/staffs-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/staffs/staffs-navbar/staffs-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: StaffsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsNavbarComponent", function() { return StaffsNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaffsNavbarComponent = /** @class */ (function () {
    function StaffsNavbarComponent() {
    }
    StaffsNavbarComponent.prototype.ngOnInit = function () { };
    StaffsNavbarComponent.prototype.signOut = function () {
        return true;
    };
    StaffsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'staffs-navbar',
            template: __webpack_require__(/*! ./staffs-navbar.component.html */ "./src/app/staffs/staffs-navbar/staffs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./staffs-navbar.component.css */ "./src/app/staffs/staffs-navbar/staffs-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StaffsNavbarComponent);
    return StaffsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/staffs/staffs-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/staffs/staffs-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StaffsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsRoutingModule", function() { return StaffsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/staffs/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: '',
                loadChildren: '../staffs-inventory/staffs-inventory.module#StaffsInventoryModule'
            },
            {
                path: 'inventory',
                loadChildren: '../staffs-inventory/staffs-inventory.module#StaffsInventoryModule'
            },
            {
                path: 'registerLogin',
                loadChildren: '../register-login/register-login.module#RegisterLoginModule'
            }
        ]
    }
];
var StaffsRoutingModule = /** @class */ (function () {
    function StaffsRoutingModule() {
    }
    StaffsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StaffsRoutingModule);
    return StaffsRoutingModule;
}());



/***/ }),

/***/ "./src/app/staffs/staffs.module.ts":
/*!*****************************************!*\
  !*** ./src/app/staffs/staffs.module.ts ***!
  \*****************************************/
/*! exports provided: StaffsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsModule", function() { return StaffsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _register_login_register_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register-login/register-login.module */ "./src/app/register-login/register-login.module.ts");
/* harmony import */ var _staffs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staffs-routing.module */ "./src/app/staffs/staffs-routing.module.ts");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/staffs/home/home.component.ts");
/* harmony import */ var _staffs_navbar_staffs_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staffs-navbar/staffs-navbar.component */ "./src/app/staffs/staffs-navbar/staffs-navbar.component.ts");








var StaffsModule = /** @class */ (function () {
    function StaffsModule() {
    }
    StaffsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _staffs_navbar_staffs_navbar_component__WEBPACK_IMPORTED_MODULE_7__["StaffsNavbarComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _staffs_routing_module__WEBPACK_IMPORTED_MODULE_4__["StaffsRoutingModule"], _register_login_register_login_module__WEBPACK_IMPORTED_MODULE_3__["RegisterLoginModule"]],
            providers: [_core_services_products_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductsApiService"]]
        })
    ], StaffsModule);
    return StaffsModule;
}());



/***/ })

}]);
//# sourceMappingURL=staffs-staffs-module.js.map