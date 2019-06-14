(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lunchfun-lunchfun-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/lunchfun/home/home.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lunchfun/home/home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\r\n  <h1>Lunch Fun</h1>\r\n\r\n  <lunchfun-pals></lunchfun-pals>\r\n\r\n  <lunchfun-stats></lunchfun-stats>\r\n\r\n  <lunchfun-records></lunchfun-records>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lunchfun/pals/pals.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lunchfun/pals/pals.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-5\">\r\n  <h3>Datetime: {{ today }}</h3>\r\n  <section class=\"card-group mt-4\">\r\n    <mat-card class=\"col-6\">\r\n      <mat-card-title>Lunch Pals</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-checkbox *ngFor=\"let pal of lunchPals; let i = index\" class=\"mr-3\" [(ngModel)]=\"palAttendCheckbox[i]\">\r\n          {{ pal.name }}\r\n        </mat-checkbox>\r\n        <mat-error *ngIf=\"lunchPalsErr\">{{lunchPalsErr}}</mat-error>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card class=\"col-6\">\r\n      <mat-card-title>Coffee Payer</mat-card-title>\r\n      <mat-card-content>\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Payer</mat-label>\r\n          <mat-select #payerSelect>\r\n            <mat-option *ngFor=\"let pal of lunchPals; let ind = index\" value=\"{{ ind }}\">{{ pal.name }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <button mat-raised-button matSuffix color=\"primary\" (click)=\"addRecord(payerSelect.value)\" [disabled]=\"bAddingRecord\">\r\n            confirm\r\n          </button>\r\n      <mat-error *ngIf=\"addRecordErr\">{{ addRecordErr }}</mat-error>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  </section>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lunchfun/records/records.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lunchfun/records/records.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-5\">\r\n  <h2>Lunch Records</h2>\r\n  <div class=\"mt-4\">\r\n    <mat-error *ngIf=\"lunchRecordErr\">{{lunchRecordErr}}</mat-error>\r\n    <div *ngIf=\"!lunchRecordErr\" class=\"card-group\">\r\n      <mat-card *ngFor=\"let record of lunchRecords; trackBy: trackById\" class=\"col-sm-12 col-md-4 mb-3\">\r\n        <mat-card-title>{{ getLocalDate(record) }}</mat-card-title>\r\n        <mat-card-content>\r\n          <div><b>Attendees:</b> {{ record.attendees }}</div>\r\n          <div><b>Payer:</b> {{ record.payer }}</div>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n          <button mat-button (click)=\"deleteRecord(record)\">\r\n            <i class=\"fa fa-trash\"></i>\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lunchfun/stats/stats.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lunchfun/stats/stats.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-5\">\r\n  <h2>Stats</h2>\r\n  <div class=\"mt-4\">\r\n    <mat-error *ngIf=\"lunchStatsErr\">{{lunchStatsErr}}</mat-error>\r\n    <div *ngIf=\"!lunchStatsErr\" class=\"card-group\">\r\n      <mat-card *ngFor=\"let item of lunchStats\" class=\"col-sm-12 col-md-4\">\r\n        <mat-card-title color=\"primary\">\r\n          <h4>{{item.name}}</h4>\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n          <div><b>Attendance:</b> {{item.attendance}} times</div>\r\n          <!-- <div>Payment(S$): {{item.payment.toFixed(2)}}</div> -->\r\n          <!-- <div>\r\n            Payment(per attendance): {{(item.payment/item.attendance).toFixed(2)}}\r\n          </div> -->\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/lunchfun/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/lunchfun/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmNoZnVuL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lunchfun/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/lunchfun/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lunchfun-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/lunchfun/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/lunchfun/lunchfun.module.ts":
/*!*********************************************!*\
  !*** ./src/app/lunchfun/lunchfun.module.ts ***!
  \*********************************************/
/*! exports provided: LunchfunModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchfunModule", function() { return LunchfunModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pals_pals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pals/pals.component */ "./src/app/lunchfun/pals/pals.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./records/records.component */ "./src/app/lunchfun/records/records.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/lunchfun/stats/stats.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/lunchfun/home/home.component.ts");








const routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }];
let LunchfunModule = class LunchfunModule {
};
LunchfunModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _records_records_component__WEBPACK_IMPORTED_MODULE_5__["RecordsComponent"],
            _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
            _pals_pals_component__WEBPACK_IMPORTED_MODULE_4__["PalsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
        ],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [],
        providers: []
    })
], LunchfunModule);



/***/ }),

/***/ "./src/app/lunchfun/lunchfun.service.ts":
/*!**********************************************!*\
  !*** ./src/app/lunchfun/lunchfun.service.ts ***!
  \**********************************************/
/*! exports provided: LunchfunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LunchfunService", function() { return LunchfunService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_http_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http-interface */ "./src/app/core/http-interface.ts");





let LunchfunService = class LunchfunService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.refresh$ = this.refreshSubject.asObservable();
    }
    startRefresh() {
        this.refreshSubject.next(true);
    }
    getPals() {
        return this.httpClient.get('/api/lunchfun/pals');
    }
    getStats() {
        return this.httpClient.get('/api/lunchfun/stats/attendance');
    }
    addRecord(params) {
        return this.httpClient.post('/api/lunchfun/record', params, _core_http_interface__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    }
    getRecords() {
        return this.httpClient.get('/api/lunchfun/records');
    }
    deleteRecord(lunchRecord) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', lunchRecord._id);
        return this.httpClient.delete('/api/lunchfun/record', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
            params: params
        });
    }
};
LunchfunService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LunchfunService);



/***/ }),

/***/ "./src/app/lunchfun/pals/pals.component.css":
/*!**************************************************!*\
  !*** ./src/app/lunchfun/pals/pals.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmNoZnVuL3BhbHMvcGFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lunchfun/pals/pals.component.ts":
/*!*************************************************!*\
  !*** ./src/app/lunchfun/pals/pals.component.ts ***!
  \*************************************************/
/*! exports provided: PalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalsComponent", function() { return PalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



let PalsComponent = class PalsComponent {
    constructor(lunchfunService) {
        this.lunchfunService = lunchfunService;
    }
    ngOnInit() {
        this.today = '';
        this.addRecordErr = '';
        this.bAddingRecord = false;
        this.lunchPals = [];
        this.lunchPalsErr = '';
        this.palAttendCheckbox = [];
        this.today = new Date().toLocaleString('en-SG');
        setInterval(() => {
            this.today = new Date().toLocaleString('en-SG');
        }, 1000);
        this.getPals();
    }
    getPals() {
        this.lunchfunService.getPals().subscribe(pals => {
            this.lunchPalsErr = '';
            this.lunchPals = pals;
            pals.forEach(pal => {
                this.palAttendCheckbox.push(true);
            });
        }, err => {
            this.lunchPalsErr = err.error;
        });
    }
    addRecord(payerSelect) {
        if (!payerSelect) {
            return (this.addRecordErr = 'Please select Payer.');
        }
        if (!this.palAttendCheckbox[payerSelect]) {
            return (this.addRecordErr =
                'Payer is not joining the lunch? Please review checkbox.');
        }
        this.bAddingRecord = true;
        const attendees = [];
        this.palAttendCheckbox.forEach((checkbox, ind) => {
            if (checkbox) {
                attendees.push(this.lunchPals[ind].name);
            }
        });
        const params = {
            payer: this.lunchPals[payerSelect].name,
            attendees: attendees
        };
        this.lunchfunService.addRecord(params).subscribe(data => {
            this.addRecordErr = 'Done. Record added.';
            this.lunchfunService.startRefresh();
            setTimeout(() => {
                this.addRecordErr = '';
                this.bAddingRecord = false;
            }, 1500);
        }, err => {
            this.addRecordErr = err;
            this.bAddingRecord = false;
        });
    }
};
PalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lunchfun-pals',
        template: __webpack_require__(/*! raw-loader!./pals.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/pals/pals.component.html"),
        styles: [__webpack_require__(/*! ./pals.component.css */ "./src/app/lunchfun/pals/pals.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
], PalsComponent);



/***/ }),

/***/ "./src/app/lunchfun/records/records.component.css":
/*!********************************************************!*\
  !*** ./src/app/lunchfun/records/records.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmNoZnVuL3JlY29yZHMvcmVjb3Jkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lunchfun/records/records.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/lunchfun/records/records.component.ts ***!
  \*******************************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



let RecordsComponent = class RecordsComponent {
    constructor(lunchfunService) {
        this.lunchfunService = lunchfunService;
        this.subscription = lunchfunService.refresh$.subscribe(b => {
            this.getRecords();
        });
    }
    ngOnInit() {
        this.lunchRecords = [];
        this.lunchRecordErr = '';
        this.getRecords();
    }
    getRecords() {
        this.lunchfunService.getRecords().subscribe(data => {
            this.lunchRecordErr = '';
            this.lunchRecords = data;
        }, err => {
            this.lunchRecordErr = err;
        });
    }
    deleteRecord(record) {
        this.lunchRecords = this.lunchRecords.filter(h => h !== record);
        this.lunchfunService.deleteRecord(record).subscribe(data => {
            this.lunchRecordErr = '';
            this.lunchfunService.startRefresh();
        }, err => {
            this.lunchRecordErr = err;
        });
    }
    trackById(index, record) {
        return record._id;
    }
    getLocalDate(lunchRecord) {
        return new Date(lunchRecord.createdOn).toLocaleString('en-SG');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lunchfun-records',
        template: __webpack_require__(/*! raw-loader!./records.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/records/records.component.html"),
        styles: [__webpack_require__(/*! ./records.component.css */ "./src/app/lunchfun/records/records.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
], RecordsComponent);



/***/ }),

/***/ "./src/app/lunchfun/stats/stats.component.css":
/*!****************************************************!*\
  !*** ./src/app/lunchfun/stats/stats.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1bmNoZnVuL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/lunchfun/stats/stats.component.ts":
/*!***************************************************!*\
  !*** ./src/app/lunchfun/stats/stats.component.ts ***!
  \***************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



let StatsComponent = class StatsComponent {
    constructor(lunchfunService) {
        this.lunchfunService = lunchfunService;
        this.subscription = lunchfunService.refresh$.subscribe(b => {
            this.getStats();
        });
    }
    ngOnInit() {
        this.lunchStats = [];
        this.lunchStatsErr = '';
        this.getStats();
    }
    getStats() {
        this.lunchfunService.getStats().subscribe(data => {
            this.lunchStatsErr = '';
            this.lunchStats = data;
        }, err => {
            this.lunchStatsErr = err;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lunchfun-stats',
        template: __webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/stats/stats.component.html"),
        styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/lunchfun/stats/stats.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
], StatsComponent);



/***/ })

}]);
//# sourceMappingURL=lunchfun-lunchfun-module-es2015.js.map