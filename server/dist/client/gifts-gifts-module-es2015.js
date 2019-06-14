(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-gifts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts/gifts-navbar/gifts-navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts/gifts-navbar/gifts-navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>\r\n    <a routerLink=\"/\">\r\n      <button mat-button class=\"text-white\">GIFTS</button>\r\n    </a>\r\n  </span>\r\n  <span class=\"ml-auto\">\r\n    <a routerLink=\"/gifts/browse\">\r\n      <button mat-button class=\"text-white\">HotSales</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/browse\" matTooltip=\"Browse Products\">\r\n      <button mat-button class=\"text-white\">Products</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/cart\" matTooltip=\"View Cart\">\r\n      <button *ngIf=\"cartItemCount<=0\" mat-button class=\"text-white\">Cart</button>\r\n      <button *ngIf=\"cartItemCount>0\" mat-button class=\"text-white\" matBadge=\"{{cartItemCount}}\"\r\n        matBadgeColor=\"accent\">Cart</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/trackOrder\" matTooltip=\"Track Order\">\r\n      <button mat-button class=\"text-white\">Order</button>\r\n    </a>\r\n    <a routerLink=\"/gifts/registerLogin/register\" matTooltip=\"Contact us\">\r\n      <button mat-button class=\"text-white\">Support</button>\r\n    </a>\r\n    <a *ngIf=\"!bLoginStatus\" routerLink=\"/gifts/registerLogin/login\">\r\n      <button mat-button class=\"text-white\">Login</button>\r\n    </a>\r\n    <a *ngIf=\"bLoginStatus\">\r\n      <button mat-button (click)=\"logout()\" class=\"text-white\">Logout</button>\r\n    </a>\r\n  </span>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts/root.component.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts/root.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gifts-navbar></gifts-navbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/core/cart-interface.ts":
/*!****************************************!*\
  !*** ./src/app/core/cart-interface.ts ***!
  \****************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
    constructor() {
        this.customer = { name: null, mobile: null, address: null, message: null };
        this.cartItems = [];
        this.total = 0;
    }
}


/***/ }),

/***/ "./src/app/core/services/cart-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/cart-api.service.ts ***!
  \***************************************************/
/*! exports provided: CartApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartApiService", function() { return CartApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _cart_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart-interface */ "./src/app/core/cart-interface.ts");
/* harmony import */ var _http_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http-interface */ "./src/app/core/http-interface.ts");








const cookieExpireDays = 90;
let CartApiService = class CartApiService {
    constructor(httpClient, cookieService, usersService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.usersService = usersService;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _cart_interface__WEBPACK_IMPORTED_MODULE_6__["Cart"]());
        this.cartItemCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.cart$ = this.cartSubject.asObservable();
        this.cartItemCount$ = this.cartItemCountSubject.asObservable();
        usersService.bLogin$.subscribe(data => {
            this.bLogin = data;
            if (data === true) {
                this.initCart();
            }
        });
        this.cart$.subscribe(data => {
            this.cart = data;
            this.cartItemCountSubject.next(data.cartItems.length);
        });
        this.initCart();
    }
    initCart() {
        let cookie = this.cookieService.get('InSgCart');
        let cookie_cart;
        if (!cookie) {
            cookie_cart = new _cart_interface__WEBPACK_IMPORTED_MODULE_6__["Cart"]();
        }
        else {
            cookie_cart = JSON.parse(cookie);
        }
        this.cartSubject.next(cookie_cart);
        this.cartItemCountSubject.next(cookie_cart.cartItems.length);
        if (this.bLogin) {
            this.httpClient
                .get('/api/gifts/users/cart')
                .subscribe(serverCart => {
                if (serverCart &&
                    serverCart.cartItems &&
                    serverCart.cartItems.length > 0) {
                    serverCart.cartItems.forEach(cartItem => {
                        let i = 0;
                        for (i = 0; i < cookie_cart.cartItems.length; ++i) {
                            if (cookie_cart.cartItems[i].product._id === cartItem.product._id) {
                                cookie_cart.cartItems[i].qty += cartItem.qty;
                                break;
                            }
                        }
                        if (i >= cookie_cart.cartItems.length) {
                            cookie_cart.cartItems.push({
                                product: cartItem.product,
                                qty: cartItem.qty
                            });
                        }
                        cookie_cart.total += cartItem.product.price * cartItem.qty;
                    });
                    this.cartSubject.next(cookie_cart);
                    this.cartItemCountSubject.next(cookie_cart.cartItems.length);
                }
                this.cookieService.set('InSgCart', JSON.stringify(cookie_cart), cookieExpireDays, '/');
            });
        }
    }
    addToCart(product, qty) {
        let i = 0;
        for (i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].product._id === product._id) {
                this.cart.cartItems[i].qty += qty;
                break;
            }
        }
        if (i >= this.cart.cartItems.length) {
            this.cart.cartItems.push({ product: product, qty: qty });
        }
        this.cart.total += product.price * qty;
        this.cartSubject.next(this.cart);
        this.cartItemCountSubject.next(this.cart.cartItems.length);
        this.cookieService.set('InSgCart', JSON.stringify(this.cart), cookieExpireDays, '/');
        console.log('addToCart this.bLogin: ', this.bLogin);
        if (this.bLogin) {
            this.httpClient
                .post('/api/gifts/users/cart', { product: product, qty: qty })
                .subscribe(r => {
                console.log('addToCart result: ', r);
            });
        }
    }
    updateInCart(product, qty) {
        for (let i = 0; i < this.cart.cartItems.length; ++i) {
            if (this.cart.cartItems[i].product._id === product._id) {
                this.cart.total -=
                    this.cart.cartItems[i].product.price * this.cart.cartItems[i].qty;
                this.cart.cartItems[i].qty = qty;
                this.cart.total += product.price * qty;
                break;
            }
        }
        this.cartSubject.next(this.cart);
        this.cartItemCountSubject.next(this.cart.cartItems.length);
        this.cookieService.set('InSgCart', JSON.stringify(this.cart), cookieExpireDays, '/');
        if (this.bLogin) {
            return this.httpClient
                .put('/api/gifts/users/cart', { cart: this.cart })
                .subscribe(r => {
                console.log('updateInCart rslt: ', r);
            });
        }
    }
    removeFromCart(_id) {
        for (let i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].product._id === _id) {
                this.cart.total -=
                    this.cart.cartItems[i].product.price * this.cart.cartItems[i].qty;
                this.cart.cartItems.splice(i, 1);
                this.cartSubject.next(this.cart);
                this.cartItemCountSubject.next(this.cart.cartItems.length);
                this.cookieService.set('InSgCart', JSON.stringify(this.cart), cookieExpireDays, '/');
                if (this.bLogin) {
                    this.httpClient
                        .delete('/api/gifts/users/cart/product', {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
                        params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', _id)
                    })
                        .subscribe(r => {
                        console.log('removeFromCart rslt: ', r);
                    });
                }
                break;
            }
        }
        // this.cart.cartItems.filter(h => h.product._id != product._id);
        // this.cookieService.set('InSgCart', JSON.stringify(this.cart));
        // this.cart.total -= this.cart.cartItems[i].product.price  * this.cart.cartItems[i].product.qty;
        console.log('removeFromCart : ', this.cart);
    }
    clearCart() {
        this.cart.total = 0;
        this.cart.cartItems = [];
        this.cartSubject.next(this.cart);
        this.cartItemCountSubject.next(this.cart.cartItems.length);
        this.cookieService.set('InSgCart', JSON.stringify(this.cart), cookieExpireDays, '/');
        if (this.bLogin) {
            this.httpClient.delete('/api/gifts/users/cart').subscribe(r => {
                console.log('clearCart rslt: ', r);
            });
        }
    }
    checkout(cart) {
        if (!cart ||
            !cart.customer ||
            !cart.customer.name ||
            !cart.customer.mobile ||
            !cart.customer.address) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Name, mobile and address are required.');
        }
        return this.httpClient.post('/api/gifts/users/cart/checkout', { cart: this.cart }, _http_interface__WEBPACK_IMPORTED_MODULE_7__["httpOptions"]);
    }
};
CartApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
], CartApiService);



/***/ }),

/***/ "./src/app/gifts/gifts-navbar/gifts-navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gifts/gifts-navbar/gifts-navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzL2dpZnRzLW5hdmJhci9naWZ0cy1uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");




let GiftsNavbarComponent = class GiftsNavbarComponent {
    constructor(usersService, cartApiService) {
        this.usersService = usersService;
        this.cartApiService = cartApiService;
        this.usersService.bLogin$.subscribe(data => {
            this.bLoginStatus = data;
        });
        this.cartApiService.cartItemCount$.subscribe(data => {
            this.cartItemCount = data;
        });
    }
    ngOnInit() { }
    logout() {
        this.usersService.logout(false);
    }
};
GiftsNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gifts-navbar',
        template: __webpack_require__(/*! raw-loader!./gifts-navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts/gifts-navbar/gifts-navbar.component.html"),
        styles: [__webpack_require__(/*! ./gifts-navbar.component.css */ "./src/app/gifts/gifts-navbar/gifts-navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__["CartApiService"]])
], GiftsNavbarComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.component */ "./src/app/gifts/root.component.ts");




const giftsRoutes = [
    {
        path: '',
        component: _root_component__WEBPACK_IMPORTED_MODULE_3__["GiftsRootComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | gifts-home-gifts-home-module */ "gifts-home-gifts-home-module").then(__webpack_require__.bind(null, /*! ../gifts-home/gifts-home.module */ "./src/app/gifts-home/gifts-home.module.ts")).then(m => m.GiftsHomeModule)
            },
            {
                path: 'browse',
                loadChildren: () => __webpack_require__.e(/*! import() | gifts-browse-gifts-browse-module */ "gifts-browse-gifts-browse-module").then(__webpack_require__.bind(null, /*! ../gifts-browse/gifts-browse.module */ "./src/app/gifts-browse/gifts-browse.module.ts")).then(m => m.GiftsBrowseModule)
            },
            {
                path: 'cart',
                loadChildren: () => __webpack_require__.e(/*! import() | gifts-cart-gifts-cart-module */ "gifts-cart-gifts-cart-module").then(__webpack_require__.bind(null, /*! ../gifts-cart/gifts-cart.module */ "./src/app/gifts-cart/gifts-cart.module.ts")).then(m => m.GiftsCartModule)
            },
            {
                path: 'trackOrder',
                loadChildren: () => __webpack_require__.e(/*! import() | gifts-track-order-gifts-track-order-module */ "gifts-track-order-gifts-track-order-module").then(__webpack_require__.bind(null, /*! ../gifts-track-order/gifts-track-order.module */ "./src/app/gifts-track-order/gifts-track-order.module.ts")).then(m => m.GiftsTrackOrderModule)
            },
            {
                path: 'view',
                loadChildren: () => __webpack_require__.e(/*! import() | gifts-view-product-gifts-view-product-module */ "gifts-view-product-gifts-view-product-module").then(__webpack_require__.bind(null, /*! ../gifts-view-product/gifts-view-product.module */ "./src/app/gifts-view-product/gifts-view-product.module.ts")).then(m => m.GiftsViewProductModule)
            },
            {
                path: 'registerLogin',
                loadChildren: () => __webpack_require__.e(/*! import() | register-login-register-login-module */ "default~register-login-register-login-module~staffs-staffs-module").then(__webpack_require__.bind(null, /*! ../register-login/register-login.module */ "./src/app/register-login/register-login.module.ts")).then(m => m.RegisterLoginModule)
            }
        ]
    }
];
let GiftsRoutingModule = class GiftsRoutingModule {
};
GiftsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(giftsRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GiftsRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _gifts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifts-routing.module */ "./src/app/gifts/gifts-routing.module.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root.component */ "./src/app/gifts/root.component.ts");
/* harmony import */ var _gifts_navbar_gifts_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gifts-navbar/gifts-navbar.component */ "./src/app/gifts/gifts-navbar/gifts-navbar.component.ts");






let GiftsModule = class GiftsModule {
};
GiftsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_root_component__WEBPACK_IMPORTED_MODULE_4__["GiftsRootComponent"], _gifts_navbar_gifts_navbar_component__WEBPACK_IMPORTED_MODULE_5__["GiftsNavbarComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _gifts_routing_module__WEBPACK_IMPORTED_MODULE_3__["GiftsRoutingModule"]],
        exports: [_root_component__WEBPACK_IMPORTED_MODULE_4__["GiftsRootComponent"]]
    })
], GiftsModule);



/***/ }),

/***/ "./src/app/gifts/root.component.css":
/*!******************************************!*\
  !*** ./src/app/gifts/root.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzL3Jvb3QuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GiftsRootComponent = class GiftsRootComponent {
    constructor() { }
    ngOnInit() { }
};
GiftsRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gifts-root',
        template: __webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts/root.component.html"),
        styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/gifts/root.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GiftsRootComponent);



/***/ })

}]);
//# sourceMappingURL=gifts-gifts-module-es2015.js.map