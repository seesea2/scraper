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
var Cart = /** @class */ (function () {
    function Cart() {
        this.customer = { name: null, mobile: null, address: null, message: null };
        this.cartItems = [];
        this.total = 0;
    }
    return Cart;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.service */ "./src/app/core/services/users.service.ts");
/* harmony import */ var _cart_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart-interface */ "./src/app/core/cart-interface.ts");
/* harmony import */ var _http_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http-interface */ "./src/app/core/http-interface.ts");








var cookieExpireDays = 90;
var CartApiService = /** @class */ (function () {
    function CartApiService(httpClient, cookieService, usersService) {
        var _this = this;
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.usersService = usersService;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _cart_interface__WEBPACK_IMPORTED_MODULE_6__["Cart"]());
        this.cartItemCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.cart$ = this.cartSubject.asObservable();
        this.cartItemCount$ = this.cartItemCountSubject.asObservable();
        usersService.bLogin$.subscribe(function (data) {
            _this.bLogin = data;
            if (data === true) {
                _this.initCart();
            }
        });
        this.cart$.subscribe(function (data) {
            _this.cart = data;
            _this.cartItemCountSubject.next(data.cartItems.length);
        });
        this.initCart();
    }
    CartApiService.prototype.initCart = function () {
        var _this = this;
        var cookie = this.cookieService.get('InSgCart');
        var cookie_cart;
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
                .subscribe(function (serverCart) {
                if (serverCart &&
                    serverCart.cartItems &&
                    serverCart.cartItems.length > 0) {
                    serverCart.cartItems.forEach(function (cartItem) {
                        var i = 0;
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
                    _this.cartSubject.next(cookie_cart);
                    _this.cartItemCountSubject.next(cookie_cart.cartItems.length);
                }
                _this.cookieService.set('InSgCart', JSON.stringify(cookie_cart), cookieExpireDays, '/');
            });
        }
    };
    CartApiService.prototype.addToCart = function (product, qty) {
        var i = 0;
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
                .subscribe(function (r) {
                console.log('addToCart result: ', r);
            });
        }
    };
    CartApiService.prototype.updateInCart = function (product, qty) {
        for (var i = 0; i < this.cart.cartItems.length; ++i) {
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
                .subscribe(function (r) {
                console.log('updateInCart rslt: ', r);
            });
        }
    };
    CartApiService.prototype.removeFromCart = function (_id) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
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
                        .subscribe(function (r) {
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
    };
    CartApiService.prototype.clearCart = function () {
        this.cart.total = 0;
        this.cart.cartItems = [];
        this.cartSubject.next(this.cart);
        this.cartItemCountSubject.next(this.cart.cartItems.length);
        this.cookieService.set('InSgCart', JSON.stringify(this.cart), cookieExpireDays, '/');
        if (this.bLogin) {
            this.httpClient.delete('/api/gifts/users/cart').subscribe(function (r) {
                console.log('clearCart rslt: ', r);
            });
        }
    };
    CartApiService.prototype.checkout = function (cart) {
        if (!cart ||
            !cart.customer ||
            !cart.customer.name ||
            !cart.customer.mobile ||
            !cart.customer.address) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Name, mobile and address are required.');
        }
        return this.httpClient.post('/api/gifts/users/cart/checkout', { cart: this.cart }, _http_interface__WEBPACK_IMPORTED_MODULE_7__["httpOptions"]);
    };
    CartApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
    ], CartApiService);
    return CartApiService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map