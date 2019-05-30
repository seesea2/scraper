(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dictionary-dictionary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dictionary/oxford/oxford.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dictionary/oxford/oxford.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container py-4\">\r\n  <mat-card>\r\n    <mat-card-title class=\"my-4\">\r\n      <h2>Oxford Dictionary</h2>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n      <div class=\"mb-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Word to check\" #oxfordInput type=\"text\"\r\n            (keyup.enter)=\"getOxfordDefinition(oxfordInput.value)\" />\r\n          <i matSuffix class=\"fa fa-search\" (click)=\"getOxfordDefinition(oxfordInput.value)\"></i>\r\n        </mat-form-field>\r\n        <!-- <button mat-raised-button color=\"primary\" (click)=\"getOxfordDefinition(oxfordInput.value)\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </button> -->\r\n      </div>\r\n      <div *ngIf=\"bChecking\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n      <div *ngIf=\"!bChecking\">\r\n        <div *ngIf=\"definitionArray?.length>0\">\r\n          <p>Definitions</p>\r\n          <ol>\r\n            <li *ngFor=\"let item of definitionArray; let i = index\">\r\n              {{item}}\r\n            </li>\r\n          </ol>\r\n        </div>\r\n        <mat-error *ngIf=\"errMsg\">{{errMsg}}</mat-error>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/dictionary/dictionary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dictionary/dictionary.module.ts ***!
  \*************************************************/
/*! exports provided: DictionaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryModule", function() { return DictionaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _oxford_oxford_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oxford/oxford.component */ "./src/app/dictionary/oxford/oxford.component.ts");





const routes = [{ path: '', component: _oxford_oxford_component__WEBPACK_IMPORTED_MODULE_4__["OxfordComponent"] }];
let DictionaryModule = class DictionaryModule {
};
DictionaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_oxford_oxford_component__WEBPACK_IMPORTED_MODULE_4__["OxfordComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })
], DictionaryModule);



/***/ }),

/***/ "./src/app/dictionary/dictionary.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dictionary/dictionary.service.ts ***!
  \**************************************************/
/*! exports provided: DictionaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryService", function() { return DictionaryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DictionaryService = class DictionaryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getOxfordDefinition(word) {
        return this.httpClient.get(`/api/dictionary/oxford/${word}`);
    }
};
DictionaryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DictionaryService);



/***/ }),

/***/ "./src/app/dictionary/oxford/oxford.component.css":
/*!********************************************************!*\
  !*** ./src/app/dictionary/oxford/oxford.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY3Rpb25hcnkvb3hmb3JkL294Zm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dictionary/oxford/oxford.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dictionary/oxford/oxford.component.ts ***!
  \*******************************************************/
/*! exports provided: OxfordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxfordComponent", function() { return OxfordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dictionary_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dictionary.service */ "./src/app/dictionary/dictionary.service.ts");



let OxfordComponent = class OxfordComponent {
    constructor(dictionaryService) {
        this.dictionaryService = dictionaryService;
    }
    ngOnInit() {
        this.definitionArray = [];
        this.errMsg = '';
        this.bChecking = false;
    }
    getOxfordDefinition(word) {
        if (!(word || '').trim()) {
            return (this.errMsg = 'Please input a word.');
        }
        this.bChecking = true;
        // this.dictionaryService.getOxfordDefinition(word, (err, definition) => {
        //   this.errMsg = err;
        //   this.oxfordDefinition = definition;
        //   this.bChecking = false;
        // });
        this.dictionaryService.getOxfordDefinition(word.trim()).subscribe(definition => {
            this.definitionArray = this.formatDefinition(definition);
            this.errMsg = '';
            this.bChecking = false;
        }, err => {
            this.definitionArray = [];
            this.errMsg = err;
            this.bChecking = false;
        });
    }
    formatDefinition(oxfordDefinition) {
        let formatedDefinition = [];
        oxfordDefinition.results.forEach(result => {
            result.lexicalEntries.forEach(lexicalEntry => {
                lexicalEntry.entries.forEach(entry => {
                    entry.senses.forEach(sense => {
                        if (sense.definitions) {
                            sense.definitions.forEach(definition => {
                                formatedDefinition.push(definition);
                            });
                        }
                        if (sense.subsenses) {
                            sense.subsenses.forEach(subsense => {
                                if (subsense.definitions) {
                                    subsense.definitions.forEach(definition => {
                                        formatedDefinition.push(definition);
                                    });
                                }
                            });
                        }
                    });
                });
            });
        });
        return formatedDefinition;
    }
};
OxfordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oxford',
        template: __webpack_require__(/*! raw-loader!./oxford.component.html */ "./node_modules/raw-loader/index.js!./src/app/dictionary/oxford/oxford.component.html"),
        styles: [__webpack_require__(/*! ./oxford.component.css */ "./src/app/dictionary/oxford/oxford.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dictionary_service__WEBPACK_IMPORTED_MODULE_2__["DictionaryService"]])
], OxfordComponent);



/***/ })

}]);
//# sourceMappingURL=dictionary-dictionary-module-es2015.js.map