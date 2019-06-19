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
                case 4: return [3 /*break*/, 6];
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
function getNearbyBusStops(latitude, longitude, res) {
    if (latitude === undefined || longitude === undefined) {
        return res.status(400).send('Invalid coordinates.');
    }
    var nearbyStops = [];
    var R = 6371e3;
    for (var i = 0; i < busStops.length; i++) {
        var dLat = ((busStops[i].Latitude - latitude) * Math.PI) / 180;
        var dLong = ((busStops[i].Longitude - longitude) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((busStops[i].Latitude * Math.PI) / 180) *
                Math.cos((latitude * Math.PI) / 180) *
                Math.sin(dLong / 2) *
                Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var dist = R * c;
        if (Math.abs(dist) < 400) {
            nearbyStops.push(busStops[i]);
        }
    }
    res.status(200).send(nearbyStops);
}
exports.getNearbyBusStops = getNearbyBusStops;


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
busRouter.get('/nearbyBusStops', function (req, res) {
    bus_stops_1.getNearbyBusStops(req.query.latitude, req.query.longitude, res);
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
var https = __webpack_require__(/*! https */ "https");
var http = __webpack_require__(/*! http */ "http");
var fs = __webpack_require__(/*! fs */ "fs");
var path_1 = __webpack_require__(/*! path */ "path");
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var api_router_1 = __webpack_require__(/*! ./api-router */ "./api-router.ts");
// Express server
var app = express();
// const HOST = 'localhost';
// const HOST = 'insg.xyz';
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
// Start up the Node https server default port
var httpsOptions = {
    cert: fs.readFileSync(path_1.join(__dirname, '/cert/insg.crt')),
    key: fs.readFileSync(path_1.join(__dirname, '/cert/insg.key'))
};
// app.set('domain', HOST);
var https_server = https.createServer(httpsOptions, app);
https_server.listen(443, function () {
    console.log("Node server listening on https port 443");
});
// redirect http request to https server
http
    .createServer(function (req, res) {
    try {
        var host = req.headers['host'].replace(':80', ':443');
        console.log('req.hostname', req.hostname);
        res.writeHead(301, {
            Location: "https://" + host + req.url
        });
        res.end();
    }
    catch (e) {
        console.log('issue to redirect: ', req.headers, req.rawHeaders, req.url);
        if (res) {
            res.sendStatus(400);
        }
    }
})
    .listen(80);


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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9odHRwLXJlcXVlc3Qvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x0YS9idXMtYXJyaXZhbC50cyIsIndlYnBhY2s6Ly8vLi9sdGEvYnVzLXN0b3BzLnRzIiwid2VicGFjazovLy8uL2x0YS9sdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbHRhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2x1bmNoZnVuLXBhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvbHVuY2hmdW4tcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbW9uZ29kYi1vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzIiwid2VicGFjazovLy8uL3N0cmluZy1vcHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm94Zm9yZC1kaWN0aW9uYXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFjO0lBQy9DLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQztJQUN6QixJQUFJLElBQUksS0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQy9CLE9BQU8sR0FBRyxnRUFBZ0UsQ0FBQztLQUM1RTtTQUFNLElBQUksSUFBSSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7UUFDdEMsT0FBTyxHQUFHLFlBQVksQ0FBQztLQUN4QjtTQUFNLElBQUksSUFBSSxLQUFLLFdBQVcsQ0FBQyxPQUFPLEVBQUU7UUFDdkMsT0FBTyxHQUFHLDRCQUE0QixDQUFDO0tBQ3hDO1NBQU07UUFDTCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsSUFBSSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7OztBQ3RFRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NlcnZlci50c1wiKTtcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IGdpZnRzUHJvZHVjdHNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNPcmRlcnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlcic7XHJcbmltcG9ydCBnaWZ0c1VzZXJzUm91dGVyIGZyb20gJy4vZ2lmdHMtdXNlcnMvZ2lmdHMtdXNlcnMtcm91dGVyJztcclxuaW1wb3J0IGdpZnRzU3RhZmZzUm91dGVyIGZyb20gJy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXInO1xyXG5cclxuY29uc3QgZ2lmdHNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbi8vIHVybDogL2FwaS9naWZ0c1xyXG5naWZ0c1JvdXRlci51c2UoJy9wcm9kdWN0cycsIGdpZnRzUHJvZHVjdHNSb3V0ZXIpO1xyXG5naWZ0c1JvdXRlci51c2UoJy9vcmRlcnMnLCBnaWZ0c09yZGVyc1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL3VzZXJzJywgZ2lmdHNVc2Vyc1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL3N0YWZmcycsIGdpZnRzU3RhZmZzUm91dGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBidXNSb3V0ZXIgfSBmcm9tICcuL2x0YS9yb3V0ZXInO1xyXG5pbXBvcnQgaHR0cFJvdXRlciBmcm9tICcuL2h0dHAtcmVxdWVzdC9yb3V0ZXInO1xyXG5pbXBvcnQge1xyXG4gIGRpY3Rpb25hcnlSb3V0ZXIsXHJcbiAgbHVuY2hmdW5Sb3V0ZXJcclxufSBmcm9tICcuL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L3JvdXRlcic7XHJcbmltcG9ydCBnaWZ0c1JvdXRlciBmcm9tICcuL2FwaS1naWZ0cy1yb3V0ZXInO1xyXG5pbXBvcnQgU2VuZEVtYWlsIGZyb20gJy4vZW1haWwvZW1haWwub3BzJztcclxuXHJcbmNvbnN0IGFwaVJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpXHJcbmFwaVJvdXRlci51c2UoJy9kaWN0aW9uYXJ5JywgZGljdGlvbmFyeVJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9odHRwJywgaHR0cFJvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9sdW5jaGZ1bicsIGx1bmNoZnVuUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2x0YS9idXMnLCBidXNSb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvZ2lmdHMnLCBnaWZ0c1JvdXRlcik7XHJcblxyXG4vLyBtc2cgZnJvbSB1c2VyczsgZm9yd2FyZCBpdCB2aWEgbm9kZW1haWxlci5cclxuYXBpUm91dGVyLnBvc3QoJy9tc2cnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgU2VuZEVtYWlsKHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuXHJcbi8vIGVycm9yIGhhbmRsaW5nXHJcbmFwaVJvdXRlci5hbGwoJy8qJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBSZXF1ZXN0Jyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVUcmFuc3BvcnQgfSBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IG91dGxvb2tfdHJhbnNwb3J0ZXIgPSBjcmVhdGVUcmFuc3BvcnQoe1xyXG4gIHNlcnZpY2U6ICdvdXRsb29rJyxcclxuICBhdXRoOiB7XHJcbiAgICB1c2VyOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgICBwYXNzOiAncGluZ21lSEM4MydcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3V0bG9va19tYWlsT3B0aW9ucyA9IHtcclxuICBmcm9tOiAneXVhbmNoYW9Ab3V0bG9vay5zZycsXHJcbiAgdG86ICdzZWVzZWEyQGdtYWlsLmNvbScsXHJcbiAgc3ViamVjdDogbnVsbCxcclxuICBodG1sOiBudWxsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTZW5kRW1haWwoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZW1haWxIdG1sOiBzdHJpbmcgPVxyXG4gICAgJzwhRE9DVFlQRSBodG1sPjxoZWFkPicgK1xyXG4gICAgJzxtZXRhIGh0dHAtZXF1aXY9XCJjb250ZW50LXR5cGVcIiBjb250ZW50PVwidGV4dC9odG1sO2NoYXJzZXQ9VVRGLThcIj48L2hlYWQ+JyArXHJcbiAgICBgPGJvZHk+PGJyPjxiPk1lc3NhZ2UgZnJvbSBVc2VyICR7Ym9keS5uYW1lfWAgK1xyXG4gICAgJyA6PC9iPjxicj48YnI+JyArXHJcbiAgICBgPHA+PGI+RW1haWw6IDwvYj4gJHtib2R5LmVtYWlsfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgIGA8cD48Yj5Nb2JpbGU6IDwvYj4gJHtib2R5Lm1vYmlsZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICBgPHA+PGI+TWVzc2FnZTogPC9iPiAke2JvZHkubWVzc2FnZX1gICtcclxuICAgICc8L3A+JyArXHJcbiAgICAnPC9ib2R5PjwvaHRtbD4nO1xyXG5cclxuICBvdXRsb29rX21haWxPcHRpb25zLnN1YmplY3QgPSAnVXNlciBJbnF1aXJ5JztcclxuICBvdXRsb29rX21haWxPcHRpb25zLmh0bWwgPSBlbWFpbEh0bWw7XHJcbiAgb3V0bG9va190cmFuc3BvcnRlci5zZW5kTWFpbChvdXRsb29rX21haWxPcHRpb25zKTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRFbWFpbDtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBnaWZ0c09yZGVyc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gb3JkZXIgbGlzdCB3aXRoIG9yZGVyX25vLCBzdGF0dXMgJiBzdGFmZiBpZCB0byBmb2xsb3ctdXAuXHJcbmdpZnRzT3JkZXJzUm91dGVyLmdldCgnL2FsbE9yZGVycycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZikge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG4vLyB1cGRhdGUgb3JkZXIgc3RhdHVzIGJ5IHN0YWZmIGZvbGxvdy11cC5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIucHV0KCcvdXBkYXRlU3RhdHVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmLmlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5uZXdfc3RhdHVzIHx8ICFyZXEuYm9keS5zbm8gfHwgIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gUGxlYWVzIHJldmlldyBpbnB1dHMuJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJhbSA9IHtcclxuICAgIDE6IHJlcS5ib2R5Lm9yZGVyX25vLFxyXG4gICAgMjogcmVxLmJvZHkuc25vLFxyXG4gICAgMzogRGF0ZS5ub3coKSxcclxuICAgIDQ6IHJlcS5zZXNzaW9uLnN0YWZmLmlkLFxyXG4gICAgNTogcmVxLmJvZHkubmV3X3N0YXR1cyxcclxuICAgIDY6IHJlcS5ib2R5Lm5vdGUgfHwgbnVsbFxyXG4gIH07XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHN0YWZmIHRvIHVwZGF0ZSBjb250YWN0IGluZm8gb2YgdGhlIG9yZGVyLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVDb250YWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmLmlkKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5vcmRlcl9ubykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdPcmRlcl9ubyBlbXB0eS4nKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJ0AnKSB8fFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCcuJykgfHxcclxuICAgIHJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCcvJykgfHxcclxuICAgIHJlcS5ib2R5LmVtYWlsLmluY2x1ZGVzKCdcXFxcJylcclxuICApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBlbWFpbC4nKTtcclxuICB9IGVsc2UgaWYgKCFyZXEuYm9keS5uYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgbmFtZS4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkubmFtZSxcclxuICAgIDI6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgMzogcmVxLmJvZHkubW9iaWxlIHx8IG51bGwsXHJcbiAgICA0OiByZXEuYm9keS5jb21wYW55IHx8IG51bGwsXHJcbiAgICA1OiByZXEuYm9keS5tb2JpbGUyIHx8IG51bGwsXHJcbiAgICA2OiByZXEuYm9keS5hZGRyIHx8IG51bGwsXHJcbiAgICA3OiByZXEuYm9keS5vcmRlcl9ub1xyXG4gIH07XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHN0YWZmIHRvIGNoYW5nZSBvcmRlciBkZXRhaWxzIGUuZy4gcHJpY2UsIHF0eSwgaW4gY2FzZSB1c2VycyBjaGFuZ2VkIG1pbmQuXHJcbi8vIHN0YWZmIG1heSBjaGFuZ2Ugc3RhdHVzIG9mIHNwZWNpZmljIHByb2R1Y3Qgb2YgdGhlIG9yZGVyLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVPcmRlckl0ZW0nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFyZXEuYm9keS5vcmRlcl9ubykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIEludmFsaWQgT3JkZXIgTm8uJyk7XHJcbiAgfVxyXG4gIGlmICghcmVxLmJvZHkuc25vIHx8IHJlcS5ib2R5LnNubyA9PT0gJycpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBJbnZhbGlkIE9yZGVyIFNuby4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkubmV3X3NhbGVfcHJpY2UsXHJcbiAgICAyOiByZXEuYm9keS5uZXdfcXR5LFxyXG4gICAgMzogcmVxLmJvZHkubmV3X3N0YXR1cyxcclxuICAgIDQ6IHJlcS5ib2R5Lm9yZGVyX25vLFxyXG4gICAgNTogcmVxLmJvZHkuc25vXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNPcmRlcnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgYkxvZ2luIH0gZnJvbSAnLi4vZ2lmdHMtdXNlcnMvZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuLi9naWZ0cy11c2Vycy91c2Vycy1pbnRlcmZhY2UnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gTmV3T3JkZXIoY3VzdG9tZXIsIGNhcnRJdGVtczogQ2FydEl0ZW1bXSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYk9yZGVycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtb3JkZXJzJyk7XHJcbiAgICBsZXQgaW5zZXJ0UnNsdCA9IGRiT3JkZXJzLmluc2VydE9uZSh7XHJcbiAgICAgIGNyZWF0ZWRfb246IG5ldyBEYXRlKCksXHJcbiAgICAgIHNoaXBwaW5nOiB7XHJcbiAgICAgICAgbmFtZTogY3VzdG9tZXIubmFtZSxcclxuICAgICAgICBtb2JpbGU6IGN1c3RvbWVyLm1vYmlsZSxcclxuICAgICAgICBhZGRyZXNzOiBjdXN0b21lci5hZGRyZXNzLFxyXG4gICAgICAgIG1lc3NhZ2U6IGN1c3RvbWVyLm1lc3NhZ2VcclxuICAgICAgfSxcclxuICAgICAgcGF5bWVudDogeyBtZXRob2Q6ICd2aXNhJywgdHJhbnNhY3Rpb25faWQ6ICcyMzEyMjEzMzEyWFhYVEQnIH0sXHJcbiAgICAgIGNhcnRJdGVtczogY2FydEl0ZW1zXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdpbnNlcnRSc2x0OiAnLCBpbnNlcnRSc2x0KTtcclxuICAgIHJldHVybiBpbnNlcnRSc2x0O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93ICdjcmVhdGUgbmV3IG9yZGVyIGZhaWxlZC4nO1xyXG4gIH1cclxufVxyXG4vLyBhc3luYyBmdW5jdGlvbiBHZXRDYXJ0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgbGV0IGNhcnQgPSBhd2FpdCBkYlxyXG4vLyAgICAgICAuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKVxyXG4vLyAgICAgICAuZmluZCh7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSlcclxuLy8gICAgICAgLnRvQXJyYXkoKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2FydCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2FydFF0eShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcbi8vICAgaWYgKCFyZXEuYm9keS5wcm9kdWN0SWQgfHwgIXJlcS5ib2R5LnF1YW50aXR5KSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCxcclxuLy8gICAgICAgICAncHJvZHVjdHMucHJvZHVjdElkJzogcmVxLmJvZHkucHJvZHVjdElkXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICAkc2V0OiB7XHJcbi8vICAgICAgICAgICAncHJvZHVjdHMuJC5xdWFudGl0eSc6IHJlcS5ib2R5LnF1YW50aXR5LFxyXG4vLyAgICAgICAgICAgbW9kaWZpZWRPbjogbmV3IERhdGUoKVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJzbHQpO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuLy8gICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBhd2FpdCBkYlxyXG4vLyAgICAgICAuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKVxyXG4vLyAgICAgICAuZGVsZXRlT25lKHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9KTtcclxuLy8gICAgIHJldHVybiByZXMuc2VuZFN0YXR1cygyMDApO1xyXG4vLyAgIH0gY2F0Y2ggKGUpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnRQcm9kdWN0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSB9LFxyXG4vLyAgICAgICAgICRwdWxsOiB7XHJcbi8vICAgICAgICAgICBwcm9kdWN0czoge1xyXG4vLyAgICAgICAgICAgICBwcm9kdWN0SWQ6IHJlcS5ib2R5LnByb2R1Y3RJZCxcclxuLy8gICAgICAgICAgICAgcXVhbnRpdHk6IHJlcS5ib2R5LnF1YW50aXR5XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gQ2FydENoZWNrb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4vLyAgICAgICB7IF9pZDogcmVxLnNlc3Npb24udXNlclswXS5faWQgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSB9LFxyXG4vLyAgICAgICAgICRwdWxsOiB7XHJcbi8vICAgICAgICAgICBwcm9kdWN0czoge1xyXG4vLyAgICAgICAgICAgICBwcm9kdWN0SWQ6IHJlcS5ib2R5LnByb2R1Y3RJZCxcclxuLy8gICAgICAgICAgICAgcXVhbnRpdHk6IHJlcS5ib2R5LnF1YW50aXR5XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IHsgRGVsZXRlQ2FydCwgRGVsZXRlQ2FydFByb2R1Y3QsIEdldENhcnQsIFVwZGF0ZUNhcnRRdHkgfTtcclxuZXhwb3J0IHsgTmV3T3JkZXIgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYmplY3RJRCwgRGJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxubGV0IGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxubGV0IGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXMocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgR2V0Q2F0ZWdvcmllc0J5TGV2ZWwoMCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2F0ZWdvcmllcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0U2FtcGxlc09mQ2F0ZWdvcmllcyhyZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IGF3YWl0IEdldFNhbXBsZXMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRDYXRlZ29yeShib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkubmFtZSB8fCAhYm9keS5jYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgYXdhaXQgZGJDb2xsZWN0aW9uLmluc2VydE9uZSh7IG5hbWU6IGJvZHkubmFtZSwgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnkgfSk7XHJcbiAgICBnbG9iYWxDYXRlZ29yaWVzID0gW107XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gW107XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2F0ZWdvcnkocXVlcnk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcXVlcnkuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBhd2FpdCBkYkNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQocXVlcnkuX2lkKSB9KTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAbGV2ZWw6XHJcbi8vIDAgLSBhbGw7ICAxIC0gMXN0IGxldmVsOyAgMiAtIDJuZCBhbmQgYWJvdmUgbGV2ZWxzXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXNCeUxldmVsKGxldmVsOiBudW1iZXIpIHtcclxuICBpZiAoZ2xvYmFsQ2F0ZWdvcmllcy5sZW5ndGggPD0gMCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IGF3YWl0IEdldENhdGVnb3JpZXNGcm9tRGIoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbENhdGVnb3JpZXM7XHJcbiAgfVxyXG4gIGNvbnN0IHJldHVybkNhdGVnb3JpZXMgPSBbXTtcclxuICBnbG9iYWxDYXRlZ29yaWVzLmZvckVhY2goY2F0ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNhdC5jYXRlZ29yeS5tYXRjaChuZXcgUmVnRXhwKCcvJywgJ2cnKSkpO1xyXG4gICAgaWYgKGNhdC5jYXRlZ29yeS5tYXRjaChuZXcgUmVnRXhwKCcvJywgJ2cnKSkubGVuZ3RoIDw9IGxldmVsKSB7XHJcbiAgICAgIHJldHVybkNhdGVnb3JpZXMucHVzaChjYXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiByZXR1cm5DYXRlZ29yaWVzO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXRlZ29yaWVzRnJvbURiKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBhd2FpdCBkYkNvbGxlY3Rpb25cclxuICAgICAgLmZpbmQoKVxyXG4gICAgICAuc29ydCgnY2F0ZWdvcnknLCAxKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIGdsb2JhbENhdGVnb3JpZXM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgeyBlcnJNc2c6ICdHZXQgY2F0ZWdvcmllcyBmcm9tIGRhdGFiYXNlIGZhaWxlZC4nIH07XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRTYW1wbGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBsZXQgZG9jcyA9IG51bGw7XHJcbiAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uXHJcbiAgICAgIC5hZ2dyZWdhdGUoW1xyXG4gICAgICAgIHsgJHNvcnQ6IHsgX2lkOiAtMSB9IH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgICAgIF9pZDogeyBjYXRlZ29yeTogJyRjYXRlZ29yeScgfSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgX2lkOiAnJF9pZCcsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJyRjYXRlZ29yeScsXHJcbiAgICAgICAgICAgICAgICBpbWc6ICckaW1nJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHByb2plY3Q6IHtcclxuICAgICAgICAgICAgX2lkOiAnJF9pZCcsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbiAgICAgICAgICAgICAgJHNsaWNlOiBbXHJcbiAgICAgICAgICAgICAgICAnJHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIDQgLy8gbWF4IG51bWJlciBvZiBlbGVtZW50cyByZXR1cm5lZCBmcm9tIHRoZSBzdGFydCBvZiB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZG9jcztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiB7IGVyck1zZzogJ0dldCBwcm9kdWN0cyBmYWlsZWQuJyB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRkQ2F0ZWdvcnksIERlbGV0ZUNhdGVnb3J5LCBHZXRDYXRlZ29yaWVzLCBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzIH07XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldEludmVudG9yeShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGNvbnN0IGludmVudG9yeSA9IGF3YWl0IGRiSW52ZW50b3J5LmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoaW52ZW50b3J5KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBxdHkgYnkgcHJvZHVjdDsgVG9kbzogYnkgY29sb3VyLCBzaXplLCBldGMuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkanVzdEludmVudG9yeShfaWQ6IHN0cmluZywgcXR5OiBudW1iZXIsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIV9pZCB8fCAhcXR5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKVxyXG4gICAgICB9LFxyXG4gICAgICB7ICRzZXQ6IHsgbW9kaWZpZWRPbjogbmV3IERhdGUoKSwgcXR5OiBxdHkgfSB9LFxyXG4gICAgICB7IHVwc2VydDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJzbHQpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFJlc2VydmVJbnZlbnRvcnkoaWQ6IHN0cmluZywgY2FydEl0ZW1zOiBhbnkpIHtcclxuICBpZiAoIWNhcnRJdGVtcyB8fCBjYXJ0SXRlbXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHRocm93ICdUaGUgY2FydCBpcyBlbXB0eS4nO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBbXTtcclxuICAgIGNvbnN0IGZhaWxlZCA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChjYXJ0SXRlbXNbaV0ucHJvZHVjdC5faWQpLFxyXG4gICAgICAgICAgcXR5OiB7ICRndGU6IGNhcnRJdGVtc1tpXS5xdHkgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJGluYzogeyBxdHk6IC1jYXJ0SXRlbXNbaV0ucXR5IH0sXHJcbiAgICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgICByZXNlcnZhdGlvbnM6IHtcclxuICAgICAgICAgICAgICBxdHk6IGNhcnRJdGVtc1tpXS5xdHksXHJcbiAgICAgICAgICAgICAgX2lkOiBuZXcgT2JqZWN0SUQoaWQpLFxyXG4gICAgICAgICAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzdWx0LnJlc3VsdC5uTW9kaWZpZWQgPT09IDApIHtcclxuICAgICAgICBmYWlsZWQucHVzaChjYXJ0SXRlbXNbaV0ucHJvZHVjdCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3VjY2Vzcy5wdXNoKGNhcnRJdGVtc1tpXS5wcm9kdWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmYWlsZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Y2Nlc3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pZDogc3VjY2Vzc1tpXS5faWQsXHJcbiAgICAgICAgICAgICdyZXNlcnZhdGlvbnMuX2lkJzogaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICRpbmM6IHsgcXR5OiBzdWNjZXNzW2ldLnF0eSB9LFxyXG4gICAgICAgICAgICAkcHVsbDogeyByZXNlcnZhdGlvbnM6IHsgX2lkOiBpZCB9IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93ICdOb3QgZW5vdWdoIHN0b3JhZ2UuJztcclxuICAgIH1cclxuICAgIHJldHVybiAnU3VjY2Vzcy4nO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbihfaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkludmVudG9yeSA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtaW52ZW50b3J5Jyk7XHJcbiAgICBsZXQgdXBkYXRlUnNsdCA9IGF3YWl0IGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAge1xyXG4gICAgICAgICdyZXNlcnZhdGlvbnMuX2lkJzogbmV3IE9iamVjdElEKF9pZClcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICRwdWxsOiB7IHJlc2VydmF0aW9uczogeyBfaWQ6IG5ldyBPYmplY3RJRChfaWQpIH0gfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHVwZGF0ZVJzbHQucmVzdWx0Lm5Nb2RpZmllZCA8PSAwKSB7XHJcbiAgICAgIHRocm93ICdkZWxldGUgcmVzZXJ2YXRpb24gZmFpbGVkLic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXBkYXRlUnNsdDtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHRocm93ICdkZWxldGUgcmVzZXJ2YXRpb24gZmFpbGVkIHdpdGggZXhjZXB0aW9uLic7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEFkanVzdEludmVudG9yeSxcclxuICBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbixcclxuICBHZXRJbnZlbnRvcnksXHJcbiAgUmVzZXJ2ZUludmVudG9yeVxyXG59O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBBZGRDYXRlZ29yeSxcclxuICBEZWxldGVDYXRlZ29yeSxcclxuICBHZXRDYXRlZ29yaWVzLFxyXG4gIEdldFNhbXBsZXNPZkNhdGVnb3JpZXNcclxufSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLWNhdGVnb3JpZXMub3BzJztcclxuaW1wb3J0IHtcclxuICBBZGRQcm9kdWN0LFxyXG4gIERlbGV0ZVByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdCxcclxuICBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnksXHJcbiAgVXBkYXRlUHJvZHVjdFxyXG59IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMub3BzJztcclxuaW1wb3J0IHsgQWRqdXN0SW52ZW50b3J5LCBHZXRJbnZlbnRvcnkgfSBmcm9tICcuL2dpZnRzLXByb2R1Y3RzLWludmVudG9yeS5vcHMnO1xyXG5cclxuY29uc3QgZ2lmdHNQcm9kdWN0c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy92aWV3Lzpwcm9kdWN0X25vJywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgR2V0UHJvZHVjdChyZXEucGFyYW1zLCByZXMpO1xyXG59KTtcclxuXHJcbi8qXHJcbiAqIGlucXVpcnk6IC9hcGkvZ2lmdHMvcHJvZHVjdHNcclxuICovXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvY2F0ZWdvcmllcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRDYXRlZ29yaWVzKHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnBvc3QoJy9jYXRlZ29yeScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRDYXRlZ29yeShyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZGVsZXRlKCcvY2F0ZWdvcnknLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlQ2F0ZWdvcnkocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvc2FtcGxlcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzKHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeShyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UHJvZHVjdChyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnBvc3QoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEFkZFByb2R1Y3QocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnB1dCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXBkYXRlUHJvZHVjdChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZGVsZXRlKCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVQcm9kdWN0KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL2ludmVudG9yeScsIChyZXEsIHJlcykgPT4ge1xyXG4gIEdldEludmVudG9yeShyZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5wdXQoJy9pbnZlbnRvcnknLCAocmVxLCByZXMpID0+IHtcclxuICBBZGp1c3RJbnZlbnRvcnkocmVxLmJvZHkuX2lkLCByZXEuYm9keS5xdHksIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNQcm9kdWN0c1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UHJvZHVjdChwYXJhbXM6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGFyYW1zLl9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHByb2R1Y3Qgbm8uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJylcclxuICAgICAgLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChwYXJhbXMuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChwcm9kdWN0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGxldCBkb2NzID0gbnVsbDtcclxuICAgIGlmIChyZXEucXVlcnkuY2F0ZWdvcnkpIHtcclxuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFsnXicsIHJlcS5xdWVyeS5jYXRlZ29yeS50cmltKCldLmpvaW4oJycpLCAnaScpO1xyXG4gICAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uLmZpbmQoeyBjYXRlZ29yeTogcmVnZXggfSkudG9BcnJheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jcyA9IGF3YWl0IGRiQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRvY3MpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJykuaW5zZXJ0T25lKHtcclxuICAgICAgbmFtZTogYm9keS5uYW1lLFxyXG4gICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICBwcmljZTogYm9keS5wcmljZSxcclxuICAgICAgY2F0ZWdvcnk6IGJvZHkuY2F0ZWdvcnksXHJcbiAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICBwYWNrYWdpbmc6IGJvZHkucGFja2FnaW5nLFxyXG4gICAgICBtYXRlcmlhbDogYm9keS5tYXRlcmlhbCxcclxuICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICBub3RlOiBib2R5Lm5vdGUsXHJcbiAgICAgIHJldGFpbGVyOiBib2R5LnJldGFpbGVyLFxyXG4gICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFib2R5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiUHJvZHVjdHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJyk7XHJcbiAgICBhd2FpdCBkYlByb2R1Y3RzLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChib2R5Ll9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgICAgICBpbWc6IGJvZHkuaW1nLFxyXG4gICAgICAgICAgcHJpY2U6IGJvZHkucHJpY2UsXHJcbiAgICAgICAgICBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSxcclxuICAgICAgICAgIGNvbG9yOiBib2R5LmNvbG9yLFxyXG4gICAgICAgICAgcGFja2FnaW5nOiBib2R5LnBhY2thZ2luZyxcclxuICAgICAgICAgIG1hdGVyaWFsOiBib2R5Lm1hdGVyaWFsLFxyXG4gICAgICAgICAgc2l6ZTogYm9keS5zaXplLFxyXG4gICAgICAgICAgbm90ZTogYm9keS5ub3RlLFxyXG4gICAgICAgICAgcmV0YWlsZXI6IGJvZHkucmV0YWlsZXJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdChxdWVyeTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFxdWVyeS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpXHJcbiAgICAgIC5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChxdWVyeS5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkUHJvZHVjdCxcclxuICBEZWxldGVQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeSxcclxuICBHZXRQcm9kdWN0LFxyXG4gIFVwZGF0ZVByb2R1Y3RcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBnaWZ0c1N0YWZmc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmdldCgnL2xvZ291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBMb2dvdXQocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIFJlZ2lzdGVyKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzU3RhZmZzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gRGVsZXRlVXNlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNTdGFmZnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgcmFuZG9tU3RyaW5nIH0gZnJvbSAnLi4vc3RyaW5nLW9wcyc7XHJcblxyXG5pbXBvcnQgeyBiTG9naW4gfSBmcm9tICcuL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7IENhcnRJdGVtIH0gZnJvbSAnLi91c2Vycy1pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uLFxyXG4gIFJlc2VydmVJbnZlbnRvcnlcclxufSBmcm9tICcuLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzJztcclxuaW1wb3J0IHsgTmV3T3JkZXIgfSBmcm9tICcuLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRDYXJ0KHNlc3Npb246IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBjb25zdCBjYXJ0ID0gYXdhaXQgZGIuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0pO1xyXG4gICAgY29uc29sZS5sb2coY2FydCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoY2FydCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkVG9DYXJ0KHNlc3Npb246IGFueSwgYm9keTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGxldCByc2x0ID0gYXdhaXQgZGIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0sXHJcbiAgICAgIHsgJHB1bGw6IHsgcHJvZHVjdHM6IHsgcHJvZHVjdElkOiBuZXcgT2JqZWN0SUQoYm9keS5wcm9kdWN0Ll9pZCkgfSB9IH1cclxuICAgICk7XHJcbiAgICByc2x0ID0gYXdhaXQgZGIudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkcHVzaDoge1xyXG4gICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBuZXcgT2JqZWN0SUQoYm9keS5wcm9kdWN0Ll9pZCksXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBib2R5LnF0eSxcclxuICAgICAgICAgICAgbmFtZTogYm9keS5wcm9kdWN0Lm5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBib2R5LnByb2R1Y3QucHJpY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlQ2FydFF0eShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihyZXEuc2Vzc2lvbikpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5wcm9kdWN0SWQgfHwgIXJlcS5ib2R5LnF0eSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgY29uc3QgcnNsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJykudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgX2lkOiByZXEuc2Vzc2lvbi51c2VyLl9pZCxcclxuICAgICAgICAncHJvZHVjdHMucHJvZHVjdElkJzogcmVxLmJvZHkucHJvZHVjdElkXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAkc2V0OiB7XHJcbiAgICAgICAgICAncHJvZHVjdHMuJC5xdHknOiByZXEuYm9keS5xdHksXHJcbiAgICAgICAgICBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUNhcnQoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBkYi5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVJbkNhcnQoc2Vzc2lvbjogYW55LCBfaWQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHNlc3Npb24pKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAgeyAkcHVsbDogeyBwcm9kdWN0czogeyBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChfaWQpIH0gfSB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIENhcnRDaGVja291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoXHJcbiAgICAhcmVxLmJvZHkuY2FydCB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyLm5hbWUgfHxcclxuICAgICFyZXEuYm9keS5jYXJ0LmN1c3RvbWVyLm1vYmlsZSB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIuYWRkcmVzc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGN1c3RvbWVyIGluZm9ybWF0aW9uLicpO1xyXG4gIH1cclxuICBpZiAocmVxLmJvZHkuY2FydC50b3RhbCA8PSAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ05vIHByb2R1Y3QgdG8gY2hlY2tvdXQuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgYk1lbWJlcjogYm9vbGVhbiA9IGJMb2dpbihyZXEuc2Vzc2lvbik7XHJcblxyXG4gIGxldCBpZCA9ICcnO1xyXG4gIGlmIChiTWVtYmVyKSB7XHJcbiAgICBpZCA9IHJlcS5zZXNzaW9uLnVzZXIuX2lkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZCA9IHJhbmRvbVN0cmluZygyMCk7XHJcbiAgfVxyXG4gIGNvbnN0IGNhcnRJdGVtczogQ2FydEl0ZW1bXSA9IHJlcS5ib2R5LmNhcnQuY2FydEl0ZW1zO1xyXG4gIGNvbnN0IGN1c3RvbWVyID0gcmVxLmJvZHkuY2FydC5jdXN0b21lcjtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIHJlc2VydmUgaW52ZW50b3J5LCBpdCB0aHJvdyBlcnJvciBpbiBjYXNlIG9mIGZhaWx1cmUuXHJcbiAgICBhd2FpdCBSZXNlcnZlSW52ZW50b3J5KGlkLCBjYXJ0SXRlbXMpO1xyXG5cclxuICAgIGxldCBpbnNlcnRSc2x0ID0gYXdhaXQgTmV3T3JkZXIoY3VzdG9tZXIsIGNhcnRJdGVtcyk7XHJcbiAgICBpZiAoaW5zZXJ0UnNsdC5yZXN1bHQubiA8PSAwKSB7XHJcbiAgICAgIGF3YWl0IERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgdGhyb3cgJ0NyZWF0ZSBuZXcgb3JkZXIgZmFpbGVkLic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVwZGF0ZVJzbHQgPSBhd2FpdCBEZWxldGVJbnZlbnRvcnlSZXNlcnZhdGlvbihpZCk7XHJcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVSc2x0KTtcclxuXHJcbiAgICBpZiAoYk1lbWJlcikge1xyXG4gICAgICBjb25zdCBkYkNhcnRzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgICBsZXQgZGVsZXRlUnNsdCA9IGF3YWl0IGRiQ2FydHMuZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoaWQpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG9yZGVySWQ6IGlkIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEFkZFRvQ2FydCxcclxuICBDYXJ0Q2hlY2tvdXQsXHJcbiAgRGVsZXRlQ2FydCxcclxuICBEZWxldGVJbkNhcnQsXHJcbiAgR2V0Q2FydCxcclxuICBVcGRhdGVDYXJ0UXR5XHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIExvZ2luLFxyXG4gIExvZ291dCxcclxuICBSZWdpc3RlcixcclxuICBEZWxldGVVc2VyLFxyXG4gIFVzZXJJbmZvXHJcbn0gZnJvbSAnLi9naWZ0cy11c2Vycy5vcHMnO1xyXG5pbXBvcnQge1xyXG4gIEFkZFRvQ2FydCxcclxuICBDYXJ0Q2hlY2tvdXQsXHJcbiAgRGVsZXRlQ2FydCxcclxuICBEZWxldGVJbkNhcnQsXHJcbiAgR2V0Q2FydCxcclxuICBVcGRhdGVDYXJ0UXR5XHJcbn0gZnJvbSAnLi9naWZ0cy1jYXJ0cy5vcHMnO1xyXG5cclxuY29uc3QgZ2lmdHNVc2Vyc1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpL2dpZnRzL3VzZXJzL1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9sb2dpbicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBMb2dpbihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2luZm8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXNlckluZm8ocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2xvZ291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBMb2dvdXQocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgUmVnaXN0ZXIocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9kZWxldGV1c2VyJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZVVzZXIocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmdldCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0Q2FydChyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkVG9DYXJ0KHJlcS5zZXNzaW9uLCByZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZGVsZXRlKCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVDYXJ0KHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wdXQoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIFVwZGF0ZUNhcnRRdHkocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9jYXJ0L3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlSW5DYXJ0KHJlcS5zZXNzaW9uLCByZXEucXVlcnkuX2lkLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvY2FydC9jaGVja291dCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBDYXJ0Q2hlY2tvdXQocmVxLCByZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdpZnRzVXNlcnNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZW5jcnlwdCB9IGZyb20gJy4uL3N0cmluZy1vcHMnO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICBkYi5jcmVhdGVJbmRleCgndWlkJywgeyB1bmlxdWU6IHRydWUgfSk7XHJcbn0pKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBMb2dpbihyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLnNlc3Npb24gJiYgcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgdWlkOiByZXEuc2Vzc2lvbi51c2VyLnVpZCB9KTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYlVzZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IGF3YWl0IGRiVXNlcnMuZmluZE9uZSh7XHJcbiAgICAgIHVpZDogcmVxLmJvZHkudWlkLFxyXG4gICAgICBwd2Q6IGVuY3J5cHQocmVxLmJvZHkucHdkKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdJbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHVpZDogcmVxLnNlc3Npb24udXNlci51aWQgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdzZXJ2ZXIgZXJyb3IuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2dvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5zZXNzaW9uICYmIHJlcS5zZXNzaW9uLnVzZXIpIHtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFJlZ2lzdGVyKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChcclxuICAgICFyZXEuYm9keS51aWQgfHxcclxuICAgICFyZXEuYm9keS5wd2QgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbCB8fFxyXG4gICAgIXJlcS5ib2R5LmZpcnN0TmFtZSB8fFxyXG4gICAgIXJlcS5ib2R5Lmxhc3ROYW1lXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGJVc2VycyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKTtcclxuICAgIGxldCByc2x0ID0gYXdhaXQgZGJVc2Vycy5pbnNlcnRPbmUoe1xyXG4gICAgICB1aWQ6IHJlcS5ib2R5LnVpZCxcclxuICAgICAgcHdkOiBlbmNyeXB0KHJlcS5ib2R5LnB3ZCksXHJcbiAgICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgICAgZmlyc3ROYW1lOiByZXEuYm9keS5maXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lOiByZXEuYm9keS5sYXN0TmFtZSxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIGlmIChyc2x0Lmluc2VydGVkQ291bnQgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJzbHQub3BzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnUmVnaXN0ZXIgZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdSZWdpc3RlciBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVVc2VyKHNlc3Npb246IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0xvZ2luIGlzIHJlcXVpcmVkLicpO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgZGIuY29sbGVjdGlvbignZ2lmdHMtdXNlcnMnKS5kZWxldGVPbmUoe1xyXG4gICAgICBfaWQ6IHNlc3Npb24udXNlci5faWRcclxuICAgIH0pO1xyXG4gICAgc2Vzc2lvbi51c2VyID0gbnVsbDtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ1VzZXIgZGVsZXRlZC4nIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVzZXJJbmZvKHNlc3Npb246IGFueSwgcmVzKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBOb3QgbG9naW4uJyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7XHJcbiAgICBfaWQ6IHNlc3Npb24udXNlci5faWQsXHJcbiAgICB1aWQ6IHNlc3Npb24udXNlci51aWQsXHJcbiAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJMb2dpbihzZXNzaW9uOiBhbnkpIHtcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgYkxvZ2luLCBMb2dpbiwgTG9nb3V0LCBSZWdpc3RlciwgRGVsZXRlVXNlciwgVXNlckluZm8gfTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmZ1bmN0aW9uIERlbGV0ZShib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBsZXQgdXJsID0gYm9keS51cmw7XHJcbiAgaWYgKGJvZHkucXVlcnlzICYmIGJvZHkucXVlcnlzLmxlbmd0aCA+IDApIHtcclxuICAgIHVybCArPSAnPyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHkucXVlcnlzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHVybCArPSBib2R5LnF1ZXJ5W2ldO1xyXG4gICAgICB1cmwgKz0gJz0nO1xyXG4gICAgICB1cmwgKz0gYm9keS5xdWVyeVZhbHVlW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBBeGlvcy5kZWxldGUodXJsKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIFBvc3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlcSk7XHJcbiAgbGV0IHVybDogc3RyaW5nID0gcmVxLmJvZHkudXJsO1xyXG4gIGlmIChyZXEuYm9keS5oZWFkZXJzKSB7XHJcbiAgICBoZWFkZXJzID0ge1xyXG4gICAgICBoZWFkZXJzOiByZXEuYm9keS5oZWFkZXJzXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAocmVxLmJvZHkucGFyYW1ldGVycykge1xyXG4gICAgdXJsICs9ICc/JztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxLmJvZHkucGFyYW1ldGVycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB1cmwgKz0gcmVxLmJvZHkucGFyYW1ldGVyc1tpXSArICc9JyArIHJlcS5ib2R5LnBhcmFtZXRlclZhbHVlW2ldICsgJyYnO1xyXG4gICAgfVxyXG4gIH1cclxuICBBeGlvcy5nZXQodXJsLCBoZWFkZXJzKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIFB1dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBBeGlvcy5wdXQocmVxLmJvZHkudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIEdldChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBBeGlvcy5wb3N0KHJlcS5ib2R5LnVybCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXMuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgRGVsZXRlLCBHZXQsIFBvc3QsIFB1dCB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGVsZXRlLCBHZXQsIFBvc3QsIFB1dCB9IGZyb20gJy4vaHR0cC1yZXF1ZXN0JztcclxuXHJcbmNvbnN0IGh0dHBSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmh0dHBSb3V0ZXIucG9zdCgnJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEuYm9keS50eXBlID09PSAnREVMRVRFJykge1xyXG4gICAgRGVsZXRlKHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ0dFVCcpIHtcclxuICAgIEdldChyZXEuYm9keSwgcmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdQT1NUJykge1xyXG4gICAgUG9zdChyZXEuYm9keSwgcmVzKTtcclxuICB9IGVsc2UgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdQVVQnKSB7XHJcbiAgICBQdXQocmVxLmJvZHksIHJlcyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGh0dHBSb3V0ZXI7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGJ1c0Fycml2YWxVcmwsIGhlYWRlckNvbmZpZyB9IGZyb20gJy4vbHRhJztcclxuaW1wb3J0IHsgY2hlY2tCdXNTdG9wTG9jYWxseSB9IGZyb20gJy4vYnVzLXN0b3BzJztcclxuXHJcbmZ1bmN0aW9uIGdldEJ1c0Fycml2YWwoYnVzU3RvcENvZGU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGJ1c1N0b3BDb2RlID0gYnVzU3RvcENvZGUudHJpbSgpO1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBCdXNTdG9wQ29kZS4nKTtcclxuICB9XHJcblxyXG4gIGxldCBidXNTdG9wSW5mbyA9IGNoZWNrQnVzU3RvcExvY2FsbHkoYnVzU3RvcENvZGUpO1xyXG4gIGlmICghYnVzU3RvcEluZm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQnVzIFN0b3Agbm90IGZvdW5kLicpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHVybCA9IGAke2J1c0Fycml2YWxVcmx9P0J1c1N0b3BDb2RlPSR7YnVzU3RvcENvZGV9YDtcclxuICBBeGlvcy5nZXQodXJsLCBoZWFkZXJDb25maWcpXHJcbiAgICAudGhlbihyZXNwb3NlID0+IHtcclxuICAgICAgcmVzXHJcbiAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgLnNlbmQoeyBidXNTdG9wSW5mbzogYnVzU3RvcEluZm8sIGJ1c0Fycml2YWw6IHJlc3Bvc2UuZGF0YSB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEJ1c0Fycml2YWw7XHJcbiIsImltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IGJ1c1N0b3BzVXJsLCBoZWFkZXJDb25maWcgfSBmcm9tICcuL2x0YSc7XHJcbmltcG9ydCB7IEJ1c1N0b3BJbmZvIH0gZnJvbSAnLi9idXMtc3RvcHMtaW50ZXJmYWNlJztcclxuXHJcbmxldCBidXNTdG9wczogQnVzU3RvcEluZm9bXSA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QnVzU3RvcHNGcm9tTHRhKHNraXA/OiBudW1iZXIpOiBQcm9taXNlPEJ1c1N0b3BJbmZvW10+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IHVybCA9IGJ1c1N0b3BzVXJsO1xyXG4gICAgaWYgKHNraXApIHtcclxuICAgICAgdXJsICs9IGA/JHNraXA9JHtza2lwfWA7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQodXJsLCBoZWFkZXJDb25maWcpO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcclxuICAgICAgdGhyb3cgeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEudmFsdWU7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbEJ1c1N0b3BzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgc2tpcCA9IDA7XHJcbiAgICBsZXQgbmV3QnVzU3RvcHM6IEJ1c1N0b3BJbmZvW10gPSBbXTtcclxuICAgIGRvIHtcclxuICAgICAgbmV3QnVzU3RvcHMgPSBhd2FpdCBnZXRCdXNTdG9wc0Zyb21MdGEoc2tpcCk7XHJcbiAgICAgIGxldCB0ZW1wID0gYnVzU3RvcHM7XHJcbiAgICAgIGJ1c1N0b3BzID0gdGVtcC5jb25jYXQobmV3QnVzU3RvcHMpO1xyXG4gICAgICBza2lwICs9IDUwMDtcclxuICAgIH0gd2hpbGUgKG5ld0J1c1N0b3BzLmxlbmd0aCA9PT0gNTAwKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBidXNTdG9wcyA9IFtdO1xyXG4gICAgZ2V0QWxsQnVzU3RvcHMoKTtcclxuICB9XHJcbn1cclxuZ2V0QWxsQnVzU3RvcHMoKTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrQnVzU3RvcExvY2FsbHkoYnVzU3RvcENvZGU6IHN0cmluZykge1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXNTdG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGJ1c1N0b3BDb2RlID09PSBidXNTdG9wc1tpXS5CdXNTdG9wQ29kZSkge1xyXG4gICAgICByZXR1cm4gYnVzU3RvcHNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QnVzU3RvcEluZm8oYnVzU3RvcENvZGU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBCdXMgU3RvcCBDb2RlLicpO1xyXG4gIH1cclxuICBsZXQgYnVzU3RvcEluZm8gPSBjaGVja0J1c1N0b3BMb2NhbGx5KGJ1c1N0b3BDb2RlKTtcclxuICBpZiAoYnVzU3RvcEluZm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChidXNTdG9wSW5mbyk7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnQnVzIFN0b3AgSW5mbyBub3QgZm91bmQuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5lYXJieUJ1c1N0b3BzKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKGxhdGl0dWRlID09PSB1bmRlZmluZWQgfHwgbG9uZ2l0dWRlID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBjb29yZGluYXRlcy4nKTtcclxuICB9XHJcblxyXG4gIGxldCBuZWFyYnlTdG9wcyA9IFtdO1xyXG4gIGNvbnN0IFIgPSA2MzcxZTM7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXNTdG9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGRMYXQgPSAoKGJ1c1N0b3BzW2ldLkxhdGl0dWRlIC0gbGF0aXR1ZGUpICogTWF0aC5QSSkgLyAxODA7XHJcbiAgICBsZXQgZExvbmcgPSAoKGJ1c1N0b3BzW2ldLkxvbmdpdHVkZSAtIGxvbmdpdHVkZSkgKiBNYXRoLlBJKSAvIDE4MDtcclxuXHJcbiAgICBsZXQgYSA9XHJcbiAgICAgIE1hdGguc2luKGRMYXQgLyAyKSAqIE1hdGguc2luKGRMYXQgLyAyKSArXHJcbiAgICAgIE1hdGguY29zKChidXNTdG9wc1tpXS5MYXRpdHVkZSAqIE1hdGguUEkpIC8gMTgwKSAqXHJcbiAgICAgICAgTWF0aC5jb3MoKGxhdGl0dWRlICogTWF0aC5QSSkgLyAxODApICpcclxuICAgICAgICBNYXRoLnNpbihkTG9uZyAvIDIpICpcclxuICAgICAgICBNYXRoLnNpbihkTG9uZyAvIDIpO1xyXG4gICAgbGV0IGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxIC0gYSkpO1xyXG4gICAgbGV0IGRpc3QgPSBSICogYztcclxuICAgIGlmIChNYXRoLmFicyhkaXN0KSA8IDQwMCkge1xyXG4gICAgICBuZWFyYnlTdG9wcy5wdXNoKGJ1c1N0b3BzW2ldKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVzLnN0YXR1cygyMDApLnNlbmQobmVhcmJ5U3RvcHMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBidXNTdG9wcywgY2hlY2tCdXNTdG9wTG9jYWxseSwgZ2V0QnVzU3RvcEluZm8sIGdldE5lYXJieUJ1c1N0b3BzIH07XHJcbiIsImNvbnN0IGx0YUFjY291bnRLZXkgPSAnNnNWemY5elhSYUNna0pVZGp4SXcyQT09JztcclxuXHJcbmNvbnN0IGJ1c0Fycml2YWxVcmwgPVxyXG4gICdodHRwOi8vZGF0YW1hbGwyLm15dHJhbnNwb3J0LnNnL2x0YW9kYXRhc2VydmljZS9CdXNBcnJpdmFsdjInO1xyXG5jb25zdCBidXNTdG9wc1VybCA9ICdodHRwOi8vZGF0YW1hbGwyLm15dHJhbnNwb3J0LnNnL2x0YW9kYXRhc2VydmljZS9CdXNTdG9wcyc7XHJcblxyXG5jb25zdCBoZWFkZXJDb25maWcgPSB7XHJcbiAgaGVhZGVyczoge1xyXG4gICAgQWNjb3VudEtleTogbHRhQWNjb3VudEtleVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGJ1c0Fycml2YWxVcmwsIGJ1c1N0b3BzVXJsLCBoZWFkZXJDb25maWcgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCBnZXRCdXNBcnJpdmFsIGZyb20gJy4vYnVzLWFycml2YWwnO1xyXG5pbXBvcnQgeyBnZXRCdXNTdG9wSW5mbywgZ2V0TmVhcmJ5QnVzU3RvcHMgfSBmcm9tICcuL2J1cy1zdG9wcyc7XHJcblxyXG4vLyB1cmw6IC9hcGkvbHRhL2J1c1xyXG5jb25zdCBidXNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmJ1c1JvdXRlci5nZXQoJy9idXNBcnJpdmFsLzpidXNTdG9wQ29kZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBnZXRCdXNBcnJpdmFsKHJlcS5wYXJhbXMuYnVzU3RvcENvZGUsIHJlcyk7XHJcbn0pO1xyXG5cclxuYnVzUm91dGVyLmdldCgnL2J1c1N0b3AvOmJ1c1N0b3BDb2RlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGdldEJ1c1N0b3BJbmZvKHJlcS5wYXJhbXMuYnVzU3RvcENvZGUsIHJlcyk7XHJcbn0pO1xyXG5cclxuYnVzUm91dGVyLmdldCgnL25lYXJieUJ1c1N0b3BzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGdldE5lYXJieUJ1c1N0b3BzKHJlcS5xdWVyeS5sYXRpdHVkZSwgcmVxLnF1ZXJ5LmxvbmdpdHVkZSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBidXNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgT3hmb3JkRGljdGlvbmFyeSBmcm9tICdveGZvcmQtZGljdGlvbmFyeSc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IERJQ1QgPSBuZXcgT3hmb3JkRGljdGlvbmFyeSh7XHJcbiAgYXBwX2lkOiAnMDMxNGU5ZTInLFxyXG4gIGFwcF9rZXk6ICc1YTZjMjU4OTQ3NGEyZjgzY2NkNjlmMzk3YmZlYzdhMicsXHJcbiAgc291cmNlX2xhbmc6ICdlbidcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDaGVja094Zm9yZERpY3Rpb25hcnkod29yZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF3b3JkIHx8ICF3b3JkLnRyaW0oKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHdvcmQuJyk7XHJcbiAgfVxyXG5cclxuICBESUNULmRlZmluaXRpb25zKHdvcmQudHJpbSgpKS50aGVuKFxyXG4gICAgZGVmaW5pdGlvbnMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGVmaW5pdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrT3hmb3JkRGljdGlvbmFyeTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgbHVuY2hQYWxzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUGFscygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIGx1bmNoUGFscyA9IGF3YWl0IHBhbHNDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoeyBuYW1lOiAxIH0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFBhbHMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChsdW5jaFBhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGx1bmNoUGFscyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUGFsKG5hbWU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIG5hbWUgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBwYWxzQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzQXR0ZW5kYW5jZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbnN0IGF0dGVuZGFuY2VzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICR1bndpbmQ6ICckYXR0ZW5kZWVzJyB9LFxyXG4gICAgICAgIHsgJGdyb3VwOiB7IF9pZDogJyRhdHRlbmRlZXMnLCBhdHRlbmRhbmNlOiB7ICRzdW06IDEgfSB9IH0sXHJcbiAgICAgICAgeyAkcHJvamVjdDogeyBuYW1lOiAnJF9pZCcsIGF0dGVuZGFuY2U6ICckYXR0ZW5kYW5jZScgfSB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoYXR0ZW5kYW5jZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZFBhbCwgRGVsZXRlUGFsLCBHZXRQYWxzLCBHZXRQYWxzQXR0ZW5kYW5jZSB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRSZWNvcmRzKHJlczogUmVzcG9uc2UsIHF0eT86IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnNvcnQoeyBjcmVhdGVkT246IC0xIH0pXHJcbiAgICAgIC5saW1pdChxdHkgfCAzMClcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZWNvcmRzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRSZWNvcmQocGF5ZXI6IHN0cmluZywgYXR0ZW5kZWVzOiBzdHJpbmdbXSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGF5ZXIgfHwgIWF0dGVuZGVlcyB8fCBhdHRlbmRlZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBwYXJhbXMgdG8gYWRkLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKHtcclxuICAgICAgcGF5ZXI6IHBheWVyLFxyXG4gICAgICBhdHRlbmRlZXM6IGF0dGVuZGVlcyxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3IgYXQgc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUmVjb3JkKF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCByZWNvcmQgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IENoZWNrT3hmb3JkRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBBZGRQYWwsIERlbGV0ZVBhbCwgR2V0UGFscywgR2V0UGFsc0F0dGVuZGFuY2UgfSBmcm9tICcuL2x1bmNoZnVuLXBhbHMnO1xyXG5pbXBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9IGZyb20gJy4vbHVuY2hmdW4tcmVjb3Jkcyc7XHJcblxyXG5jb25zdCBkaWN0aW9uYXJ5Um91dGVyID0gUm91dGVyKCk7XHJcbmNvbnN0IGx1bmNoZnVuUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5kaWN0aW9uYXJ5Um91dGVyLmdldCgnL294Zm9yZC86d29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBDaGVja094Zm9yZERpY3Rpb25hcnkocmVxLnBhcmFtcy53b3JkLCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3BhbHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UGFscyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRQYWwocmVxLmJvZHkubmFtZSwgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVQYWwocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3JlY29yZHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UmVjb3JkcyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRSZWNvcmQocmVxLmJvZHkucGF5ZXIsIHJlcS5ib2R5LmF0dGVuZGVlcywgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVSZWNvcmQocmVxLnF1ZXJ5Ll9pZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9zdGF0cy9hdHRlbmRhbmNlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHNBdHRlbmRhbmNlKHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZGljdGlvbmFyeVJvdXRlciwgbHVuY2hmdW5Sb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIERiLCBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgTU9OR09fVVJMID1cclxuICAnbW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC1keHdrZy5tb25nb2RiLm5ldC9pbnNnP3JldHJ5V3JpdGVzPXRydWUnO1xyXG5cclxubGV0IGRhdGFiYXNlOiBEYjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXREYigpOiBQcm9taXNlPERiPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09fVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGRhdGFiYXNlID0gY2xpZW50LmRiKCdpbnNnJykpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93ICdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZC4nO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gTW9uZ29EYigpOiBQcm9taXNlPERiPiB7XHJcbiAgaWYgKGRhdGFiYXNlKSB7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGJDb2xsZWN0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbihuYW1lKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XHJcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IGFwaVJvdXRlciBmcm9tICcuL2FwaS1yb3V0ZXInO1xyXG5cclxuLy8gRXhwcmVzcyBzZXJ2ZXJcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG4vLyBjb25zdCBIT1NUID0gJ2xvY2FsaG9zdCc7XHJcbi8vIGNvbnN0IEhPU1QgPSAnaW5zZy54eXonO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5cclxuYXBwLnVzZShcclxuICBzZXNzaW9uKHtcclxuICAgIHNlY3JldDogJ2luc2cteWMtbHktMTcnLFxyXG4gICAgcmVzYXZlOiBmYWxzZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG4gICAgY29va2llOiB7XHJcbiAgICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAgKiAyNCAvLyBtaWxsc2Vjb25kcyBvZiAyNGhycyAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5hcHAudXNlKCcvYXBpJywgYXBpUm91dGVyKTtcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcblxyXG4vLyBTZXJ2ZXIgc3RhdGljIGZpbGVzIGZyb20gL2NsaWVudFxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudCcpKSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGluZyAtIDFcclxuYXBwLmFsbCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcbi8vIGVycm9yIGhhbmRsaW5nIC0gMlxyXG5hcHAudXNlKChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnSXNzdWUgaGFwcGVuZWQuIFBsZWFzZSByZXRyeSBsYXRlciEnKTtcclxufSk7XHJcblxyXG4vLyBTdGFydCB1cCB0aGUgTm9kZSBodHRwcyBzZXJ2ZXIgZGVmYXVsdCBwb3J0XHJcbmNvbnN0IGh0dHBzT3B0aW9ucyA9IHtcclxuICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcvY2VydC9pbnNnLmNydCcpKSxcclxuICBrZXk6IGZzLnJlYWRGaWxlU3luYyhqb2luKF9fZGlybmFtZSwgJy9jZXJ0L2luc2cua2V5JykpXHJcbn07XHJcbi8vIGFwcC5zZXQoJ2RvbWFpbicsIEhPU1QpO1xyXG5jb25zdCBodHRwc19zZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIoaHR0cHNPcHRpb25zLCBhcHApO1xyXG5odHRwc19zZXJ2ZXIubGlzdGVuKDQ0MywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBOb2RlIHNlcnZlciBsaXN0ZW5pbmcgb24gaHR0cHMgcG9ydCA0NDNgKTtcclxufSk7XHJcblxyXG4vLyByZWRpcmVjdCBodHRwIHJlcXVlc3QgdG8gaHR0cHMgc2VydmVyXHJcbmh0dHBcclxuICAuY3JlYXRlU2VydmVyKChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBob3N0ID0gcmVxLmhlYWRlcnNbJ2hvc3QnXS5yZXBsYWNlKCc6ODAnLCAnOjQ0MycpO1xyXG4gICAgICBjb25zb2xlLmxvZygncmVxLmhvc3RuYW1lJywgcmVxLmhvc3RuYW1lKTtcclxuICAgICAgcmVzLndyaXRlSGVhZCgzMDEsIHtcclxuICAgICAgICBMb2NhdGlvbjogYGh0dHBzOi8vJHtob3N0fSR7cmVxLnVybH1gXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpc3N1ZSB0byByZWRpcmVjdDogJywgcmVxLmhlYWRlcnMsIHJlcS5yYXdIZWFkZXJzLCByZXEudXJsKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIC5saXN0ZW4oODApO1xyXG4iLCJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuXHJcbmNvbnN0IGFsZ29yaXRobSA9ICdhZXMtMTkyLWNiYyc7XHJcbmNvbnN0IHBhc3N3b3JkID0gJ2luU0d5YzgzJztcclxuY29uc3Qga2V5ID0gY3J5cHRvLnNjcnlwdFN5bmMocGFzc3dvcmQsICdzYWx0JywgMjQpO1xyXG5jb25zdCBpdiA9IEJ1ZmZlci5hbGxvYygxNiwgMCk7XHJcblxyXG5mdW5jdGlvbiBlbmNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBjcnlwdGVkOiBzdHJpbmcgPSBjaXBoZXIudXBkYXRlKHRleHQsICd1dGY4JywgJ2hleCcpO1xyXG4gICAgY3J5cHRlZCArPSBjaXBoZXIuZmluYWwoJ2hleCcpO1xyXG4gICAgcmV0dXJuIGNyeXB0ZWQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2VuY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KGFsZ29yaXRobSwga2V5LCBpdik7XHJcbiAgICBsZXQgZGVjOiBzdHJpbmcgPSBkZWNpcGhlci51cGRhdGUodGV4dCwgJ2hleCcsICd1dGY4Jyk7XHJcbiAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoJ3V0ZjgnKTtcclxuICAgIHJldHVybiBkZWM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2RlY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBzdHJpbmcgb3BlcmF0aW9uXHJcbiAqL1xyXG5lbnVtIFJhbmRvbVR5cGVzIHtcclxuICBDYXBpdGFsLFxyXG4gIE51bWJlcixcclxuICBTdHJpbmdcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5OdW1iZXIsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNhcGl0YWwgY2hhcmFjdGVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbUNhcGl0YWxzKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLkNhcGl0YWwsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMgb3IgbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5TdHJpbmcsIGxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbSh0eXBlOiBSYW5kb21UeXBlcywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGxldCByU3RyaW5nOiBzdHJpbmcgPSAnJztcclxuICBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuU3RyaW5nKSB7XHJcbiAgICByU3RyaW5nID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLk51bWJlcikge1xyXG4gICAgclN0cmluZyA9ICcwMTIzNDU2Nzg5JztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLkNhcGl0YWwpIHtcclxuICAgIHJTdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICBmb3IgKGxldCBpID0gbGVuZ3RoOyBpID4gMDsgLS1pKSB7XHJcbiAgICByZXN1bHQgKz0gclN0cmluZ1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByU3RyaW5nLmxlbmd0aCldO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGVuY3J5cHQsXHJcbiAgZGVjcnlwdCxcclxuICByYW5kb21DYXBpdGFscyxcclxuICByYW5kb21OdW1iZXIsXHJcbiAgcmFuZG9tU3RyaW5nLFxyXG4gIFJhbmRvbVR5cGVzXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm94Zm9yZC1kaWN0aW9uYXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==