(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map