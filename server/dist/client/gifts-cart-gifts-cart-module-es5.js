(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-cart-gifts-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-cart/cart-home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-cart/cart-home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"pt-5 pb-4\">View Cart</h2>\r\n\r\n  <div *ngIf=\"!cart.cartItems.length\" class=\"my-5\">\r\n    <h4>The cart is empty. Enjoy shopping.</h4>\r\n  </div>\r\n  <div *ngIf=\"cart.cartItems.length\">\r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let productItem of cart.cartItems; let i=index\" class=\"bg-white border\">\r\n        <img matListAvatar src=\"/assets/{{productItem.product.img[0]}}\">\r\n        <div matLine>\r\n          <span class=\"mx-4\">Name: {{productItem.product.name}}</span>\r\n          <span class=\"mr-4\">Price: {{productItem.product.price}} S$</span>\r\n          <span class=\"mr-auto\">Qty: {{productItem.qty}}</span>\r\n          <span>Subtotal: {{productItem.qty * productItem.product.price}} S$</span>\r\n        </div>\r\n        <div matLine>\r\n          <button mat-button (click)=\"removeFromCart(productItem.product._id)\">Remove</button>\r\n        </div>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <button mat-button (click)=\"clearCart()\">Empty Cart</button>\r\n\r\n    <mat-card class=\"my-4\">\r\n      <mat-card-content>\r\n        <h2>Total:</h2> {{cart.total}} S$\r\n        <mat-hint class=\"ml-4\">Inclusive of 7% GST</mat-hint>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <button mat-raised-button color=\"primary\" routerLink=\"/gifts/cart/checkout\">\r\n          Checkout\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-cart/checkout/checkout.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-cart/checkout/checkout.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\r\n  <mat-horizontal-stepper labelPosition=\"bottom\" linear #stepper>\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <i class=\"fa fa-check\"></i>\r\n    </ng-template>\r\n    <ng-template matStepperIcon=\"done\">\r\n      <i class=\"fa fa-check\"></i>\r\n    </ng-template>\r\n    <mat-step [stepControl]=\"firstFormGroup\" label=\"Shipping Info\" class=\"my-4 py-4\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <mat-form-field class=\"col-6\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput formControlName=\"name\" type=\"text\" required>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-6\">\r\n          <mat-label>Mobile</mat-label>\r\n          <input matInput formControlName=\"mobile\" type=\"tel\" required>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"col-12\">\r\n          <mat-label>Address</mat-label>\r\n          <input matInput formControlName=\"address\" type=\"text\" required>\r\n        </mat-form-field>\r\n        <div>\r\n          <button matStepperNext mat-raised-button color=\"primary\">Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\" label=\"Review Purchase\" class=\"my-4 py-4\">\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <mat-form-field class=\"col-12\">\r\n          <mat-label>Message for order</mat-label>\r\n          <textarea matInput formControlName=\"message\"></textarea>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-raised-button matStepperPrevious>Back</button>\r\n          <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step label=\"Done\" class=\"my-4 py-4\">\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <div>{{submitMsg}}</div>\r\n      <div *ngIf=\"!submitDone\">\r\n        <button mat-raised-button matStepperPrevious>Back</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"processing\">Submit</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gifts-cart/cart-home.component.css":
/*!****************************************************!*\
  !*** ./src/app/gifts-cart/cart-home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWNhcnQvY2FydC1ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gifts-cart/cart-home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/gifts-cart/cart-home.component.ts ***!
  \***************************************************/
/*! exports provided: CartHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHomeComponent", function() { return CartHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");



// import { ProductsApiService } from '../core/services/products-api.service';
// import { Product } from '../core/products-interface';
var CartHomeComponent = /** @class */ (function () {
    function CartHomeComponent(cartApi) {
        this.cartApi = cartApi;
    }
    CartHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartApi.cart$.subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    CartHomeComponent.prototype.removeFromCart = function (_id) {
        this.cartApi.removeFromCart(_id);
    };
    CartHomeComponent.prototype.clearCart = function () {
        this.cartApi.clearCart();
    };
    CartHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cart-home',
            template: __webpack_require__(/*! raw-loader!./cart-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-cart/cart-home.component.html"),
            styles: [__webpack_require__(/*! ./cart-home.component.css */ "./src/app/gifts-cart/cart-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_2__["CartApiService"]])
    ], CartHomeComponent);
    return CartHomeComponent;
}());



/***/ }),

/***/ "./src/app/gifts-cart/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/gifts-cart/checkout/checkout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWNhcnQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts-cart/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/gifts-cart/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CartCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCheckoutComponent", function() { return CartCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");





var CartCheckoutComponent = /** @class */ (function () {
    function CartCheckoutComponent(formBuilder, cartApi, usersService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.cartApi = cartApi;
        this.usersService = usersService;
        cartApi.cart$.subscribe(function (data) {
            _this.cart = data;
        });
    }
    CartCheckoutComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.processing = false;
        this.secondFormGroup = this.formBuilder.group({
            message: ['']
        });
        this.submitDone = false;
        this.submitMsg = '';
    };
    CartCheckoutComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.firstFormGroup.controls);
        console.log(this.secondFormGroup.controls);
        if (this.cart.cartItems.length <= 0) {
            return this.submitMsg = "No product in cart to checkout.";
        }
        this.cart.customer = {
            name: this.firstFormGroup.controls.name.value,
            mobile: this.firstFormGroup.controls.mobile.value,
            address: this.firstFormGroup.controls.address.value,
            message: this.secondFormGroup.controls.message.value
        };
        console.log('this.cart.customer: ', this.cart.customer);
        this.processing = true;
        this.cartApi.checkout(this.cart).subscribe(function (data) {
            _this.submitDone = true;
            _this.cartApi.clearCart();
            console.log('checkout successfully.', data);
            _this.submitMsg = "Order submitted; order no: " + data.orderId + ".";
            _this.processing = false;
        }, function (err) {
            _this.submitMsg = JSON.stringify(err);
            console.log('checkout failed.', err);
            _this.processing = false;
        });
    };
    CartCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cart-checkout',
            template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-cart/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/gifts-cart/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_3__["CartApiService"],
            _core_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], CartCheckoutComponent);
    return CartCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/gifts-cart/gifts-cart.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gifts-cart/gifts-cart.module.ts ***!
  \*************************************************/
/*! exports provided: GiftsCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsCartModule", function() { return GiftsCartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-home.component */ "./src/app/gifts-cart/cart-home.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/gifts-cart/checkout/checkout.component.ts");






var giftsCartRoutes = [
    {
        path: '',
        component: _cart_home_component__WEBPACK_IMPORTED_MODULE_4__["CartHomeComponent"]
    },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CartCheckoutComponent"] }
];
var GiftsCartModule = /** @class */ (function () {
    function GiftsCartModule() {
    }
    GiftsCartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_cart_home_component__WEBPACK_IMPORTED_MODULE_4__["CartHomeComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CartCheckoutComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(giftsCartRoutes)]
        })
    ], GiftsCartModule);
    return GiftsCartModule;
}());



/***/ })

}]);
//# sourceMappingURL=gifts-cart-gifts-cart-module-es5.js.map