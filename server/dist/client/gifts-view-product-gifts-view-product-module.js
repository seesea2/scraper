(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-view-product-gifts-view-product-module"],{

/***/ "./src/app/gifts-view-product/gifts-view-product.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/gifts-view-product/gifts-view-product.module.ts ***!
  \*****************************************************************/
/*! exports provided: GiftsViewProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsViewProductModule", function() { return GiftsViewProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-product.component */ "./src/app/gifts-view-product/view-product.component.ts");





var routes = [{ path: '', component: _view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductComponent"] }];
var GiftsViewProductModule = /** @class */ (function () {
    function GiftsViewProductModule() {
    }
    GiftsViewProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        })
    ], GiftsViewProductModule);
    return GiftsViewProductModule;
}());



/***/ }),

/***/ "./src/app/gifts-view-product/view-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gifts-view-product/view-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLXZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts-view-product/view-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gifts-view-product/view-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"pt-5\">View Product</h1>\r\n\r\n  <mat-spinner *ngIf='!currentProduct'></mat-spinner>\r\n  <div class='card-group my-4' *ngIf='currentProduct'>\r\n    <mat-card class='col-sm-12 col-md-4'>\r\n      <img mat-card-image *ngIf=\"currentProduct.img && currentProduct.img.length>0\" src=\"/assets/{{currentProduct.img[0]}}\"\r\n        class=\"p-2\">\r\n    </mat-card>\r\n    <mat-card class='col-sm-12 col-md-8'>\r\n      <fieldset class='p-3'>\r\n        <legend class='px-2'>\r\n          <h3>Product Descriptions</h3>\r\n        </legend>\r\n        <p *ngIf=\"currentProduct\">\r\n          {{currentProduct.name}}\r\n        </p>\r\n        <p *ngIf=\"currentProduct\">\r\n          Price: {{currentProduct.price}}\r\n        </p>\r\n        <div class='py-2'>\r\n          <mat-form-field>\r\n            <mat-label>Quantity: </mat-label>\r\n            <input matInput type='number' min=5 max=90000 step=5 [(ngModel)]=\"qtyInput\" />\r\n          </mat-form-field>\r\n        </div>\r\n      </fieldset>\r\n      <div>\r\n        <button mat-raised-button color=\"primary\" (click)='addToCart()'>Add to cart</button>\r\n        <mat-error>{{rslt}}</mat-error>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gifts-view-product/view-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gifts-view-product/view-product.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");





var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(activatedRoute, productsApi, cartApi) {
        this.activatedRoute = activatedRoute;
        this.productsApi = productsApi;
        this.cartApi = cartApi;
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qtyInput = 5;
        this.currentProduct = null;
        this.activatedRoute.params.subscribe(function (p) {
            console.log('p._id : ', p._id);
            _this.productsApi.getOneProduct(p._id).subscribe(function (product) {
                console.log('product : ', product);
                _this.currentProduct = product;
            }, function (err) {
                _this.rslt = err.ycMsg;
            });
        });
    };
    ViewProductComponent.prototype.addToCart = function () {
        this.cartApi.addToCart(this.currentProduct, this.qtyInput);
    };
    ViewProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gifts-view-product',
            template: __webpack_require__(/*! ./view-product.component.html */ "./src/app/gifts-view-product/view-product.component.html"),
            styles: [__webpack_require__(/*! ./view-product.component.css */ "./src/app/gifts-view-product/view-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__["ProductsApiService"],
            _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_4__["CartApiService"]])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ })

}]);
//# sourceMappingURL=gifts-view-product-gifts-view-product-module.js.map