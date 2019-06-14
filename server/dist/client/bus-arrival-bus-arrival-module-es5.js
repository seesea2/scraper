(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bus-arrival-bus-arrival-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bus-arrival/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bus-arrival/home/home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-4\">\r\n  <h1>Bus Arrival Time</h1>\r\n  <h6>Get next bus arrival time by bus stop code.</h6>\r\n  <form class=\"py-4\">\r\n    <mat-form-field>\r\n      <mat-label>Bus Stop Code</mat-label>\r\n      <input matInput #busStopCode type=\"text\" />\r\n      <button\r\n        mat-raised-button\r\n        mat-stroked-button\r\n        matSuffix\r\n        color=\"primary\"\r\n        (click)=\"getBusArrival(busStopCode.value)\"\r\n      >\r\n        Get\r\n      </button>\r\n    </mat-form-field>\r\n  </form>\r\n  <div *ngIf=\"busTable.length > 0\">\r\n    <h4>{{ busStopInfo.Description }}</h4>\r\n    <table\r\n      mat-table\r\n      [dataSource]=\"busTable\"\r\n      width=\"100\"\r\n      class=\"mat-elevation-z8\"\r\n    >\r\n      <ng-container matColumnDef=\"service\">\r\n        <th mat-header-cell *matHeaderCellDef>Service</th>\r\n        <td mat-cell *matCellDef=\"let bus\">{{ bus.service }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"bus1\">\r\n        <th mat-header-cell *matHeaderCellDef>1st-Bus</th>\r\n        <td mat-cell *matCellDef=\"let bus\">{{ bus.bus1 }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"bus2\">\r\n        <th mat-header-cell *matHeaderCellDef>2nd-Bus</th>\r\n        <td mat-cell *matCellDef=\"let bus\">{{ bus.bus2 }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"bus3\">\r\n        <th mat-header-cell *matHeaderCellDef>3rd-Bus</th>\r\n        <td mat-cell *matCellDef=\"let bus\">{{ bus.bus3 }}</td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"load\">\r\n        <th mat-header-cell *matHeaderCellDef>Load</th>\r\n        <td mat-cell *matCellDef=\"let bus\">{{ bus.load }}</td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"busTableColumn\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: busTableColumn\"></tr>\r\n    </table>\r\n\r\n    <button\r\n      *ngIf=\"!bExistingBookmark\"\r\n      mat-stroked-button\r\n      color=\"primary\"\r\n      (click)=\"addBusStopBookmark()\"\r\n      class=\"my-3\"\r\n    >\r\n      Bookmark this Bus Stop\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"busStopBookmark\" class=\"py-4\">\r\n    <h3>Bus Stop Bookmark</h3>\r\n    <mat-action-list *ngFor=\"let busStop of busStopBookmark\" dense>\r\n      <div mat-list-item>\r\n        <button (click)=\"getBusArrival(busStop.BusStopCode)\">\r\n          {{ busStop.BusStopCode }} {{ busStop.Description }} @\r\n          {{ busStop.RoadName }}\r\n        </button>\r\n        <button (click)=\"deleteBusStopBookmark(busStop)\">x</button>\r\n      </div>\r\n    </mat-action-list>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bus-arrival/bus-arrival-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/bus-arrival/bus-arrival-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BusArrivalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusArrivalRoutingModule", function() { return BusArrivalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/bus-arrival/home/home.component.ts");




var routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
var BusArrivalRoutingModule = /** @class */ (function () {
    function BusArrivalRoutingModule() {
    }
    BusArrivalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BusArrivalRoutingModule);
    return BusArrivalRoutingModule;
}());



/***/ }),

/***/ "./src/app/bus-arrival/bus-arrival.module.ts":
/*!***************************************************!*\
  !*** ./src/app/bus-arrival/bus-arrival.module.ts ***!
  \***************************************************/
/*! exports provided: BusArrivalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusArrivalModule", function() { return BusArrivalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _bus_arrival_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bus-arrival-routing.module */ "./src/app/bus-arrival/bus-arrival-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/bus-arrival/home/home.component.ts");





var BusArrivalModule = /** @class */ (function () {
    function BusArrivalModule() {
    }
    BusArrivalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _bus_arrival_routing_module__WEBPACK_IMPORTED_MODULE_3__["BusArrivalRoutingModule"]]
        })
    ], BusArrivalModule);
    return BusArrivalModule;
}());



/***/ }),

/***/ "./src/app/bus-arrival/bus-arrival.service.ts":
/*!****************************************************!*\
  !*** ./src/app/bus-arrival/bus-arrival.service.ts ***!
  \****************************************************/
/*! exports provided: BusArrivalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusArrivalService", function() { return BusArrivalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");





var BusArrivalService = /** @class */ (function () {
    function BusArrivalService(cookieService, httpClient) {
        var _this = this;
        this.cookieService = cookieService;
        this.httpClient = httpClient;
        this.busStopBookmarkSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.busStopBookmark$ = this.busStopBookmarkSubject.asObservable();
        this.busStopBookmark$.subscribe(function (data) {
            _this.busStopBookmark = data;
        });
        this.getCookieBusStopBookmark();
    }
    BusArrivalService.prototype.getCookieBusStopBookmark = function () {
        var cookie = this.cookieService.get('InSgBusStopBookmark');
        if (cookie) {
            this.busStopBookmarkSubject.next(JSON.parse(cookie));
        }
    };
    BusArrivalService.prototype.getBusStopInfo = function (busStopCode) {
        return this.httpClient.get("/api/lta/bus/busStop/" + busStopCode);
    };
    BusArrivalService.prototype.getBusArrival = function (busStopCode) {
        return this.httpClient.get("/api/lta/bus/busArrival/" + busStopCode);
    };
    BusArrivalService.prototype.addBusStopBookmark = function (busStopInfo) {
        if (this.existingBookmark(busStopInfo)) {
            return;
        }
        this.busStopBookmark.push(busStopInfo);
        this.busStopBookmarkSubject.next(this.busStopBookmark);
        this.cookieService.set('InSgBusStopBookmark', JSON.stringify(this.busStopBookmark), 365 * 10, '/');
    };
    BusArrivalService.prototype.deleteBusStopBookmark = function (busStopInfo) {
        var i = 0;
        for (var i_1 = 0; i_1 < this.busStopBookmark.length; i_1++) {
            if (this.busStopBookmark[i_1].BusStopCode === busStopInfo.BusStopCode) {
                this.busStopBookmark.splice(i_1, 1);
                break;
            }
        }
        this.busStopBookmarkSubject.next(this.busStopBookmark);
        this.cookieService.set('InSgBusStopBookmark', JSON.stringify(this.busStopBookmark), 365 * 10, '/');
    };
    BusArrivalService.prototype.existingBookmark = function (busStopInfo) {
        for (var i = 0; i < this.busStopBookmark.length; i++) {
            if (busStopInfo.BusStopCode === this.busStopBookmark[i].BusStopCode) {
                return true;
            }
        }
        return false;
    };
    BusArrivalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BusArrivalService);
    return BusArrivalService;
}());



/***/ }),

/***/ "./src/app/bus-arrival/home/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bus-arrival/home/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzLWFycml2YWwvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9idXMtYXJyaXZhbC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bus-arrival/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bus-arrival/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _bus_arrival_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bus-arrival.service */ "./src/app/bus-arrival/bus-arrival.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(busArrivalService, snackBar) {
        var _this = this;
        this.busArrivalService = busArrivalService;
        this.snackBar = snackBar;
        this.busTableColumn = ['service', 'bus1', 'bus2', 'bus3', 'load'];
        busArrivalService.busStopBookmark$.subscribe(function (data) {
            _this.busStopBookmark = data;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.busTable = [];
        this.bExistingBookmark = false;
        function positionCB(pos) {
            console.log(pos);
        }
        function errorCB(err) {
            console.log(err);
        }
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(positionCB, errorCB);
        }
        else {
            alert('navigator.geolocation is empty');
        }
    };
    HomeComponent.prototype.addBusStopBookmark = function () {
        this.bExistingBookmark = true;
        this.busArrivalService.addBusStopBookmark(this.busStopInfo);
    };
    HomeComponent.prototype.deleteBusStopBookmark = function (busStop) {
        this.bExistingBookmark = false;
        this.busArrivalService.deleteBusStopBookmark(this.busStopInfo);
    };
    HomeComponent.prototype.getBusArrival = function (busStopCode) {
        var _this = this;
        this.busTable = [];
        this.bExistingBookmark = false;
        busStopCode = busStopCode.trim();
        if (!busStopCode) {
            this.snackBar.open('Invalid Bus Stop Code.', 'Error', { duration: 5000 });
            return;
        }
        this.busArrivalService.getBusArrival(busStopCode).subscribe(function (data) {
            if (data.busArrival.Services.length <= 0) {
                _this.snackBar.open('Bus service unavailable at the Bus Stop.', '', {
                    duration: 5000
                });
                return;
            }
            data.busArrival.Services.forEach(function (service) {
                var busRow = {
                    service: service.ServiceNo,
                    bus1: calculateArrivalTime(service.NextBus),
                    bus2: calculateArrivalTime(service.NextBus2),
                    bus3: calculateArrivalTime(service.NextBus3),
                    load: service.NextBus.Load
                };
                _this.busTable.push(busRow);
            });
            _this.busStopInfo = data.busStopInfo;
            _this.bExistingBookmark = _this.busArrivalService.existingBookmark(data.busStopInfo);
        }, function (err) {
            _this.snackBar.open(err, 'Error', { duration: 5000 });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bus-arrival-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/bus-arrival/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/bus-arrival/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bus_arrival_service__WEBPACK_IMPORTED_MODULE_3__["BusArrivalService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());

function calculateArrivalTime(bus) {
    if (!bus || !bus.EstimatedArrival) {
        return 'NA';
    }
    var date = new Date(bus.EstimatedArrival);
    var diffMinutes = (date.valueOf() - Date.now()) / 1000 / 60;
    if (diffMinutes < 1) {
        return 'Arriving';
    }
    else {
        return diffMinutes.toFixed(0) + ' mins';
    }
}
function getLoadDescription(loadType) {
    if (loadType === 'SEA') {
        return 'Seats Available';
    }
    else if (loadType === 'SDA') {
        return 'Standing Available';
    }
    else if (loadType === 'LSD') {
        return 'Limited Standing';
    }
    return 'NA';
}


/***/ })

}]);
//# sourceMappingURL=bus-arrival-bus-arrival-module-es5.js.map