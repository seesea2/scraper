(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-gifts-module"],{

/***/ "./src/app/gifts/gifts-navbar/gifts-navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gifts/gifts-navbar/gifts-navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzL2dpZnRzLW5hdmJhci9naWZ0cy1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts/gifts-navbar/gifts-navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gifts/gifts-navbar/gifts-navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    <a routerLink=\"/\">\r\n      <button mat-button class=\"text-white\">GIFTS</button>\r\n    </a>\r\n  </span>\r\n  <span class=\"ml-auto\">\r\n    <a routerLink=\"/gifts/browse\">\r\n      <button mat-button class=\"text-white\">HotSales</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/browse\" matTooltip=\"Browse Products\">\r\n      <button mat-button class=\"text-white\">Products</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/cart\" matTooltip=\"View Cart\">\r\n      <button *ngIf=\"cartItemCount<=0\" mat-button class=\"text-white\">Cart</button>\r\n      <button *ngIf=\"cartItemCount>0\" mat-button class=\"text-white\" matBadge=\"{{cartItemCount}}\" matBadgeColor=\"accent\">Cart</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/trackOrder\" matTooltip=\"Track Order\">\r\n      <button mat-button class=\"text-white\">Order</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/registerLogin/register\" matTooltip=\"Contact us\">\r\n      <button mat-button class=\"text-white\">Support</button>\r\n    </a>\r\n    <a *ngIf=\"!bLoginStatus\" routerLink=\"/gifts/registerLogin/login\">\r\n      <button mat-button class=\"text-white\">Login</button>\r\n    </a>\r\n    <a *ngIf=\"bLoginStatus\">\r\n      <button mat-button (click)=\"logout()\" class=\"text-white\">Logout</button>\r\n    </a>\r\n  </span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/gifts/gifts-navbar/gifts-navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gifts/gifts-navbar/gifts-navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: GiftsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsNavbarComponent", function() { return GiftsNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");




var GiftsNavbarComponent = /** @class */ (function () {
    function GiftsNavbarComponent(usersService, cartApiService) {
        var _this = this;
        this.usersService = usersService;
        this.cartApiService = cartApiService;
        this.usersService.bLogin$.subscribe(function (data) {
            _this.bLoginStatus = data;
        });
        this.cartApiService.cartItemCount$.subscribe(function (data) {
            _this.cartItemCount = data;
        });
    }
    GiftsNavbarComponent.prototype.ngOnInit = function () { };
    GiftsNavbarComponent.prototype.logout = function () {
        this.usersService.logout(false);
    };
    GiftsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gifts-navbar',
            template: __webpack_require__(/*! ./gifts-navbar.component.html */ "./src/app/gifts/gifts-navbar/gifts-navbar.component.html"),
            styles: [__webpack_require__(/*! ./gifts-navbar.component.css */ "./src/app/gifts/gifts-navbar/gifts-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__["CartApiService"]])
    ], GiftsNavbarComponent);
    return GiftsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/gifts/gifts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/gifts/gifts-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GiftsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsRoutingModule", function() { return GiftsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/app/gifts/root.component.ts");




var giftsRoutes = [
    {
        path: '',
        component: _root_component__WEBPACK_IMPORTED_MODULE_3__["GiftsRootComponent"],
        children: [
            {
                path: '',
                loadChildren: '../gifts-home/gifts-home.module#GiftsHomeModule'
            },
            {
                path: 'browse',
                loadChildren: '../gifts-browse/gifts-browse.module#GiftsBrowseModule'
            },
            {
                path: 'cart',
                loadChildren: '../gifts-cart/gifts-cart.module#GiftsCartModule'
            },
            {
                path: 'trackOrder',
                loadChildren: '../gifts-track-order/gifts-track-order.module#GiftsTrackOrderModule'
            },
            {
                path: 'view',
                loadChildren: '../gifts-view-product/gifts-view-product.module#GiftsViewProductModule'
            },
            {
                path: 'registerLogin',
                loadChildren: '../register-login/register-login.module#RegisterLoginModule'
            }
        ]
    }
];
var GiftsRoutingModule = /** @class */ (function () {
    function GiftsRoutingModule() {
    }
    GiftsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(giftsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GiftsRoutingModule);
    return GiftsRoutingModule;
}());



/***/ }),

/***/ "./src/app/gifts/gifts.module.ts":
/*!***************************************!*\
  !*** ./src/app/gifts/gifts.module.ts ***!
  \***************************************/
/*! exports provided: GiftsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsModule", function() { return GiftsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _gifts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifts-routing.module */ "./src/app/gifts/gifts-routing.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.component */ "./src/app/gifts/root.component.ts");
/* harmony import */ var _gifts_navbar_gifts_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gifts-navbar/gifts-navbar.component */ "./src/app/gifts/gifts-navbar/gifts-navbar.component.ts");






var GiftsModule = /** @class */ (function () {
    function GiftsModule() {
    }
    GiftsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_root_component__WEBPACK_IMPORTED_MODULE_4__["GiftsRootComponent"], _gifts_navbar_gifts_navbar_component__WEBPACK_IMPORTED_MODULE_5__["GiftsNavbarComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _gifts_routing_module__WEBPACK_IMPORTED_MODULE_3__["GiftsRoutingModule"]],
            exports: [_root_component__WEBPACK_IMPORTED_MODULE_4__["GiftsRootComponent"]]
        })
    ], GiftsModule);
    return GiftsModule;
}());



/***/ }),

/***/ "./src/app/gifts/root.component.css":
/*!******************************************!*\
  !*** ./src/app/gifts/root.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzL3Jvb3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts/root.component.html":
/*!*******************************************!*\
  !*** ./src/app/gifts/root.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gifts-navbar></gifts-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/gifts/root.component.ts":
/*!*****************************************!*\
  !*** ./src/app/gifts/root.component.ts ***!
  \*****************************************/
/*! exports provided: GiftsRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsRootComponent", function() { return GiftsRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GiftsRootComponent = /** @class */ (function () {
    function GiftsRootComponent() {
    }
    GiftsRootComponent.prototype.ngOnInit = function () { };
    GiftsRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gifts-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/gifts/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/gifts/root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GiftsRootComponent);
    return GiftsRootComponent;
}());



/***/ })

}]);
//# sourceMappingURL=gifts-gifts-module.js.map