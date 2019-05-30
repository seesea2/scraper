(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staffs-inventory-staffs-inventory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/staffs-inventory/inventory.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/staffs-inventory/inventory.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n  <h2 class=\"my-4\">Inventory</h2>\r\n\r\n  <div class=\"row my-4\">\r\n    <mat-card *ngFor=\"let product of products\" class=\"col-6\">\r\n      <div>Name: {{product.name}}</div>\r\n      <div>current quantity: {{getQuantity(product._id)}}</div>\r\n      <div>\r\n        <mat-form-field>\r\n          <mat-label>New Quantity</mat-label>\r\n          <input #newQty matInput type=\"number\">\r\n        </mat-form-field>\r\n        <button mat-button (click)=\"updateInventory(product._id, newQty.value)\">Update</button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/staffs-inventory/inventory.component.css":
/*!**********************************************************!*\
  !*** ./src/app/staffs-inventory/inventory.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmcy1pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/staffs-inventory/inventory.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/staffs-inventory/inventory.component.ts ***!
  \*********************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");



let InventoryComponent = class InventoryComponent {
    constructor(productsApi) {
        this.productsApi = productsApi;
    }
    ngOnInit() {
        this.products = [];
        this.inventory = [];
        this.getProducts();
        this.getInventory();
    }
    getProducts() {
        this.productsApi.getProducts().subscribe(data => {
            this.products = data;
            console.log(data);
        });
    }
    getInventory() {
        this.productsApi.getInventory().subscribe(data => {
            console.log('Inventory: ', data);
            this.inventory = data;
        });
    }
    updateInventory(_id, qty) {
        console.log(_id, qty);
        let qtyInt = parseInt(qty);
        this.productsApi.updateInventory(_id, qtyInt).subscribe(data => {
            console.log('updateInventory: ', data);
        });
        this.getInventory();
    }
    getQuantity(_id) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i]._id === _id) {
                return this.inventory[i].qty;
            }
        }
        return 0;
    }
};
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'staffs-inventory',
        template: __webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/staffs-inventory/inventory.component.html"),
        styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/staffs-inventory/inventory.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApiService"]])
], InventoryComponent);



/***/ }),

/***/ "./src/app/staffs-inventory/staffs-inventory.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/staffs-inventory/staffs-inventory.module.ts ***!
  \*************************************************************/
/*! exports provided: StaffsInventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffsInventoryModule", function() { return StaffsInventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.component */ "./src/app/staffs-inventory/inventory.component.ts");





const routes = [{ path: '', component: _inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"] }];
let StaffsInventoryModule = class StaffsInventoryModule {
};
StaffsInventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_component__WEBPACK_IMPORTED_MODULE_4__["InventoryComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })
], StaffsInventoryModule);



/***/ })

}]);
//# sourceMappingURL=staffs-inventory-staffs-inventory-module-es2015.js.map