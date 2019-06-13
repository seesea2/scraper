/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api-gifts-router.ts":
/*!*****************************!*\
  !*** ./api-gifts-router.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_products_router_1 = __webpack_require__(/*! ./gifts-products/gifts-products-router */ "./gifts-products/gifts-products-router.ts");
var gifts_orders_router_1 = __webpack_require__(/*! ./gifts-orders/gifts-orders-router */ "./gifts-orders/gifts-orders-router.ts");
var gifts_users_router_1 = __webpack_require__(/*! ./gifts-users/gifts-users-router */ "./gifts-users/gifts-users-router.ts");
var gifts_staffs_router_1 = __webpack_require__(/*! ./gifts-staffs/gifts-staffs-router */ "./gifts-staffs/gifts-staffs-router.ts");
var giftsRouter = express_1.Router();
// url: /api/gifts
giftsRouter.use('/products', gifts_products_router_1.default);
giftsRouter.use('/orders', gifts_orders_router_1.default);
giftsRouter.use('/users', gifts_users_router_1.default);
giftsRouter.use('/staffs', gifts_staffs_router_1.default);
exports.default = giftsRouter;


/***/ }),

/***/ "./api-router.ts":
/*!***********************!*\
  !*** ./api-router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var router_1 = __webpack_require__(/*! ./lta/router */ "./lta/router.ts");
var router_2 = __webpack_require__(/*! ./http-request/router */ "./http-request/router.ts");
var router_3 = __webpack_require__(/*! ./lunchfun-and-dictionary/router */ "./lunchfun-and-dictionary/router.ts");
var api_gifts_router_1 = __webpack_require__(/*! ./api-gifts-router */ "./api-gifts-router.ts");
var email_ops_1 = __webpack_require__(/*! ./email/email.ops */ "./email/email.ops.ts");
var apiRouter = express_1.Router();
// url: /api
apiRouter.use('/dictionary', router_3.dictionaryRouter);
apiRouter.use('/http', router_2.default);
apiRouter.use('/lunchfun', router_3.lunchfunRouter);
apiRouter.use('/lta/bus', router_1.busRouter);
apiRouter.use('/gifts', api_gifts_router_1.default);
// msg from users; forward it via nodemailer.
apiRouter.post('/msg', function (req, res) {
    email_ops_1.default(req.body, res);
});
// error handling
apiRouter.all('/*', function (req, res) {
    return res.status(400).send('Invalid Request');
});
exports.default = apiRouter;


/***/ }),

/***/ "./email/email.ops.ts":
/*!****************************!*\
  !*** ./email/email.ops.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __webpack_require__(/*! nodemailer */ "nodemailer");
var outlook_transporter = nodemailer_1.createTransport({
    service: 'outlook',
    auth: {
        user: 'yuanchao@outlook.sg',
        pass: 'pingmeHC83'
    }
});
var outlook_mailOptions = {
    from: 'yuanchao@outlook.sg',
    to: 'seesea2@gmail.com',
    subject: null,
    html: null
};
function SendEmail(body, res) {
    var emailHtml = '<!DOCTYPE html><head>' +
        '<meta http-equiv="content-type" content="text/html;charset=UTF-8"></head>' +
        ("<body><br><b>Message from User " + body.name) +
        ' :</b><br><br>' +
        ("<p><b>Email: </b> " + body.email) +
        '</p>' +
        ("<p><b>Mobile: </b> " + body.mobile) +
        '</p>' +
        ("<p><b>Message: </b> " + body.message) +
        '</p>' +
        '</body></html>';
    outlook_mailOptions.subject = 'User Inquiry';
    outlook_mailOptions.html = emailHtml;
    outlook_transporter.sendMail(outlook_mailOptions);
    return res.status(200).send({ result: 'ok' });
}
exports.default = SendEmail;


/***/ }),

/***/ "./gifts-orders/gifts-orders-router.ts":
/*!*********************************************!*\
  !*** ./gifts-orders/gifts-orders-router.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var giftsOrdersRouter = express_1.Router();
// order list with order_no, status & staff id to follow-up.
giftsOrdersRouter.get('/allOrders', function (req, res) {
    if (!req.session || !req.session.staff) {
        return res.sendStatus(401);
    }
    return res.status(200).send({ result: 'ok' });
});
// update order status by staff follow-up.
giftsOrdersRouter.put('/updateStatus', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.new_status || !req.body.sno || !req.body.order_no) {
        return res.status(400).send('Failed. Pleaes review inputs.');
    }
    var param = {
        1: req.body.order_no,
        2: req.body.sno,
        3: Date.now(),
        4: req.session.staff.id,
        5: req.body.new_status,
        6: req.body.note || null
    };
    return res.status(200).send({ result: 'ok' });
});
// staff to update contact info of the order.
giftsOrdersRouter.put('/updateContact', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.order_no) {
        return res.status(400).send('Order_no empty.');
    }
    else if (!req.body.email ||
        !req.body.email.includes('@') ||
        !req.body.email.includes('.') ||
        req.body.email.includes('/') ||
        req.body.email.includes('\\')) {
        return res.status(400).send('Invalid email.');
    }
    else if (!req.body.name) {
        return res.status(400).send('Invalid name.');
    }
    var param = {
        1: req.body.name,
        2: req.body.email,
        3: req.body.mobile || null,
        4: req.body.company || null,
        5: req.body.mobile2 || null,
        6: req.body.addr || null,
        7: req.body.order_no
    };
    return res.status(200).send({ result: 'ok' });
});
// staff to change order details e.g. price, qty, in case users changed mind.
// staff may change status of specific product of the order.
giftsOrdersRouter.put('/updateOrderItem', function (req, res) {
    if (!req.session || !req.session.staff.id) {
        return res.sendStatus(401);
    }
    if (!req.body.order_no) {
        return res.status(400).send('Failed. Invalid Order No.');
    }
    if (!req.body.sno || req.body.sno === '') {
        return res.status(400).send('Failed. Invalid Order Sno.');
    }
    var param = {
        1: req.body.new_sale_price,
        2: req.body.new_qty,
        3: req.body.new_status,
        4: req.body.order_no,
        5: req.body.sno
    };
    return res.status(200).send({ result: 'ok' });
});
exports.default = giftsOrdersRouter;


/***/ }),

/***/ "./gifts-orders/gifts-orders.ops.ts":
/*!******************************************!*\
  !*** ./gifts-orders/gifts-orders.ops.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function NewOrder(customer, cartItems) {
    return __awaiter(this, void 0, void 0, function () {
        var dbOrders, insertRslt, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-orders')];
                case 1:
                    dbOrders = _a.sent();
                    insertRslt = dbOrders.insertOne({
                        created_on: new Date(),
                        shipping: {
                            name: customer.name,
                            mobile: customer.mobile,
                            address: customer.address,
                            message: customer.message
                        },
                        payment: { method: 'visa', transaction_id: '2312213312XXXTD' },
                        cartItems: cartItems
                    });
                    console.log('insertRslt: ', insertRslt);
                    return [2 /*return*/, insertRslt];
                case 2:
                    e_1 = _a.sent();
                    throw 'create new order failed.';
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.NewOrder = NewOrder;


/***/ }),

/***/ "./gifts-products/gifts-products-categories.ops.ts":
/*!*********************************************************!*\
  !*** ./gifts-products/gifts-products-categories.ops.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var globalCategories = [];
var globalSamplesOfCategories = [];
function GetCategories(res) {
    return __awaiter(this, void 0, void 0, function () {
        var categories, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, GetCategoriesByLevel(0)];
                case 1:
                    categories = _a.sent();
                    return [2 /*return*/, res.status(200).send(categories)];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GetCategories = GetCategories;
function GetSamplesOfCategories(res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (globalSamplesOfCategories.length > 0) {
                        return [2 /*return*/, res.status(200).send(globalSamplesOfCategories)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, GetSamples()];
                case 2:
                    globalSamplesOfCategories = _a.sent();
                    return [2 /*return*/, res.status(200).send(globalSamplesOfCategories)];
                case 3:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetSamplesOfCategories = GetSamplesOfCategories;
function AddCategory(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body.name || !body.category) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 2:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection.insertOne({ name: body.name, category: body.category })];
                case 3:
                    _a.sent();
                    globalCategories = [];
                    globalSamplesOfCategories = [];
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddCategory = AddCategory;
function DeleteCategory(query, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 2:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection.deleteOne({ _id: new mongodb_ops_1.ObjectID(query._id) })];
                case 3:
                    _a.sent();
                    globalCategories = [];
                    globalSamplesOfCategories = [];
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteCategory = DeleteCategory;
// @level:
// 0 - all;  1 - 1st level;  2 - 2nd and above levels
function GetCategoriesByLevel(level) {
    return __awaiter(this, void 0, void 0, function () {
        var e_5, returnCategories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(globalCategories.length <= 0)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, GetCategoriesFromDb()];
                case 2:
                    globalCategories = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_5 = _a.sent();
                    throw e_5;
                case 4:
                    if (level === 0) {
                        return [2 /*return*/, globalCategories];
                    }
                    returnCategories = [];
                    globalCategories.forEach(function (cat) {
                        console.log(cat.category.match(new RegExp('/', 'g')));
                        if (cat.category.match(new RegExp('/', 'g')).length <= level) {
                            returnCategories.push(cat);
                        }
                    });
                    return [2 /*return*/, returnCategories];
            }
        });
    });
}
function GetCategoriesFromDb() {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products-catalog')];
                case 1:
                    dbCollection = _a.sent();
                    return [4 /*yield*/, dbCollection
                            .find()
                            .sort('category', 1)
                            .toArray()];
                case 2:
                    globalCategories = _a.sent();
                    return [2 /*return*/, globalCategories];
                case 3:
                    e_6 = _a.sent();
                    throw { errMsg: 'Get categories from database failed.' };
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetSamples() {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, docs, e_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 1:
                    dbCollection = _a.sent();
                    docs = null;
                    return [4 /*yield*/, dbCollection
                            .aggregate([
                            { $sort: { _id: -1 } },
                            {
                                $group: {
                                    _id: { category: '$category' },
                                    products: {
                                        $push: {
                                            _id: '$_id',
                                            category: '$category',
                                            img: '$img'
                                        }
                                    }
                                }
                            },
                            {
                                $project: {
                                    _id: '$_id',
                                    products: {
                                        $slice: [
                                            '$products',
                                            4 // max number of elements returned from the start of the array
                                        ]
                                    }
                                }
                            }
                        ])
                            .toArray()];
                case 2:
                    docs = _a.sent();
                    return [2 /*return*/, docs];
                case 3:
                    e_7 = _a.sent();
                    console.log(e_7);
                    return [2 /*return*/, { errMsg: 'Get products failed.' }];
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./gifts-products/gifts-products-inventory.ops.ts":
/*!********************************************************!*\
  !*** ./gifts-products/gifts-products-inventory.ops.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetInventory(res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, inventory, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 1:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.find().toArray()];
                case 2:
                    inventory = _a.sent();
                    return [2 /*return*/, res.status(200).send(inventory)];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetInventory = GetInventory;
// qty by product; Todo: by colour, size, etc.
function AdjustInventory(_id, qty, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_id || !qty) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 2:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.updateOne({
                            _id: new mongodb_ops_1.ObjectID(_id)
                        }, { $set: { modifiedOn: new Date(), qty: qty } }, { upsert: true })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send(rslt)];
                case 4:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AdjustInventory = AdjustInventory;
function ReserveInventory(id, cartItems) {
    return __awaiter(this, void 0, void 0, function () {
        var success, failed, dbInventory, i, result, i, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!cartItems || cartItems.length <= 0) {
                        throw 'The cart is empty.';
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    success = [];
                    failed = [];
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 2:
                    dbInventory = _a.sent();
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < cartItems.length)) return [3 /*break*/, 6];
                    return [4 /*yield*/, dbInventory.updateOne({
                            _id: new mongodb_ops_1.ObjectID(cartItems[i].product._id),
                            qty: { $gte: cartItems[i].qty }
                        }, {
                            $inc: { qty: -cartItems[i].qty },
                            $push: {
                                reservations: {
                                    qty: cartItems[i].qty,
                                    _id: new mongodb_ops_1.ObjectID(id),
                                    createdOn: new Date()
                                }
                            }
                        })];
                case 4:
                    result = _a.sent();
                    if (result.result.nModified === 0) {
                        failed.push(cartItems[i].product);
                        return [3 /*break*/, 6];
                    }
                    else {
                        success.push(cartItems[i].product);
                    }
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6:
                    if (failed.length > 0) {
                        for (i = 0; i < success.length; i++) {
                            dbInventory.updateOne({
                                _id: success[i]._id,
                                'reservations._id': id
                            }, {
                                $inc: { qty: success[i].qty },
                                $pull: { reservations: { _id: id } }
                            });
                        }
                        throw 'Not enough storage.';
                    }
                    return [2 /*return*/, 'Success.'];
                case 7:
                    e_3 = _a.sent();
                    throw e_3;
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.ReserveInventory = ReserveInventory;
function DeleteInventoryReservation(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var dbInventory, updateRslt, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-inventory')];
                case 1:
                    dbInventory = _a.sent();
                    return [4 /*yield*/, dbInventory.updateOne({
                            'reservations._id': new mongodb_ops_1.ObjectID(_id)
                        }, {
                            $pull: { reservations: { _id: new mongodb_ops_1.ObjectID(_id) } }
                        })];
                case 2:
                    updateRslt = _a.sent();
                    if (updateRslt.result.nModified <= 0) {
                        throw 'delete reservation failed.';
                    }
                    return [2 /*return*/, updateRslt];
                case 3:
                    e_4 = _a.sent();
                    console.log(e_4);
                    throw 'delete reservation failed with exception.';
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteInventoryReservation = DeleteInventoryReservation;


/***/ }),

/***/ "./gifts-products/gifts-products-router.ts":
/*!*************************************************!*\
  !*** ./gifts-products/gifts-products-router.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_products_categories_ops_1 = __webpack_require__(/*! ./gifts-products-categories.ops */ "./gifts-products/gifts-products-categories.ops.ts");
var gifts_products_ops_1 = __webpack_require__(/*! ./gifts-products.ops */ "./gifts-products/gifts-products.ops.ts");
var gifts_products_inventory_ops_1 = __webpack_require__(/*! ./gifts-products-inventory.ops */ "./gifts-products/gifts-products-inventory.ops.ts");
var giftsProductsRouter = express_1.Router();
giftsProductsRouter.get('/view/:product_no', function (req, res) {
    gifts_products_ops_1.GetProduct(req.params, res);
});
/*
 * inquiry: /api/gifts/products
 */
giftsProductsRouter.get('/categories', function (req, res) {
    gifts_products_categories_ops_1.GetCategories(res);
});
giftsProductsRouter.post('/category', function (req, res) {
    gifts_products_categories_ops_1.AddCategory(req.body, res);
});
giftsProductsRouter.delete('/category', function (req, res) {
    gifts_products_categories_ops_1.DeleteCategory(req.query, res);
});
giftsProductsRouter.get('/samples', function (req, res) {
    gifts_products_categories_ops_1.GetSamplesOfCategories(res);
});
giftsProductsRouter.get('', function (req, res) {
    gifts_products_ops_1.GetProductsByCategory(req, res);
});
giftsProductsRouter.get('/product', function (req, res) {
    gifts_products_ops_1.GetProduct(req.query, res);
});
giftsProductsRouter.post('/product', function (req, res) {
    gifts_products_ops_1.AddProduct(req.body, res);
});
giftsProductsRouter.put('/product', function (req, res) {
    gifts_products_ops_1.UpdateProduct(req.body, res);
});
giftsProductsRouter.delete('/product', function (req, res) {
    gifts_products_ops_1.DeleteProduct(req.query, res);
});
giftsProductsRouter.get('/inventory', function (req, res) {
    gifts_products_inventory_ops_1.GetInventory(res);
});
giftsProductsRouter.put('/inventory', function (req, res) {
    gifts_products_inventory_ops_1.AdjustInventory(req.body._id, req.body.qty, res);
});
exports.default = giftsProductsRouter;


/***/ }),

/***/ "./gifts-products/gifts-products.ops.ts":
/*!**********************************************!*\
  !*** ./gifts-products/gifts-products.ops.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetProduct(params, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, product, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params._id) {
                        return [2 /*return*/, res.status(400).send('Invalid product no.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('gifts-products')
                            .findOne({ _id: new mongodb_ops_1.ObjectID(params._id) })];
                case 3:
                    product = _a.sent();
                    return [2 /*return*/, res.status(200).send(product)];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.GetProduct = GetProduct;
function GetProductsByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbCollection, docs, regex, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 1:
                    dbCollection = _a.sent();
                    docs = null;
                    if (!req.query.category) return [3 /*break*/, 3];
                    regex = new RegExp(['^', req.query.category.trim()].join(''), 'i');
                    return [4 /*yield*/, dbCollection.find({ category: regex }).toArray()];
                case 2:
                    docs = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, dbCollection.find().toArray()];
                case 4:
                    docs = _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/, res.status(200).send(docs)];
                case 6:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.GetProductsByCategory = GetProductsByCategory;
function AddProduct(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body.name) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.collection('gifts-products').insertOne({
                            name: body.name,
                            img: body.img,
                            price: body.price,
                            category: body.category,
                            color: body.color,
                            packaging: body.packaging,
                            material: body.material,
                            size: body.size,
                            note: body.note,
                            retailer: body.retailer,
                            createdOn: new Date()
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddProduct = AddProduct;
function UpdateProduct(body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbProducts, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!body._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-products')];
                case 2:
                    dbProducts = _a.sent();
                    return [4 /*yield*/, dbProducts.updateOne({ _id: new mongodb_ops_1.ObjectID(body._id) }, {
                            $set: {
                                modifiedOn: new Date(),
                                name: body.name,
                                img: body.img,
                                price: body.price,
                                category: body.category,
                                color: body.color,
                                packaging: body.packaging,
                                material: body.material,
                                size: body.size,
                                note: body.note,
                                retailer: body.retailer
                            }
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.UpdateProduct = UpdateProduct;
function DeleteProduct(query, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query._id) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .collection('gifts-products')
                            .deleteOne({ _id: new mongodb_ops_1.ObjectID(query._id) })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteProduct = DeleteProduct;


/***/ }),

/***/ "./gifts-staffs/gifts-staffs-router.ts":
/*!*********************************************!*\
  !*** ./gifts-staffs/gifts-staffs-router.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var giftsStaffsRouter = express_1.Router();
giftsStaffsRouter.post('/login', function (req, res) {
    // Login(req, res);
});
giftsStaffsRouter.get('/logout', function (req, res) {
    // Logout(req, res);
});
giftsStaffsRouter.post('/register', function (req, res) {
    // Register(req, res);
});
giftsStaffsRouter.delete('/deleteuser', function (req, res) {
    // DeleteUser(req, res);
});
exports.default = giftsStaffsRouter;


/***/ }),

/***/ "./gifts-users/gifts-carts.ops.ts":
/*!****************************************!*\
  !*** ./gifts-users/gifts-carts.ops.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var string_ops_1 = __webpack_require__(/*! ../string-ops */ "./string-ops.ts");
var gifts_users_ops_1 = __webpack_require__(/*! ./gifts-users.ops */ "./gifts-users/gifts-users.ops.ts");
var gifts_products_inventory_ops_1 = __webpack_require__(/*! ../gifts-products/gifts-products-inventory.ops */ "./gifts-products/gifts-products-inventory.ops.ts");
var gifts_orders_ops_1 = __webpack_require__(/*! ../gifts-orders/gifts-orders.ops */ "./gifts-orders/gifts-orders.ops.ts");
function GetCart(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, cart, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(403).send('User not login')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.findOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) })];
                case 3:
                    cart = _a.sent();
                    console.log(cart);
                    return [2 /*return*/, res.status(200).send(cart)];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.GetCart = GetCart;
function AddToCart(session, body, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(403).send('User not login')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, { $pull: { products: { productId: new mongodb_ops_1.ObjectID(body.product._id) } } })];
                case 3:
                    rslt = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, {
                            $push: {
                                products: {
                                    productId: new mongodb_ops_1.ObjectID(body.product._id),
                                    quantity: body.qty,
                                    name: body.product.name,
                                    price: body.product.price
                                }
                            }
                        }, { upsert: true })];
                case 4:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 5:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.AddToCart = AddToCart;
function UpdateCartQty(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(req.session)) {
                        res.status(403).send('User not login.');
                    }
                    if (!req.body.productId || !req.body.qty) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.collection('gifts-carts').updateOne({
                            _id: req.session.user._id,
                            'products.productId': req.body.productId
                        }, {
                            $set: {
                                'products.$.qty': req.body.qty,
                                modifiedOn: new Date()
                            }
                        })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.UpdateCartQty = UpdateCartQty;
function DeleteCart(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(400).send('User not login.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    db.deleteOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) });
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteCart = DeleteCart;
function DeleteInCart(session, _id, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, rslt, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!gifts_users_ops_1.bLogin(session)) {
                        return [2 /*return*/, res.status(400).send('User not login.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 2:
                    db = _a.sent();
                    return [4 /*yield*/, db.updateOne({ _id: new mongodb_ops_1.ObjectID(session.user._id) }, { $pull: { products: { productId: new mongodb_ops_1.ObjectID(_id) } } })];
                case 3:
                    rslt = _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteInCart = DeleteInCart;
function CartCheckout(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var bMember, id, cartItems, customer, insertRslt, updateRslt, dbCarts, deleteRslt, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body.cart ||
                        !req.body.cart.customer ||
                        !req.body.cart.customer.name ||
                        !req.body.cart.customer.mobile ||
                        !req.body.cart.customer.address) {
                        return [2 /*return*/, res.status(400).send('Invalid customer information.')];
                    }
                    if (req.body.cart.total <= 0) {
                        return [2 /*return*/, res.status(400).send('No product to checkout.')];
                    }
                    bMember = gifts_users_ops_1.bLogin(req.session);
                    id = '';
                    if (bMember) {
                        id = req.session.user._id;
                    }
                    else {
                        id = string_ops_1.randomString(20);
                    }
                    cartItems = req.body.cart.cartItems;
                    customer = req.body.cart.customer;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 10, , 11]);
                    // reserve inventory, it throw error in case of failure.
                    return [4 /*yield*/, gifts_products_inventory_ops_1.ReserveInventory(id, cartItems)];
                case 2:
                    // reserve inventory, it throw error in case of failure.
                    _a.sent();
                    return [4 /*yield*/, gifts_orders_ops_1.NewOrder(customer, cartItems)];
                case 3:
                    insertRslt = _a.sent();
                    if (!(insertRslt.result.n <= 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, gifts_products_inventory_ops_1.DeleteInventoryReservation(id)];
                case 4:
                    _a.sent();
                    throw 'Create new order failed.';
                case 5: return [4 /*yield*/, gifts_products_inventory_ops_1.DeleteInventoryReservation(id)];
                case 6:
                    updateRslt = _a.sent();
                    console.log(updateRslt);
                    if (!bMember) return [3 /*break*/, 9];
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-carts')];
                case 7:
                    dbCarts = _a.sent();
                    return [4 /*yield*/, dbCarts.deleteOne({ _id: new mongodb_ops_1.ObjectID(id) })];
                case 8:
                    deleteRslt = _a.sent();
                    _a.label = 9;
                case 9: return [2 /*return*/, res.status(200).send({ orderId: id })];
                case 10:
                    e_6 = _a.sent();
                    console.error(e_6);
                    return [2 /*return*/, res.status(500).send(e_6)];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.CartCheckout = CartCheckout;


/***/ }),

/***/ "./gifts-users/gifts-users-router.ts":
/*!*******************************************!*\
  !*** ./gifts-users/gifts-users-router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var gifts_users_ops_1 = __webpack_require__(/*! ./gifts-users.ops */ "./gifts-users/gifts-users.ops.ts");
var gifts_carts_ops_1 = __webpack_require__(/*! ./gifts-carts.ops */ "./gifts-users/gifts-carts.ops.ts");
var giftsUsersRouter = express_1.Router();
// url: /api/gifts/users/
giftsUsersRouter.post('/login', function (req, res) {
    gifts_users_ops_1.Login(req, res);
});
giftsUsersRouter.get('/info', function (req, res) {
    gifts_users_ops_1.UserInfo(req.session, res);
});
giftsUsersRouter.get('/logout', function (req, res) {
    gifts_users_ops_1.Logout(req, res);
});
giftsUsersRouter.post('/register', function (req, res) {
    gifts_users_ops_1.Register(req, res);
});
giftsUsersRouter.delete('/deleteuser', function (req, res) {
    gifts_users_ops_1.DeleteUser(req.session, res);
});
giftsUsersRouter.get('/cart', function (req, res) {
    gifts_carts_ops_1.GetCart(req.session, res);
});
giftsUsersRouter.post('/cart', function (req, res) {
    gifts_carts_ops_1.AddToCart(req.session, req.body, res);
});
giftsUsersRouter.delete('/cart', function (req, res) {
    gifts_carts_ops_1.DeleteCart(req.session, res);
});
giftsUsersRouter.put('/cart', function (req, res) {
    gifts_carts_ops_1.UpdateCartQty(req, res);
});
giftsUsersRouter.delete('/cart/product', function (req, res) {
    gifts_carts_ops_1.DeleteInCart(req.session, req.query._id, res);
});
giftsUsersRouter.post('/cart/checkout', function (req, res) {
    gifts_carts_ops_1.CartCheckout(req, res);
});
exports.default = giftsUsersRouter;


/***/ }),

/***/ "./gifts-users/gifts-users.ops.ts":
/*!****************************************!*\
  !*** ./gifts-users/gifts-users.ops.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var string_ops_1 = __webpack_require__(/*! ../string-ops */ "./string-ops.ts");
(function () { return __awaiter(_this, void 0, void 0, function () {
    var db;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
            case 1:
                db = _a.sent();
                db.createIndex('uid', { unique: true });
                return [2 /*return*/];
        }
    });
}); })();
function Login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbUsers, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (req.session && req.session.user) {
                        return [2 /*return*/, res.status(200).send({ uid: req.session.user.uid })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
                case 2:
                    dbUsers = _b.sent();
                    _a = req.session;
                    return [4 /*yield*/, dbUsers.findOne({
                            uid: req.body.uid,
                            pwd: string_ops_1.encrypt(req.body.pwd)
                        })];
                case 3:
                    _a.user = _b.sent();
                    if (!req.session.user) {
                        return [2 /*return*/, res.status(403).send('Incorrect username or password')];
                    }
                    return [2 /*return*/, res.status(200).send({ uid: req.session.user.uid })];
                case 4:
                    e_1 = _b.sent();
                    return [2 /*return*/, res.status(500).send('server error.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.Login = Login;
function Logout(req, res) {
    if (req.session && req.session.user) {
        req.session.user = null;
    }
    return res.status(200).send({ result: 'ok' });
}
exports.Logout = Logout;
function Register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var dbUsers, rslt, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.body.uid ||
                        !req.body.pwd ||
                        !req.body.email ||
                        !req.body.firstName ||
                        !req.body.lastName) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('gifts-users')];
                case 2:
                    dbUsers = _a.sent();
                    return [4 /*yield*/, dbUsers.insertOne({
                            uid: req.body.uid,
                            pwd: string_ops_1.encrypt(req.body.pwd),
                            email: req.body.email,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            createdOn: new Date()
                        })];
                case 3:
                    rslt = _a.sent();
                    if (rslt.insertedCount === 1) {
                        return [2 /*return*/, res.status(200).send(rslt.ops[0])];
                    }
                    else {
                        return [2 /*return*/, res.status(500).send('Register failed. Please try again later.')];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    // console.log(e);
                    return [2 /*return*/, res.status(500).send('Register failed. Please try again later.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.Register = Register;
function DeleteUser(session, res) {
    return __awaiter(this, void 0, void 0, function () {
        var db, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!session || !session.user) {
                        return [2 /*return*/, res.status(403).send('Login is required.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.MongoDb()];
                case 2:
                    db = _a.sent();
                    db.collection('gifts-users').deleteOne({
                        _id: session.user._id
                    });
                    session.user = null;
                    return [2 /*return*/, res.status(200).send({ result: 'User deleted.' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(400).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteUser = DeleteUser;
function UserInfo(session, res) {
    if (!bLogin(session)) {
        return res.status(403).send('User Not login.');
    }
    return res.status(200).send({
        _id: session.user._id,
        uid: session.user.uid,
        email: session.user.email
    });
}
exports.UserInfo = UserInfo;
function bLogin(session) {
    if (!session || !session.user) {
        return false;
    }
    return true;
}
exports.bLogin = bLogin;


/***/ }),

/***/ "./http-request/http-request.ts":
/*!**************************************!*\
  !*** ./http-request/http-request.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
function Delete(body, res) {
    var url = body.url;
    if (body.querys && body.querys.length > 0) {
        url += '?';
        for (var i = 0; i < body.querys.length; ++i) {
            url += body.query[i];
            url += '=';
            url += body.queryValue[i];
        }
    }
    axios_1.default.delete(url)
        .then(function (response) {
        res.status(200).send(response);
    })
        .catch(function (e) {
        res.status(400).send(e);
    });
}
exports.Delete = Delete;
function Post(req, res) {
    var headers = {};
    return res.status(200).send(req);
    var url = req.body.url;
    if (req.body.headers) {
        headers = {
            headers: req.body.headers
        };
    }
    if (req.body.parameters) {
        url += '?';
        for (var i = 0; i < req.body.parameters.length; ++i) {
            url += req.body.parameters[i] + '=' + req.body.parameterValue[i] + '&';
        }
    }
    axios_1.default.get(url, headers).then(function (response) {
        res.send(response.data);
    });
}
exports.Post = Post;
function Put(req, res) {
    axios_1.default.put(req.body.url).then(function (response) {
        res.send(response.data);
    });
}
exports.Put = Put;
function Get(req, res) {
    axios_1.default.post(req.body.url).then(function (response) {
        res.send(response.data);
    });
}
exports.Get = Get;


/***/ }),

/***/ "./http-request/router.ts":
/*!********************************!*\
  !*** ./http-request/router.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var http_request_1 = __webpack_require__(/*! ./http-request */ "./http-request/http-request.ts");
var httpRouter = express_1.Router();
httpRouter.post('', function (req, res) {
    if (req.body.type === 'DELETE') {
        http_request_1.Delete(req.body, res);
    }
    else if (req.body.type === 'GET') {
        http_request_1.Get(req.body, res);
    }
    else if (req.body.type === 'POST') {
        http_request_1.Post(req.body, res);
    }
    else if (req.body.type === 'PUT') {
        http_request_1.Put(req.body, res);
    }
});
exports.default = httpRouter;


/***/ }),

/***/ "./lta/bus-arrival.ts":
/*!****************************!*\
  !*** ./lta/bus-arrival.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
var lta_1 = __webpack_require__(/*! ./lta */ "./lta/lta.ts");
var bus_stops_1 = __webpack_require__(/*! ./bus-stops */ "./lta/bus-stops.ts");
function getBusArrival(busStopCode, res) {
    busStopCode = busStopCode.trim();
    if (!busStopCode) {
        return res.status(400).send('Invalid BusStopCode.');
    }
    var busStopInfo = bus_stops_1.checkBusStopLocally(busStopCode);
    if (!busStopInfo) {
        return res.status(400).send('Bus Stop not found.');
    }
    var url = lta_1.busArrivalUrl + "?BusStopCode=" + busStopCode;
    axios_1.default.get(url, lta_1.headerConfig)
        .then(function (respose) {
        res
            .status(200)
            .send({ busStopInfo: busStopInfo, busArrival: respose.data });
    })
        .catch(function (e) {
        res.status(400).send(e);
    });
}
exports.default = getBusArrival;


/***/ }),

/***/ "./lta/bus-stops.ts":
/*!**************************!*\
  !*** ./lta/bus-stops.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(/*! axios */ "axios");
var lta_1 = __webpack_require__(/*! ./lta */ "./lta/lta.ts");
var busStops = [];
exports.busStops = busStops;
function getBusStopsFromLta(skip) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = lta_1.busStopsUrl;
                    if (skip) {
                        url += "?$skip=" + skip;
                    }
                    return [4 /*yield*/, axios_1.default.get(url, lta_1.headerConfig)];
                case 1:
                    response = _a.sent();
                    if (response.status != 200) {
                        throw { status: response.status };
                    }
                    return [2 /*return*/, response.data.value];
                case 2:
                    e_1 = _a.sent();
                    throw e_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getAllBusStops() {
    return __awaiter(this, void 0, void 0, function () {
        var skip, newBusStops, temp, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    skip = 0;
                    newBusStops = [];
                    _a.label = 1;
                case 1: return [4 /*yield*/, getBusStopsFromLta(skip)];
                case 2:
                    newBusStops = _a.sent();
                    temp = busStops;
                    exports.busStops = busStops = temp.concat(newBusStops);
                    skip += 500;
                    _a.label = 3;
                case 3:
                    if (newBusStops.length === 500) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4:
                    console.log('Total bus stops: ' + busStops.length);
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    exports.busStops = busStops = [];
                    getAllBusStops();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
getAllBusStops();
function checkBusStopLocally(busStopCode) {
    if (!busStopCode) {
        return;
    }
    for (var i = 0; i < busStops.length; i++) {
        if (busStopCode === busStops[i].BusStopCode) {
            return busStops[i];
        }
    }
    return;
}
exports.checkBusStopLocally = checkBusStopLocally;
function getBusStopInfo(busStopCode, res) {
    if (!busStopCode) {
        return res.status(400).send('Invalid Bus Stop Code.');
    }
    var busStopInfo = checkBusStopLocally(busStopCode);
    if (busStopInfo) {
        return res.status(200).send(busStopInfo);
    }
    return res.status(400).send('Bus Stop Info not found.');
}
exports.getBusStopInfo = getBusStopInfo;


/***/ }),

/***/ "./lta/lta.ts":
/*!********************!*\
  !*** ./lta/lta.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';
var busArrivalUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';
exports.busArrivalUrl = busArrivalUrl;
var busStopsUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusStops';
exports.busStopsUrl = busStopsUrl;
var headerConfig = {
    headers: {
        AccountKey: ltaAccountKey
    }
};
exports.headerConfig = headerConfig;


/***/ }),

/***/ "./lta/router.ts":
/*!***********************!*\
  !*** ./lta/router.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var bus_arrival_1 = __webpack_require__(/*! ./bus-arrival */ "./lta/bus-arrival.ts");
var bus_stops_1 = __webpack_require__(/*! ./bus-stops */ "./lta/bus-stops.ts");
// url: /api/lta/bus
var busRouter = express_1.Router();
exports.busRouter = busRouter;
busRouter.get('/busArrival/:busStopCode', function (req, res) {
    bus_arrival_1.default(req.params.busStopCode, res);
});
busRouter.get('/busStop/:busStopCode', function (req, res) {
    bus_stops_1.getBusStopInfo(req.params.busStopCode, res);
});


/***/ }),

/***/ "./lunchfun-and-dictionary/dictionary.ts":
/*!***********************************************!*\
  !*** ./lunchfun-and-dictionary/dictionary.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var OxfordDictionary = __webpack_require__(/*! oxford-dictionary */ "oxford-dictionary"); // tslint:disable-line
var DICT = new OxfordDictionary({
    app_id: '0314e9e2',
    app_key: '5a6c2589474a2f83ccd69f397bfec7a2',
    source_lang: 'en'
});
function CheckOxfordDictionary(word, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!word || !word.trim()) {
                return [2 /*return*/, res.status(400).send('Invalid word.')];
            }
            DICT.definitions(word.trim()).then(function (definitions) {
                return res.status(200).send(definitions);
            }, function (err) {
                return res.status(400).send(err);
            });
            return [2 /*return*/];
        });
    });
}
exports.default = CheckOxfordDictionary;


/***/ }),

/***/ "./lunchfun-and-dictionary/lunchfun-pals.ts":
/*!**************************************************!*\
  !*** ./lunchfun-and-dictionary/lunchfun-pals.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
var lunchPals = [];
function refreshPals() {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 1:
                    palsCollection = _a.sent();
                    return [4 /*yield*/, palsCollection
                            .find()
                            .sort({ name: 1 })
                            .toArray()];
                case 2:
                    lunchPals = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function GetPals(res) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (lunchPals.length > 0) {
                        return [2 /*return*/, res.status(200).send(lunchPals)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, refreshPals()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send(lunchPals)];
                case 3:
                    e_2 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetPals = GetPals;
function AddPal(name, res) {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name) {
                        return [2 /*return*/, res.status(400).send('Invalid input.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 2:
                    palsCollection = _a.sent();
                    palsCollection.insertOne({ name: name });
                    refreshPals();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.AddPal = AddPal;
function DeletePal(name, res) {
    return __awaiter(this, void 0, void 0, function () {
        var palsCollection, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!name) {
                        return [2 /*return*/, res.status(400).send('Invalid name to delete.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-pals')];
                case 2:
                    palsCollection = _a.sent();
                    palsCollection.deleteOne({ name: name });
                    refreshPals();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeletePal = DeletePal;
function GetPalsAttendance(res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, attendances, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection
                            .aggregate([
                            { $unwind: '$attendees' },
                            { $group: { _id: '$attendees', attendance: { $sum: 1 } } },
                            { $project: { name: '$_id', attendance: '$attendance' } }
                        ])
                            .toArray()];
                case 2:
                    attendances = _a.sent();
                    return [2 /*return*/, res.status(200).send(attendances)];
                case 3:
                    e_5 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_5)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetPalsAttendance = GetPalsAttendance;


/***/ }),

/***/ "./lunchfun-and-dictionary/lunchfun-records.ts":
/*!*****************************************************!*\
  !*** ./lunchfun-and-dictionary/lunchfun-records.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_ops_1 = __webpack_require__(/*! ../mongodb-ops */ "./mongodb-ops.ts");
function GetRecords(res, qty) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, records, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 1:
                    collection = _a.sent();
                    return [4 /*yield*/, collection
                            .find({})
                            .sort({ createdOn: -1 })
                            .limit(qty | 30)
                            .toArray()];
                case 2:
                    records = _a.sent();
                    return [2 /*return*/, res.status(200).send(records)];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.GetRecords = GetRecords;
function AddRecord(payer, attendees, res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!payer || !attendees || attendees.length <= 0) {
                        return [2 /*return*/, res.status(400).send('Invalid params to add.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 2:
                    collection = _a.sent();
                    return [4 /*yield*/, collection.insertOne({
                            payer: payer,
                            attendees: attendees,
                            createdOn: new Date()
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 4:
                    e_2 = _a.sent();
                    // console.log(e);
                    return [2 /*return*/, res.status(500).send('Error at server. Please try again later.')];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.AddRecord = AddRecord;
function DeleteRecord(_id, res) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!_id) {
                        return [2 /*return*/, res.status(400).send('Invalid record to delete.')];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, mongodb_ops_1.DbCollection('lunchfun-records')];
                case 2:
                    collection = _a.sent();
                    collection.deleteOne({ _id: new mongodb_ops_1.ObjectID(_id) });
                    return [2 /*return*/, res.status(200).send({ result: 'ok' })];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DeleteRecord = DeleteRecord;


/***/ }),

/***/ "./lunchfun-and-dictionary/router.ts":
/*!*******************************************!*\
  !*** ./lunchfun-and-dictionary/router.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var dictionary_1 = __webpack_require__(/*! ./dictionary */ "./lunchfun-and-dictionary/dictionary.ts");
var lunchfun_pals_1 = __webpack_require__(/*! ./lunchfun-pals */ "./lunchfun-and-dictionary/lunchfun-pals.ts");
var lunchfun_records_1 = __webpack_require__(/*! ./lunchfun-records */ "./lunchfun-and-dictionary/lunchfun-records.ts");
var dictionaryRouter = express_1.Router();
exports.dictionaryRouter = dictionaryRouter;
var lunchfunRouter = express_1.Router();
exports.lunchfunRouter = lunchfunRouter;
dictionaryRouter.get('/oxford/:word', function (req, res) {
    dictionary_1.default(req.params.word, res);
});
lunchfunRouter.get('/pals', function (req, res) {
    lunchfun_pals_1.GetPals(res);
});
lunchfunRouter.post('/pal', function (req, res) {
    lunchfun_pals_1.AddPal(req.body.name, res);
});
lunchfunRouter.delete('/pal', function (req, res) {
    lunchfun_pals_1.DeletePal(req.query, res);
});
lunchfunRouter.get('/records', function (req, res) {
    lunchfun_records_1.GetRecords(res);
});
lunchfunRouter.post('/record', function (req, res) {
    lunchfun_records_1.AddRecord(req.body.payer, req.body.attendees, res);
});
lunchfunRouter.delete('/record', function (req, res) {
    lunchfun_records_1.DeleteRecord(req.query._id, res);
});
lunchfunRouter.get('/stats/attendance', function (req, res) {
    lunchfun_pals_1.GetPalsAttendance(res);
});


/***/ }),

/***/ "./mongodb-ops.ts":
/*!************************!*\
  !*** ./mongodb-ops.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = __webpack_require__(/*! mongodb */ "mongodb");
exports.ObjectID = mongodb_1.ObjectID;
var MONGO_URL = 'mongodb+srv://admin:admin@cluster0-dxwkg.mongodb.net/insg?retryWrites=true';
var database;
function InitDb() {
    return __awaiter(this, void 0, void 0, function () {
        var client, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongodb_1.MongoClient.connect(MONGO_URL, {
                            useNewUrlParser: true
                        })];
                case 1:
                    client = _a.sent();
                    return [2 /*return*/, (database = client.db('insg'))];
                case 2:
                    e_1 = _a.sent();
                    throw 'Database connection failed.';
                case 3: return [2 /*return*/];
            }
        });
    });
}
function MongoDb() {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (database) {
                        return [2 /*return*/, database];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, InitDb()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, database];
                case 3:
                    e_2 = _a.sent();
                    // console.log(e);
                    throw e_2;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.MongoDb = MongoDb;
function DbCollection(name) {
    return __awaiter(this, void 0, void 0, function () {
        var e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (database) {
                        return [2 /*return*/, database.collection(name)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, InitDb()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, database.collection(name)];
                case 3:
                    e_3 = _a.sent();
                    throw e_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.DbCollection = DbCollection;


/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var session = __webpack_require__(/*! express-session */ "express-session");
var path_1 = __webpack_require__(/*! path */ "path");
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var api_router_1 = __webpack_require__(/*! ./api-router */ "./api-router.ts");
// Express server
var app = express();
var HOST = 'localhost';
var PORT = 80;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'insg-yc-ly-17',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // millseconds of 24hrs  }
    }
}));
app.use('/api', api_router_1.default);
app.get('/', function (req, res) {
    return res.status(200).sendFile(path_1.join(__dirname, '/client/index.html'));
});
// Server static files from /client
app.use(express.static(path_1.join(__dirname, '/client')));
// error handling - 1
app.all('/*', function (req, res) {
    return res.status(200).sendFile(path_1.join(__dirname, '/client/index.html'));
});
// error handling - 2
app.use(function (req, res, next) {
    return res.status(500).send('Issue happened. Please retry later!');
});
// Start up the Node server
// http
app.set('domain', HOST);
app.set('port', PORT);
app.listen(app.get('port'), function () {
    console.log("Node server listening on http://" + HOST + ":" + PORT);
});
// https default port
// const httpsOptions = {
//   cert: fs.readFileSync(join(__dirname, '/keys/certificate.pem')),
//   key: fs.readFileSync(join(__dirname, '/keys/privatekey.pem'))
// };
// const server = https.createServer(httpsOptions, app);
// server.listen(443);
// export { server };


/***/ }),

/***/ "./string-ops.ts":
/*!***********************!*\
  !*** ./string-ops.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __webpack_require__(/*! crypto */ "crypto");
var algorithm = 'aes-192-cbc';
var password = 'inSGyc83';
var key = crypto.scryptSync(password, 'salt', 24);
var iv = Buffer.alloc(16, 0);
function encrypt(text) {
    try {
        var cipher = crypto.createCipheriv(algorithm, key, iv);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    catch (e) {
        // console.log('encrypt => ', e);
    }
}
exports.encrypt = encrypt;
function decrypt(text) {
    try {
        var decipher = crypto.createDecipheriv(algorithm, key, iv);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    catch (e) {
        // console.log('decrypt => ', e);
    }
}
exports.decrypt = decrypt;
/*
 * string operation
 */
var RandomTypes;
(function (RandomTypes) {
    RandomTypes[RandomTypes["Capital"] = 0] = "Capital";
    RandomTypes[RandomTypes["Number"] = 1] = "Number";
    RandomTypes[RandomTypes["String"] = 2] = "String";
})(RandomTypes || (RandomTypes = {}));
exports.RandomTypes = RandomTypes;
// return string of random numbers with specified length.
function randomNumber(length) {
    return random(RandomTypes.Number, length);
}
exports.randomNumber = randomNumber;
// return string of random capital characters with specified length.
function randomCapitals(length) {
    return random(RandomTypes.Capital, length);
}
exports.randomCapitals = randomCapitals;
// return string of random characters or numbers with specified length.
function randomString(length) {
    return random(RandomTypes.String, length);
}
exports.randomString = randomString;
function random(type, length) {
    var rString = '';
    if (type === RandomTypes.String) {
        rString = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else if (type === RandomTypes.Number) {
        rString = '0123456789';
    }
    else if (type === RandomTypes.Capital) {
        rString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    else {
        return '';
    }
    var result = '';
    for (var i = length; i > 0; --i) {
        result += rString[Math.floor(Math.random() * rString.length)];
    }
    return result;
}


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "oxford-dictionary":
/*!************************************!*\
  !*** external "oxford-dictionary" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("oxford-dictionary");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9odHRwLXJlcXVlc3Qvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x0YS9idXMtYXJyaXZhbC50cyIsIndlYnBhY2s6Ly8vLi9sdGEvYnVzLXN0b3BzLnRzIiwid2VicGFjazovLy8uL2x0YS9sdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbHRhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2x1bmNoZnVuLXBhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvbHVuY2hmdW4tcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbW9uZ29kYi1vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzIiwid2VicGFjazovLy8uL3N0cmluZy1vcHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGVtYWlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJveGZvcmQtZGljdGlvbmFyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FB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SUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7OztBQ3RFRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IGdpZnRzUHJvZHVjdHNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNPcmRlcnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlcic7XHJcbmltcG9ydCBnaWZ0c1VzZXJzUm91dGVyIGZyb20gJy4vZ2lmdHMtdXNlcnMvZ2lmdHMtdXNlcnMtcm91dGVyJztcclxuaW1wb3J0IGdpZnRzU3RhZmZzUm91dGVyIGZyb20gJy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXInO1xyXG5cclxuY29uc3QgZ2lmdHNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIHVybDogL2FwaS9naWZ0c1xyXG5naWZ0c1JvdXRlci51c2UoJy9wcm9kdWN0cycsIGdpZnRzUHJvZHVjdHNSb3V0ZXIpO1xyXG5naWZ0c1JvdXRlci51c2UoJy9vcmRlcnMnLCBnaWZ0c09yZGVyc1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL3VzZXJzJywgZ2lmdHNVc2Vyc1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL3N0YWZmcycsIGdpZnRzU3RhZmZzUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBidXNSb3V0ZXIgfSBmcm9tICcuL2x0YS9yb3V0ZXInO1xyXG5pbXBvcnQgaHR0cFJvdXRlciBmcm9tICcuL2h0dHAtcmVxdWVzdC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIGRpY3Rpb25hcnlSb3V0ZXIsXHJcbiAgbHVuY2hmdW5Sb3V0ZXJcclxufSBmcm9tICcuL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L3JvdXRlcic7XHJcbmltcG9ydCBnaWZ0c1JvdXRlciBmcm9tICcuL2FwaS1naWZ0cy1yb3V0ZXInO1xyXG5pbXBvcnQgU2VuZEVtYWlsIGZyb20gJy4vZW1haWwvZW1haWwub3BzJztcclxuXHJcbmNvbnN0IGFwaVJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpXHJcbmFwaVJvdXRlci51c2UoJy9kaWN0aW9uYXJ5JywgZGljdGlvbmFyeVJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9odHRwJywgaHR0cFJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9sdW5jaGZ1bicsIGx1bmNoZnVuUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2x0YS9idXMnLCBidXNSb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvZ2lmdHMnLCBnaWZ0c1JvdXRlcik7XHJcblxyXG4vLyBtc2cgZnJvbSB1c2VyczsgZm9yd2FyZCBpdCB2aWEgbm9kZW1haWxlci5cclxuYXBpUm91dGVyLnBvc3QoJy9tc2cnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgU2VuZEVtYWlsKHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuXHJcbi8vIGVycm9yIGhhbmRsaW5nXHJcbmFwaVJvdXRlci5hbGwoJy8qJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBSZXF1ZXN0Jyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IG91dGxvb2tfdHJhbnNwb3J0ZXIgPSBjcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6ICdvdXRsb29rJyxcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgICBwYXNzOiAncGluZ21lSEM4MydcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3V0bG9va19tYWlsT3B0aW9ucyA9IHtcclxuICBmcm9tOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgdG86ICdzZWVzZWEyQGdtYWlsLmNvbScsXHJcbiAgc3ViamVjdDogbnVsbCxcclxuICBodG1sOiBudWxsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTZW5kRW1haWwoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZW1haWxIdG1sOiBzdHJpbmcgPVxyXG4gICAgJzwhRE9DVFlQRSBodG1sPjxoZWFkPicgK1xyXG4gICAgJzxtZXRhIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcIj48L2hlYWQ+JyArXHJcbiAgICBgPGJvZHk+PGJyPjxiPk1lc3NhZ2UgZnJvbSBVc2VyICR7Ym9keS5uYW1lfWAgK1xyXG4gICAgJyA6PC9iPjxicj48YnI+JyArXHJcbiAgICBgPHA+PGI+RW1haWw6IDwvYj4gJHtib2R5LmVtYWlsfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgIGA8cD48Yj5Nb2JpbGU6IDwvYj4gJHtib2R5Lm1vYmlsZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICBgPHA+PGI+TWVzc2FnZTogPC9iPiAke2JvZHkubWVzc2FnZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICAnPC9ib2R5PjwvaHRtbD4nO1xyXG5cclxuICBvdXRsb29rX21haWxPcHRpb25zLnN1YmplY3QgPSAnVXNlciBJbnF1aXJ5JztcclxuICBvdXRsb29rX21haWxPcHRpb25zLmh0bWwgPSBlbWFpbEh0bWw7XHJcbiAgb3V0bG9va190cmFuc3BvcnRlci5zZW5kTWFpbChvdXRsb29rX21haWxPcHRpb25zKTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRFbWFpbDtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBnaWZ0c09yZGVyc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gb3JkZXIgbGlzdCB3aXRoIG9yZGVyX25vLCBzdGF0dXMgJiBzdGFmZiBpZCB0byBmb2xsb3ctdXAuXHJcbmdpZnRzT3JkZXJzUm91dGVyLmdldCgnL2FsbE9yZGVycycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZikge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG4vLyB1cGRhdGUgb3JkZXIgc3RhdHVzIGJ5IHN0YWZmIGZvbGxvdy11cC5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIucHV0KCcvdXBkYXRlU3RhdHVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmLmlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5uZXdfc3RhdHVzIHx8ICFyZXEuYm9keS5zbm8gfHwgIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gUGxlYWVzIHJldmlldyBpbnB1dHMuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbSA9IHtcclxuICAgIDE6IHJlcS5ib2R5Lm9yZGVyX25vLFxyXG4gICAgMjogcmVxLmJvZHkuc25vLFxyXG4gICAgMzogRGF0ZS5ub3coKSxcclxuICAgIDQ6IHJlcS5zZXNzaW9uLnN0YWZmLmlkLFxyXG4gICAgNTogcmVxLmJvZHkubmV3X3N0YXR1cyxcclxuICAgIDY6IHJlcS5ib2R5Lm5vdGUgfHwgbnVsbFxyXG4gIH07XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHN0YWZmIHRvIHVwZGF0ZSBjb250YWN0IGluZm8gb2YgdGhlIG9yZGVyLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVDb250YWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmLmlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5vcmRlcl9ubykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdPcmRlcl9ubyBlbXB0eS4nKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCcuJykgfHxcclxuICAgIHJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCcvJykgfHxcclxuICAgIHJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCdcXFxcJylcclxuICApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBlbWFpbC4nKTtcclxuICB9IGVsc2UgaWYgKCFyZXEuYm9keS5uYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgbmFtZS4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkubmFtZSxcclxuICAgIDI6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgMzogcmVxLmJvZHkubW9iaWxlIHx8IG51bGwsXHJcbiAgICA0OiByZXEuYm9keS5jb21wYW55IHx8IG51bGwsXHJcbiAgICA1OiByZXEuYm9keS5tb2JpbGUyIHx8IG51bGwsXHJcbiAgICA2OiByZXEuYm9keS5hZGRyIHx8IG51bGwsXHJcbiAgICA3OiByZXEuYm9keS5vcmRlcl9ub1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHN0YWZmIHRvIGNoYW5nZSBvcmRlciBkZXRhaWxzIGUuZy4gcHJpY2UsIHF0eSwgaW4gY2FzZSB1c2VycyBjaGFuZ2VkIG1pbmQuXHJcbi8vIHN0YWZmIG1heSBjaGFuZ2Ugc3RhdHVzIG9mIHNwZWNpZmljIHByb2R1Y3Qgb2YgdGhlIG9yZGVyLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVPcmRlckl0ZW0nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFyZXEuYm9keS5vcmRlcl9ubykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIEludmFsaWQgT3JkZXIgTm8uJyk7XHJcbiAgfVxyXG4gIGlmICghcmVxLmJvZHkuc25vIHx8IHJlcS5ib2R5LnNubyA9PT0gJycpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBJbnZhbGlkIE9yZGVyIFNuby4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkubmV3X3NhbGVfcHJpY2UsXHJcbiAgICAyOiByZXEuYm9keS5uZXdfcXR5LFxyXG4gICAgMzogcmVxLmJvZHkubmV3X3N0YXR1cyxcclxuICAgIDQ6IHJlcS5ib2R5Lm9yZGVyX25vLFxyXG4gICAgNTogcmVxLmJvZHkuc25vXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNPcmRlcnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgYkxvZ2luIH0gZnJvbSAnLi4vZ2lmdHMtdXNlcnMvZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9naWZ0cy11c2Vycy91c2Vycy1pbnRlcmZhY2UnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gTmV3T3JkZXIoY3VzdG9tZXIsIGNhcnRJdGVtczogQ2FydEl0ZW1bXSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYk9yZGVycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtb3JkZXJzJyk7XHJcbiAgICBsZXQgaW5zZXJ0UnNsdCA9IGRiT3JkZXJzLmluc2VydE9uZSh7XHJcbiAgICAgIGNyZWF0ZWRfb246IG5ldyBEYXRlKCksXHJcbiAgICAgIHNoaXBwaW5nOiB7XHJcbiAgICAgICAgbmFtZTogY3VzdG9tZXIubmFtZSxcclxuICAgICAgICBtb2JpbGU6IGN1c3RvbWVyLm1vYmlsZSxcclxuICAgICAgICBhZGRyZXNzOiBjdXN0b21lci5hZGRyZXNzLFxyXG4gICAgICAgIG1lc3NhZ2U6IGN1c3RvbWVyLm1lc3NhZ2VcclxuICAgICAgfSxcclxuICAgICAgcGF5bWVudDogeyBtZXRob2Q6ICd2aXNhJywgdHJhbnNhY3Rpb25faWQ6ICcyMzEyMjEzMzEyWFhYVEQnIH0sXHJcbiAgICAgIGNhcnRJdGVtczogY2FydEl0ZW1zXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdpbnNlcnRSc2x0OiAnLCBpbnNlcnRSc2x0KTtcclxuICAgIHJldHVybiBpbnNlcnRSc2x0O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93ICdjcmVhdGUgbmV3IG9yZGVyIGZhaWxlZC4nO1xyXG4gIH1cclxufVxyXG4vLyBhc3luYyBmdW5jdGlvbiBHZXRDYXJ0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgbGV0IGNhcnQgPSBhd2FpdCBkYlxyXG4vLyAgICAgICAuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKVxyXG4vLyAgICAgICAuZmluZCh7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSlcclxuLy8gICAgICAgLnRvQXJyYXkoKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2FydCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2FydFF0eShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKCFyZXEuYm9keS5wcm9kdWN0SWQgfHwgIXJlcS5ib2R5LnF1YW50aXR5KSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCxcclxuLy8gICAgICAgICAncHJvZHVjdHMucHJvZHVjdElkJzogcmVxLmJvZHkucHJvZHVjdElkXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7XHJcbi8vICAgICAgICAgICAncHJvZHVjdHMuJC5xdWFudGl0eSc6IHJlcS5ib2R5LnF1YW50aXR5LFxyXG4vLyAgICAgICAgICAgbW9kaWZpZWRPbjogbmV3IERhdGUoKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJzbHQpO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYlxyXG4vLyAgICAgICAuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKVxyXG4vLyAgICAgICAuZGVsZXRlT25lKHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9KTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnRQcm9kdWN0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSB9LFxyXG4vLyAgICAgICAgICRwdWxsOiB7XHJcbi8vICAgICAgICAgICBwcm9kdWN0czoge1xyXG4vLyAgICAgICAgICAgICBwcm9kdWN0SWQ6IHJlcS5ib2R5LnByb2R1Y3RJZCxcclxuLy8gICAgICAgICAgICAgcXVhbnRpdHk6IHJlcS5ib2R5LnF1YW50aXR5XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gQ2FydENoZWNrb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSB9LFxyXG4vLyAgICAgICAgICRwdWxsOiB7XHJcbi8vICAgICAgICAgICBwcm9kdWN0czoge1xyXG4vLyAgICAgICAgICAgICBwcm9kdWN0SWQ6IHJlcS5ib2R5LnByb2R1Y3RJZCxcclxuLy8gICAgICAgICAgICAgcXVhbnRpdHk6IHJlcS5ib2R5LnF1YW50aXR5XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IHsgRGVsZXRlQ2FydCwgRGVsZXRlQ2FydFByb2R1Y3QsIEdldENhcnQsIFVwZGF0ZUNhcnRRdHkgfTtcclxuZXhwb3J0IHsgTmV3T3JkZXIgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYmplY3RJRCwgRGJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxubGV0IGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxubGV0IGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXMocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgR2V0Q2F0ZWdvcmllc0J5TGV2ZWwoMCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2F0ZWdvcmllcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyhyZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IGF3YWl0IEdldFNhbXBsZXMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRDYXRlZ29yeShib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkubmFtZSB8fCAhYm9keS5jYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgYXdhaXQgZGJDb2xsZWN0aW9uLmluc2VydE9uZSh7IG5hbWU6IGJvZHkubmFtZSwgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnkgfSk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2F0ZWdvcnkocXVlcnk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcXVlcnkuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBhd2FpdCBkYkNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQocXVlcnkuX2lkKSB9KTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAbGV2ZWw6XHJcbi8vIDAgLSBhbGw7ICAxIC0gMXN0IGxldmVsOyAgMiAtIDJuZCBhbmQgYWJvdmUgbGV2ZWxzXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXNCeUxldmVsKGxldmVsOiBudW1iZXIpIHtcclxuICBpZiAoZ2xvYmFsQ2F0ZWdvcmllcy5sZW5ndGggPD0gMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IGF3YWl0IEdldENhdGVnb3JpZXNGcm9tRGIoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbENhdGVnb3JpZXM7XHJcbiAgfVxyXG4gIGNvbnN0IHJldHVybkNhdGVnb3JpZXMgPSBbXTtcclxuICBnbG9iYWxDYXRlZ29yaWVzLmZvckVhY2goY2F0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdC5jYXRlZ29yeS5tYXRjaChuZXcgUmVnRXhwKCcvJywgJ2cnKSkpO1xyXG4gICAgaWYgKGNhdC5jYXRlZ29yeS5tYXRjaChuZXcgUmVnRXhwKCcvJywgJ2cnKSkubGVuZ3RoIDw9IGxldmVsKSB7XHJcbiAgICAgIHJldHVybkNhdGVnb3JpZXMucHVzaChjYXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXR1cm5DYXRlZ29yaWVzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzRnJvbURiKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBhd2FpdCBkYkNvbGxlY3Rpb25cclxuICAgICAgLmZpbmQoKVxyXG4gICAgICAuc29ydCgnY2F0ZWdvcnknLCAxKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIGdsb2JhbENhdGVnb3JpZXM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgeyBlcnJNc2c6ICdHZXQgY2F0ZWdvcmllcyBmcm9tIGRhdGFiYXNlIGZhaWxlZC4nIH07XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRTYW1wbGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBsZXQgZG9jcyA9IG51bGw7XHJcbiAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uXHJcbiAgICAgIC5hZ2dyZWdhdGUoW1xyXG4gICAgICAgIHsgJHNvcnQ6IHsgX2lkOiAtMSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgICAgIF9pZDogeyBjYXRlZ29yeTogJyRjYXRlZ29yeScgfSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgX2lkOiAnJF9pZCcsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJyRjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICckaW1nJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgX2lkOiAnJF9pZCcsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgJHNsaWNlOiBbXHJcbiAgICAgICAgICAgICAgICAnJHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIDQgLy8gbWF4IG51bWJlciBvZiBlbGVtZW50cyByZXR1cm5lZCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZG9jcztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiB7IGVyck1zZzogJ0dldCBwcm9kdWN0cyBmYWlsZWQuJyB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRkQ2F0ZWdvcnksIERlbGV0ZUNhdGVnb3J5LCBHZXRDYXRlZ29yaWVzLCBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzIH07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldEludmVudG9yeShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGRiSW52ZW50b3J5LmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoaW52ZW50b3J5KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBxdHkgYnkgcHJvZHVjdDsgVG9kbzogYnkgY29sb3VyLCBzaXplLCBldGMuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkanVzdEludmVudG9yeShfaWQ6IHN0cmluZywgcXR5OiBudW1iZXIsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIV9pZCB8fCAhcXR5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKVxyXG4gICAgICB9LFxyXG4gICAgICB7ICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSwgcXR5OiBxdHkgfSB9LFxyXG4gICAgICB7IHVwc2VydDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJzbHQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFJlc2VydmVJbnZlbnRvcnkoaWQ6IHN0cmluZywgY2FydEl0ZW1zOiBhbnkpIHtcclxuICBpZiAoIWNhcnRJdGVtcyB8fCBjYXJ0SXRlbXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHRocm93ICdUaGUgY2FydCBpcyBlbXB0eS4nO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBbXTtcclxuICAgIGNvbnN0IGZhaWxlZCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChjYXJ0SXRlbXNbaV0ucHJvZHVjdC5faWQpLFxyXG4gICAgICAgICAgcXR5OiB7ICRndGU6IGNhcnRJdGVtc1tpXS5xdHkgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJGluYzogeyBxdHk6IC1jYXJ0SXRlbXNbaV0ucXR5IH0sXHJcbiAgICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgICByZXNlcnZhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBxdHk6IGNhcnRJdGVtc1tpXS5xdHksXHJcbiAgICAgICAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoaWQpLFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzdWx0LnJlc3VsdC5uTW9kaWZpZWQgPT09IDApIHtcclxuICAgICAgICBmYWlsZWQucHVzaChjYXJ0SXRlbXNbaV0ucHJvZHVjdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VjY2Vzcy5wdXNoKGNhcnRJdGVtc1tpXS5wcm9kdWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmYWlsZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Y2Nlc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pZDogc3VjY2Vzc1tpXS5faWQsXHJcbiAgICAgICAgICAgICdyZXNlcnZhdGlvbnMuX2lkJzogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICRpbmM6IHsgcXR5OiBzdWNjZXNzW2ldLnF0eSB9LFxyXG4gICAgICAgICAgICAkcHVsbDogeyByZXNlcnZhdGlvbnM6IHsgX2lkOiBpZCB9IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93ICdOb3QgZW5vdWdoIHN0b3JhZ2UuJztcclxuICAgIH1cclxuICAgIHJldHVybiAnU3VjY2Vzcy4nO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbihfaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBsZXQgdXBkYXRlUnNsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAge1xyXG4gICAgICAgICdyZXNlcnZhdGlvbnMuX2lkJzogbmV3IE9iamVjdElEKF9pZClcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICRwdWxsOiB7IHJlc2VydmF0aW9uczogeyBfaWQ6IG5ldyBPYmplY3RJRChfaWQpIH0gfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHVwZGF0ZVJzbHQucmVzdWx0Lm5Nb2RpZmllZCA8PSAwKSB7XHJcbiAgICAgIHRocm93ICdkZWxldGUgcmVzZXJ2YXRpb24gZmFpbGVkLic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXBkYXRlUnNsdDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRocm93ICdkZWxldGUgcmVzZXJ2YXRpb24gZmFpbGVkIHdpdGggZXhjZXB0aW9uLic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEFkanVzdEludmVudG9yeSxcclxuICBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbixcclxuICBHZXRJbnZlbnRvcnksXHJcbiAgUmVzZXJ2ZUludmVudG9yeVxyXG59O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBBZGRDYXRlZ29yeSxcclxuICBEZWxldGVDYXRlZ29yeSxcclxuICBHZXRDYXRlZ29yaWVzLFxyXG4gIEdldFNhbXBsZXNPZkNhdGVnb3JpZXNcclxufSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLWNhdGVnb3JpZXMub3BzJztcclxuaW1wb3J0IHtcclxuICBBZGRQcm9kdWN0LFxyXG4gIERlbGV0ZVByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdCxcclxuICBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnksXHJcbiAgVXBkYXRlUHJvZHVjdFxyXG59IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMub3BzJztcclxuaW1wb3J0IHsgQWRqdXN0SW52ZW50b3J5LCBHZXRJbnZlbnRvcnkgfSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLWludmVudG9yeS5vcHMnO1xyXG5cclxuY29uc3QgZ2lmdHNQcm9kdWN0c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy92aWV3Lzpwcm9kdWN0X25vJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgR2V0UHJvZHVjdChyZXEucGFyYW1zLCByZXMpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqIGlucXVpcnk6IC9hcGkvZ2lmdHMvcHJvZHVjdHNcclxuICovXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvY2F0ZWdvcmllcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRDYXRlZ29yaWVzKHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnBvc3QoJy9jYXRlZ29yeScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRDYXRlZ29yeShyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZGVsZXRlKCcvY2F0ZWdvcnknLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlQ2F0ZWdvcnkocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvc2FtcGxlcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzKHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeShyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UHJvZHVjdChyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnBvc3QoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEFkZFByb2R1Y3QocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnB1dCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXBkYXRlUHJvZHVjdChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZGVsZXRlKCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVQcm9kdWN0KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL2ludmVudG9yeScsIChyZXEsIHJlcykgPT4ge1xyXG4gIEdldEludmVudG9yeShyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wdXQoJy9pbnZlbnRvcnknLCAocmVxLCByZXMpID0+IHtcclxuICBBZGp1c3RJbnZlbnRvcnkocmVxLmJvZHkuX2lkLCByZXEuYm9keS5xdHksIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNQcm9kdWN0c1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UHJvZHVjdChwYXJhbXM6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGFyYW1zLl9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHByb2R1Y3Qgbm8uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJylcclxuICAgICAgLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChwYXJhbXMuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChwcm9kdWN0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGxldCBkb2NzID0gbnVsbDtcclxuICAgIGlmIChyZXEucXVlcnkuY2F0ZWdvcnkpIHtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFsnXicsIHJlcS5xdWVyeS5jYXRlZ29yeS50cmltKCldLmpvaW4oJycpLCAnaScpO1xyXG4gICAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uLmZpbmQoeyBjYXRlZ29yeTogcmVnZXggfSkudG9BcnJheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRvY3MpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJykuaW5zZXJ0T25lKHtcclxuICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICBwcmljZTogYm9keS5wcmljZSxcclxuICAgICAgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnksXHJcbiAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICBwYWNrYWdpbmc6IGJvZHkucGFja2FnaW5nLFxyXG4gICAgICBtYXRlcmlhbDogYm9keS5tYXRlcmlhbCxcclxuICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICBub3RlOiBib2R5Lm5vdGUsXHJcbiAgICAgIHJldGFpbGVyOiBib2R5LnJldGFpbGVyLFxyXG4gICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiUHJvZHVjdHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBhd2FpdCBkYlByb2R1Y3RzLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChib2R5Ll9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICAgICAgcHJpY2U6IGJvZHkucHJpY2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSxcclxuICAgICAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICAgICAgcGFja2FnaW5nOiBib2R5LnBhY2thZ2luZyxcclxuICAgICAgICAgIG1hdGVyaWFsOiBib2R5Lm1hdGVyaWFsLFxyXG4gICAgICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICAgICAgbm90ZTogYm9keS5ub3RlLFxyXG4gICAgICAgICAgcmV0YWlsZXI6IGJvZHkucmV0YWlsZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdChxdWVyeTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFxdWVyeS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpXHJcbiAgICAgIC5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChxdWVyeS5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkUHJvZHVjdCxcclxuICBEZWxldGVQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeSxcclxuICBHZXRQcm9kdWN0LFxyXG4gIFVwZGF0ZVByb2R1Y3RcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBnaWZ0c1N0YWZmc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmdldCgnL2xvZ291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBMb2dvdXQocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIFJlZ2lzdGVyKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gRGVsZXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNTdGFmZnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi4vc3RyaW5nLW9wcyc7XHJcblxyXG5pbXBvcnQgeyBiTG9naW4gfSBmcm9tICcuL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi91c2Vycy1pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uLFxyXG4gIFJlc2VydmVJbnZlbnRvcnlcclxufSBmcm9tICcuLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzJztcclxuaW1wb3J0IHsgTmV3T3JkZXIgfSBmcm9tICcuLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXJ0KHNlc3Npb246IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBjb25zdCBjYXJ0ID0gYXdhaXQgZGIuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2FydCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2FydCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkVG9DYXJ0KHNlc3Npb246IGFueSwgYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGxldCByc2x0ID0gYXdhaXQgZGIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0sXHJcbiAgICAgIHsgJHB1bGw6IHsgcHJvZHVjdHM6IHsgcHJvZHVjdElkOiBuZXcgT2JqZWN0SUQoYm9keS5wcm9kdWN0Ll9pZCkgfSB9IH1cclxuICAgICk7XHJcbiAgICByc2x0ID0gYXdhaXQgZGIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBuZXcgT2JqZWN0SUQoYm9keS5wcm9kdWN0Ll9pZCksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBib2R5LnF0eSxcclxuICAgICAgICAgICAgbmFtZTogYm9keS5wcm9kdWN0Lm5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBib2R5LnByb2R1Y3QucHJpY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2FydFF0eShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5wcm9kdWN0SWQgfHwgIXJlcS5ib2R5LnF0eSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiByZXEuc2Vzc2lvbi51c2VyLl9pZCxcclxuICAgICAgICAncHJvZHVjdHMucHJvZHVjdElkJzogcmVxLmJvZHkucHJvZHVjdElkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAncHJvZHVjdHMuJC5xdHknOiByZXEuYm9keS5xdHksXHJcbiAgICAgICAgICBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnQoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBkYi5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVJbkNhcnQoc2Vzc2lvbjogYW55LCBfaWQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAgeyAkcHVsbDogeyBwcm9kdWN0czogeyBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChfaWQpIH0gfSB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIENhcnRDaGVja291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoXHJcbiAgICAhcmVxLmJvZHkuY2FydCB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyLm5hbWUgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyLm1vYmlsZSB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIuYWRkcmVzc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGN1c3RvbWVyIGluZm9ybWF0aW9uLicpO1xyXG4gIH1cclxuICBpZiAocmVxLmJvZHkuY2FydC50b3RhbCA8PSAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ05vIHByb2R1Y3QgdG8gY2hlY2tvdXQuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgYk1lbWJlcjogYm9vbGVhbiA9IGJMb2dpbihyZXEuc2Vzc2lvbik7XHJcblxyXG4gIGxldCBpZCA9ICcnO1xyXG4gIGlmIChiTWVtYmVyKSB7XHJcbiAgICBpZCA9IHJlcS5zZXNzaW9uLnVzZXIuX2lkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZCA9IHJhbmRvbVN0cmluZygyMCk7XHJcbiAgfVxyXG4gIGNvbnN0IGNhcnRJdGVtczogQ2FydEl0ZW1bXSA9IHJlcS5ib2R5LmNhcnQuY2FydEl0ZW1zO1xyXG4gIGNvbnN0IGN1c3RvbWVyID0gcmVxLmJvZHkuY2FydC5jdXN0b21lcjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIHJlc2VydmUgaW52ZW50b3J5LCBpdCB0aHJvdyBlcnJvciBpbiBjYXNlIG9mIGZhaWx1cmUuXHJcbiAgICBhd2FpdCBSZXNlcnZlSW52ZW50b3J5KGlkLCBjYXJ0SXRlbXMpO1xyXG5cclxuICAgIGxldCBpbnNlcnRSc2x0ID0gYXdhaXQgTmV3T3JkZXIoY3VzdG9tZXIsIGNhcnRJdGVtcyk7XHJcbiAgICBpZiAoaW5zZXJ0UnNsdC5yZXN1bHQubiA8PSAwKSB7XHJcbiAgICAgIGF3YWl0IERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgdGhyb3cgJ0NyZWF0ZSBuZXcgb3JkZXIgZmFpbGVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVwZGF0ZVJzbHQgPSBhd2FpdCBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbihpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVSc2x0KTtcclxuXHJcbiAgICBpZiAoYk1lbWJlcikge1xyXG4gICAgICBjb25zdCBkYkNhcnRzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgICBsZXQgZGVsZXRlUnNsdCA9IGF3YWl0IGRiQ2FydHMuZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoaWQpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG9yZGVySWQ6IGlkIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEFkZFRvQ2FydCxcclxuICBDYXJ0Q2hlY2tvdXQsXHJcbiAgRGVsZXRlQ2FydCxcclxuICBEZWxldGVJbkNhcnQsXHJcbiAgR2V0Q2FydCxcclxuICBVcGRhdGVDYXJ0UXR5XHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIExvZ2luLFxyXG4gIExvZ291dCxcclxuICBSZWdpc3RlcixcclxuICBEZWxldGVVc2VyLFxyXG4gIFVzZXJJbmZvXHJcbn0gZnJvbSAnLi9naWZ0cy11c2Vycy5vcHMnO1xyXG5pbXBvcnQge1xyXG4gIEFkZFRvQ2FydCxcclxuICBDYXJ0Q2hlY2tvdXQsXHJcbiAgRGVsZXRlQ2FydCxcclxuICBEZWxldGVJbkNhcnQsXHJcbiAgR2V0Q2FydCxcclxuICBVcGRhdGVDYXJ0UXR5XHJcbn0gZnJvbSAnLi9naWZ0cy1jYXJ0cy5vcHMnO1xyXG5cclxuY29uc3QgZ2lmdHNVc2Vyc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpL2dpZnRzL3VzZXJzL1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBMb2dpbihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2luZm8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXNlckluZm8ocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2xvZ291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBMb2dvdXQocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgUmVnaXN0ZXIocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9kZWxldGV1c2VyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZVVzZXIocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0Q2FydChyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkVG9DYXJ0KHJlcS5zZXNzaW9uLCByZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZGVsZXRlKCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVDYXJ0KHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wdXQoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFVwZGF0ZUNhcnRRdHkocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9jYXJ0L3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlSW5DYXJ0KHJlcS5zZXNzaW9uLCByZXEucXVlcnkuX2lkLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvY2FydC9jaGVja291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBDYXJ0Q2hlY2tvdXQocmVxLCByZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzVXNlcnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZW5jcnlwdCB9IGZyb20gJy4uL3N0cmluZy1vcHMnO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICBkYi5jcmVhdGVJbmRleCgndWlkJywgeyB1bmlxdWU6IHRydWUgfSk7XHJcbn0pKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBMb2dpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLnNlc3Npb24gJiYgcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgdWlkOiByZXEuc2Vzc2lvbi51c2VyLnVpZCB9KTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYlVzZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IGF3YWl0IGRiVXNlcnMuZmluZE9uZSh7XHJcbiAgICAgIHVpZDogcmVxLmJvZHkudWlkLFxyXG4gICAgICBwd2Q6IGVuY3J5cHQocmVxLmJvZHkucHdkKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHVpZDogcmVxLnNlc3Npb24udXNlci51aWQgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdzZXJ2ZXIgZXJyb3IuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2dvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5zZXNzaW9uICYmIHJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFJlZ2lzdGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChcclxuICAgICFyZXEuYm9keS51aWQgfHxcclxuICAgICFyZXEuYm9keS5wd2QgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbCB8fFxyXG4gICAgIXJlcS5ib2R5LmZpcnN0TmFtZSB8fFxyXG4gICAgIXJlcS5ib2R5Lmxhc3ROYW1lXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGJVc2VycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICAgIGxldCByc2x0ID0gYXdhaXQgZGJVc2Vycy5pbnNlcnRPbmUoe1xyXG4gICAgICB1aWQ6IHJlcS5ib2R5LnVpZCxcclxuICAgICAgcHdkOiBlbmNyeXB0KHJlcS5ib2R5LnB3ZCksXHJcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgICAgZmlyc3ROYW1lOiByZXEuYm9keS5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiByZXEuYm9keS5sYXN0TmFtZSxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIGlmIChyc2x0Lmluc2VydGVkQ291bnQgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJzbHQub3BzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnUmVnaXN0ZXIgZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdSZWdpc3RlciBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVVc2VyKHNlc3Npb246IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0xvZ2luIGlzIHJlcXVpcmVkLicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgZGIuY29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKS5kZWxldGVPbmUoe1xyXG4gICAgICBfaWQ6IHNlc3Npb24udXNlci5faWRcclxuICAgIH0pO1xyXG4gICAgc2Vzc2lvbi51c2VyID0gbnVsbDtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ1VzZXIgZGVsZXRlZC4nIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVzZXJJbmZvKHNlc3Npb246IGFueSwgcmVzKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBOb3QgbG9naW4uJyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICBfaWQ6IHNlc3Npb24udXNlci5faWQsXHJcbiAgICB1aWQ6IHNlc3Npb24udXNlci51aWQsXHJcbiAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJMb2dpbihzZXNzaW9uOiBhbnkpIHtcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgYkxvZ2luLCBMb2dpbiwgTG9nb3V0LCBSZWdpc3RlciwgRGVsZXRlVXNlciwgVXNlckluZm8gfTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZShib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBsZXQgdXJsID0gYm9keS51cmw7XHJcbiAgaWYgKGJvZHkucXVlcnlzICYmIGJvZHkucXVlcnlzLmxlbmd0aCA+IDApIHtcclxuICAgIHVybCArPSAnPyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkucXVlcnlzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHVybCArPSBib2R5LnF1ZXJ5W2ldO1xyXG4gICAgICB1cmwgKz0gJz0nO1xyXG4gICAgICB1cmwgKz0gYm9keS5xdWVyeVZhbHVlW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBBeGlvcy5kZWxldGUodXJsKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIFBvc3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlcSk7XHJcbiAgbGV0IHVybDogc3RyaW5nID0gcmVxLmJvZHkudXJsO1xyXG4gIGlmIChyZXEuYm9keS5oZWFkZXJzKSB7XHJcbiAgICBoZWFkZXJzID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXEuYm9keS5oZWFkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAocmVxLmJvZHkucGFyYW1ldGVycykge1xyXG4gICAgdXJsICs9ICc/JztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxLmJvZHkucGFyYW1ldGVycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB1cmwgKz0gcmVxLmJvZHkucGFyYW1ldGVyc1tpXSArICc9JyArIHJlcS5ib2R5LnBhcmFtZXRlclZhbHVlW2ldICsgJyYnO1xyXG4gICAgfVxyXG4gIH1cclxuICBBeGlvcy5nZXQodXJsLCBoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIFB1dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBBeGlvcy5wdXQocmVxLmJvZHkudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIEdldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBBeGlvcy5wb3N0KHJlcS5ib2R5LnVybCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXMuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgRGVsZXRlLCBHZXQsIFBvc3QsIFB1dCB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsZXRlLCBHZXQsIFBvc3QsIFB1dCB9IGZyb20gJy4vaHR0cC1yZXF1ZXN0JztcclxuXHJcbmNvbnN0IGh0dHBSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmh0dHBSb3V0ZXIucG9zdCgnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEuYm9keS50eXBlID09PSAnREVMRVRFJykge1xyXG4gICAgRGVsZXRlKHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ0dFVCcpIHtcclxuICAgIEdldChyZXEuYm9keSwgcmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdQT1NUJykge1xyXG4gICAgUG9zdChyZXEuYm9keSwgcmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdQVVQnKSB7XHJcbiAgICBQdXQocmVxLmJvZHksIHJlcyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHBSb3V0ZXI7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGJ1c0Fycml2YWxVcmwsIGhlYWRlckNvbmZpZyB9IGZyb20gJy4vbHRhJztcclxuaW1wb3J0IHsgY2hlY2tCdXNTdG9wTG9jYWxseSB9IGZyb20gJy4vYnVzLXN0b3BzJztcclxuXHJcbmZ1bmN0aW9uIGdldEJ1c0Fycml2YWwoYnVzU3RvcENvZGU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGJ1c1N0b3BDb2RlID0gYnVzU3RvcENvZGUudHJpbSgpO1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBCdXNTdG9wQ29kZS4nKTtcclxuICB9XHJcblxyXG4gIGxldCBidXNTdG9wSW5mbyA9IGNoZWNrQnVzU3RvcExvY2FsbHkoYnVzU3RvcENvZGUpO1xyXG4gIGlmICghYnVzU3RvcEluZm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQnVzIFN0b3Agbm90IGZvdW5kLicpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHVybCA9IGAke2J1c0Fycml2YWxVcmx9P0J1c1N0b3BDb2RlPSR7YnVzU3RvcENvZGV9YDtcclxuICBBeGlvcy5nZXQodXJsLCBoZWFkZXJDb25maWcpXHJcbiAgICAudGhlbihyZXNwb3NlID0+IHtcclxuICAgICAgcmVzXHJcbiAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgLnNlbmQoeyBidXNTdG9wSW5mbzogYnVzU3RvcEluZm8sIGJ1c0Fycml2YWw6IHJlc3Bvc2UuZGF0YSB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEJ1c0Fycml2YWw7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGJ1c1N0b3BzVXJsLCBoZWFkZXJDb25maWcgfSBmcm9tICcuL2x0YSc7XHJcbmltcG9ydCB7IEJ1c1N0b3BJbmZvIH0gZnJvbSAnLi9idXMtc3RvcHMtaW50ZXJmYWNlJztcclxuXHJcbmxldCBidXNTdG9wczogQnVzU3RvcEluZm9bXSA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QnVzU3RvcHNGcm9tTHRhKHNraXA/OiBudW1iZXIpOiBQcm9taXNlPEJ1c1N0b3BJbmZvW10+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHVybCA9IGJ1c1N0b3BzVXJsO1xyXG4gICAgaWYgKHNraXApIHtcclxuICAgICAgdXJsICs9IGA/JHNraXA9JHtza2lwfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQodXJsLCBoZWFkZXJDb25maWcpO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgdGhyb3cgeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudmFsdWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbEJ1c1N0b3BzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2tpcCA9IDA7XHJcbiAgICBsZXQgbmV3QnVzU3RvcHM6IEJ1c1N0b3BJbmZvW10gPSBbXTtcclxuICAgIGRvIHtcclxuICAgICAgbmV3QnVzU3RvcHMgPSBhd2FpdCBnZXRCdXNTdG9wc0Zyb21MdGEoc2tpcCk7XHJcbiAgICAgIGxldCB0ZW1wID0gYnVzU3RvcHM7XHJcbiAgICAgIGJ1c1N0b3BzID0gdGVtcC5jb25jYXQobmV3QnVzU3RvcHMpO1xyXG4gICAgICBza2lwICs9IDUwMDtcclxuICAgIH0gd2hpbGUgKG5ld0J1c1N0b3BzLmxlbmd0aCA9PT0gNTAwKTtcclxuICAgIGNvbnNvbGUubG9nKCdUb3RhbCBidXMgc3RvcHM6ICcgKyBidXNTdG9wcy5sZW5ndGgpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGJ1c1N0b3BzID0gW107XHJcbiAgICBnZXRBbGxCdXNTdG9wcygpO1xyXG4gIH1cclxufVxyXG5nZXRBbGxCdXNTdG9wcygpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCdXNTdG9wTG9jYWxseShidXNTdG9wQ29kZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFidXNTdG9wQ29kZSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1c1N0b3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoYnVzU3RvcENvZGUgPT09IGJ1c1N0b3BzW2ldLkJ1c1N0b3BDb2RlKSB7XHJcbiAgICAgIHJldHVybiBidXNTdG9wc1tpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCdXNTdG9wSW5mbyhidXNTdG9wQ29kZTogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFidXNTdG9wQ29kZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIEJ1cyBTdG9wIENvZGUuJyk7XHJcbiAgfVxyXG4gIGxldCBidXNTdG9wSW5mbyA9IGNoZWNrQnVzU3RvcExvY2FsbHkoYnVzU3RvcENvZGUpO1xyXG4gIGlmIChidXNTdG9wSW5mbykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGJ1c1N0b3BJbmZvKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdCdXMgU3RvcCBJbmZvIG5vdCBmb3VuZC4nKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYnVzU3RvcHMsIGNoZWNrQnVzU3RvcExvY2FsbHksIGdldEJ1c1N0b3BJbmZvIH07XHJcbiIsImNvbnN0IGx0YUFjY291bnRLZXkgPSAnNnNWemY5elhSYUNna0pVZGp4SXcyQT09JztcclxuXHJcbmNvbnN0IGJ1c0Fycml2YWxVcmwgPVxyXG4gICdodHRwOi8vZGF0YW1hbGwyLm15dHJhbnNwb3J0LnNnL2x0YW9kYXRhc2VydmljZS9CdXNBcnJpdmFsdjInO1xyXG5jb25zdCBidXNTdG9wc1VybCA9ICdodHRwOi8vZGF0YW1hbGwyLm15dHJhbnNwb3J0LnNnL2x0YW9kYXRhc2VydmljZS9CdXNTdG9wcyc7XHJcblxyXG5jb25zdCBoZWFkZXJDb25maWcgPSB7XHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjb3VudEtleTogbHRhQWNjb3VudEtleVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGJ1c0Fycml2YWxVcmwsIGJ1c1N0b3BzVXJsLCBoZWFkZXJDb25maWcgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCBnZXRCdXNBcnJpdmFsIGZyb20gJy4vYnVzLWFycml2YWwnO1xyXG5pbXBvcnQgeyBnZXRCdXNTdG9wSW5mbyB9IGZyb20gJy4vYnVzLXN0b3BzJztcclxuXHJcbi8vIHVybDogL2FwaS9sdGEvYnVzXHJcbmNvbnN0IGJ1c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuYnVzUm91dGVyLmdldCgnL2J1c0Fycml2YWwvOmJ1c1N0b3BDb2RlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGdldEJ1c0Fycml2YWwocmVxLnBhcmFtcy5idXNTdG9wQ29kZSwgcmVzKTtcclxufSk7XHJcblxyXG5idXNSb3V0ZXIuZ2V0KCcvYnVzU3RvcC86YnVzU3RvcENvZGUnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgZ2V0QnVzU3RvcEluZm8ocmVxLnBhcmFtcy5idXNTdG9wQ29kZSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBidXNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgT3hmb3JkRGljdGlvbmFyeSBmcm9tICdveGZvcmQtZGljdGlvbmFyeSc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IERJQ1QgPSBuZXcgT3hmb3JkRGljdGlvbmFyeSh7XHJcbiAgYXBwX2lkOiAnMDMxNGU5ZTInLFxyXG4gIGFwcF9rZXk6ICc1YTZjMjU4OTQ3NGEyZjgzY2NkNjlmMzk3YmZlYzdhMicsXHJcbiAgc291cmNlX2xhbmc6ICdlbidcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDaGVja094Zm9yZERpY3Rpb25hcnkod29yZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF3b3JkIHx8ICF3b3JkLnRyaW0oKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHdvcmQuJyk7XHJcbiAgfVxyXG5cclxuICBESUNULmRlZmluaXRpb25zKHdvcmQudHJpbSgpKS50aGVuKFxyXG4gICAgZGVmaW5pdGlvbnMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGVmaW5pdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrT3hmb3JkRGljdGlvbmFyeTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgbHVuY2hQYWxzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUGFscygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIGx1bmNoUGFscyA9IGF3YWl0IHBhbHNDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoeyBuYW1lOiAxIH0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFBhbHMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChsdW5jaFBhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGx1bmNoUGFscyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUGFsKG5hbWU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIG5hbWUgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBwYWxzQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzQXR0ZW5kYW5jZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbnN0IGF0dGVuZGFuY2VzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICR1bndpbmQ6ICckYXR0ZW5kZWVzJyB9LFxyXG4gICAgICAgIHsgJGdyb3VwOiB7IF9pZDogJyRhdHRlbmRlZXMnLCBhdHRlbmRhbmNlOiB7ICRzdW06IDEgfSB9IH0sXHJcbiAgICAgICAgeyAkcHJvamVjdDogeyBuYW1lOiAnJF9pZCcsIGF0dGVuZGFuY2U6ICckYXR0ZW5kYW5jZScgfSB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoYXR0ZW5kYW5jZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZFBhbCwgRGVsZXRlUGFsLCBHZXRQYWxzLCBHZXRQYWxzQXR0ZW5kYW5jZSB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRSZWNvcmRzKHJlczogUmVzcG9uc2UsIHF0eT86IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnNvcnQoeyBjcmVhdGVkT246IC0xIH0pXHJcbiAgICAgIC5saW1pdChxdHkgfCAzMClcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZWNvcmRzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRSZWNvcmQocGF5ZXI6IHN0cmluZywgYXR0ZW5kZWVzOiBzdHJpbmdbXSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGF5ZXIgfHwgIWF0dGVuZGVlcyB8fCBhdHRlbmRlZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBwYXJhbXMgdG8gYWRkLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKHtcclxuICAgICAgcGF5ZXI6IHBheWVyLFxyXG4gICAgICBhdHRlbmRlZXM6IGF0dGVuZGVlcyxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3IgYXQgc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUmVjb3JkKF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCByZWNvcmQgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IENoZWNrT3hmb3JkRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBBZGRQYWwsIERlbGV0ZVBhbCwgR2V0UGFscywgR2V0UGFsc0F0dGVuZGFuY2UgfSBmcm9tICcuL2x1bmNoZnVuLXBhbHMnO1xyXG5pbXBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9IGZyb20gJy4vbHVuY2hmdW4tcmVjb3Jkcyc7XHJcblxyXG5jb25zdCBkaWN0aW9uYXJ5Um91dGVyID0gUm91dGVyKCk7XHJcbmNvbnN0IGx1bmNoZnVuUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5kaWN0aW9uYXJ5Um91dGVyLmdldCgnL294Zm9yZC86d29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBDaGVja094Zm9yZERpY3Rpb25hcnkocmVxLnBhcmFtcy53b3JkLCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3BhbHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UGFscyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRQYWwocmVxLmJvZHkubmFtZSwgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVQYWwocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3JlY29yZHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UmVjb3JkcyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRSZWNvcmQocmVxLmJvZHkucGF5ZXIsIHJlcS5ib2R5LmF0dGVuZGVlcywgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVSZWNvcmQocmVxLnF1ZXJ5Ll9pZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9zdGF0cy9hdHRlbmRhbmNlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHNBdHRlbmRhbmNlKHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZGljdGlvbmFyeVJvdXRlciwgbHVuY2hmdW5Sb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIERiLCBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgTU9OR09fVVJMID1cclxuICAnbW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC1keHdrZy5tb25nb2RiLm5ldC9pbnNnP3JldHJ5V3JpdGVzPXRydWUnO1xyXG5cclxubGV0IGRhdGFiYXNlOiBEYjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXREYigpOiBQcm9taXNlPERiPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09fVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGRhdGFiYXNlID0gY2xpZW50LmRiKCdpbnNnJykpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93ICdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZC4nO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gTW9uZ29EYigpOiBQcm9taXNlPERiPiB7XHJcbiAgaWYgKGRhdGFiYXNlKSB7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGJDb2xsZWN0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbihuYW1lKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XHJcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IGFwaVJvdXRlciBmcm9tICcuL2FwaS1yb3V0ZXInO1xyXG5cclxuLy8gRXhwcmVzcyBzZXJ2ZXJcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBIT1NUID0gJ2xvY2FsaG9zdCc7XHJcbmNvbnN0IFBPUlQgPSA4MDtcclxuXHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuXHJcbmFwcC51c2UoXHJcbiAgc2Vzc2lvbih7XHJcbiAgICBzZWNyZXQ6ICdpbnNnLXljLWx5LTE3JyxcclxuICAgIHJlc2F2ZTogZmFsc2UsXHJcbiAgICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcclxuICAgIGNvb2tpZToge1xyXG4gICAgICBtYXhBZ2U6IDEwMDAgKiA2MCAqIDYwICogMjQgLy8gbWlsbHNlY29uZHMgb2YgMjRocnMgIH1cclxuICAgIH1cclxuICB9KVxyXG4pO1xyXG5cclxuYXBwLnVzZSgnL2FwaScsIGFwaVJvdXRlcik7XHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZEZpbGUoam9pbihfX2Rpcm5hbWUsICcvY2xpZW50L2luZGV4Lmh0bWwnKSk7XHJcbn0pO1xyXG5cclxuLy8gU2VydmVyIHN0YXRpYyBmaWxlcyBmcm9tIC9jbGllbnRcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhqb2luKF9fZGlybmFtZSwgJy9jbGllbnQnKSkpO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxpbmcgLSAxXHJcbmFwcC5hbGwoJy8qJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZEZpbGUoam9pbihfX2Rpcm5hbWUsICcvY2xpZW50L2luZGV4Lmh0bWwnKSk7XHJcbn0pO1xyXG4vLyBlcnJvciBoYW5kbGluZyAtIDJcclxuYXBwLnVzZSgocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0lzc3VlIGhhcHBlbmVkLiBQbGVhc2UgcmV0cnkgbGF0ZXIhJyk7XHJcbn0pO1xyXG5cclxuLy8gU3RhcnQgdXAgdGhlIE5vZGUgc2VydmVyXHJcbi8vIGh0dHBcclxuYXBwLnNldCgnZG9tYWluJywgSE9TVCk7XHJcbmFwcC5zZXQoJ3BvcnQnLCBQT1JUKTtcclxuYXBwLmxpc3RlbihhcHAuZ2V0KCdwb3J0JyksICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgTm9kZSBzZXJ2ZXIgbGlzdGVuaW5nIG9uIGh0dHA6Ly8ke0hPU1R9OiR7UE9SVH1gKTtcclxufSk7XHJcblxyXG4vLyBodHRwcyBkZWZhdWx0IHBvcnRcclxuLy8gY29uc3QgaHR0cHNPcHRpb25zID0ge1xyXG4vLyAgIGNlcnQ6IGZzLnJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy9rZXlzL2NlcnRpZmljYXRlLnBlbScpKSxcclxuLy8gICBrZXk6IGZzLnJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy9rZXlzL3ByaXZhdGVrZXkucGVtJykpXHJcbi8vIH07XHJcbi8vIGNvbnN0IHNlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcihodHRwc09wdGlvbnMsIGFwcCk7XHJcbi8vIHNlcnZlci5saXN0ZW4oNDQzKTtcclxuLy8gZXhwb3J0IHsgc2VydmVyIH07XHJcbiIsImltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5cclxuY29uc3QgYWxnb3JpdGhtID0gJ2Flcy0xOTItY2JjJztcclxuY29uc3QgcGFzc3dvcmQgPSAnaW5TR3ljODMnO1xyXG5jb25zdCBrZXkgPSBjcnlwdG8uc2NyeXB0U3luYyhwYXNzd29yZCwgJ3NhbHQnLCAyNCk7XHJcbmNvbnN0IGl2ID0gQnVmZmVyLmFsbG9jKDE2LCAwKTtcclxuXHJcbmZ1bmN0aW9uIGVuY3J5cHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGNpcGhlciA9IGNyeXB0by5jcmVhdGVDaXBoZXJpdihhbGdvcml0aG0sIGtleSwgaXYpO1xyXG4gICAgbGV0IGNyeXB0ZWQ6IHN0cmluZyA9IGNpcGhlci51cGRhdGUodGV4dCwgJ3V0ZjgnLCAnaGV4Jyk7XHJcbiAgICBjcnlwdGVkICs9IGNpcGhlci5maW5hbCgnaGV4Jyk7XHJcbiAgICByZXR1cm4gY3J5cHRlZDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZW5jcnlwdCA9PiAnLCBlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3J5cHQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGRlY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBkZWM6IHN0cmluZyA9IGRlY2lwaGVyLnVwZGF0ZSh0ZXh0LCAnaGV4JywgJ3V0ZjgnKTtcclxuICAgIGRlYyArPSBkZWNpcGhlci5maW5hbCgndXRmOCcpO1xyXG4gICAgcmV0dXJuIGRlYztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZGVjcnlwdCA9PiAnLCBlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIHN0cmluZyBvcGVyYXRpb25cclxuICovXHJcbmVudW0gUmFuZG9tVHlwZXMge1xyXG4gIENhcGl0YWwsXHJcbiAgTnVtYmVyLFxyXG4gIFN0cmluZ1xyXG59XHJcblxyXG4vLyByZXR1cm4gc3RyaW5nIG9mIHJhbmRvbSBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLk51bWJlciwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2FwaXRhbCBjaGFyYWN0ZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tQ2FwaXRhbHMobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIHJldHVybiByYW5kb20oUmFuZG9tVHlwZXMuQ2FwaXRhbCwgbGVuZ3RoKTtcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gY2hhcmFjdGVycyBvciBudW1iZXJzIHdpdGggc3BlY2lmaWVkIGxlbmd0aC5cclxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLlN0cmluZywgbGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tKHR5cGU6IFJhbmRvbVR5cGVzLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IHJTdHJpbmc6IHN0cmluZyA9ICcnO1xyXG4gIGlmICh0eXBlID09PSBSYW5kb21UeXBlcy5TdHJpbmcpIHtcclxuICAgIHJTdHJpbmcgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuTnVtYmVyKSB7XHJcbiAgICByU3RyaW5nID0gJzAxMjM0NTY3ODknO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuQ2FwaXRhbCkge1xyXG4gICAgclN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpIHtcclxuICAgIHJlc3VsdCArPSByU3RyaW5nW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJTdHJpbmcubGVuZ3RoKV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZW5jcnlwdCxcclxuICBkZWNyeXB0LFxyXG4gIHJhbmRvbUNhcGl0YWxzLFxyXG4gIHJhbmRvbU51bWJlcixcclxuICByYW5kb21TdHJpbmcsXHJcbiAgUmFuZG9tVHlwZXNcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm94Zm9yZC1kaWN0aW9uYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==