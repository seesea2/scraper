(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gifts-home-gifts-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-home/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-home/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container-fluid mt-5\">\r\n  <h2>\r\n    <i class=\"fa fa-leaf\"></i>\r\n    About Me\r\n  </h2>\r\n  <div class=\"p-2\">\r\n    <b>\r\n      Me, having 10 years of experience for corporate gifts sales in Singapore, exploring the customer requirements and\r\n      satisfactions.\r\n      I have a heart of love and an interest in sales market, enjoying customer relationship communication and bridging\r\n      between\r\n      users and merchants. Let's keep in touch.\r\n    </b>\r\n  </div>\r\n</article>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-home/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-home/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5\">\r\n  <h2>\r\n    <i class=\"fa fa-leaf\"></i>Contact Me\r\n  </h2>\r\n  <section class=\"card-group text-center mt-4 mx-5\">\r\n    <mat-card class=\"col-sm-12 col-md-4\">\r\n      <div class=\"display-4 p-4\">\r\n        <i class=\"fa fa-envelope\"></i>\r\n      </div>\r\n      <h4 class=\"pb-2\">\r\n        <a href=\"mailto:ying1985cly@hotmail.com\">\r\n          <b>mail@mail.com</b>\r\n        </a>\r\n      </h4>\r\n    </mat-card>\r\n    <mat-card class=\"col-sm-12 col-md-4\">\r\n      <div class=\"display-4 p-4\">\r\n        <i class=\"fa fa-map-marker\"></i>\r\n      </div>\r\n      <h4 class=\"pb-2\">\r\n        <b>Bendemeer Rd, Singapore</b>\r\n      </h4>\r\n    </mat-card>\r\n    <mat-card class=\"col-sm-12 col-md-4\">\r\n      <div class=\"display-4 p-4\">\r\n        <i class=\"fa fa-phone\"></i>\r\n      </div>\r\n      <h4 class=\"pb-2\">\r\n        <b>+65 xxxxxxx</b>\r\n      </h4>\r\n    </mat-card>\r\n  </section>\r\n  <h3 class=\"mt-5 text-center\">Let's get in touch, send me a message.</h3>\r\n  <div class=\"card-group mt-4\">\r\n    <mat-card class=\"col-sm-12 col-md-6\">\r\n      <send-message></send-message>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"col-sm-12 col-md-6\">\r\n      <div id=\"google-map\" style='height:100%'></div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <!-- <iframe width=\"100%\" height=\"450\" frameborder=\"0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJC5M4X9MZ2jER--Ak_cUs0O4&key=AIzaSyBWvzbLWJBSk55arqoqrFEqlDilP2BPzBI\"\r\n      allowfullscreen>\r\n    </iframe> -->\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-home/gifts-home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-home/gifts-home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<home-carousel></home-carousel>\r\n\r\n<home-about></home-about>\r\n\r\n<home-categories></home-categories>\r\n\r\n<home-contact></home-contact>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-home/home-carousel/home-carousel.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-home/home-carousel/home-carousel.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf=\"images\">\r\n  <div *ngFor=\"let image of images\">\r\n    <ng-template ngbSlide>\r\n      <img class=\"vh-100\" [src]=\"image.src\" alt=\"Random first slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>{{image.title}}</h3>\r\n        <p>{{image?.description}}</p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</ngb-carousel>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gifts-home/home-categories/home-categories.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gifts-home/home-categories/home-categories.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid mt-5\">\r\n  <h2>\r\n    <i class=\"fa fa-fw fa-leaf\"></i> Products Categories\r\n  </h2>\r\n  <mat-spinner *ngIf=\"loading\" class=\"m-4\"></mat-spinner>\r\n  <section class=\"container\">\r\n    <div *ngFor=\"let samplesOfCategory of samplesOfCategories\" class=\"pt-4\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <span>\r\n          <h3>{{getCategoryName(samplesOfCategory)}}</h3>\r\n        </span>\r\n        <span class=\"float-right\">\r\n          <a (click)=\"browseCategory(samplesOfCategory._id.category)\">\r\n            view more\r\n          </a>\r\n        </span>\r\n      </div>\r\n      <div class=\"card-group\">\r\n        <mat-card *ngFor=\"let sample of samplesOfCategory.products\" class=\"p-3 col-sm-6 col-md-4 col-lg-3\">\r\n          <mat-card-content class=\"p-1\">\r\n            <a (click)=\"browseCategory(samplesOfCategory._id.category)\">\r\n              <img *ngIf=\"sample.img && sample.img.length>0\" mat-card-image src=\"/assets/{{sample.img[0]}}\" />\r\n            </a>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <mat-divider class=\"mt-4\"></mat-divider>\r\n    </div>\r\n  </section>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/gifts-home/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/gifts-home/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWhvbWUvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gifts-home/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/gifts-home/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/gifts-home/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/gifts-home/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/gifts-home/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWhvbWUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gifts-home/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/gifts-home/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/gifts-home/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gifts-home/gifts-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/gifts-home/gifts-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWhvbWUvZ2lmdHMtaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gifts-home/gifts-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gifts-home/gifts-home.component.ts ***!
  \****************************************************/
/*! exports provided: GiftsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsHomeComponent", function() { return GiftsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GiftsHomeComponent = /** @class */ (function () {
    function GiftsHomeComponent() {
    }
    GiftsHomeComponent.prototype.ngOnInit = function () { };
    GiftsHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gifts-home',
            template: __webpack_require__(/*! raw-loader!./gifts-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-home/gifts-home.component.html"),
            styles: [__webpack_require__(/*! ./gifts-home.component.css */ "./src/app/gifts-home/gifts-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GiftsHomeComponent);
    return GiftsHomeComponent;
}());



/***/ }),

/***/ "./src/app/gifts-home/gifts-home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gifts-home/gifts-home.module.ts ***!
  \*************************************************/
/*! exports provided: GiftsHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftsHomeModule", function() { return GiftsHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _gifts_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gifts-home.component */ "./src/app/gifts-home/gifts-home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/gifts-home/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/gifts-home/contact/contact.component.ts");
/* harmony import */ var _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-carousel/home-carousel.component */ "./src/app/gifts-home/home-carousel/home-carousel.component.ts");
/* harmony import */ var _home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-categories/home-categories.component */ "./src/app/gifts-home/home-categories/home-categories.component.ts");









var giftsHomeRoutes = [{ path: '', component: _gifts_home_component__WEBPACK_IMPORTED_MODULE_4__["GiftsHomeComponent"] }];
var GiftsHomeModule = /** @class */ (function () {
    function GiftsHomeModule() {
    }
    GiftsHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _gifts_home_component__WEBPACK_IMPORTED_MODULE_4__["GiftsHomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _home_categories_home_categories_component__WEBPACK_IMPORTED_MODULE_8__["HomeCategoriesComponent"],
                _home_carousel_home_carousel_component__WEBPACK_IMPORTED_MODULE_7__["HomeCarouselComponent"]
            ],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(giftsHomeRoutes)],
            exports: [_gifts_home_component__WEBPACK_IMPORTED_MODULE_4__["GiftsHomeComponent"]]
        })
    ], GiftsHomeModule);
    return GiftsHomeModule;
}());



/***/ }),

/***/ "./src/app/gifts-home/home-carousel/home-carousel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/gifts-home/home-carousel/home-carousel.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWhvbWUvaG9tZS1jYXJvdXNlbC9ob21lLWNhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/gifts-home/home-carousel/home-carousel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/gifts-home/home-carousel/home-carousel.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCarouselComponent", function() { return HomeCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HomeCarouselComponent = /** @class */ (function () {
    function HomeCarouselComponent(config) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    HomeCarouselComponent.prototype.ngOnInit = function () {
        this.images = [
            {
                src: '/assets/desktop.jpg',
                title: 'desktop',
                description: ''
            },
            { src: '/assets/desktop2.jpg', title: 'desktop2', description: '' },
            { src: '/assets/desktop3.jpg', title: 'desktop3', description: '' }
        ];
    };
    HomeCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-carousel',
            template: __webpack_require__(/*! raw-loader!./home-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-home/home-carousel/home-carousel.component.html"),
            styles: [__webpack_require__(/*! ./home-carousel.component.css */ "./src/app/gifts-home/home-carousel/home-carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], HomeCarouselComponent);
    return HomeCarouselComponent;
}());



/***/ }),

/***/ "./src/app/gifts-home/home-categories/home-categories.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/gifts-home/home-categories/home-categories.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZnRzLWhvbWUvaG9tZS1jYXRlZ29yaWVzL2hvbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gifts-home/home-categories/home-categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/gifts-home/home-categories/home-categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoriesComponent", function() { return HomeCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");




var HomeCategoriesComponent = /** @class */ (function () {
    function HomeCategoriesComponent(productsApi, router) {
        this.productsApi = productsApi;
        this.router = router;
    }
    HomeCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.samplesOfCategories = null;
        this.productsApi.getCategoriesWithSamples().subscribe(function (samples) {
            _this.samplesOfCategories = samples;
            _this.loading = false;
        }, function (err) { });
    };
    HomeCategoriesComponent.prototype.getCategoryName = function (categoryWithSamples) {
        var split = categoryWithSamples._id.category.split('/');
        return split[split.length - 1];
    };
    HomeCategoriesComponent.prototype.browseCategory = function (category) {
        return this.router.navigate(['/gifts/browse', { category: category }]);
    };
    HomeCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-categories',
            template: __webpack_require__(/*! raw-loader!./home-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/gifts-home/home-categories/home-categories.component.html"),
            styles: [__webpack_require__(/*! ./home-categories.component.css */ "./src/app/gifts-home/home-categories/home-categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_api_service__WEBPACK_IMPORTED_MODULE_3__["ProductsApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeCategoriesComponent);
    return HomeCategoriesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=gifts-home-gifts-home-module-es5.js.map