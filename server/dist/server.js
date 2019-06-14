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
    console.log(req.query);
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
var fs = __webpack_require__(/*! fs */ "fs");
var path_1 = __webpack_require__(/*! path */ "path");
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var api_router_1 = __webpack_require__(/*! ./api-router */ "./api-router.ts");
// Express server
var app = express();
var HOST = 'localhost';
var HTTP_PORT = 80;
var HTTPS_PORT = 443;
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
// app.set('port', HTTP_PORT);
// app.listen(app.get('port'), () => {
//   console.log(`Node server listening on http://${HOST}:${PORT}`);
// });
// https default port
app.set('port', HTTPS_PORT);
var httpsOptions = {
    cert: fs.readFileSync(path_1.join(__dirname, '/cert/insg.crt')),
    key: fs.readFileSync(path_1.join(__dirname, '/cert/insg.key'))
};
var server = https.createServer(httpsOptions, app);
server.listen(443);
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9odHRwLXJlcXVlc3Qvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x0YS9idXMtYXJyaXZhbC50cyIsIndlYnBhY2s6Ly8vLi9sdGEvYnVzLXN0b3BzLnRzIiwid2VicGFjazovLy8uL2x0YS9sdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbHRhL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9kaWN0aW9uYXJ5LnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2x1bmNoZnVuLXBhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvbHVuY2hmdW4tcmVjb3Jkcy50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbW9uZ29kYi1vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyLnRzIiwid2VicGFjazovLy8uL3N0cmluZy1vcHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3hmb3JkLWRpY3Rpb25hcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNB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R0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMvQixNQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdEVELGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgZ2lmdHNQcm9kdWN0c1JvdXRlciBmcm9tICcuL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlcic7XHJcbmltcG9ydCBnaWZ0c09yZGVyc1JvdXRlciBmcm9tICcuL2dpZnRzLW9yZGVycy9naWZ0cy1vcmRlcnMtcm91dGVyJztcclxuaW1wb3J0IGdpZnRzVXNlcnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy1yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNTdGFmZnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1zdGFmZnMvZ2lmdHMtc3RhZmZzLXJvdXRlcic7XHJcblxyXG5jb25zdCBnaWZ0c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpL2dpZnRzXHJcbmdpZnRzUm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgZ2lmdHNQcm9kdWN0c1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL29yZGVycycsIGdpZnRzT3JkZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvdXNlcnMnLCBnaWZ0c1VzZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvc3RhZmZzJywgZ2lmdHNTdGFmZnNSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IGJ1c1JvdXRlciB9IGZyb20gJy4vbHRhL3JvdXRlcic7XHJcbmltcG9ydCBodHRwUm91dGVyIGZyb20gJy4vaHR0cC1yZXF1ZXN0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgZGljdGlvbmFyeVJvdXRlcixcclxuICBsdW5jaGZ1blJvdXRlclxyXG59IGZyb20gJy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvcm91dGVyJztcclxuaW1wb3J0IGdpZnRzUm91dGVyIGZyb20gJy4vYXBpLWdpZnRzLXJvdXRlcic7XHJcbmltcG9ydCBTZW5kRW1haWwgZnJvbSAnLi9lbWFpbC9lbWFpbC5vcHMnO1xyXG5cclxuY29uc3QgYXBpUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGlcclxuYXBpUm91dGVyLnVzZSgnL2RpY3Rpb25hcnknLCBkaWN0aW9uYXJ5Um91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2h0dHAnLCBodHRwUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2x1bmNoZnVuJywgbHVuY2hmdW5Sb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvbHRhL2J1cycsIGJ1c1JvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9naWZ0cycsIGdpZnRzUm91dGVyKTtcclxuXHJcbi8vIG1zZyBmcm9tIHVzZXJzOyBmb3J3YXJkIGl0IHZpYSBub2RlbWFpbGVyLlxyXG5hcGlSb3V0ZXIucG9zdCgnL21zZycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBTZW5kRW1haWwocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxpbmdcclxuYXBpUm91dGVyLmFsbCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIFJlcXVlc3QnKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlSb3V0ZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3Qgb3V0bG9va190cmFuc3BvcnRlciA9IGNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgc2VydmljZTogJ291dGxvb2snLFxyXG4gIGF1dGg6IHtcclxuICAgIHVzZXI6ICd5dWFuY2hhb0BvdXRsb29rLnNnJyxcclxuICAgIHBhc3M6ICdwaW5nbWVIQzgzJ1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvdXRsb29rX21haWxPcHRpb25zID0ge1xyXG4gIGZyb206ICd5dWFuY2hhb0BvdXRsb29rLnNnJyxcclxuICB0bzogJ3NlZXNlYTJAZ21haWwuY29tJyxcclxuICBzdWJqZWN0OiBudWxsLFxyXG4gIGh0bWw6IG51bGxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNlbmRFbWFpbChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBjb25zdCBlbWFpbEh0bWw6IHN0cmluZyA9XHJcbiAgICAnPCFET0NUWVBFIGh0bWw+PGhlYWQ+JyArXHJcbiAgICAnPG1ldGEgaHR0cC1lcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOFwiPjwvaGVhZD4nICtcclxuICAgIGA8Ym9keT48YnI+PGI+TWVzc2FnZSBmcm9tIFVzZXIgJHtib2R5Lm5hbWV9YCArXHJcbiAgICAnIDo8L2I+PGJyPjxicj4nICtcclxuICAgIGA8cD48Yj5FbWFpbDogPC9iPiAke2JvZHkuZW1haWx9YCArXHJcbiAgICAnPC9wPicgK1xyXG4gICAgYDxwPjxiPk1vYmlsZTogPC9iPiAke2JvZHkubW9iaWxlfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgIGA8cD48Yj5NZXNzYWdlOiA8L2I+ICR7Ym9keS5tZXNzYWdlfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgICc8L2JvZHk+PC9odG1sPic7XHJcblxyXG4gIG91dGxvb2tfbWFpbE9wdGlvbnMuc3ViamVjdCA9ICdVc2VyIElucXVpcnknO1xyXG4gIG91dGxvb2tfbWFpbE9wdGlvbnMuaHRtbCA9IGVtYWlsSHRtbDtcclxuICBvdXRsb29rX3RyYW5zcG9ydGVyLnNlbmRNYWlsKG91dGxvb2tfbWFpbE9wdGlvbnMpO1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VuZEVtYWlsO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGdpZnRzT3JkZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyBvcmRlciBsaXN0IHdpdGggb3JkZXJfbm8sIHN0YXR1cyAmIHN0YWZmIGlkIHRvIGZvbGxvdy11cC5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIuZ2V0KCcvYWxsT3JkZXJzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHVwZGF0ZSBvcmRlciBzdGF0dXMgYnkgc3RhZmYgZm9sbG93LXVwLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVTdGF0dXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm5ld19zdGF0dXMgfHwgIXJlcS5ib2R5LnNubyB8fCAhcmVxLmJvZHkub3JkZXJfbm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBQbGVhZXMgcmV2aWV3IGlucHV0cy4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICAyOiByZXEuYm9keS5zbm8sXHJcbiAgICAzOiBEYXRlLm5vdygpLFxyXG4gICAgNDogcmVxLnNlc3Npb24uc3RhZmYuaWQsXHJcbiAgICA1OiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNjogcmVxLmJvZHkubm90ZSB8fCBudWxsXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gdXBkYXRlIGNvbnRhY3QgaW5mbyBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZUNvbnRhY3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ09yZGVyX25vIGVtcHR5LicpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAhcmVxLmJvZHkuZW1haWwgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnQCcpIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy4nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy8nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJ1xcXFwnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGVtYWlsLicpO1xyXG4gIH0gZWxzZSBpZiAoIXJlcS5ib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBuYW1lLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uYW1lLFxyXG4gICAgMjogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAzOiByZXEuYm9keS5tb2JpbGUgfHwgbnVsbCxcclxuICAgIDQ6IHJlcS5ib2R5LmNvbXBhbnkgfHwgbnVsbCxcclxuICAgIDU6IHJlcS5ib2R5Lm1vYmlsZTIgfHwgbnVsbCxcclxuICAgIDY6IHJlcS5ib2R5LmFkZHIgfHwgbnVsbCxcclxuICAgIDc6IHJlcS5ib2R5Lm9yZGVyX25vXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gY2hhbmdlIG9yZGVyIGRldGFpbHMgZS5nLiBwcmljZSwgcXR5LCBpbiBjYXNlIHVzZXJzIGNoYW5nZWQgbWluZC5cclxuLy8gc3RhZmYgbWF5IGNoYW5nZSBzdGF0dXMgb2Ygc3BlY2lmaWMgcHJvZHVjdCBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZU9yZGVySXRlbScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZi5pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gSW52YWxpZCBPcmRlciBOby4nKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5zbm8gfHwgcmVxLmJvZHkuc25vID09PSAnJykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIEludmFsaWQgT3JkZXIgU25vLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uZXdfc2FsZV9wcmljZSxcclxuICAgIDI6IHJlcS5ib2R5Lm5ld19xdHksXHJcbiAgICAzOiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNDogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICA1OiByZXEuYm9keS5zbm9cclxuICB9O1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c09yZGVyc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBiTG9naW4gfSBmcm9tICcuLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMnO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL2dpZnRzLXVzZXJzL3VzZXJzLWludGVyZmFjZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBOZXdPcmRlcihjdXN0b21lciwgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiT3JkZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1vcmRlcnMnKTtcclxuICAgIGxldCBpbnNlcnRSc2x0ID0gZGJPcmRlcnMuaW5zZXJ0T25lKHtcclxuICAgICAgY3JlYXRlZF9vbjogbmV3IERhdGUoKSxcclxuICAgICAgc2hpcHBpbmc6IHtcclxuICAgICAgICBuYW1lOiBjdXN0b21lci5uYW1lLFxyXG4gICAgICAgIG1vYmlsZTogY3VzdG9tZXIubW9iaWxlLFxyXG4gICAgICAgIGFkZHJlc3M6IGN1c3RvbWVyLmFkZHJlc3MsXHJcbiAgICAgICAgbWVzc2FnZTogY3VzdG9tZXIubWVzc2FnZVxyXG4gICAgICB9LFxyXG4gICAgICBwYXltZW50OiB7IG1ldGhvZDogJ3Zpc2EnLCB0cmFuc2FjdGlvbl9pZDogJzIzMTIyMTMzMTJYWFhURCcgfSxcclxuICAgICAgY2FydEl0ZW1zOiBjYXJ0SXRlbXNcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2luc2VydFJzbHQ6ICcsIGluc2VydFJzbHQpO1xyXG4gICAgcmV0dXJuIGluc2VydFJzbHQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgJ2NyZWF0ZSBuZXcgb3JkZXIgZmFpbGVkLic7XHJcbiAgfVxyXG59XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIEdldENhcnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBsZXQgY2FydCA9IGF3YWl0IGRiXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpXHJcbi8vICAgICAgIC5maW5kKHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9KVxyXG4vLyAgICAgICAudG9BcnJheSgpO1xyXG5cclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXJ0KTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBVcGRhdGVDYXJ0UXR5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuLy8gICBpZiAoIXJlcS5ib2R5LnByb2R1Y3RJZCB8fCAhcmVxLmJvZHkucXVhbnRpdHkpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGxldCByc2x0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkLFxyXG4vLyAgICAgICAgICdwcm9kdWN0cy5wcm9kdWN0SWQnOiByZXEuYm9keS5wcm9kdWN0SWRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHtcclxuLy8gICAgICAgICAgICdwcm9kdWN0cy4kLnF1YW50aXR5JzogcmVxLmJvZHkucXVhbnRpdHksXHJcbi8vICAgICAgICAgICBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgY29uc29sZS5sb2cocnNsdCk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBEZWxldGVDYXJ0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpXHJcbi8vICAgICAgIC5kZWxldGVPbmUoeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0pO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydFByb2R1Y3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpIH0sXHJcbi8vICAgICAgICAgJHB1bGw6IHtcclxuLy8gICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbi8vICAgICAgICAgICAgIHByb2R1Y3RJZDogcmVxLmJvZHkucHJvZHVjdElkLFxyXG4vLyAgICAgICAgICAgICBxdWFudGl0eTogcmVxLmJvZHkucXVhbnRpdHlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBDYXJ0Q2hlY2tvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpIH0sXHJcbi8vICAgICAgICAgJHB1bGw6IHtcclxuLy8gICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbi8vICAgICAgICAgICAgIHByb2R1Y3RJZDogcmVxLmJvZHkucHJvZHVjdElkLFxyXG4vLyAgICAgICAgICAgICBxdWFudGl0eTogcmVxLmJvZHkucXVhbnRpdHlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgeyBEZWxldGVDYXJ0LCBEZWxldGVDYXJ0UHJvZHVjdCwgR2V0Q2FydCwgVXBkYXRlQ2FydFF0eSB9O1xyXG5leHBvcnQgeyBOZXdPcmRlciB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9iamVjdElELCBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG5sZXQgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllcyhyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBHZXRDYXRlZ29yaWVzQnlMZXZlbCgwKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXRlZ29yaWVzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzKHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gYXdhaXQgR2V0U2FtcGxlcygpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZENhdGVnb3J5KGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYm9keS5uYW1lIHx8ICFib2R5LmNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBhd2FpdCBkYkNvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogYm9keS5uYW1lLCBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSB9KTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVDYXRlZ29yeShxdWVyeTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFxdWVyeS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGF3YWl0IGRiQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChxdWVyeS5faWQpIH0pO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEBsZXZlbDpcclxuLy8gMCAtIGFsbDsgIDEgLSAxc3QgbGV2ZWw7ICAyIC0gMm5kIGFuZCBhYm92ZSBsZXZlbHNcclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllc0J5TGV2ZWwobGV2ZWw6IG51bWJlcikge1xyXG4gIGlmIChnbG9iYWxDYXRlZ29yaWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBnbG9iYWxDYXRlZ29yaWVzID0gYXdhaXQgR2V0Q2F0ZWdvcmllc0Zyb21EYigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxldmVsID09PSAwKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsQ2F0ZWdvcmllcztcclxuICB9XHJcbiAgY29uc3QgcmV0dXJuQ2F0ZWdvcmllcyA9IFtdO1xyXG4gIGdsb2JhbENhdGVnb3JpZXMuZm9yRWFjaChjYXQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY2F0LmNhdGVnb3J5Lm1hdGNoKG5ldyBSZWdFeHAoJy8nLCAnZycpKSk7XHJcbiAgICBpZiAoY2F0LmNhdGVnb3J5Lm1hdGNoKG5ldyBSZWdFeHAoJy8nLCAnZycpKS5sZW5ndGggPD0gbGV2ZWwpIHtcclxuICAgICAgcmV0dXJuQ2F0ZWdvcmllcy5wdXNoKGNhdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJldHVybkNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXNGcm9tRGIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IGF3YWl0IGRiQ29sbGVjdGlvblxyXG4gICAgICAuZmluZCgpXHJcbiAgICAgIC5zb3J0KCdjYXRlZ29yeScsIDEpXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZ2xvYmFsQ2F0ZWdvcmllcztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyB7IGVyck1zZzogJ0dldCBjYXRlZ29yaWVzIGZyb20gZGF0YWJhc2UgZmFpbGVkLicgfTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFNhbXBsZXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGxldCBkb2NzID0gbnVsbDtcclxuICAgIGRvY3MgPSBhd2FpdCBkYkNvbGxlY3Rpb25cclxuICAgICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgeyAkc29ydDogeyBfaWQ6IC0xIH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkZ3JvdXA6IHtcclxuICAgICAgICAgICAgX2lkOiB7IGNhdGVnb3J5OiAnJGNhdGVnb3J5JyB9LFxyXG4gICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICBfaWQ6ICckX2lkJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJGNhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyRpbWcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgICBfaWQ6ICckX2lkJyxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAkc2xpY2U6IFtcclxuICAgICAgICAgICAgICAgICckcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgNCAvLyBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIHJldHVybmVkIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXSlcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiBkb2NzO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIHsgZXJyTXNnOiAnR2V0IHByb2R1Y3RzIGZhaWxlZC4nIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRDYXRlZ29yeSwgRGVsZXRlQ2F0ZWdvcnksIEdldENhdGVnb3JpZXMsIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0SW52ZW50b3J5KHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgY29uc3QgaW52ZW50b3J5ID0gYXdhaXQgZGJJbnZlbnRvcnkuZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChpbnZlbnRvcnkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHF0eSBieSBwcm9kdWN0OyBUb2RvOiBieSBjb2xvdXIsIHNpemUsIGV0Yy5cclxuYXN5bmMgZnVuY3Rpb24gQWRqdXN0SW52ZW50b3J5KF9pZDogc3RyaW5nLCBxdHk6IG51bWJlciwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghX2lkIHx8ICFxdHkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChfaWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpLCBxdHk6IHF0eSB9IH0sXHJcbiAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocnNsdCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gUmVzZXJ2ZUludmVudG9yeShpZDogc3RyaW5nLCBjYXJ0SXRlbXM6IGFueSkge1xyXG4gIGlmICghY2FydEl0ZW1zIHx8IGNhcnRJdGVtcy5sZW5ndGggPD0gMCkge1xyXG4gICAgdGhyb3cgJ1RoZSBjYXJ0IGlzIGVtcHR5Lic7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IFtdO1xyXG4gICAgY29uc3QgZmFpbGVkID0gW107XHJcblxyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIF9pZDogbmV3IE9iamVjdElEKGNhcnRJdGVtc1tpXS5wcm9kdWN0Ll9pZCksXHJcbiAgICAgICAgICBxdHk6IHsgJGd0ZTogY2FydEl0ZW1zW2ldLnF0eSB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkaW5jOiB7IHF0eTogLWNhcnRJdGVtc1tpXS5xdHkgfSxcclxuICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgIHJlc2VydmF0aW9uczoge1xyXG4gICAgICAgICAgICAgIHF0eTogY2FydEl0ZW1zW2ldLnF0eSxcclxuICAgICAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChpZCksXHJcbiAgICAgICAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0Lm5Nb2RpZmllZCA9PT0gMCkge1xyXG4gICAgICAgIGZhaWxlZC5wdXNoKGNhcnRJdGVtc1tpXS5wcm9kdWN0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdWNjZXNzLnB1c2goY2FydEl0ZW1zW2ldLnByb2R1Y3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZhaWxlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VjY2Vzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgX2lkOiBzdWNjZXNzW2ldLl9pZCxcclxuICAgICAgICAgICAgJ3Jlc2VydmF0aW9ucy5faWQnOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJGluYzogeyBxdHk6IHN1Y2Nlc3NbaV0ucXR5IH0sXHJcbiAgICAgICAgICAgICRwdWxsOiB7IHJlc2VydmF0aW9uczogeyBfaWQ6IGlkIH0gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgJ05vdCBlbm91Z2ggc3RvcmFnZS4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdTdWNjZXNzLic7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKF9pZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGxldCB1cGRhdGVSc2x0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3Jlc2VydmF0aW9ucy5faWQnOiBuZXcgT2JqZWN0SUQoX2lkKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1bGw6IHsgcmVzZXJ2YXRpb25zOiB7IF9pZDogbmV3IE9iamVjdElEKF9pZCkgfSB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAodXBkYXRlUnNsdC5yZXN1bHQubk1vZGlmaWVkIDw9IDApIHtcclxuICAgICAgdGhyb3cgJ2RlbGV0ZSByZXNlcnZhdGlvbiBmYWlsZWQuJztcclxuICAgIH1cclxuICAgIHJldHVybiB1cGRhdGVSc2x0O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhyb3cgJ2RlbGV0ZSByZXNlcnZhdGlvbiBmYWlsZWQgd2l0aCBleGNlcHRpb24uJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRqdXN0SW52ZW50b3J5LFxyXG4gIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uLFxyXG4gIEdldEludmVudG9yeSxcclxuICBSZXNlcnZlSW52ZW50b3J5XHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIEFkZENhdGVnb3J5LFxyXG4gIERlbGV0ZUNhdGVnb3J5LFxyXG4gIEdldENhdGVnb3JpZXMsXHJcbiAgR2V0U2FtcGxlc09mQ2F0ZWdvcmllc1xyXG59IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMtY2F0ZWdvcmllcy5vcHMnO1xyXG5pbXBvcnQge1xyXG4gIEFkZFByb2R1Y3QsXHJcbiAgRGVsZXRlUHJvZHVjdCxcclxuICBHZXRQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeSxcclxuICBVcGRhdGVQcm9kdWN0XHJcbn0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy5vcHMnO1xyXG5pbXBvcnQgeyBBZGp1c3RJbnZlbnRvcnksIEdldEludmVudG9yeSB9IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMtaW52ZW50b3J5Lm9wcyc7XHJcblxyXG5jb25zdCBnaWZ0c1Byb2R1Y3RzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3ZpZXcvOnByb2R1Y3Rfbm8nLCAocmVxLCByZXMpID0+IHtcclxuICBHZXRQcm9kdWN0KHJlcS5wYXJhbXMsIHJlcyk7XHJcbn0pO1xyXG5cclxuLypcclxuICogaW5xdWlyeTogL2FwaS9naWZ0cy9wcm9kdWN0c1xyXG4gKi9cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9jYXRlZ29yaWVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldENhdGVnb3JpZXMocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucG9zdCgnL2NhdGVnb3J5JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEFkZENhdGVnb3J5KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5kZWxldGUoJy9jYXRlZ29yeScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVDYXRlZ29yeShyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9zYW1wbGVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5KHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQcm9kdWN0KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucG9zdCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUHJvZHVjdChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucHV0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVcGRhdGVQcm9kdWN0KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5kZWxldGUoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZVByb2R1Y3QocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvaW52ZW50b3J5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgR2V0SW52ZW50b3J5KHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnB1dCgnL2ludmVudG9yeScsIChyZXEsIHJlcykgPT4ge1xyXG4gIEFkanVzdEludmVudG9yeShyZXEuYm9keS5faWQsIHJlcS5ib2R5LnF0eSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1Byb2R1Y3RzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE1vbmdvRGIsIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcm9kdWN0KHBhcmFtczogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFwYXJhbXMuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcHJvZHVjdCBuby4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKVxyXG4gICAgICAuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElEKHBhcmFtcy5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHByb2R1Y3QpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFByb2R1Y3RzQnlDYXRlZ29yeShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpO1xyXG4gICAgbGV0IGRvY3MgPSBudWxsO1xyXG4gICAgaWYgKHJlcS5xdWVyeS5jYXRlZ29yeSkge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoWydeJywgcmVxLnF1ZXJ5LmNhdGVnb3J5LnRyaW0oKV0uam9pbignJyksICdpJyk7XHJcbiAgICAgIGRvY3MgPSBhd2FpdCBkYkNvbGxlY3Rpb24uZmluZCh7IGNhdGVnb3J5OiByZWdleCB9KS50b0FycmF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZG9jcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkUHJvZHVjdChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkubmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKS5pbnNlcnRPbmUoe1xyXG4gICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgIGltZzogYm9keS5pbWcsXHJcbiAgICAgIHByaWNlOiBib2R5LnByaWNlLFxyXG4gICAgICBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSxcclxuICAgICAgY29sb3I6IGJvZHkuY29sb3IsXHJcbiAgICAgIHBhY2thZ2luZzogYm9keS5wYWNrYWdpbmcsXHJcbiAgICAgIG1hdGVyaWFsOiBib2R5Lm1hdGVyaWFsLFxyXG4gICAgICBzaXplOiBib2R5LnNpemUsXHJcbiAgICAgIG5vdGU6IGJvZHkubm90ZSxcclxuICAgICAgcmV0YWlsZXI6IGJvZHkucmV0YWlsZXIsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJQcm9kdWN0cyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGF3YWl0IGRiUHJvZHVjdHMudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKGJvZHkuX2lkKSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgbW9kaWZpZWRPbjogbmV3IERhdGUoKSxcclxuICAgICAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgICAgIGltZzogYm9keS5pbWcsXHJcbiAgICAgICAgICBwcmljZTogYm9keS5wcmljZSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBib2R5LmNhdGVnb3J5LFxyXG4gICAgICAgICAgY29sb3I6IGJvZHkuY29sb3IsXHJcbiAgICAgICAgICBwYWNrYWdpbmc6IGJvZHkucGFja2FnaW5nLFxyXG4gICAgICAgICAgbWF0ZXJpYWw6IGJvZHkubWF0ZXJpYWwsXHJcbiAgICAgICAgICBzaXplOiBib2R5LnNpemUsXHJcbiAgICAgICAgICBub3RlOiBib2R5Lm5vdGUsXHJcbiAgICAgICAgICByZXRhaWxlcjogYm9keS5yZXRhaWxlclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KHF1ZXJ5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXF1ZXJ5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJylcclxuICAgICAgLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHF1ZXJ5Ll9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBZGRQcm9kdWN0LFxyXG4gIERlbGV0ZVByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5LFxyXG4gIEdldFByb2R1Y3QsXHJcbiAgVXBkYXRlUHJvZHVjdFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGdpZnRzU3RhZmZzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5naWZ0c1N0YWZmc1JvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gTG9naW4ocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIExvZ291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1N0YWZmc1JvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gUmVnaXN0ZXIocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIuZGVsZXRlKCcvZGVsZXRldXNlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBEZWxldGVVc2VyKHJlcSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1N0YWZmc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuLi9zdHJpbmctb3BzJztcclxuXHJcbmltcG9ydCB7IGJMb2dpbiB9IGZyb20gJy4vZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL3VzZXJzLWludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24sXHJcbiAgUmVzZXJ2ZUludmVudG9yeVxyXG59IGZyb20gJy4uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLWludmVudG9yeS5vcHMnO1xyXG5pbXBvcnQgeyBOZXdPcmRlciB9IGZyb20gJy4uL2dpZnRzLW9yZGVycy9naWZ0cy1vcmRlcnMub3BzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhcnQoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXJ0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRUb0NhcnQoc2Vzc2lvbjogYW55LCBib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAgeyAkcHVsbDogeyBwcm9kdWN0czogeyBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSB9IH0gfVxyXG4gICAgKTtcclxuICAgIHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGJvZHkucXR5LFxyXG4gICAgICAgICAgICBuYW1lOiBib2R5LnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IGJvZHkucHJvZHVjdC5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVDYXJ0UXR5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5LnByb2R1Y3RJZCB8fCAhcmVxLmJvZHkucXR5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IHJlcS5zZXNzaW9uLnVzZXIuX2lkLFxyXG4gICAgICAgICdwcm9kdWN0cy5wcm9kdWN0SWQnOiByZXEuYm9keS5wcm9kdWN0SWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICdwcm9kdWN0cy4kLnF0eSc6IHJlcS5ib2R5LnF0eSxcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydChzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGRiLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUluQ2FydChzZXNzaW9uOiBhbnksIF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9LFxyXG4gICAgICB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2R1Y3RJZDogbmV3IE9iamVjdElEKF9pZCkgfSB9IH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2FydENoZWNrb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChcclxuICAgICFyZXEuYm9keS5jYXJ0IHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lciB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubmFtZSB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubW9iaWxlIHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lci5hZGRyZXNzXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgY3VzdG9tZXIgaW5mb3JtYXRpb24uJyk7XHJcbiAgfVxyXG4gIGlmIChyZXEuYm9keS5jYXJ0LnRvdGFsIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTm8gcHJvZHVjdCB0byBjaGVja291dC4nKTtcclxuICB9XHJcblxyXG4gIGxldCBiTWVtYmVyOiBib29sZWFuID0gYkxvZ2luKHJlcS5zZXNzaW9uKTtcclxuXHJcbiAgbGV0IGlkID0gJyc7XHJcbiAgaWYgKGJNZW1iZXIpIHtcclxuICAgIGlkID0gcmVxLnNlc3Npb24udXNlci5faWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlkID0gcmFuZG9tU3RyaW5nKDIwKTtcclxuICB9XHJcbiAgY29uc3QgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdID0gcmVxLmJvZHkuY2FydC5jYXJ0SXRlbXM7XHJcbiAgY29uc3QgY3VzdG9tZXIgPSByZXEuYm9keS5jYXJ0LmN1c3RvbWVyO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gcmVzZXJ2ZSBpbnZlbnRvcnksIGl0IHRocm93IGVycm9yIGluIGNhc2Ugb2YgZmFpbHVyZS5cclxuICAgIGF3YWl0IFJlc2VydmVJbnZlbnRvcnkoaWQsIGNhcnRJdGVtcyk7XHJcblxyXG4gICAgbGV0IGluc2VydFJzbHQgPSBhd2FpdCBOZXdPcmRlcihjdXN0b21lciwgY2FydEl0ZW1zKTtcclxuICAgIGlmIChpbnNlcnRSc2x0LnJlc3VsdC5uIDw9IDApIHtcclxuICAgICAgYXdhaXQgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oaWQpO1xyXG4gICAgICB0aHJvdyAnQ3JlYXRlIG5ldyBvcmRlciBmYWlsZWQuJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXBkYXRlUnNsdCA9IGF3YWl0IERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVwZGF0ZVJzbHQpO1xyXG5cclxuICAgIGlmIChiTWVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGRiQ2FydHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICAgIGxldCBkZWxldGVSc2x0ID0gYXdhaXQgZGJDYXJ0cy5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChpZCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgb3JkZXJJZDogaWQgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgTG9naW4sXHJcbiAgTG9nb3V0LFxyXG4gIFJlZ2lzdGVyLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgVXNlckluZm9cclxufSBmcm9tICcuL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufSBmcm9tICcuL2dpZnRzLWNhcnRzLm9wcyc7XHJcblxyXG5jb25zdCBnaWZ0c1VzZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGkvZ2lmdHMvdXNlcnMvXHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvaW5mbycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVc2VySW5mbyhyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBSZWdpc3RlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlVXNlcihyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRDYXJ0KHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRUb0NhcnQocmVxLnNlc3Npb24sIHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUNhcnQocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnB1dCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXBkYXRlQ2FydFF0eShyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2NhcnQvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVJbkNhcnQocmVxLnNlc3Npb24sIHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9jYXJ0L2NoZWNrb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIENhcnRDaGVja291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNVc2Vyc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBlbmNyeXB0IH0gZnJvbSAnLi4vc3RyaW5nLW9wcyc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gIGRiLmNyZWF0ZUluZGV4KCd1aWQnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcclxufSkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIExvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChyZXEuc2Vzc2lvbiAmJiByZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyB1aWQ6IHJlcS5zZXNzaW9uLnVzZXIudWlkIH0pO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiVXNlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gYXdhaXQgZGJVc2Vycy5maW5kT25lKHtcclxuICAgICAgdWlkOiByZXEuYm9keS51aWQsXHJcbiAgICAgIHB3ZDogZW5jcnlwdChyZXEuYm9keS5wd2QpXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgdWlkOiByZXEuc2Vzc2lvbi51c2VyLnVpZCB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ3NlcnZlciBlcnJvci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLnNlc3Npb24gJiYgcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gUmVnaXN0ZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKFxyXG4gICAgIXJlcS5ib2R5LnVpZCB8fFxyXG4gICAgIXJlcS5ib2R5LnB3ZCB8fFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsIHx8XHJcbiAgICAhcmVxLmJvZHkuZmlyc3ROYW1lIHx8XHJcbiAgICAhcmVxLmJvZHkubGFzdE5hbWVcclxuICApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYlVzZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYlVzZXJzLmluc2VydE9uZSh7XHJcbiAgICAgIHVpZDogcmVxLmJvZHkudWlkLFxyXG4gICAgICBwd2Q6IGVuY3J5cHQocmVxLmJvZHkucHdkKSxcclxuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgICBmaXJzdE5hbWU6IHJlcS5ib2R5LmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IHJlcS5ib2R5Lmxhc3ROYW1lLFxyXG4gICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG4gICAgaWYgKHJzbHQuaW5zZXJ0ZWRDb3VudCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocnNsdC5vcHNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdSZWdpc3RlciBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1JlZ2lzdGVyIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVVzZXIoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnTG9naW4gaXMgcmVxdWlyZWQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBkYi5jb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpLmRlbGV0ZU9uZSh7XHJcbiAgICAgIF9pZDogc2Vzc2lvbi51c2VyLl9pZFxyXG4gICAgfSk7XHJcbiAgICBzZXNzaW9uLnVzZXIgPSBudWxsO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnVXNlciBkZWxldGVkLicgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVXNlckluZm8oc2Vzc2lvbjogYW55LCByZXMpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIE5vdCBsb2dpbi4nKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgIF9pZDogc2Vzc2lvbi51c2VyLl9pZCxcclxuICAgIHVpZDogc2Vzc2lvbi51c2VyLnVpZCxcclxuICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYkxvZ2luKHNlc3Npb246IGFueSkge1xyXG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBiTG9naW4sIExvZ2luLCBMb2dvdXQsIFJlZ2lzdGVyLCBEZWxldGVVc2VyLCBVc2VySW5mbyB9O1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlKGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGxldCB1cmwgPSBib2R5LnVybDtcclxuICBpZiAoYm9keS5xdWVyeXMgJiYgYm9keS5xdWVyeXMubGVuZ3RoID4gMCkge1xyXG4gICAgdXJsICs9ICc/JztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5xdWVyeXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdXJsICs9IGJvZHkucXVlcnlbaV07XHJcbiAgICAgIHVybCArPSAnPSc7XHJcbiAgICAgIHVybCArPSBib2R5LnF1ZXJ5VmFsdWVbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEF4aW9zLmRlbGV0ZSh1cmwpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gUG9zdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVxKTtcclxuICBsZXQgdXJsOiBzdHJpbmcgPSByZXEuYm9keS51cmw7XHJcbiAgaWYgKHJlcS5ib2R5LmhlYWRlcnMpIHtcclxuICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHJlcS5ib2R5LmhlYWRlcnNcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChyZXEuYm9keS5wYXJhbWV0ZXJzKSB7XHJcbiAgICB1cmwgKz0gJz8nO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEuYm9keS5wYXJhbWV0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHVybCArPSByZXEuYm9keS5wYXJhbWV0ZXJzW2ldICsgJz0nICsgcmVxLmJvZHkucGFyYW1ldGVyVmFsdWVbaV0gKyAnJic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEF4aW9zLmdldCh1cmwsIGhlYWRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gUHV0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIEF4aW9zLnB1dChyZXEuYm9keS51cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gR2V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIEF4aW9zLnBvc3QocmVxLmJvZHkudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBEZWxldGUsIEdldCwgUG9zdCwgUHV0IH07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxldGUsIEdldCwgUG9zdCwgUHV0IH0gZnJvbSAnLi9odHRwLXJlcXVlc3QnO1xyXG5cclxuY29uc3QgaHR0cFJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuaHR0cFJvdXRlci5wb3N0KCcnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdERUxFVEUnKSB7XHJcbiAgICBEZWxldGUocmVxLmJvZHksIHJlcyk7XHJcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50eXBlID09PSAnR0VUJykge1xyXG4gICAgR2V0KHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ1BPU1QnKSB7XHJcbiAgICBQb3N0KHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ1BVVCcpIHtcclxuICAgIFB1dChyZXEuYm9keSwgcmVzKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cFJvdXRlcjtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYnVzQXJyaXZhbFVybCwgaGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9sdGEnO1xyXG5pbXBvcnQgeyBjaGVja0J1c1N0b3BMb2NhbGx5IH0gZnJvbSAnLi9idXMtc3RvcHMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0QnVzQXJyaXZhbChidXNTdG9wQ29kZTogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgYnVzU3RvcENvZGUgPSBidXNTdG9wQ29kZS50cmltKCk7XHJcbiAgaWYgKCFidXNTdG9wQ29kZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIEJ1c1N0b3BDb2RlLicpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGJ1c1N0b3BJbmZvID0gY2hlY2tCdXNTdG9wTG9jYWxseShidXNTdG9wQ29kZSk7XHJcbiAgaWYgKCFidXNTdG9wSW5mbykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdCdXMgU3RvcCBub3QgZm91bmQuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgdXJsID0gYCR7YnVzQXJyaXZhbFVybH0/QnVzU3RvcENvZGU9JHtidXNTdG9wQ29kZX1gO1xyXG4gIEF4aW9zLmdldCh1cmwsIGhlYWRlckNvbmZpZylcclxuICAgIC50aGVuKHJlc3Bvc2UgPT4ge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDIwMClcclxuICAgICAgICAuc2VuZCh7IGJ1c1N0b3BJbmZvOiBidXNTdG9wSW5mbywgYnVzQXJyaXZhbDogcmVzcG9zZS5kYXRhIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QnVzQXJyaXZhbDtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgYnVzU3RvcHNVcmwsIGhlYWRlckNvbmZpZyB9IGZyb20gJy4vbHRhJztcclxuaW1wb3J0IHsgQnVzU3RvcEluZm8gfSBmcm9tICcuL2J1cy1zdG9wcy1pbnRlcmZhY2UnO1xyXG5cclxubGV0IGJ1c1N0b3BzOiBCdXNTdG9wSW5mb1tdID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRCdXNTdG9wc0Zyb21MdGEoc2tpcD86IG51bWJlcik6IFByb21pc2U8QnVzU3RvcEluZm9bXT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgdXJsID0gYnVzU3RvcHNVcmw7XHJcbiAgICBpZiAoc2tpcCkge1xyXG4gICAgICB1cmwgKz0gYD8kc2tpcD0ke3NraXB9YDtcclxuICAgIH1cclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLmdldCh1cmwsIGhlYWRlckNvbmZpZyk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICB0aHJvdyB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS52YWx1ZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQnVzU3RvcHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBza2lwID0gMDtcclxuICAgIGxldCBuZXdCdXNTdG9wczogQnVzU3RvcEluZm9bXSA9IFtdO1xyXG4gICAgZG8ge1xyXG4gICAgICBuZXdCdXNTdG9wcyA9IGF3YWl0IGdldEJ1c1N0b3BzRnJvbUx0YShza2lwKTtcclxuICAgICAgbGV0IHRlbXAgPSBidXNTdG9wcztcclxuICAgICAgYnVzU3RvcHMgPSB0ZW1wLmNvbmNhdChuZXdCdXNTdG9wcyk7XHJcbiAgICAgIHNraXAgKz0gNTAwO1xyXG4gICAgfSB3aGlsZSAobmV3QnVzU3RvcHMubGVuZ3RoID09PSA1MDApO1xyXG4gICAgY29uc29sZS5sb2coJ1RvdGFsIGJ1cyBzdG9wczogJyArIGJ1c1N0b3BzLmxlbmd0aCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgYnVzU3RvcHMgPSBbXTtcclxuICAgIGdldEFsbEJ1c1N0b3BzKCk7XHJcbiAgfVxyXG59XHJcbmdldEFsbEJ1c1N0b3BzKCk7XHJcblxyXG5mdW5jdGlvbiBjaGVja0J1c1N0b3BMb2NhbGx5KGJ1c1N0b3BDb2RlOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c1N0b3BDb2RlKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVzU3RvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChidXNTdG9wQ29kZSA9PT0gYnVzU3RvcHNbaV0uQnVzU3RvcENvZGUpIHtcclxuICAgICAgcmV0dXJuIGJ1c1N0b3BzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ1c1N0b3BJbmZvKGJ1c1N0b3BDb2RlOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJ1c1N0b3BDb2RlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgQnVzIFN0b3AgQ29kZS4nKTtcclxuICB9XHJcbiAgbGV0IGJ1c1N0b3BJbmZvID0gY2hlY2tCdXNTdG9wTG9jYWxseShidXNTdG9wQ29kZSk7XHJcbiAgaWYgKGJ1c1N0b3BJbmZvKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoYnVzU3RvcEluZm8pO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0J1cyBTdG9wIEluZm8gbm90IGZvdW5kLicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZWFyYnlCdXNTdG9wcyhsYXRpdHVkZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlciwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChsYXRpdHVkZSA9PT0gdW5kZWZpbmVkIHx8IGxvbmdpdHVkZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgY29vcmRpbmF0ZXMuJyk7XHJcbiAgfVxyXG5cclxuICBsZXQgbmVhcmJ5U3RvcHMgPSBbXTtcclxuICBjb25zdCBSID0gNjM3MWUzO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVzU3RvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBkTGF0ID0gKChidXNTdG9wc1tpXS5MYXRpdHVkZSAtIGxhdGl0dWRlKSAqIE1hdGguUEkpIC8gMTgwO1xyXG4gICAgbGV0IGRMb25nID0gKChidXNTdG9wc1tpXS5Mb25naXR1ZGUgLSBsb25naXR1ZGUpICogTWF0aC5QSSkgLyAxODA7XHJcblxyXG4gICAgbGV0IGEgPVxyXG4gICAgICBNYXRoLnNpbihkTGF0IC8gMikgKiBNYXRoLnNpbihkTGF0IC8gMikgK1xyXG4gICAgICBNYXRoLmNvcygoYnVzU3RvcHNbaV0uTGF0aXR1ZGUgKiBNYXRoLlBJKSAvIDE4MCkgKlxyXG4gICAgICAgIE1hdGguY29zKChsYXRpdHVkZSAqIE1hdGguUEkpIC8gMTgwKSAqXHJcbiAgICAgICAgTWF0aC5zaW4oZExvbmcgLyAyKSAqXHJcbiAgICAgICAgTWF0aC5zaW4oZExvbmcgLyAyKTtcclxuICAgIGxldCBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKTtcclxuICAgIGxldCBkaXN0ID0gUiAqIGM7XHJcbiAgICBpZiAoTWF0aC5hYnMoZGlzdCkgPCA0MDApIHtcclxuICAgICAgbmVhcmJ5U3RvcHMucHVzaChidXNTdG9wc1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKG5lYXJieVN0b3BzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYnVzU3RvcHMsIGNoZWNrQnVzU3RvcExvY2FsbHksIGdldEJ1c1N0b3BJbmZvLCBnZXROZWFyYnlCdXNTdG9wcyB9O1xyXG4iLCJjb25zdCBsdGFBY2NvdW50S2V5ID0gJzZzVnpmOXpYUmFDZ2tKVWRqeEl3MkE9PSc7XHJcblxyXG5jb25zdCBidXNBcnJpdmFsVXJsID1cclxuICAnaHR0cDovL2RhdGFtYWxsMi5teXRyYW5zcG9ydC5zZy9sdGFvZGF0YXNlcnZpY2UvQnVzQXJyaXZhbHYyJztcclxuY29uc3QgYnVzU3RvcHNVcmwgPSAnaHR0cDovL2RhdGFtYWxsMi5teXRyYW5zcG9ydC5zZy9sdGFvZGF0YXNlcnZpY2UvQnVzU3RvcHMnO1xyXG5cclxuY29uc3QgaGVhZGVyQ29uZmlnID0ge1xyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY291bnRLZXk6IGx0YUFjY291bnRLZXlcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBidXNBcnJpdmFsVXJsLCBidXNTdG9wc1VybCwgaGVhZGVyQ29uZmlnIH07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgZ2V0QnVzQXJyaXZhbCBmcm9tICcuL2J1cy1hcnJpdmFsJztcclxuaW1wb3J0IHsgZ2V0QnVzU3RvcEluZm8sIGdldE5lYXJieUJ1c1N0b3BzIH0gZnJvbSAnLi9idXMtc3RvcHMnO1xyXG5cclxuLy8gdXJsOiAvYXBpL2x0YS9idXNcclxuY29uc3QgYnVzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5idXNSb3V0ZXIuZ2V0KCcvYnVzQXJyaXZhbC86YnVzU3RvcENvZGUnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgZ2V0QnVzQXJyaXZhbChyZXEucGFyYW1zLmJ1c1N0b3BDb2RlLCByZXMpO1xyXG59KTtcclxuXHJcbmJ1c1JvdXRlci5nZXQoJy9idXNTdG9wLzpidXNTdG9wQ29kZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBnZXRCdXNTdG9wSW5mbyhyZXEucGFyYW1zLmJ1c1N0b3BDb2RlLCByZXMpO1xyXG59KTtcclxuXHJcbmJ1c1JvdXRlci5nZXQoJy9uZWFyYnlCdXNTdG9wcycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXEucXVlcnkpO1xyXG4gIGdldE5lYXJieUJ1c1N0b3BzKHJlcS5xdWVyeS5sYXRpdHVkZSwgcmVxLnF1ZXJ5LmxvbmdpdHVkZSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgeyBidXNSb3V0ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgT3hmb3JkRGljdGlvbmFyeSBmcm9tICdveGZvcmQtZGljdGlvbmFyeSc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IERJQ1QgPSBuZXcgT3hmb3JkRGljdGlvbmFyeSh7XHJcbiAgYXBwX2lkOiAnMDMxNGU5ZTInLFxyXG4gIGFwcF9rZXk6ICc1YTZjMjU4OTQ3NGEyZjgzY2NkNjlmMzk3YmZlYzdhMicsXHJcbiAgc291cmNlX2xhbmc6ICdlbidcclxufSk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBDaGVja094Zm9yZERpY3Rpb25hcnkod29yZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF3b3JkIHx8ICF3b3JkLnRyaW0oKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHdvcmQuJyk7XHJcbiAgfVxyXG5cclxuICBESUNULmRlZmluaXRpb25zKHdvcmQudHJpbSgpKS50aGVuKFxyXG4gICAgZGVmaW5pdGlvbnMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZGVmaW5pdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIGVyciA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrT3hmb3JkRGljdGlvbmFyeTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgbHVuY2hQYWxzID0gW107XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUGFscygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIGx1bmNoUGFscyA9IGF3YWl0IHBhbHNDb2xsZWN0aW9uXHJcbiAgICAgIC5maW5kKClcclxuICAgICAgLnNvcnQoeyBuYW1lOiAxIH0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFBhbHMocmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChsdW5jaFBhbHMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGx1bmNoUGFscyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZFBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUGFsKG5hbWU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghbmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIG5hbWUgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBwYWxzQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgcmVmcmVzaFBhbHMoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzQXR0ZW5kYW5jZShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbnN0IGF0dGVuZGFuY2VzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICR1bndpbmQ6ICckYXR0ZW5kZWVzJyB9LFxyXG4gICAgICAgIHsgJGdyb3VwOiB7IF9pZDogJyRhdHRlbmRlZXMnLCBhdHRlbmRhbmNlOiB7ICRzdW06IDEgfSB9IH0sXHJcbiAgICAgICAgeyAkcHJvamVjdDogeyBuYW1lOiAnJF9pZCcsIGF0dGVuZGFuY2U6ICckYXR0ZW5kYW5jZScgfSB9XHJcbiAgICAgIF0pXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoYXR0ZW5kYW5jZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFkZFBhbCwgRGVsZXRlUGFsLCBHZXRQYWxzLCBHZXRQYWxzQXR0ZW5kYW5jZSB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IERiQ29sbGVjdGlvbiwgT2JqZWN0SUQgfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRSZWNvcmRzKHJlczogUmVzcG9uc2UsIHF0eT86IG51bWJlcikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgY29sbGVjdGlvblxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnNvcnQoeyBjcmVhdGVkT246IC0xIH0pXHJcbiAgICAgIC5saW1pdChxdHkgfCAzMClcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChyZWNvcmRzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRSZWNvcmQocGF5ZXI6IHN0cmluZywgYXR0ZW5kZWVzOiBzdHJpbmdbXSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghcGF5ZXIgfHwgIWF0dGVuZGVlcyB8fCBhdHRlbmRlZXMubGVuZ3RoIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBwYXJhbXMgdG8gYWRkLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGF3YWl0IGNvbGxlY3Rpb24uaW5zZXJ0T25lKHtcclxuICAgICAgcGF5ZXI6IHBheWVyLFxyXG4gICAgICBhdHRlbmRlZXM6IGF0dGVuZGVlcyxcclxuICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnRXJyb3IgYXQgc2VydmVyLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlUmVjb3JkKF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFfaWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCByZWNvcmQgdG8gZGVsZXRlLicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXJlY29yZHMnKTtcclxuICAgIGNvbGxlY3Rpb24uZGVsZXRlT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoX2lkKSB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IENoZWNrT3hmb3JkRGljdGlvbmFyeSBmcm9tICcuL2RpY3Rpb25hcnknO1xyXG5pbXBvcnQgeyBBZGRQYWwsIERlbGV0ZVBhbCwgR2V0UGFscywgR2V0UGFsc0F0dGVuZGFuY2UgfSBmcm9tICcuL2x1bmNoZnVuLXBhbHMnO1xyXG5pbXBvcnQgeyBBZGRSZWNvcmQsIERlbGV0ZVJlY29yZCwgR2V0UmVjb3JkcyB9IGZyb20gJy4vbHVuY2hmdW4tcmVjb3Jkcyc7XHJcblxyXG5jb25zdCBkaWN0aW9uYXJ5Um91dGVyID0gUm91dGVyKCk7XHJcbmNvbnN0IGx1bmNoZnVuUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5kaWN0aW9uYXJ5Um91dGVyLmdldCgnL294Zm9yZC86d29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBDaGVja094Zm9yZERpY3Rpb25hcnkocmVxLnBhcmFtcy53b3JkLCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3BhbHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UGFscyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRQYWwocmVxLmJvZHkubmFtZSwgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3BhbCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVQYWwocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmx1bmNoZnVuUm91dGVyLmdldCgnL3JlY29yZHMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UmVjb3JkcyhyZXMpO1xyXG59KTtcclxubHVuY2hmdW5Sb3V0ZXIucG9zdCgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRSZWNvcmQocmVxLmJvZHkucGF5ZXIsIHJlcS5ib2R5LmF0dGVuZGVlcywgcmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLmRlbGV0ZSgnL3JlY29yZCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVSZWNvcmQocmVxLnF1ZXJ5Ll9pZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9zdGF0cy9hdHRlbmRhbmNlJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHNBdHRlbmRhbmNlKHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgZGljdGlvbmFyeVJvdXRlciwgbHVuY2hmdW5Sb3V0ZXIgfTtcclxuIiwiaW1wb3J0IHsgTW9uZ29DbGllbnQsIERiLCBPYmplY3RJRCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgTU9OR09fVVJMID1cclxuICAnbW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBjbHVzdGVyMC1keHdrZy5tb25nb2RiLm5ldC9pbnNnP3JldHJ5V3JpdGVzPXRydWUnO1xyXG5cclxubGV0IGRhdGFiYXNlOiBEYjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXREYigpOiBQcm9taXNlPERiPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoTU9OR09fVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKGRhdGFiYXNlID0gY2xpZW50LmRiKCdpbnNnJykpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93ICdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZC4nO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gTW9uZ29EYigpOiBQcm9taXNlPERiPiB7XHJcbiAgaWYgKGRhdGFiYXNlKSB7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2U7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGJDb2xsZWN0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgSW5pdERiKCk7XHJcbiAgICByZXR1cm4gZGF0YWJhc2UuY29sbGVjdGlvbihuYW1lKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XHJcbmltcG9ydCAqIGFzIGh0dHBzIGZyb20gJ2h0dHBzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IGFwaVJvdXRlciBmcm9tICcuL2FwaS1yb3V0ZXInO1xyXG5cclxuLy8gRXhwcmVzcyBzZXJ2ZXJcclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBIT1NUID0gJ2xvY2FsaG9zdCc7XHJcbmNvbnN0IEhUVFBfUE9SVCA9IDgwO1xyXG5jb25zdCBIVFRQU19QT1JUID0gNDQzO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5cclxuYXBwLnVzZShcclxuICBzZXNzaW9uKHtcclxuICAgIHNlY3JldDogJ2luc2cteWMtbHktMTcnLFxyXG4gICAgcmVzYXZlOiBmYWxzZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG4gICAgY29va2llOiB7XHJcbiAgICAgIG1heEFnZTogMTAwMCAqIDYwICogNjAgKiAyNCAvLyBtaWxsc2Vjb25kcyBvZiAyNGhycyAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbik7XHJcblxyXG5hcHAudXNlKCcvYXBpJywgYXBpUm91dGVyKTtcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcblxyXG4vLyBTZXJ2ZXIgc3RhdGljIGZpbGVzIGZyb20gL2NsaWVudFxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudCcpKSk7XHJcblxyXG4vLyBlcnJvciBoYW5kbGluZyAtIDFcclxuYXBwLmFsbCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kRmlsZShqb2luKF9fZGlybmFtZSwgJy9jbGllbnQvaW5kZXguaHRtbCcpKTtcclxufSk7XHJcbi8vIGVycm9yIGhhbmRsaW5nIC0gMlxyXG5hcHAudXNlKChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCgnSXNzdWUgaGFwcGVuZWQuIFBsZWFzZSByZXRyeSBsYXRlciEnKTtcclxufSk7XHJcblxyXG4vLyBTdGFydCB1cCB0aGUgTm9kZSBzZXJ2ZXJcclxuLy8gaHR0cFxyXG5hcHAuc2V0KCdkb21haW4nLCBIT1NUKTtcclxuLy8gYXBwLnNldCgncG9ydCcsIEhUVFBfUE9SVCk7XHJcbi8vIGFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhgTm9kZSBzZXJ2ZXIgbGlzdGVuaW5nIG9uIGh0dHA6Ly8ke0hPU1R9OiR7UE9SVH1gKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gaHR0cHMgZGVmYXVsdCBwb3J0XHJcbiAgYXBwLnNldCgncG9ydCcsIEhUVFBTX1BPUlQpO1xyXG5jb25zdCBodHRwc09wdGlvbnMgPSB7XHJcbiAgY2VydDogZnMucmVhZEZpbGVTeW5jKGpvaW4oX19kaXJuYW1lLCAnL2NlcnQvaW5zZy5jcnQnKSksXHJcbiAga2V5OiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcvY2VydC9pbnNnLmtleScpKVxyXG59O1xyXG5jb25zdCBzZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIoaHR0cHNPcHRpb25zLCBhcHApO1xyXG5zZXJ2ZXIubGlzdGVuKDQ0Myk7XHJcbi8vIGV4cG9ydCB7IHNlcnZlciB9O1xyXG4iLCJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuXHJcbmNvbnN0IGFsZ29yaXRobSA9ICdhZXMtMTkyLWNiYyc7XHJcbmNvbnN0IHBhc3N3b3JkID0gJ2luU0d5YzgzJztcclxuY29uc3Qga2V5ID0gY3J5cHRvLnNjcnlwdFN5bmMocGFzc3dvcmQsICdzYWx0JywgMjQpO1xyXG5jb25zdCBpdiA9IEJ1ZmZlci5hbGxvYygxNiwgMCk7XHJcblxyXG5mdW5jdGlvbiBlbmNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBjcnlwdGVkOiBzdHJpbmcgPSBjaXBoZXIudXBkYXRlKHRleHQsICd1dGY4JywgJ2hleCcpO1xyXG4gICAgY3J5cHRlZCArPSBjaXBoZXIuZmluYWwoJ2hleCcpO1xyXG4gICAgcmV0dXJuIGNyeXB0ZWQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2VuY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KGFsZ29yaXRobSwga2V5LCBpdik7XHJcbiAgICBsZXQgZGVjOiBzdHJpbmcgPSBkZWNpcGhlci51cGRhdGUodGV4dCwgJ2hleCcsICd1dGY4Jyk7XHJcbiAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoJ3V0ZjgnKTtcclxuICAgIHJldHVybiBkZWM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2RlY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBzdHJpbmcgb3BlcmF0aW9uXHJcbiAqL1xyXG5lbnVtIFJhbmRvbVR5cGVzIHtcclxuICBDYXBpdGFsLFxyXG4gIE51bWJlcixcclxuICBTdHJpbmdcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5OdW1iZXIsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNhcGl0YWwgY2hhcmFjdGVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbUNhcGl0YWxzKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLkNhcGl0YWwsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMgb3IgbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5TdHJpbmcsIGxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbSh0eXBlOiBSYW5kb21UeXBlcywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGxldCByU3RyaW5nOiBzdHJpbmcgPSAnJztcclxuICBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuU3RyaW5nKSB7XHJcbiAgICByU3RyaW5nID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLk51bWJlcikge1xyXG4gICAgclN0cmluZyA9ICcwMTIzNDU2Nzg5JztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLkNhcGl0YWwpIHtcclxuICAgIHJTdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICBmb3IgKGxldCBpID0gbGVuZ3RoOyBpID4gMDsgLS1pKSB7XHJcbiAgICByZXN1bHQgKz0gclN0cmluZ1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByU3RyaW5nLmxlbmd0aCldO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGVuY3J5cHQsXHJcbiAgZGVjcnlwdCxcclxuICByYW5kb21DYXBpdGFscyxcclxuICByYW5kb21OdW1iZXIsXHJcbiAgcmFuZG9tU3RyaW5nLFxyXG4gIFJhbmRvbVR5cGVzXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJveGZvcmQtZGljdGlvbmFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=