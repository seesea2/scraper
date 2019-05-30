(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>Loading...</router-outlet>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\r\n<footer class=\"container-fluid row py-5\">\r\n  <section class='col-sm-12 col-md-8'>\r\n    <div class=\"d-flex justify-content-start\">\r\n      <section class='mr-4'>\r\n        <i class='fa fa-fw fa-anchor'></i> Corporate Gifts\r\n        <ul class=\"list-unstyled\">\r\n          <li><a routerLink=\"/gifts\">Gifts Home</a></li>\r\n          <li><a routerLink=\"/gifts/browse\">Products</a></li>\r\n          <li><a routerLink=\"/gifts/cart\">Cart</a></li>\r\n          <li><a routerLink=\"/gifts/trackOrder\">Track Order</a></li>\r\n          <li><a routerLink=\"/staffs\">Staffs</a></li>\r\n        </ul>\r\n      </section>\r\n      <section class='mr-4'>\r\n        <i class='fa fa-fw fa-anchor'></i> Web Design\r\n        <ul class=\"list-unstyled\">\r\n          <li><a routerLink=\"/webdev\">Home</a></li>\r\n          <li><a routerLink=\"/webdev/contact\">Contacts</a></li>\r\n        </ul>\r\n      </section>\r\n      <section class='mr-4'>\r\n        <i class='fa fa-fw fa-anchor'></i> Others\r\n        <ul class=\"list-unstyled\">\r\n          <li><a routerLink=\"/dict\">Dictionary</a></li>\r\n          <li><a routerLink=\"/lunch\">Lunchfun</a></li>\r\n        </ul>\r\n      </section>\r\n      <section>\r\n        <i class='fa fa-fw fa-anchor'></i> Development\r\n        <ul class=\"list-unstyled\">\r\n          <li><a href=\"\" target=\"_blank\" class=\"text-muted\">Angular</a></li>\r\n          <li><a href=\"https://mongodb.org\" target=\"_blank\" class=\"text-muted\">Mongodb</a></li>\r\n          <li><a href=\"https://nodejs.org\" target=\"_blank\" class=\"text-muted\">Node.js</a></li>\r\n        </ul>\r\n      </section>\r\n    </div>\r\n  </section>\r\n  <section class='col-sm-12 col-md-4 text-center'>\r\n    <p>\r\n      <img src='/assets/sg_round_icon.png' alt=\"Singapore flag\" class='icon-25' /> Singapore\r\n    </p>\r\n    <ul class=\"list-inline\">\r\n      <a routerLink=\"/\" class=\"list-inline-item\" matTooltip=\"whatsapp\">\r\n        <span class=\"sr-only\" aria-label=\"whatsapp\"></span>\r\n        <i class=\"fa fa-fw fa-whatsapp\"></i>\r\n      </a>\r\n      <a routerLink=\"/\" class=\"list-inline-item\" matTooltip=\"wechat\">\r\n        <i class=\"fa fa-fw fa-weixin\"></i>\r\n      </a>\r\n      <a routerLink=\"/\" class=\"list-inline-item\" matTooltip=\"facebook\">\r\n        <i class=\"fa fa-fw fa-facebook-official\"></i>\r\n      </a>\r\n      <a routerLink=\"/\" class=\"list-inline-item\" matTooltip=\"twitter\">\r\n        <i class=\"fa fa-fw fa-twitter\"></i>\r\n      </a>\r\n      <a routerLink=\"/\" class=\"list-inline-item\" matTooltip=\"linkedin\">\r\n        <i class=\"fa fa-fw fa-linkedin\"></i>\r\n      </a>\r\n    </ul>\r\n    <div class=\"small\">Copyright &copy; 2019. All rights reserved.</div>\r\n  </section>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/categories-tree/categories-tree.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/categories-tree/categories-tree.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-button (click)=\"showCatalog(node.category)\">{{node.name}}</button>\r\n    <button mat-icon-button disabled></button>\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\r\n    <button mat-button (click)=\"showCatalog(node.category)\">{{node.name}}</button>\r\n    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n      <i [ngClass]=\"treeControl.isExpanded(node) ?'fa fa-chevron-down':'fa fa-chevron-right'\"></i>\r\n    </button>\r\n  </mat-tree-node>\r\n</mat-tree>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/send-message/send-message.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/send-message/send-message.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"sendMessageFormGroup\" class=\"container\">\r\n  <mat-form-field appearance=\"outline\" class=\"col-sm-12 col-md-6\">\r\n    <mat-label>Name</mat-label>\r\n    <input matInput formControlName='name' required />\r\n  </mat-form-field>\r\n  <mat-form-field appearance=\"outline\" class=\"col-sm-12 col-md-6\">\r\n    <mat-label>Mobile</mat-label>\r\n    <input matInput formControlName='mobile' type=\"tel\" required />\r\n  </mat-form-field>\r\n  <mat-form-field appearance=\"outline\" class=\"col-12\">\r\n    <mat-label>Email</mat-label>\r\n    <input matInput formControlName='email' type=\"email\" required />\r\n  </mat-form-field>\r\n  <mat-form-field appearance=\"outline\" class=\"col-12\">\r\n    <mat-label>Message</mat-label>\r\n    <textarea matInput formControlName='message' required></textarea>\r\n  </mat-form-field>\r\n  <div>\r\n    <button mat-raised-button color=\"primary\" (click)=\"sendMessage()\">\r\n      <i class=\"fa fa-paper-plane\"></i> Send Message\r\n    </button>\r\n    <mat-error>{{msgRslt}}</mat-error>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../gifts-browse/gifts-browse.module": [
		"./src/app/gifts-browse/gifts-browse.module.ts",
		"common",
		"gifts-browse-gifts-browse-module"
	],
	"../gifts-cart/gifts-cart.module": [
		"./src/app/gifts-cart/gifts-cart.module.ts",
		"common",
		"gifts-cart-gifts-cart-module"
	],
	"../gifts-home/gifts-home.module": [
		"./src/app/gifts-home/gifts-home.module.ts",
		"gifts-home-gifts-home-module"
	],
	"../gifts-track-order/gifts-track-order.module": [
		"./src/app/gifts-track-order/gifts-track-order.module.ts",
		"gifts-track-order-gifts-track-order-module"
	],
	"../gifts-view-product/gifts-view-product.module": [
		"./src/app/gifts-view-product/gifts-view-product.module.ts",
		"common",
		"gifts-view-product-gifts-view-product-module"
	],
	"../register-login/register-login.module": [
		"./src/app/register-login/register-login.module.ts",
		"default~register-login-register-login-module~staffs-staffs-module"
	],
	"../staffs-inventory/staffs-inventory.module": [
		"./src/app/staffs-inventory/staffs-inventory.module.ts",
		"staffs-inventory-staffs-inventory-module"
	],
	"./dictionary/dictionary.module": [
		"./src/app/dictionary/dictionary.module.ts",
		"dictionary-dictionary-module"
	],
	"./gifts/gifts.module": [
		"./src/app/gifts/gifts.module.ts",
		"common",
		"gifts-gifts-module"
	],
	"./lunchfun/lunchfun.module": [
		"./src/app/lunchfun/lunchfun.module.ts",
		"lunchfun-lunchfun-module"
	],
	"./staffs/staffs.module": [
		"./src/app/staffs/staffs.module.ts",
		"default~register-login-register-login-module~staffs-staffs-module",
		"staffs-staffs-module"
	],
	"./web-dev/web-dev.module": [
		"./src/app/web-dev/web-dev.module.ts",
		"web-dev-web-dev-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        redirectTo: 'gifts',
        pathMatch: 'full'
    },
    {
        path: 'gifts',
        loadChildren: './gifts/gifts.module#GiftsModule'
    },
    {
        path: 'dict',
        loadChildren: './dictionary/dictionary.module#DictionaryModule'
    },
    {
        path: 'lunch',
        loadChildren: './lunchfun/lunchfun.module#LunchfunModule'
    },
    { path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule' },
    { path: 'webdev', loadChildren: './web-dev/web-dev.module#WebDevModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], enableTracing: false } // true for debugging
                )
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                // GiftsModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                // NgZorroAntdModule.forRoot()
                // ServiceWorkerModule.register('ngsw-worker.js', {
                //   enabled: true
                // })
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-error.interceptor */ "./src/app/core/http-error.interceptor.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_6__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpErrorInterceptor"],
                    multi: true
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/http-error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http-error.interceptor.ts ***!
  \************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor() {
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "client-Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage =
                    "Server-Error Code: " + error.status + "\nMessage: " +
                        JSON.stringify(error.error);
            }
            // window.alert(JSON.stringify(errorMessage));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error.error);
        }));
    };
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http-interface.ts":
/*!****************************************!*\
  !*** ./src/app/core/http-interface.ts ***!
  \****************************************/
/*! exports provided: httpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/products-interface.ts":
/*!********************************************!*\
  !*** ./src/app/core/products-interface.ts ***!
  \********************************************/
/*! exports provided: CategoryNode, CategoryFlatNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryNode", function() { return CategoryNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFlatNode", function() { return CategoryFlatNode; });
var CategoryNode = /** @class */ (function () {
    function CategoryNode() {
    }
    return CategoryNode;
}());

var CategoryFlatNode = /** @class */ (function () {
    function CategoryFlatNode(expandable, name, category, level) {
        this.expandable = expandable;
        this.name = name;
        this.category = category;
        this.level = level;
    }
    return CategoryFlatNode;
}());



/***/ }),

/***/ "./src/app/core/services/products-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/products-api.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsApiService", function() { return ProductsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-interface */ "./src/app/core/http-interface.ts");




var ProductsApiService = /** @class */ (function () {
    function ProductsApiService(http) {
        this.http = http;
    }
    ProductsApiService.prototype.getCategories = function () {
        return this.http.get('/api/gifts/products/categories');
    };
    ProductsApiService.prototype.getCategoriesWithSamples = function () {
        return this.http.get('/api/gifts/products/samples');
    };
    ProductsApiService.prototype.getProducts = function (category) {
        if (category) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('category', category);
            return this.http.get('/api/gifts/products', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
                params: params
            });
        }
        else {
            return this.http.get('/api/gifts/products');
        }
    };
    ProductsApiService.prototype.getOneProduct = function (id) {
        if (!id) {
            return;
        }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', id);
        return this.http.get('/api/gifts/products/product', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
            params: params
        });
    };
    ProductsApiService.prototype.getInventory = function () {
        return this.http.get('/api/gifts/products/inventory');
    };
    ProductsApiService.prototype.updateInventory = function (_id, qty) {
        return this.http.put('/api/gifts/products/inventory', { _id: _id, qty: qty }, _http_interface__WEBPACK_IMPORTED_MODULE_3__["httpOptions"]);
    };
    ProductsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsApiService);
    return ProductsApiService;
}());



/***/ }),

/***/ "./src/app/core/services/users.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-interface */ "./src/app/core/http-interface.ts");





var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.bLogin$ = this.loginStatusSubject.asObservable();
        this.httpClient.get('/api/gifts/users/info').subscribe(function (data) {
            if (data.uid) {
                _this.loginStatusSubject.next(true);
                _this.uid = data.uid;
            }
        });
    }
    UsersService.prototype.sendLoginStatus = function (message) {
        this.loginStatusSubject.next(message); //all subscribers get the new value
    };
    UsersService.prototype.register = function (formGroup) {
        var user = {
            uid: formGroup.controls.uid.value,
            email: formGroup.controls.email.value.trim(),
            pwd: formGroup.controls.pwd.value,
            firstName: formGroup.controls.firstName.value.trim(),
            lastName: formGroup.controls.lastName.value.trim()
        };
        console.log(user);
        return this.httpClient.post('/api/gifts/users/register', user, _http_interface__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    UsersService.prototype.login = function (bStaff, uid, pwd) {
        if (!(uid || '').trim() || !pwd) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Username and password are required.');
        }
        return this.httpClient.post(bStaff ? '/api/gifts/staffs/login' : '/api/gifts/users/login', { uid: uid, pwd: pwd }, _http_interface__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    UsersService.prototype.logout = function (bStaff) {
        this.httpClient
            .get(bStaff ? '/api/gifts/staffs/logout' : '/api/gifts/users/logout')
            .subscribe(function (r) {
            console.log(r);
        });
        this.loginStatusSubject.next(false);
    };
    UsersService.prototype.sendMessage = function (params) {
        return this.httpClient.post('/api/gifts/users/message', params, _http_interface__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/categories-tree/categories-tree.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/categories-tree/categories-tree.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXRlZ29yaWVzLXRyZWUvY2F0ZWdvcmllcy10cmVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/categories-tree/categories-tree.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/categories-tree/categories-tree.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriesTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTreeComponent", function() { return CategoriesTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_products_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/products-interface */ "./src/app/core/products-interface.ts");
/* harmony import */ var _core_services_products_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/products-api.service */ "./src/app/core/services/products-api.service.ts");








var CategoriesTreeComponent = /** @class */ (function () {
    function CategoriesTreeComponent(productsApiService, router) {
        this.productsApiService = productsApiService;
        this.router = router;
        this.transformer = function (node, level) {
            return new _core_products_interface__WEBPACK_IMPORTED_MODULE_6__["CategoryFlatNode"](!!node.children, node.name, node.category, level);
        };
        this._getLevel = function (node) { return node.level; };
        this._isExpandable = function (node) { return node.expandable; };
        this._getChildren = function (node) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlattener"](this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this._getLevel, this._isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_4__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
    }
    CategoriesTreeComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesTreeComponent.prototype.getCategories = function () {
        var _this = this;
        this.productsApiService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
            _this.buildCategoriesTree();
        }, function (err) {
            _this.categoriesErr = err.error;
        });
    };
    CategoriesTreeComponent.prototype.showCatalog = function (category) {
        return this.router.navigate(['/gifts/browse', { category: category }]);
    };
    CategoriesTreeComponent.prototype.buildCategoriesTree = function () {
        var _this = this;
        this.categoriesTree = [];
        this.categories.forEach(function (category) {
            var node = new _core_products_interface__WEBPACK_IMPORTED_MODULE_6__["CategoryNode"]();
            node.name = category.name;
            node.parent = category.parent;
            node.category = category.category;
            node.children = null;
            if (!node.parent) {
                _this.categoriesTree.push(node);
            }
            else {
                _this.categoriesTree.forEach(function (categoryNode) {
                    if (categoryNode.name.toLowerCase() == node.parent.toLowerCase()) {
                        if (!categoryNode.children) {
                            categoryNode.children = [];
                        }
                        categoryNode.children.push(node);
                    }
                });
            }
        });
        this.dataSource.data = this.categoriesTree;
    };
    CategoriesTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categories-tree',
            template: __webpack_require__(/*! raw-loader!./categories-tree.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/categories-tree/categories-tree.component.html"),
            styles: [__webpack_require__(/*! ./categories-tree.component.css */ "./src/app/shared/categories-tree/categories-tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_products_api_service__WEBPACK_IMPORTED_MODULE_7__["ProductsApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesTreeComponent);
    return CategoriesTreeComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");








































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/ng-bootstrap.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/ng-bootstrap.module.ts ***!
  \***********************************************/
/*! exports provided: NgBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapModule", function() { return NgBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgBootstrapModule = /** @class */ (function () {
    function NgBootstrapModule() {
    }
    NgBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"]]
        })
    ], NgBootstrapModule);
    return NgBootstrapModule;
}());



/***/ }),

/***/ "./src/app/shared/send-message/send-message.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/send-message/send-message.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZW5kLW1lc3NhZ2Uvc2VuZC1tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/send-message/send-message.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/send-message/send-message.component.ts ***!
  \***************************************************************/
/*! exports provided: SendMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageComponent", function() { return SendMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/users.service */ "./src/app/core/services/users.service.ts");




var SendMessageComponent = /** @class */ (function () {
    function SendMessageComponent(usersService) {
        this.usersService = usersService;
        this.sendMessageFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    SendMessageComponent.prototype.ngOnInit = function () {
        this.msgRslt = '';
    };
    SendMessageComponent.prototype.sendMessage = function () {
        var _this = this;
        var params = {
            name: this.sendMessageFormGroup.controls.name.value,
            mobile: this.sendMessageFormGroup.controls.mobile.value,
            email: this.sendMessageFormGroup.controls.email.value,
            message: this.sendMessageFormGroup.controls.message.value
        };
        this.usersService.sendMessage(params).subscribe(function (data) {
            _this.msgRslt = 'Message sent.';
        });
    };
    SendMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'send-message',
            template: __webpack_require__(/*! raw-loader!./send-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/send-message/send-message.component.html"),
            styles: [__webpack_require__(/*! ./send-message.component.css */ "./src/app/shared/send-message/send-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], SendMessageComponent);
    return SendMessageComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-bootstrap.module */ "./src/app/shared/ng-bootstrap.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categories-tree/categories-tree.component */ "./src/app/shared/categories-tree/categories-tree.component.ts");
/* harmony import */ var _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-message/send-message.component */ "./src/app/shared/send-message/send-message.component.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesTreeComponent"], _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_9__["SendMessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgBootstrapModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgBootstrapModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _categories_tree_categories_tree_component__WEBPACK_IMPORTED_MODULE_8__["CategoriesTreeComponent"],
                _send_message_send_message_component__WEBPACK_IMPORTED_MODULE_9__["SendMessageComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\yc_projects\insg\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map