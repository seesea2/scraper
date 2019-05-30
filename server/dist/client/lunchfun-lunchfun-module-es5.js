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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lunchfun-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/lunchfun/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pals_pals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pals/pals.component */ "./src/app/lunchfun/pals/pals.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./records/records.component */ "./src/app/lunchfun/records/records.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/lunchfun/stats/stats.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/lunchfun/home/home.component.ts");








var routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }];
var LunchfunModule = /** @class */ (function () {
    function LunchfunModule() {
    }
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
    return LunchfunModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_http_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/http-interface */ "./src/app/core/http-interface.ts");





var LunchfunService = /** @class */ (function () {
    function LunchfunService(httpClient) {
        this.httpClient = httpClient;
        this.refreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.refresh$ = this.refreshSubject.asObservable();
    }
    LunchfunService.prototype.startRefresh = function () {
        this.refreshSubject.next(true);
    };
    LunchfunService.prototype.getPals = function () {
        return this.httpClient.get('/api/lunchfun/pals');
    };
    LunchfunService.prototype.getStats = function () {
        return this.httpClient.get('/api/lunchfun/stats/attendance');
    };
    LunchfunService.prototype.addRecord = function (params) {
        return this.httpClient.post('/api/lunchfun/record', params, _core_http_interface__WEBPACK_IMPORTED_MODULE_4__["httpOptions"]);
    };
    LunchfunService.prototype.getRecords = function () {
        return this.httpClient.get("/api/lunchfun/records");
    };
    LunchfunService.prototype.deleteRecord = function (lunchRecord) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('_id', lunchRecord._id);
        return this.httpClient.delete('/api/lunchfun/record', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json'),
            params: params
        });
    };
    LunchfunService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LunchfunService);
    return LunchfunService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



var PalsComponent = /** @class */ (function () {
    function PalsComponent(lunchfunService) {
        this.lunchfunService = lunchfunService;
    }
    PalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = '';
        this.addRecordErr = '';
        this.bAddingRecord = false;
        this.lunchPals = [];
        this.lunchPalsErr = '';
        this.palAttendCheckbox = [];
        this.today = new Date().toLocaleString('en-SG');
        setInterval(function () {
            _this.today = new Date().toLocaleString('en-SG');
        }, 1000);
        this.getPals();
    };
    PalsComponent.prototype.getPals = function () {
        var _this = this;
        this.lunchfunService.getPals().subscribe(function (pals) {
            _this.lunchPalsErr = '';
            _this.lunchPals = pals;
            pals.forEach(function (pal) {
                _this.palAttendCheckbox.push(true);
            });
        }, function (err) {
            _this.lunchPalsErr = err.error;
        });
    };
    PalsComponent.prototype.addRecord = function (payerSelect) {
        var _this = this;
        if (!payerSelect) {
            return (this.addRecordErr = 'Please select Payer.');
        }
        if (!this.palAttendCheckbox[payerSelect]) {
            return (this.addRecordErr =
                'Payer is not joining the lunch? Please review checkbox.');
        }
        this.bAddingRecord = true;
        var attendees = [];
        this.palAttendCheckbox.forEach(function (checkbox, ind) {
            if (checkbox) {
                attendees.push(_this.lunchPals[ind].name);
            }
        });
        var params = {
            payer: this.lunchPals[payerSelect].name,
            attendees: attendees
        };
        this.lunchfunService.addRecord(params).subscribe(function (data) {
            _this.addRecordErr = 'Done. Record added.';
            _this.lunchfunService.startRefresh();
            setTimeout(function () {
                _this.addRecordErr = '';
                _this.bAddingRecord = false;
            }, 1500);
        }, function (err) {
            _this.addRecordErr = err;
            _this.bAddingRecord = false;
        });
    };
    PalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lunchfun-pals',
            template: __webpack_require__(/*! raw-loader!./pals.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/pals/pals.component.html"),
            styles: [__webpack_require__(/*! ./pals.component.css */ "./src/app/lunchfun/pals/pals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
    ], PalsComponent);
    return PalsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(lunchfunService) {
        var _this = this;
        this.lunchfunService = lunchfunService;
        this.subscription = lunchfunService.refresh$.subscribe(function (b) {
            _this.getRecords();
        });
    }
    RecordsComponent.prototype.ngOnInit = function () {
        this.lunchRecords = [];
        this.lunchRecordErr = '';
        this.getRecords();
    };
    RecordsComponent.prototype.getRecords = function () {
        var _this = this;
        this.lunchfunService.getRecords().subscribe(function (data) {
            _this.lunchRecordErr = '';
            _this.lunchRecords = data;
        }, function (err) {
            _this.lunchRecordErr = err;
        });
    };
    RecordsComponent.prototype.deleteRecord = function (record) {
        var _this = this;
        this.lunchRecords = this.lunchRecords.filter(function (h) { return h !== record; });
        this.lunchfunService.deleteRecord(record).subscribe(function (data) {
            _this.lunchRecordErr = '';
            _this.lunchfunService.startRefresh();
        }, function (err) {
            _this.lunchRecordErr = err;
        });
    };
    RecordsComponent.prototype.trackById = function (index, record) {
        return record._id;
    };
    RecordsComponent.prototype.getLocalDate = function (lunchRecord) {
        return new Date(lunchRecord.createdOn).toLocaleString('en-SG');
    };
    RecordsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lunchfun-records',
            template: __webpack_require__(/*! raw-loader!./records.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/records/records.component.html"),
            styles: [__webpack_require__(/*! ./records.component.css */ "./src/app/lunchfun/records/records.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lunchfun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lunchfun.service */ "./src/app/lunchfun/lunchfun.service.ts");



var StatsComponent = /** @class */ (function () {
    function StatsComponent(lunchfunService) {
        var _this = this;
        this.lunchfunService = lunchfunService;
        this.subscription = lunchfunService.refresh$.subscribe(function (b) {
            _this.getStats();
        });
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.lunchStats = [];
        this.lunchStatsErr = '';
        this.getStats();
    };
    StatsComponent.prototype.getStats = function () {
        var _this = this;
        this.lunchfunService.getStats().subscribe(function (data) {
            _this.lunchStatsErr = '';
            _this.lunchStats = data;
        }, function (err) {
            _this.lunchStatsErr = err;
        });
    };
    StatsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lunchfun-stats',
            template: __webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/lunchfun/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/lunchfun/stats/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lunchfun_service__WEBPACK_IMPORTED_MODULE_2__["LunchfunService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=lunchfun-lunchfun-module-es5.js.map