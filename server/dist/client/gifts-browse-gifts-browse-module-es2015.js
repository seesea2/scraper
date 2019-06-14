(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-browse-gifts-browse-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-browse/browse.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-browse/browse.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\r\n  <mat-drawer mode=\"side\" opened>\r\n    <categories-tree></categories-tree>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <div class=\"container\">\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/gifts/browse\">Home</a></li>\r\n          <li class=\"breadcrumb-item\" *ngFor=\"let item of categoryBreadcrumb; let i = index\" aria-current=\"page\">\r\n            <a (click)=\"onBreadcrumb(i)\">{{item}}</a>\r\n          </li>\r\n        </ol>\r\n      </nav>\r\n\r\n      <div class=\"py-5 px-3\">\r\n        <h1>\r\n          Product Catalog\r\n        </h1>\r\n        <div class='p-4'>\r\n          <mat-spinner *ngIf=\"!products\">Loading products.</mat-spinner>\r\n\r\n          <div class=\"card-group\">\r\n            <mat-card *ngFor=\"let product of products; let ind = index\" class=\"col-sm-6 col-md-4 col-lg-3\">\r\n              <a [routerLink]=\"['/gifts/view', {_id: product._id}]\">\r\n                <img *ngIf=\"product.img && product.img.length\" mat-card-image src=\"/assets/{{product.img[0]}}\" />\r\n              </a>\r\n              <mat-card-title>{{product.name}}</mat-card-title>\r\n              <mat-card-subtitle>\r\n                <div>{{product.price}}</div>\r\n              </mat-card-subtitle>\r\n              <mat-card-content>\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <input matInput type=\"number\" step=\"1\" min=\"1\" [(ngModel)]=\"productCurrentQty[ind]\" />\r\n                </mat-form-field>\r\n                <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"addToCart(ind)\">Add</button>\r\n                <!-- <button mat-raised-button (click)=\"updateInCart(ind)\">Update</button> -->\r\n              </mat-card-content>\r\n            </mat-card>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bottom-right text-secondary\">\r\n        <i (click)=\"ScrollToTop()\" class='fa fa-chevron-circle-up fa-3x'></i>\r\n      </div>\r\n    </div>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "./src/app/gifts-browse/browse.component.css":
/*!***************************************************!*\
  !*** ./src/app/gifts-browse/browse.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWJyb3dzZS9icm93c2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts-browse/browse.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gifts-browse/browse.component.ts ***!
  \**************************************************/
/*! exports provided: BrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseComponent", function() { return BrowseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");
/* harmony import */ var _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/cart-api.service */ "./src/app/core/services/cart-api.service.ts");





let BrowseComponent = class BrowseComponent {
    constructor(productsApiService, cartApiService, activatedRoute, router) {
        this.productsApiService = productsApiService;
        this.cartApiService = cartApiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.categoryBreadcrumb = null;
        this.products = null;
        this.productCurrentQty = [];
        this.activatedRoute.params.subscribe(p => {
            this.refresh(p.category);
        });
    }
    getProducts(category) {
        this.productsApiService.getProducts(category).subscribe(data => {
            this.products = data;
            this.productCurrentQty = [];
            data.forEach(d => {
                this.productCurrentQty.push(1);
            });
        }, err => {
            console.log(err.error);
        });
    }
    refresh(category) {
        this.getProducts(category);
        if (category) {
            this.categoryBreadcrumb = category.split('/');
            if (!this.categoryBreadcrumb[0]) {
                this.categoryBreadcrumb.splice(0, 1);
            }
        }
    }
    onBreadcrumb(ind) {
        let newCategory = '';
        for (let i = 0; i <= ind; ++i) {
            newCategory += '/' + this.categoryBreadcrumb[i];
        }
        console.log(newCategory);
        return this.router.navigate(['/gifts/browse', { category: newCategory }]);
    }
    addToCart(i) {
        this.cartApiService.addToCart(this.products[i], this.productCurrentQty[i]);
    }
    updateInCart(i) {
        this.cartApiService.updateInCart(this.products[i], this.productCurrentQty[i]);
    }
    ScrollToTop() { }
};
BrowseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gifts-browse',
        template: __webpack_require__(/*! raw-loader!./browse.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-browse/browse.component.html"),
        styles: [__webpack_require__(/*! ./browse.component.css */ "./src/app/gifts-browse/browse.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__["ProductsApiService"],
        _core_services_cart_api_service__WEBPACK_IMPORTED_MODULE_4__["CartApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BrowseComponent);



/***/ }),

/***/ "./src/app/gifts-browse/gifts-browse.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gifts-browse/gifts-browse.module.ts ***!
  \*****************************************************/
/*! exports provided: GiftsBrowseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsBrowseModule", function() { return GiftsBrowseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _browse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browse.component */ "./src/app/gifts-browse/browse.component.ts");





const giftsBrowseRoutes = [
    { path: '', children: [{ path: '', component: _browse_component__WEBPACK_IMPORTED_MODULE_4__["BrowseComponent"] }] }
];
let GiftsBrowseModule = class GiftsBrowseModule {
};
GiftsBrowseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_browse_component__WEBPACK_IMPORTED_MODULE_4__["BrowseComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(giftsBrowseRoutes)]
    })
], GiftsBrowseModule);



/***/ })

}]);
//# sourceMappingURL=gifts-browse-gifts-browse-module-es2015.js.map