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
var ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';
var config = {
    headers: {
        AccountKey: ltaAccountKey
    }
};
var busArrivalUrl = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';
function getBusArrival(busStopCode, res) {
    if (!busStopCode) {
        return res.status(400).send('Invalid BusStopCode.');
    }
    var url = busArrivalUrl + "?BusStopCode=" + busStopCode;
    axios_1.default.get(url, config)
        .then(function (respose) {
        res.status(200).send(respose.data);
    })
        .catch(function (e) {
        res.status(400).send(e);
    });
}
exports.getBusArrival = getBusArrival;


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
// url: /api/lta/bus
var busRouter = express_1.Router();
exports.busRouter = busRouter;
busRouter.get('/busArrival/:busStopCode', function (req, res) {
    bus_arrival_1.getBusArrival(req.params.busStopCode, res);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLWdpZnRzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9hcGktcm91dGVyLnRzIiwid2VicGFjazovLy8uL2VtYWlsL2VtYWlsLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1vcmRlcnMvZ2lmdHMtb3JkZXJzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1jYXRlZ29yaWVzLm9wcy50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy1pbnZlbnRvcnkub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy1wcm9kdWN0cy9naWZ0cy1wcm9kdWN0cy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtc3RhZmZzL2dpZnRzLXN0YWZmcy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZ2lmdHMtdXNlcnMvZ2lmdHMtY2FydHMub3BzLnRzIiwid2VicGFjazovLy8uL2dpZnRzLXVzZXJzL2dpZnRzLXVzZXJzLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMudHMiLCJ3ZWJwYWNrOi8vLy4vaHR0cC1yZXF1ZXN0L2h0dHAtcmVxdWVzdC50cyIsIndlYnBhY2s6Ly8vLi9odHRwLXJlcXVlc3Qvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x0YS9idXMtYXJyaXZhbC50cyIsIndlYnBhY2s6Ly8vLi9sdGEvcm91dGVyLnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L2RpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvbHVuY2hmdW4tcGFscy50cyIsIndlYnBhY2s6Ly8vLi9sdW5jaGZ1bi1hbmQtZGljdGlvbmFyeS9sdW5jaGZ1bi1yZWNvcmRzLnRzIiwid2VicGFjazovLy8uL2x1bmNoZnVuLWFuZC1kaWN0aW9uYXJ5L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9tb25nb2RiLW9wcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3RyaW5nLW9wcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZW1haWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm94Zm9yZC1kaWN0aW9uYXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgZ2lmdHNQcm9kdWN0c1JvdXRlciBmcm9tICcuL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLXJvdXRlcic7XHJcbmltcG9ydCBnaWZ0c09yZGVyc1JvdXRlciBmcm9tICcuL2dpZnRzLW9yZGVycy9naWZ0cy1vcmRlcnMtcm91dGVyJztcclxuaW1wb3J0IGdpZnRzVXNlcnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy1yb3V0ZXInO1xyXG5pbXBvcnQgZ2lmdHNTdGFmZnNSb3V0ZXIgZnJvbSAnLi9naWZ0cy1zdGFmZnMvZ2lmdHMtc3RhZmZzLXJvdXRlcic7XHJcblxyXG5jb25zdCBnaWZ0c1JvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gdXJsOiAvYXBpL2dpZnRzXHJcbmdpZnRzUm91dGVyLnVzZSgnL3Byb2R1Y3RzJywgZ2lmdHNQcm9kdWN0c1JvdXRlcik7XHJcbmdpZnRzUm91dGVyLnVzZSgnL29yZGVycycsIGdpZnRzT3JkZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvdXNlcnMnLCBnaWZ0c1VzZXJzUm91dGVyKTtcclxuZ2lmdHNSb3V0ZXIudXNlKCcvc3RhZmZzJywgZ2lmdHNTdGFmZnNSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNSb3V0ZXI7XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IGJ1c1JvdXRlciB9IGZyb20gJy4vbHRhL3JvdXRlcic7XHJcbmltcG9ydCBodHRwUm91dGVyIGZyb20gJy4vaHR0cC1yZXF1ZXN0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgZGljdGlvbmFyeVJvdXRlcixcclxuICBsdW5jaGZ1blJvdXRlclxyXG59IGZyb20gJy4vbHVuY2hmdW4tYW5kLWRpY3Rpb25hcnkvcm91dGVyJztcclxuaW1wb3J0IGdpZnRzUm91dGVyIGZyb20gJy4vYXBpLWdpZnRzLXJvdXRlcic7XHJcbmltcG9ydCBTZW5kRW1haWwgZnJvbSAnLi9lbWFpbC9lbWFpbC5vcHMnO1xyXG5cclxuY29uc3QgYXBpUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGlcclxuYXBpUm91dGVyLnVzZSgnL2RpY3Rpb25hcnknLCBkaWN0aW9uYXJ5Um91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2h0dHAnLCBodHRwUm91dGVyKTtcclxuYXBpUm91dGVyLnVzZSgnL2x1bmNoZnVuJywgbHVuY2hmdW5Sb3V0ZXIpO1xyXG5hcGlSb3V0ZXIudXNlKCcvbHRhL2J1cycsIGJ1c1JvdXRlcik7XHJcbmFwaVJvdXRlci51c2UoJy9naWZ0cycsIGdpZnRzUm91dGVyKTtcclxuXHJcbi8vIG1zZyBmcm9tIHVzZXJzOyBmb3J3YXJkIGl0IHZpYSBub2RlbWFpbGVyLlxyXG5hcGlSb3V0ZXIucG9zdCgnL21zZycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBTZW5kRW1haWwocmVxLmJvZHksIHJlcyk7XHJcbn0pO1xyXG5cclxuLy8gZXJyb3IgaGFuZGxpbmdcclxuYXBpUm91dGVyLmFsbCgnLyonLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIFJlcXVlc3QnKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlSb3V0ZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRyYW5zcG9ydCB9IGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3Qgb3V0bG9va190cmFuc3BvcnRlciA9IGNyZWF0ZVRyYW5zcG9ydCh7XHJcbiAgc2VydmljZTogJ291dGxvb2snLFxyXG4gIGF1dGg6IHtcclxuICAgIHVzZXI6ICd5dWFuY2hhb0BvdXRsb29rLnNnJyxcclxuICAgIHBhc3M6ICdwaW5nbWVIQzgzJ1xyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvdXRsb29rX21haWxPcHRpb25zID0ge1xyXG4gIGZyb206ICd5dWFuY2hhb0BvdXRsb29rLnNnJyxcclxuICB0bzogJ3NlZXNlYTJAZ21haWwuY29tJyxcclxuICBzdWJqZWN0OiBudWxsLFxyXG4gIGh0bWw6IG51bGxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNlbmRFbWFpbChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBjb25zdCBlbWFpbEh0bWw6IHN0cmluZyA9XHJcbiAgICAnPCFET0NUWVBFIGh0bWw+PGhlYWQ+JyArXHJcbiAgICAnPG1ldGEgaHR0cC1lcXVpdj1cImNvbnRlbnQtdHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2h0bWw7Y2hhcnNldD1VVEYtOFwiPjwvaGVhZD4nICtcclxuICAgIGA8Ym9keT48YnI+PGI+TWVzc2FnZSBmcm9tIFVzZXIgJHtib2R5Lm5hbWV9YCArXHJcbiAgICAnIDo8L2I+PGJyPjxicj4nICtcclxuICAgIGA8cD48Yj5FbWFpbDogPC9iPiAke2JvZHkuZW1haWx9YCArXHJcbiAgICAnPC9wPicgK1xyXG4gICAgYDxwPjxiPk1vYmlsZTogPC9iPiAke2JvZHkubW9iaWxlfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgIGA8cD48Yj5NZXNzYWdlOiA8L2I+ICR7Ym9keS5tZXNzYWdlfWAgK1xyXG4gICAgJzwvcD4nICtcclxuICAgICc8L2JvZHk+PC9odG1sPic7XHJcblxyXG4gIG91dGxvb2tfbWFpbE9wdGlvbnMuc3ViamVjdCA9ICdVc2VyIElucXVpcnknO1xyXG4gIG91dGxvb2tfbWFpbE9wdGlvbnMuaHRtbCA9IGVtYWlsSHRtbDtcclxuICBvdXRsb29rX3RyYW5zcG9ydGVyLnNlbmRNYWlsKG91dGxvb2tfbWFpbE9wdGlvbnMpO1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VuZEVtYWlsO1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGdpZnRzT3JkZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyBvcmRlciBsaXN0IHdpdGggb3JkZXJfbm8sIHN0YXR1cyAmIHN0YWZmIGlkIHRvIGZvbGxvdy11cC5cclxuZ2lmdHNPcmRlcnNSb3V0ZXIuZ2V0KCcvYWxsT3JkZXJzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIGlmICghcmVxLnNlc3Npb24gfHwgIXJlcS5zZXNzaW9uLnN0YWZmKSB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAxKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG59KTtcclxuXHJcbi8vIHVwZGF0ZSBvcmRlciBzdGF0dXMgYnkgc3RhZmYgZm9sbG93LXVwLlxyXG5naWZ0c09yZGVyc1JvdXRlci5wdXQoJy91cGRhdGVTdGF0dXMnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm5ld19zdGF0dXMgfHwgIXJlcS5ib2R5LnNubyB8fCAhcmVxLmJvZHkub3JkZXJfbm8pIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRmFpbGVkLiBQbGVhZXMgcmV2aWV3IGlucHV0cy4nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtID0ge1xyXG4gICAgMTogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICAyOiByZXEuYm9keS5zbm8sXHJcbiAgICAzOiBEYXRlLm5vdygpLFxyXG4gICAgNDogcmVxLnNlc3Npb24uc3RhZmYuaWQsXHJcbiAgICA1OiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNjogcmVxLmJvZHkubm90ZSB8fCBudWxsXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gdXBkYXRlIGNvbnRhY3QgaW5mbyBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZUNvbnRhY3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKCFyZXEuc2Vzc2lvbiB8fCAhcmVxLnNlc3Npb24uc3RhZmYuaWQpIHtcclxuICAgIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ09yZGVyX25vIGVtcHR5LicpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAhcmVxLmJvZHkuZW1haWwgfHxcclxuICAgICFyZXEuYm9keS5lbWFpbC5pbmNsdWRlcygnQCcpIHx8XHJcbiAgICAhcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy4nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJy8nKSB8fFxyXG4gICAgcmVxLmJvZHkuZW1haWwuaW5jbHVkZXMoJ1xcXFwnKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGVtYWlsLicpO1xyXG4gIH0gZWxzZSBpZiAoIXJlcS5ib2R5Lm5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBuYW1lLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uYW1lLFxyXG4gICAgMjogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAzOiByZXEuYm9keS5tb2JpbGUgfHwgbnVsbCxcclxuICAgIDQ6IHJlcS5ib2R5LmNvbXBhbnkgfHwgbnVsbCxcclxuICAgIDU6IHJlcS5ib2R5Lm1vYmlsZTIgfHwgbnVsbCxcclxuICAgIDY6IHJlcS5ib2R5LmFkZHIgfHwgbnVsbCxcclxuICAgIDc6IHJlcS5ib2R5Lm9yZGVyX25vXHJcbiAgfTtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbn0pO1xyXG5cclxuLy8gc3RhZmYgdG8gY2hhbmdlIG9yZGVyIGRldGFpbHMgZS5nLiBwcmljZSwgcXR5LCBpbiBjYXNlIHVzZXJzIGNoYW5nZWQgbWluZC5cclxuLy8gc3RhZmYgbWF5IGNoYW5nZSBzdGF0dXMgb2Ygc3BlY2lmaWMgcHJvZHVjdCBvZiB0aGUgb3JkZXIuXHJcbmdpZnRzT3JkZXJzUm91dGVyLnB1dCgnL3VwZGF0ZU9yZGVySXRlbScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBpZiAoIXJlcS5zZXNzaW9uIHx8ICFyZXEuc2Vzc2lvbi5zdGFmZi5pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDQwMSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXJlcS5ib2R5Lm9yZGVyX25vKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ZhaWxlZC4gSW52YWxpZCBPcmRlciBOby4nKTtcclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5zbm8gfHwgcmVxLmJvZHkuc25vID09PSAnJykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdGYWlsZWQuIEludmFsaWQgT3JkZXIgU25vLicpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyYW0gPSB7XHJcbiAgICAxOiByZXEuYm9keS5uZXdfc2FsZV9wcmljZSxcclxuICAgIDI6IHJlcS5ib2R5Lm5ld19xdHksXHJcbiAgICAzOiByZXEuYm9keS5uZXdfc3RhdHVzLFxyXG4gICAgNDogcmVxLmJvZHkub3JkZXJfbm8sXHJcbiAgICA1OiByZXEuYm9keS5zbm9cclxuICB9O1xyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c09yZGVyc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBiTG9naW4gfSBmcm9tICcuLi9naWZ0cy11c2Vycy9naWZ0cy11c2Vycy5vcHMnO1xyXG5pbXBvcnQgeyBDYXJ0SXRlbSB9IGZyb20gJy4uL2dpZnRzLXVzZXJzL3VzZXJzLWludGVyZmFjZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBOZXdPcmRlcihjdXN0b21lciwgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiT3JkZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1vcmRlcnMnKTtcclxuICAgIGxldCBpbnNlcnRSc2x0ID0gZGJPcmRlcnMuaW5zZXJ0T25lKHtcclxuICAgICAgY3JlYXRlZF9vbjogbmV3IERhdGUoKSxcclxuICAgICAgc2hpcHBpbmc6IHtcclxuICAgICAgICBuYW1lOiBjdXN0b21lci5uYW1lLFxyXG4gICAgICAgIG1vYmlsZTogY3VzdG9tZXIubW9iaWxlLFxyXG4gICAgICAgIGFkZHJlc3M6IGN1c3RvbWVyLmFkZHJlc3MsXHJcbiAgICAgICAgbWVzc2FnZTogY3VzdG9tZXIubWVzc2FnZVxyXG4gICAgICB9LFxyXG4gICAgICBwYXltZW50OiB7IG1ldGhvZDogJ3Zpc2EnLCB0cmFuc2FjdGlvbl9pZDogJzIzMTIyMTMzMTJYWFhURCcgfSxcclxuICAgICAgY2FydEl0ZW1zOiBjYXJ0SXRlbXNcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2luc2VydFJzbHQ6ICcsIGluc2VydFJzbHQpO1xyXG4gICAgcmV0dXJuIGluc2VydFJzbHQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgJ2NyZWF0ZSBuZXcgb3JkZXIgZmFpbGVkLic7XHJcbiAgfVxyXG59XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIEdldENhcnQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luJyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbi8vICAgICBsZXQgY2FydCA9IGF3YWl0IGRiXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpXHJcbi8vICAgICAgIC5maW5kKHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9KVxyXG4vLyAgICAgICAudG9BcnJheSgpO1xyXG5cclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXJ0KTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBVcGRhdGVDYXJ0UXR5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuLy8gICBpZiAoIXJlcS5ib2R5LnByb2R1Y3RJZCB8fCAhcmVxLmJvZHkucXVhbnRpdHkpIHtcclxuLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGxldCByc2x0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkLFxyXG4vLyAgICAgICAgICdwcm9kdWN0cy5wcm9kdWN0SWQnOiByZXEuYm9keS5wcm9kdWN0SWRcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgICRzZXQ6IHtcclxuLy8gICAgICAgICAgICdwcm9kdWN0cy4kLnF1YW50aXR5JzogcmVxLmJvZHkucXVhbnRpdHksXHJcbi8vICAgICAgICAgICBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgY29uc29sZS5sb2cocnNsdCk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBEZWxldGVDYXJ0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4vLyAgIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuLy8gICAgIGF3YWl0IGRiXHJcbi8vICAgICAgIC5jb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpXHJcbi8vICAgICAgIC5kZWxldGVPbmUoeyBfaWQ6IHJlcS5zZXNzaW9uLnVzZXJbMF0uX2lkIH0pO1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zZW5kU3RhdHVzKDIwMCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydFByb2R1Y3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpIH0sXHJcbi8vICAgICAgICAgJHB1bGw6IHtcclxuLy8gICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbi8vICAgICAgICAgICAgIHByb2R1Y3RJZDogcmVxLmJvZHkucHJvZHVjdElkLFxyXG4vLyAgICAgICAgICAgICBxdWFudGl0eTogcmVxLmJvZHkucXVhbnRpdHlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBDYXJ0Q2hlY2tvdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbi8vICAgaWYgKCFiTG9naW4ocmVxLnNlc3Npb24pKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4vLyAgICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbi8vICAgICAgIHsgX2lkOiByZXEuc2Vzc2lvbi51c2VyWzBdLl9pZCB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpIH0sXHJcbi8vICAgICAgICAgJHB1bGw6IHtcclxuLy8gICAgICAgICAgIHByb2R1Y3RzOiB7XHJcbi8vICAgICAgICAgICAgIHByb2R1Y3RJZDogcmVxLmJvZHkucHJvZHVjdElkLFxyXG4vLyAgICAgICAgICAgICBxdWFudGl0eTogcmVxLmJvZHkucXVhbnRpdHlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgICk7XHJcbi8vICAgICByZXR1cm4gcmVzLnNlbmRTdGF0dXMoMjAwKTtcclxuLy8gICB9IGNhdGNoIChlKSB7XHJcbi8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgeyBEZWxldGVDYXJ0LCBEZWxldGVDYXJ0UHJvZHVjdCwgR2V0Q2FydCwgVXBkYXRlQ2FydFF0eSB9O1xyXG5leHBvcnQgeyBOZXdPcmRlciB9O1xyXG4iLCJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9iamVjdElELCBEYkNvbGxlY3Rpb24gfSBmcm9tICcuLi9tb25nb2RiLW9wcyc7XHJcblxyXG5sZXQgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG5sZXQgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllcyhyZXM6IFJlc3BvbnNlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBHZXRDYXRlZ29yaWVzQnlMZXZlbCgwKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXRlZ29yaWVzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRTYW1wbGVzT2ZDYXRlZ29yaWVzKHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBnbG9iYWxTYW1wbGVzT2ZDYXRlZ29yaWVzID0gYXdhaXQgR2V0U2FtcGxlcygpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZENhdGVnb3J5KGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYm9keS5uYW1lIHx8ICFib2R5LmNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cy1jYXRhbG9nJyk7XHJcbiAgICBhd2FpdCBkYkNvbGxlY3Rpb24uaW5zZXJ0T25lKHsgbmFtZTogYm9keS5uYW1lLCBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSB9KTtcclxuICAgIGdsb2JhbENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGdsb2JhbFNhbXBsZXNPZkNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVDYXRlZ29yeShxdWVyeTogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFxdWVyeS5faWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzLWNhdGFsb2cnKTtcclxuICAgIGF3YWl0IGRiQ29sbGVjdGlvbi5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChxdWVyeS5faWQpIH0pO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZ2xvYmFsU2FtcGxlc09mQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEBsZXZlbDpcclxuLy8gMCAtIGFsbDsgIDEgLSAxc3QgbGV2ZWw7ICAyIC0gMm5kIGFuZCBhYm92ZSBsZXZlbHNcclxuYXN5bmMgZnVuY3Rpb24gR2V0Q2F0ZWdvcmllc0J5TGV2ZWwobGV2ZWw6IG51bWJlcikge1xyXG4gIGlmIChnbG9iYWxDYXRlZ29yaWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBnbG9iYWxDYXRlZ29yaWVzID0gYXdhaXQgR2V0Q2F0ZWdvcmllc0Zyb21EYigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGxldmVsID09PSAwKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsQ2F0ZWdvcmllcztcclxuICB9XHJcbiAgY29uc3QgcmV0dXJuQ2F0ZWdvcmllcyA9IFtdO1xyXG4gIGdsb2JhbENhdGVnb3JpZXMuZm9yRWFjaChjYXQgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY2F0LmNhdGVnb3J5Lm1hdGNoKG5ldyBSZWdFeHAoJy8nLCAnZycpKSk7XHJcbiAgICBpZiAoY2F0LmNhdGVnb3J5Lm1hdGNoKG5ldyBSZWdFeHAoJy8nLCAnZycpKS5sZW5ndGggPD0gbGV2ZWwpIHtcclxuICAgICAgcmV0dXJuQ2F0ZWdvcmllcy5wdXNoKGNhdCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJldHVybkNhdGVnb3JpZXM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhdGVnb3JpZXNGcm9tRGIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMtY2F0YWxvZycpO1xyXG4gICAgZ2xvYmFsQ2F0ZWdvcmllcyA9IGF3YWl0IGRiQ29sbGVjdGlvblxyXG4gICAgICAuZmluZCgpXHJcbiAgICAgIC5zb3J0KCdjYXRlZ29yeScsIDEpXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gZ2xvYmFsQ2F0ZWdvcmllcztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyB7IGVyck1zZzogJ0dldCBjYXRlZ29yaWVzIGZyb20gZGF0YWJhc2UgZmFpbGVkLicgfTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFNhbXBsZXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGxldCBkb2NzID0gbnVsbDtcclxuICAgIGRvY3MgPSBhd2FpdCBkYkNvbGxlY3Rpb25cclxuICAgICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgeyAkc29ydDogeyBfaWQ6IC0xIH0gfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkZ3JvdXA6IHtcclxuICAgICAgICAgICAgX2lkOiB7IGNhdGVnb3J5OiAnJGNhdGVnb3J5JyB9LFxyXG4gICAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICBfaWQ6ICckX2lkJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnJGNhdGVnb3J5JyxcclxuICAgICAgICAgICAgICAgIGltZzogJyRpbWcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkcHJvamVjdDoge1xyXG4gICAgICAgICAgICBfaWQ6ICckX2lkJyxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAkc2xpY2U6IFtcclxuICAgICAgICAgICAgICAgICckcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgNCAvLyBtYXggbnVtYmVyIG9mIGVsZW1lbnRzIHJldHVybmVkIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXSlcclxuICAgICAgLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiBkb2NzO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIHsgZXJyTXNnOiAnR2V0IHByb2R1Y3RzIGZhaWxlZC4nIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRDYXRlZ29yeSwgRGVsZXRlQ2F0ZWdvcnksIEdldENhdGVnb3JpZXMsIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0SW52ZW50b3J5KHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgY29uc3QgaW52ZW50b3J5ID0gYXdhaXQgZGJJbnZlbnRvcnkuZmluZCgpLnRvQXJyYXkoKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChpbnZlbnRvcnkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHF0eSBieSBwcm9kdWN0OyBUb2RvOiBieSBjb2xvdXIsIHNpemUsIGV0Yy5cclxuYXN5bmMgZnVuY3Rpb24gQWRqdXN0SW52ZW50b3J5KF9pZDogc3RyaW5nLCBxdHk6IG51bWJlciwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghX2lkIHx8ICFxdHkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGNvbnN0IHJzbHQgPSBhd2FpdCBkYkludmVudG9yeS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChfaWQpXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgJHNldDogeyBtb2RpZmllZE9uOiBuZXcgRGF0ZSgpLCBxdHk6IHF0eSB9IH0sXHJcbiAgICAgIHsgdXBzZXJ0OiB0cnVlIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocnNsdCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gUmVzZXJ2ZUludmVudG9yeShpZDogc3RyaW5nLCBjYXJ0SXRlbXM6IGFueSkge1xyXG4gIGlmICghY2FydEl0ZW1zIHx8IGNhcnRJdGVtcy5sZW5ndGggPD0gMCkge1xyXG4gICAgdGhyb3cgJ1RoZSBjYXJ0IGlzIGVtcHR5Lic7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IFtdO1xyXG4gICAgY29uc3QgZmFpbGVkID0gW107XHJcblxyXG4gICAgY29uc3QgZGJJbnZlbnRvcnkgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWludmVudG9yeScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIF9pZDogbmV3IE9iamVjdElEKGNhcnRJdGVtc1tpXS5wcm9kdWN0Ll9pZCksXHJcbiAgICAgICAgICBxdHk6IHsgJGd0ZTogY2FydEl0ZW1zW2ldLnF0eSB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkaW5jOiB7IHF0eTogLWNhcnRJdGVtc1tpXS5xdHkgfSxcclxuICAgICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICAgIHJlc2VydmF0aW9uczoge1xyXG4gICAgICAgICAgICAgIHF0eTogY2FydEl0ZW1zW2ldLnF0eSxcclxuICAgICAgICAgICAgICBfaWQ6IG5ldyBPYmplY3RJRChpZCksXHJcbiAgICAgICAgICAgICAgY3JlYXRlZE9uOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0Lm5Nb2RpZmllZCA9PT0gMCkge1xyXG4gICAgICAgIGZhaWxlZC5wdXNoKGNhcnRJdGVtc1tpXS5wcm9kdWN0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdWNjZXNzLnB1c2goY2FydEl0ZW1zW2ldLnByb2R1Y3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZhaWxlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VjY2Vzcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRiSW52ZW50b3J5LnVwZGF0ZU9uZShcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgX2lkOiBzdWNjZXNzW2ldLl9pZCxcclxuICAgICAgICAgICAgJ3Jlc2VydmF0aW9ucy5faWQnOiBpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJGluYzogeyBxdHk6IHN1Y2Nlc3NbaV0ucXR5IH0sXHJcbiAgICAgICAgICAgICRwdWxsOiB7IHJlc2VydmF0aW9uczogeyBfaWQ6IGlkIH0gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgJ05vdCBlbm91Z2ggc3RvcmFnZS4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdTdWNjZXNzLic7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKF9pZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiSW52ZW50b3J5ID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1pbnZlbnRvcnknKTtcclxuICAgIGxldCB1cGRhdGVSc2x0ID0gYXdhaXQgZGJJbnZlbnRvcnkudXBkYXRlT25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3Jlc2VydmF0aW9ucy5faWQnOiBuZXcgT2JqZWN0SUQoX2lkKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHB1bGw6IHsgcmVzZXJ2YXRpb25zOiB7IF9pZDogbmV3IE9iamVjdElEKF9pZCkgfSB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAodXBkYXRlUnNsdC5yZXN1bHQubk1vZGlmaWVkIDw9IDApIHtcclxuICAgICAgdGhyb3cgJ2RlbGV0ZSByZXNlcnZhdGlvbiBmYWlsZWQuJztcclxuICAgIH1cclxuICAgIHJldHVybiB1cGRhdGVSc2x0O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhyb3cgJ2RlbGV0ZSByZXNlcnZhdGlvbiBmYWlsZWQgd2l0aCBleGNlcHRpb24uJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRqdXN0SW52ZW50b3J5LFxyXG4gIERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uLFxyXG4gIEdldEludmVudG9yeSxcclxuICBSZXNlcnZlSW52ZW50b3J5XHJcbn07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIEFkZENhdGVnb3J5LFxyXG4gIERlbGV0ZUNhdGVnb3J5LFxyXG4gIEdldENhdGVnb3JpZXMsXHJcbiAgR2V0U2FtcGxlc09mQ2F0ZWdvcmllc1xyXG59IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMtY2F0ZWdvcmllcy5vcHMnO1xyXG5pbXBvcnQge1xyXG4gIEFkZFByb2R1Y3QsXHJcbiAgRGVsZXRlUHJvZHVjdCxcclxuICBHZXRQcm9kdWN0LFxyXG4gIEdldFByb2R1Y3RzQnlDYXRlZ29yeSxcclxuICBVcGRhdGVQcm9kdWN0XHJcbn0gZnJvbSAnLi9naWZ0cy1wcm9kdWN0cy5vcHMnO1xyXG5pbXBvcnQgeyBBZGp1c3RJbnZlbnRvcnksIEdldEludmVudG9yeSB9IGZyb20gJy4vZ2lmdHMtcHJvZHVjdHMtaW52ZW50b3J5Lm9wcyc7XHJcblxyXG5jb25zdCBnaWZ0c1Byb2R1Y3RzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLmdldCgnL3ZpZXcvOnByb2R1Y3Rfbm8nLCAocmVxLCByZXMpID0+IHtcclxuICBHZXRQcm9kdWN0KHJlcS5wYXJhbXMsIHJlcyk7XHJcbn0pO1xyXG5cclxuLypcclxuICogaW5xdWlyeTogL2FwaS9naWZ0cy9wcm9kdWN0c1xyXG4gKi9cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9jYXRlZ29yaWVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldENhdGVnb3JpZXMocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucG9zdCgnL2NhdGVnb3J5JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEFkZENhdGVnb3J5KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5kZWxldGUoJy9jYXRlZ29yeScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVDYXRlZ29yeShyZXEucXVlcnksIHJlcyk7XHJcbn0pO1xyXG5cclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5nZXQoJy9zYW1wbGVzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFNhbXBsZXNPZkNhdGVnb3JpZXMocmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5KHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQcm9kdWN0KHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucG9zdCgnL3Byb2R1Y3QnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUHJvZHVjdChyZXEuYm9keSwgcmVzKTtcclxufSk7XHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIucHV0KCcvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVcGRhdGVQcm9kdWN0KHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNQcm9kdWN0c1JvdXRlci5kZWxldGUoJy9wcm9kdWN0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZVByb2R1Y3QocmVxLnF1ZXJ5LCByZXMpO1xyXG59KTtcclxuXHJcbmdpZnRzUHJvZHVjdHNSb3V0ZXIuZ2V0KCcvaW52ZW50b3J5JywgKHJlcSwgcmVzKSA9PiB7XHJcbiAgR2V0SW52ZW50b3J5KHJlcyk7XHJcbn0pO1xyXG5naWZ0c1Byb2R1Y3RzUm91dGVyLnB1dCgnL2ludmVudG9yeScsIChyZXEsIHJlcykgPT4ge1xyXG4gIEFkanVzdEludmVudG9yeShyZXEuYm9keS5faWQsIHJlcS5ib2R5LnF0eSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1Byb2R1Y3RzUm91dGVyO1xyXG4iLCJpbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE1vbmdvRGIsIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQcm9kdWN0KHBhcmFtczogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFwYXJhbXMuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcHJvZHVjdCBuby4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IE1vbmdvRGIoKTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYlxyXG4gICAgICAuY29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKVxyXG4gICAgICAuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElEKHBhcmFtcy5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHByb2R1Y3QpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldFByb2R1Y3RzQnlDYXRlZ29yeShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1wcm9kdWN0cycpO1xyXG4gICAgbGV0IGRvY3MgPSBudWxsO1xyXG4gICAgaWYgKHJlcS5xdWVyeS5jYXRlZ29yeSkge1xyXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoWydeJywgcmVxLnF1ZXJ5LmNhdGVnb3J5LnRyaW0oKV0uam9pbignJyksICdpJyk7XHJcbiAgICAgIGRvY3MgPSBhd2FpdCBkYkNvbGxlY3Rpb24uZmluZCh7IGNhdGVnb3J5OiByZWdleCB9KS50b0FycmF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2NzID0gYXdhaXQgZGJDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZG9jcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkUHJvZHVjdChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkubmFtZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKS5pbnNlcnRPbmUoe1xyXG4gICAgICBuYW1lOiBib2R5Lm5hbWUsXHJcbiAgICAgIGltZzogYm9keS5pbWcsXHJcbiAgICAgIHByaWNlOiBib2R5LnByaWNlLFxyXG4gICAgICBjYXRlZ29yeTogYm9keS5jYXRlZ29yeSxcclxuICAgICAgY29sb3I6IGJvZHkuY29sb3IsXHJcbiAgICAgIHBhY2thZ2luZzogYm9keS5wYWNrYWdpbmcsXHJcbiAgICAgIG1hdGVyaWFsOiBib2R5Lm1hdGVyaWFsLFxyXG4gICAgICBzaXplOiBib2R5LnNpemUsXHJcbiAgICAgIG5vdGU6IGJvZHkubm90ZSxcclxuICAgICAgcmV0YWlsZXI6IGJvZHkucmV0YWlsZXIsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdChib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJvZHkuX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJQcm9kdWN0cyA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtcHJvZHVjdHMnKTtcclxuICAgIGF3YWl0IGRiUHJvZHVjdHMudXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElEKGJvZHkuX2lkKSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgbW9kaWZpZWRPbjogbmV3IERhdGUoKSxcclxuICAgICAgICAgIG5hbWU6IGJvZHkubmFtZSxcclxuICAgICAgICAgIGltZzogYm9keS5pbWcsXHJcbiAgICAgICAgICBwcmljZTogYm9keS5wcmljZSxcclxuICAgICAgICAgIGNhdGVnb3J5OiBib2R5LmNhdGVnb3J5LFxyXG4gICAgICAgICAgY29sb3I6IGJvZHkuY29sb3IsXHJcbiAgICAgICAgICBwYWNrYWdpbmc6IGJvZHkucGFja2FnaW5nLFxyXG4gICAgICAgICAgbWF0ZXJpYWw6IGJvZHkubWF0ZXJpYWwsXHJcbiAgICAgICAgICBzaXplOiBib2R5LnNpemUsXHJcbiAgICAgICAgICBub3RlOiBib2R5Lm5vdGUsXHJcbiAgICAgICAgICByZXRhaWxlcjogYm9keS5yZXRhaWxlclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KHF1ZXJ5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXF1ZXJ5Ll9pZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGlucHV0LicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgTW9uZ29EYigpO1xyXG4gICAgYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oJ2dpZnRzLXByb2R1Y3RzJylcclxuICAgICAgLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHF1ZXJ5Ll9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBBZGRQcm9kdWN0LFxyXG4gIERlbGV0ZVByb2R1Y3QsXHJcbiAgR2V0UHJvZHVjdHNCeUNhdGVnb3J5LFxyXG4gIEdldFByb2R1Y3QsXHJcbiAgVXBkYXRlUHJvZHVjdFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGdpZnRzU3RhZmZzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5naWZ0c1N0YWZmc1JvdXRlci5wb3N0KCcvbG9naW4nLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gTG9naW4ocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIC8vIExvZ291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1N0YWZmc1JvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gUmVnaXN0ZXIocmVxLCByZXMpO1xyXG59KTtcclxuZ2lmdHNTdGFmZnNSb3V0ZXIuZGVsZXRlKCcvZGVsZXRldXNlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAvLyBEZWxldGVVc2VyKHJlcSwgcmVzKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnaWZ0c1N0YWZmc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuLi9zdHJpbmctb3BzJztcclxuXHJcbmltcG9ydCB7IGJMb2dpbiB9IGZyb20gJy4vZ2lmdHMtdXNlcnMub3BzJztcclxuaW1wb3J0IHsgQ2FydEl0ZW0gfSBmcm9tICcuL3VzZXJzLWludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24sXHJcbiAgUmVzZXJ2ZUludmVudG9yeVxyXG59IGZyb20gJy4uL2dpZnRzLXByb2R1Y3RzL2dpZnRzLXByb2R1Y3RzLWludmVudG9yeS5vcHMnO1xyXG5pbXBvcnQgeyBOZXdPcmRlciB9IGZyb20gJy4uL2dpZnRzLW9yZGVycy9naWZ0cy1vcmRlcnMub3BzJztcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEdldENhcnQoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnVXNlciBub3QgbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBkYi5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChjYXJ0KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRUb0NhcnQoc2Vzc2lvbjogYW55LCBib2R5OiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIG5vdCBsb2dpbicpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy1jYXJ0cycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAgeyAkcHVsbDogeyBwcm9kdWN0czogeyBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSB9IH0gfVxyXG4gICAgKTtcclxuICAgIHJzbHQgPSBhd2FpdCBkYi51cGRhdGVPbmUoXHJcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SUQoc2Vzc2lvbi51c2VyLl9pZCkgfSxcclxuICAgICAge1xyXG4gICAgICAgICRwdXNoOiB7XHJcbiAgICAgICAgICBwcm9kdWN0czoge1xyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IG5ldyBPYmplY3RJRChib2R5LnByb2R1Y3QuX2lkKSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGJvZHkucXR5LFxyXG4gICAgICAgICAgICBuYW1lOiBib2R5LnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgcHJpY2U6IGJvZHkucHJvZHVjdC5wcmljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeyB1cHNlcnQ6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBVcGRhdGVDYXJ0UXR5KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYkxvZ2luKHJlcS5zZXNzaW9uKSkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ1VzZXIgbm90IGxvZ2luLicpO1xyXG4gIH1cclxuICBpZiAoIXJlcS5ib2R5LnByb2R1Y3RJZCB8fCAhcmVxLmJvZHkucXR5KSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBjb25zdCByc2x0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignZ2lmdHMtY2FydHMnKS51cGRhdGVPbmUoXHJcbiAgICAgIHtcclxuICAgICAgICBfaWQ6IHJlcS5zZXNzaW9uLnVzZXIuX2lkLFxyXG4gICAgICAgICdwcm9kdWN0cy5wcm9kdWN0SWQnOiByZXEuYm9keS5wcm9kdWN0SWRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICRzZXQ6IHtcclxuICAgICAgICAgICdwcm9kdWN0cy4kLnF0eSc6IHJlcS5ib2R5LnF0eSxcclxuICAgICAgICAgIG1vZGlmaWVkT246IG5ldyBEYXRlKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gRGVsZXRlQ2FydChzZXNzaW9uOiBhbnksIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIG5vdCBsb2dpbi4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IERiQ29sbGVjdGlvbignZ2lmdHMtY2FydHMnKTtcclxuICAgIGRiLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKHNlc3Npb24udXNlci5faWQpIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZUluQ2FydChzZXNzaW9uOiBhbnksIF9pZDogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFiTG9naW4oc2Vzc2lvbikpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBub3QgbG9naW4uJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICBsZXQgcnNsdCA9IGF3YWl0IGRiLnVwZGF0ZU9uZShcclxuICAgICAgeyBfaWQ6IG5ldyBPYmplY3RJRChzZXNzaW9uLnVzZXIuX2lkKSB9LFxyXG4gICAgICB7ICRwdWxsOiB7IHByb2R1Y3RzOiB7IHByb2R1Y3RJZDogbmV3IE9iamVjdElEKF9pZCkgfSB9IH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2FydENoZWNrb3V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChcclxuICAgICFyZXEuYm9keS5jYXJ0IHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lciB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubmFtZSB8fFxyXG4gICAgIXJlcS5ib2R5LmNhcnQuY3VzdG9tZXIubW9iaWxlIHx8XHJcbiAgICAhcmVxLmJvZHkuY2FydC5jdXN0b21lci5hZGRyZXNzXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgY3VzdG9tZXIgaW5mb3JtYXRpb24uJyk7XHJcbiAgfVxyXG4gIGlmIChyZXEuYm9keS5jYXJ0LnRvdGFsIDw9IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTm8gcHJvZHVjdCB0byBjaGVja291dC4nKTtcclxuICB9XHJcblxyXG4gIGxldCBiTWVtYmVyOiBib29sZWFuID0gYkxvZ2luKHJlcS5zZXNzaW9uKTtcclxuXHJcbiAgbGV0IGlkID0gJyc7XHJcbiAgaWYgKGJNZW1iZXIpIHtcclxuICAgIGlkID0gcmVxLnNlc3Npb24udXNlci5faWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlkID0gcmFuZG9tU3RyaW5nKDIwKTtcclxuICB9XHJcbiAgY29uc3QgY2FydEl0ZW1zOiBDYXJ0SXRlbVtdID0gcmVxLmJvZHkuY2FydC5jYXJ0SXRlbXM7XHJcbiAgY29uc3QgY3VzdG9tZXIgPSByZXEuYm9keS5jYXJ0LmN1c3RvbWVyO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gcmVzZXJ2ZSBpbnZlbnRvcnksIGl0IHRocm93IGVycm9yIGluIGNhc2Ugb2YgZmFpbHVyZS5cclxuICAgIGF3YWl0IFJlc2VydmVJbnZlbnRvcnkoaWQsIGNhcnRJdGVtcyk7XHJcblxyXG4gICAgbGV0IGluc2VydFJzbHQgPSBhd2FpdCBOZXdPcmRlcihjdXN0b21lciwgY2FydEl0ZW1zKTtcclxuICAgIGlmIChpbnNlcnRSc2x0LnJlc3VsdC5uIDw9IDApIHtcclxuICAgICAgYXdhaXQgRGVsZXRlSW52ZW50b3J5UmVzZXJ2YXRpb24oaWQpO1xyXG4gICAgICB0aHJvdyAnQ3JlYXRlIG5ldyBvcmRlciBmYWlsZWQuJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdXBkYXRlUnNsdCA9IGF3YWl0IERlbGV0ZUludmVudG9yeVJlc2VydmF0aW9uKGlkKTtcclxuICAgIGNvbnNvbGUubG9nKHVwZGF0ZVJzbHQpO1xyXG5cclxuICAgIGlmIChiTWVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGRiQ2FydHMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLWNhcnRzJyk7XHJcbiAgICAgIGxldCBkZWxldGVSc2x0ID0gYXdhaXQgZGJDYXJ0cy5kZWxldGVPbmUoeyBfaWQ6IG5ldyBPYmplY3RJRChpZCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgb3JkZXJJZDogaWQgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7XHJcbiAgTG9naW4sXHJcbiAgTG9nb3V0LFxyXG4gIFJlZ2lzdGVyLFxyXG4gIERlbGV0ZVVzZXIsXHJcbiAgVXNlckluZm9cclxufSBmcm9tICcuL2dpZnRzLXVzZXJzLm9wcyc7XHJcbmltcG9ydCB7XHJcbiAgQWRkVG9DYXJ0LFxyXG4gIENhcnRDaGVja291dCxcclxuICBEZWxldGVDYXJ0LFxyXG4gIERlbGV0ZUluQ2FydCxcclxuICBHZXRDYXJ0LFxyXG4gIFVwZGF0ZUNhcnRRdHlcclxufSBmcm9tICcuL2dpZnRzLWNhcnRzLm9wcyc7XHJcblxyXG5jb25zdCBnaWZ0c1VzZXJzUm91dGVyID0gUm91dGVyKCk7XHJcblxyXG4vLyB1cmw6IC9hcGkvZ2lmdHMvdXNlcnMvXHJcbmdpZnRzVXNlcnNSb3V0ZXIucG9zdCgnL2xvZ2luJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ2luKHJlcSwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvaW5mbycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBVc2VySW5mbyhyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIExvZ291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBSZWdpc3RlcihyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2RlbGV0ZXVzZXInLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlVXNlcihyZXEuc2Vzc2lvbiwgcmVzKTtcclxufSk7XHJcbmdpZnRzVXNlcnNSb3V0ZXIuZ2V0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRDYXJ0KHJlcS5zZXNzaW9uLCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5wb3N0KCcvY2FydCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBBZGRUb0NhcnQocmVxLnNlc3Npb24sIHJlcS5ib2R5LCByZXMpO1xyXG59KTtcclxuZ2lmdHNVc2Vyc1JvdXRlci5kZWxldGUoJy9jYXJ0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIERlbGV0ZUNhcnQocmVxLnNlc3Npb24sIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnB1dCgnL2NhcnQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgVXBkYXRlQ2FydFF0eShyZXEsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLmRlbGV0ZSgnL2NhcnQvcHJvZHVjdCcsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBEZWxldGVJbkNhcnQocmVxLnNlc3Npb24sIHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5naWZ0c1VzZXJzUm91dGVyLnBvc3QoJy9jYXJ0L2NoZWNrb3V0JywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIENhcnRDaGVja291dChyZXEsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2lmdHNVc2Vyc1JvdXRlcjtcclxuIiwiaW1wb3J0IHsgRGJDb2xsZWN0aW9uLCBNb25nb0RiLCBPYmplY3RJRCB9IGZyb20gJy4uL21vbmdvZGItb3BzJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBlbmNyeXB0IH0gZnJvbSAnLi4vc3RyaW5nLW9wcyc7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gIGRiLmNyZWF0ZUluZGV4KCd1aWQnLCB7IHVuaXF1ZTogdHJ1ZSB9KTtcclxufSkoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIExvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmIChyZXEuc2Vzc2lvbiAmJiByZXEuc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyB1aWQ6IHJlcS5zZXNzaW9uLnVzZXIudWlkIH0pO1xyXG4gIH1cclxuICB0cnkge1xyXG4gICAgbGV0IGRiVXNlcnMgPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2dpZnRzLXVzZXJzJyk7XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gYXdhaXQgZGJVc2Vycy5maW5kT25lKHtcclxuICAgICAgdWlkOiByZXEuYm9keS51aWQsXHJcbiAgICAgIHB3ZDogZW5jcnlwdChyZXEuYm9keS5wd2QpXHJcbiAgICB9KTtcclxuICAgIGlmICghcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgdWlkOiByZXEuc2Vzc2lvbi51c2VyLnVpZCB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ3NlcnZlciBlcnJvci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ291dChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLnNlc3Npb24gJiYgcmVxLnNlc3Npb24udXNlcikge1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHJlc3VsdDogJ29rJyB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gUmVnaXN0ZXIocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKFxyXG4gICAgIXJlcS5ib2R5LnVpZCB8fFxyXG4gICAgIXJlcS5ib2R5LnB3ZCB8fFxyXG4gICAgIXJlcS5ib2R5LmVtYWlsIHx8XHJcbiAgICAhcmVxLmJvZHkuZmlyc3ROYW1lIHx8XHJcbiAgICAhcmVxLmJvZHkubGFzdE5hbWVcclxuICApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBpbnB1dC4nKTtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkYlVzZXJzID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpO1xyXG4gICAgbGV0IHJzbHQgPSBhd2FpdCBkYlVzZXJzLmluc2VydE9uZSh7XHJcbiAgICAgIHVpZDogcmVxLmJvZHkudWlkLFxyXG4gICAgICBwd2Q6IGVuY3J5cHQocmVxLmJvZHkucHdkKSxcclxuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgICBmaXJzdE5hbWU6IHJlcS5ib2R5LmZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWU6IHJlcS5ib2R5Lmxhc3ROYW1lLFxyXG4gICAgICBjcmVhdGVkT246IG5ldyBEYXRlKClcclxuICAgIH0pO1xyXG4gICAgaWYgKHJzbHQuaW5zZXJ0ZWRDb3VudCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocnNsdC5vcHNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdSZWdpc3RlciBmYWlsZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ1JlZ2lzdGVyIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVVzZXIoc2Vzc2lvbjogYW55LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnTG9naW4gaXMgcmVxdWlyZWQuJyk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBsZXQgZGIgPSBhd2FpdCBNb25nb0RiKCk7XHJcbiAgICBkYi5jb2xsZWN0aW9uKCdnaWZ0cy11c2VycycpLmRlbGV0ZU9uZSh7XHJcbiAgICAgIF9pZDogc2Vzc2lvbi51c2VyLl9pZFxyXG4gICAgfSk7XHJcbiAgICBzZXNzaW9uLnVzZXIgPSBudWxsO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnVXNlciBkZWxldGVkLicgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVXNlckluZm8oc2Vzc2lvbjogYW55LCByZXMpIHtcclxuICBpZiAoIWJMb2dpbihzZXNzaW9uKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdVc2VyIE5vdCBsb2dpbi4nKTtcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcclxuICAgIF9pZDogc2Vzc2lvbi51c2VyLl9pZCxcclxuICAgIHVpZDogc2Vzc2lvbi51c2VyLnVpZCxcclxuICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYkxvZ2luKHNlc3Npb246IGFueSkge1xyXG4gIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBiTG9naW4sIExvZ2luLCBMb2dvdXQsIFJlZ2lzdGVyLCBEZWxldGVVc2VyLCBVc2VySW5mbyB9O1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5cclxuZnVuY3Rpb24gRGVsZXRlKGJvZHk6IGFueSwgcmVzOiBSZXNwb25zZSkge1xyXG4gIGxldCB1cmwgPSBib2R5LnVybDtcclxuICBpZiAoYm9keS5xdWVyeXMgJiYgYm9keS5xdWVyeXMubGVuZ3RoID4gMCkge1xyXG4gICAgdXJsICs9ICc/JztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keS5xdWVyeXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdXJsICs9IGJvZHkucXVlcnlbaV07XHJcbiAgICAgIHVybCArPSAnPSc7XHJcbiAgICAgIHVybCArPSBib2R5LnF1ZXJ5VmFsdWVbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIEF4aW9zLmRlbGV0ZSh1cmwpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGUpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gUG9zdChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVxKTtcclxuICBsZXQgdXJsOiBzdHJpbmcgPSByZXEuYm9keS51cmw7XHJcbiAgaWYgKHJlcS5ib2R5LmhlYWRlcnMpIHtcclxuICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IHJlcS5ib2R5LmhlYWRlcnNcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmIChyZXEuYm9keS5wYXJhbWV0ZXJzKSB7XHJcbiAgICB1cmwgKz0gJz8nO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXEuYm9keS5wYXJhbWV0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHVybCArPSByZXEuYm9keS5wYXJhbWV0ZXJzW2ldICsgJz0nICsgcmVxLmJvZHkucGFyYW1ldGVyVmFsdWVbaV0gKyAnJic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEF4aW9zLmdldCh1cmwsIGhlYWRlcnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gUHV0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIEF4aW9zLnB1dChyZXEuYm9keS51cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmVzLnNlbmQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gR2V0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xyXG4gIEF4aW9zLnBvc3QocmVxLmJvZHkudXJsKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBEZWxldGUsIEdldCwgUG9zdCwgUHV0IH07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEZWxldGUsIEdldCwgUG9zdCwgUHV0IH0gZnJvbSAnLi9odHRwLXJlcXVlc3QnO1xyXG5cclxuY29uc3QgaHR0cFJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuaHR0cFJvdXRlci5wb3N0KCcnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5ib2R5LnR5cGUgPT09ICdERUxFVEUnKSB7XHJcbiAgICBEZWxldGUocmVxLmJvZHksIHJlcyk7XHJcbiAgfSBlbHNlIGlmIChyZXEuYm9keS50eXBlID09PSAnR0VUJykge1xyXG4gICAgR2V0KHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ1BPU1QnKSB7XHJcbiAgICBQb3N0KHJlcS5ib2R5LCByZXMpO1xyXG4gIH0gZWxzZSBpZiAocmVxLmJvZHkudHlwZSA9PT0gJ1BVVCcpIHtcclxuICAgIFB1dChyZXEuYm9keSwgcmVzKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaHR0cFJvdXRlcjtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IGx0YUFjY291bnRLZXkgPSAnNnNWemY5elhSYUNna0pVZGp4SXcyQT09JztcclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGhlYWRlcnM6IHtcclxuICAgIEFjY291bnRLZXk6IGx0YUFjY291bnRLZXlcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBidXNBcnJpdmFsVXJsID1cclxuICAnaHR0cDovL2RhdGFtYWxsMi5teXRyYW5zcG9ydC5zZy9sdGFvZGF0YXNlcnZpY2UvQnVzQXJyaXZhbHYyJztcclxuXHJcbmZ1bmN0aW9uIGdldEJ1c0Fycml2YWwoYnVzU3RvcENvZGU6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghYnVzU3RvcENvZGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBCdXNTdG9wQ29kZS4nKTtcclxuICB9XHJcblxyXG4gIGxldCB1cmwgPSBgJHtidXNBcnJpdmFsVXJsfT9CdXNTdG9wQ29kZT0ke2J1c1N0b3BDb2RlfWA7XHJcbiAgQXhpb3MuZ2V0KHVybCwgY29uZmlnKVxyXG4gICAgLnRoZW4ocmVzcG9zZSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3Bvc2UuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZChlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRCdXNBcnJpdmFsIH07XHJcbiIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBnZXRCdXNBcnJpdmFsIH0gZnJvbSAnLi9idXMtYXJyaXZhbCc7XHJcblxyXG4vLyB1cmw6IC9hcGkvbHRhL2J1c1xyXG5jb25zdCBidXNSb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbmJ1c1JvdXRlci5nZXQoJy9idXNBcnJpdmFsLzpidXNTdG9wQ29kZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBnZXRCdXNBcnJpdmFsKHJlcS5wYXJhbXMuYnVzU3RvcENvZGUsIHJlcyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgYnVzUm91dGVyIH07XHJcbiIsImltcG9ydCAqIGFzIE94Zm9yZERpY3Rpb25hcnkgZnJvbSAnb3hmb3JkLWRpY3Rpb25hcnknOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBESUNUID0gbmV3IE94Zm9yZERpY3Rpb25hcnkoe1xyXG4gIGFwcF9pZDogJzAzMTRlOWUyJyxcclxuICBhcHBfa2V5OiAnNWE2YzI1ODk0NzRhMmY4M2NjZDY5ZjM5N2JmZWM3YTInLFxyXG4gIHNvdXJjZV9sYW5nOiAnZW4nXHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHdvcmQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghd29yZCB8fCAhd29yZC50cmltKCkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCB3b3JkLicpO1xyXG4gIH1cclxuXHJcbiAgRElDVC5kZWZpbml0aW9ucyh3b3JkLnRyaW0oKSkudGhlbihcclxuICAgIGRlZmluaXRpb25zID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRlZmluaXRpb25zKTtcclxuICAgIH0sXHJcbiAgICBlcnIgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja094Zm9yZERpY3Rpb25hcnk7XHJcbiIsImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGJDb2xsZWN0aW9uIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxubGV0IGx1bmNoUGFscyA9IFtdO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFBhbHMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBhbHNDb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1wYWxzJyk7XHJcbiAgICBsdW5jaFBhbHMgPSBhd2FpdCBwYWxzQ29sbGVjdGlvblxyXG4gICAgICAuZmluZCgpXHJcbiAgICAgIC5zb3J0KHsgbmFtZTogMSB9KVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBHZXRQYWxzKHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAobHVuY2hQYWxzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChsdW5jaFBhbHMpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQobHVuY2hQYWxzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRQYWwobmFtZTogc3RyaW5nLCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgaWYgKCFuYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgaW5wdXQuJyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFsc0NvbGxlY3Rpb24gPSBhd2FpdCBEYkNvbGxlY3Rpb24oJ2x1bmNoZnVuLXBhbHMnKTtcclxuICAgIHBhbHNDb2xsZWN0aW9uLmluc2VydE9uZSh7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICByZWZyZXNoUGFscygpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgcmVzdWx0OiAnb2snIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVBhbChuYW1lOiBzdHJpbmcsIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIW5hbWUpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBuYW1lIHRvIGRlbGV0ZS4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwYWxzQ29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcGFscycpO1xyXG4gICAgcGFsc0NvbGxlY3Rpb24uZGVsZXRlT25lKHsgbmFtZTogbmFtZSB9KTtcclxuICAgIHJlZnJlc2hQYWxzKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UGFsc0F0dGVuZGFuY2UocmVzOiBSZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb25zdCBhdHRlbmRhbmNlcyA9IGF3YWl0IGNvbGxlY3Rpb25cclxuICAgICAgLmFnZ3JlZ2F0ZShbXHJcbiAgICAgICAgeyAkdW53aW5kOiAnJGF0dGVuZGVlcycgfSxcclxuICAgICAgICB7ICRncm91cDogeyBfaWQ6ICckYXR0ZW5kZWVzJywgYXR0ZW5kYW5jZTogeyAkc3VtOiAxIH0gfSB9LFxyXG4gICAgICAgIHsgJHByb2plY3Q6IHsgbmFtZTogJyRfaWQnLCBhdHRlbmRhbmNlOiAnJGF0dGVuZGFuY2UnIH0gfVxyXG4gICAgICBdKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGF0dGVuZGFuY2VzKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBZGRQYWwsIERlbGV0ZVBhbCwgR2V0UGFscywgR2V0UGFsc0F0dGVuZGFuY2UgfTtcclxuIiwiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEYkNvbGxlY3Rpb24sIE9iamVjdElEIH0gZnJvbSAnLi4vbW9uZ29kYi1vcHMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gR2V0UmVjb3JkcyhyZXM6IFJlc3BvbnNlLCBxdHk/OiBudW1iZXIpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGF3YWl0IERiQ29sbGVjdGlvbignbHVuY2hmdW4tcmVjb3JkcycpO1xyXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGNvbGxlY3Rpb25cclxuICAgICAgLmZpbmQoe30pXHJcbiAgICAgIC5zb3J0KHsgY3JlYXRlZE9uOiAtMSB9KVxyXG4gICAgICAubGltaXQocXR5IHwgMzApXHJcbiAgICAgIC50b0FycmF5KCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVjb3Jkcyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkUmVjb3JkKHBheWVyOiBzdHJpbmcsIGF0dGVuZGVlczogc3RyaW5nW10sIHJlczogUmVzcG9uc2UpIHtcclxuICBpZiAoIXBheWVyIHx8ICFhdHRlbmRlZXMgfHwgYXR0ZW5kZWVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcGFyYW1zIHRvIGFkZC4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZSh7XHJcbiAgICAgIHBheWVyOiBwYXllcixcclxuICAgICAgYXR0ZW5kZWVzOiBhdHRlbmRlZXMsXHJcbiAgICAgIGNyZWF0ZWRPbjogbmV3IERhdGUoKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0Vycm9yIGF0IHNlcnZlci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERlbGV0ZVJlY29yZChfaWQ6IHN0cmluZywgcmVzOiBSZXNwb25zZSkge1xyXG4gIGlmICghX2lkKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgcmVjb3JkIHRvIGRlbGV0ZS4nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gYXdhaXQgRGJDb2xsZWN0aW9uKCdsdW5jaGZ1bi1yZWNvcmRzJyk7XHJcbiAgICBjb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElEKF9pZCkgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyByZXN1bHQ6ICdvaycgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWRkUmVjb3JkLCBEZWxldGVSZWNvcmQsIEdldFJlY29yZHMgfTtcclxuIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCBDaGVja094Zm9yZERpY3Rpb25hcnkgZnJvbSAnLi9kaWN0aW9uYXJ5JztcclxuaW1wb3J0IHsgQWRkUGFsLCBEZWxldGVQYWwsIEdldFBhbHMsIEdldFBhbHNBdHRlbmRhbmNlIH0gZnJvbSAnLi9sdW5jaGZ1bi1wYWxzJztcclxuaW1wb3J0IHsgQWRkUmVjb3JkLCBEZWxldGVSZWNvcmQsIEdldFJlY29yZHMgfSBmcm9tICcuL2x1bmNoZnVuLXJlY29yZHMnO1xyXG5cclxuY29uc3QgZGljdGlvbmFyeVJvdXRlciA9IFJvdXRlcigpO1xyXG5jb25zdCBsdW5jaGZ1blJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuZGljdGlvbmFyeVJvdXRlci5nZXQoJy9veGZvcmQvOndvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQ2hlY2tPeGZvcmREaWN0aW9uYXJ5KHJlcS5wYXJhbXMud29yZCwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9wYWxzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFBhbHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUGFsKHJlcS5ib2R5Lm5hbWUsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9wYWwnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUGFsKHJlcS5xdWVyeSwgcmVzKTtcclxufSk7XHJcblxyXG5sdW5jaGZ1blJvdXRlci5nZXQoJy9yZWNvcmRzJywgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIEdldFJlY29yZHMocmVzKTtcclxufSk7XHJcbmx1bmNoZnVuUm91dGVyLnBvc3QoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgQWRkUmVjb3JkKHJlcS5ib2R5LnBheWVyLCByZXEuYm9keS5hdHRlbmRlZXMsIHJlcyk7XHJcbn0pO1xyXG5sdW5jaGZ1blJvdXRlci5kZWxldGUoJy9yZWNvcmQnLCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgRGVsZXRlUmVjb3JkKHJlcS5xdWVyeS5faWQsIHJlcyk7XHJcbn0pO1xyXG5cclxubHVuY2hmdW5Sb3V0ZXIuZ2V0KCcvc3RhdHMvYXR0ZW5kYW5jZScsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBHZXRQYWxzQXR0ZW5kYW5jZShyZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGRpY3Rpb25hcnlSb3V0ZXIsIGx1bmNoZnVuUm91dGVyIH07XHJcbiIsImltcG9ydCB7IE1vbmdvQ2xpZW50LCBEYiwgT2JqZWN0SUQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IE1PTkdPX1VSTCA9XHJcbiAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46YWRtaW5AY2x1c3RlcjAtZHh3a2cubW9uZ29kYi5uZXQvaW5zZz9yZXRyeVdyaXRlcz10cnVlJztcclxuXHJcbmxldCBkYXRhYmFzZTogRGI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0RGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KE1PTkdPX1VSTCwge1xyXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChkYXRhYmFzZSA9IGNsaWVudC5kYignaW5zZycpKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aHJvdyAnRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQuJztcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIE1vbmdvRGIoKTogUHJvbWlzZTxEYj4ge1xyXG4gIGlmIChkYXRhYmFzZSkge1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIERiQ29sbGVjdGlvbihuYW1lOiBzdHJpbmcpIHtcclxuICBpZiAoZGF0YWJhc2UpIHtcclxuICAgIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEluaXREYigpO1xyXG4gICAgcmV0dXJuIGRhdGFiYXNlLmNvbGxlY3Rpb24obmFtZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IERiQ29sbGVjdGlvbiwgTW9uZ29EYiwgT2JqZWN0SUQgfTtcclxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgKiBhcyBodHRwcyBmcm9tICdodHRwcyc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCBhcGlSb3V0ZXIgZnJvbSAnLi9hcGktcm91dGVyJztcclxuXHJcbi8vIEV4cHJlc3Mgc2VydmVyXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgSE9TVCA9ICdsb2NhbGhvc3QnO1xyXG5jb25zdCBQT1JUID0gODA7XHJcblxyXG5hcHAudXNlKGNvcnMoKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcblxyXG5hcHAudXNlKFxyXG4gIHNlc3Npb24oe1xyXG4gICAgc2VjcmV0OiAnaW5zZy15Yy1seS0xNycsXHJcbiAgICByZXNhdmU6IGZhbHNlLFxyXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWUsXHJcbiAgICBjb29raWU6IHtcclxuICAgICAgbWF4QWdlOiAxMDAwICogNjAgKiA2MCAqIDI0IC8vIG1pbGxzZWNvbmRzIG9mIDI0aHJzICB9XHJcbiAgICB9XHJcbiAgfSlcclxuKTtcclxuXHJcbmFwcC51c2UoJy9hcGknLCBhcGlSb3V0ZXIpO1xyXG5cclxuYXBwLmdldCgnLycsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmRGaWxlKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuXHJcbi8vIFNlcnZlciBzdGF0aWMgZmlsZXMgZnJvbSAvY2xpZW50XHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoam9pbihfX2Rpcm5hbWUsICcvY2xpZW50JykpKTtcclxuXHJcbi8vIGVycm9yIGhhbmRsaW5nIC0gMVxyXG5hcHAuYWxsKCcvKicsIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmRGaWxlKGpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuLy8gZXJyb3IgaGFuZGxpbmcgLSAyXHJcbmFwcC51c2UoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdJc3N1ZSBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5IGxhdGVyIScpO1xyXG59KTtcclxuXHJcbi8vIFN0YXJ0IHVwIHRoZSBOb2RlIHNlcnZlclxyXG4vLyBodHRwXHJcbmFwcC5zZXQoJ2RvbWFpbicsIEhPU1QpO1xyXG5hcHAuc2V0KCdwb3J0JywgUE9SVCk7XHJcbmFwcC5saXN0ZW4oYXBwLmdldCgncG9ydCcpLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYE5vZGUgc2VydmVyIGxpc3RlbmluZyBvbiBodHRwOi8vJHtIT1NUfToke1BPUlR9YCk7XHJcbn0pO1xyXG5cclxuLy8gaHR0cHMgZGVmYXVsdCBwb3J0XHJcbi8vIGNvbnN0IGh0dHBzT3B0aW9ucyA9IHtcclxuLy8gICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcva2V5cy9jZXJ0aWZpY2F0ZS5wZW0nKSksXHJcbi8vICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsICcva2V5cy9wcml2YXRla2V5LnBlbScpKVxyXG4vLyB9O1xyXG4vLyBjb25zdCBzZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIoaHR0cHNPcHRpb25zLCBhcHApO1xyXG4vLyBzZXJ2ZXIubGlzdGVuKDQ0Myk7XHJcbi8vIGV4cG9ydCB7IHNlcnZlciB9O1xyXG4iLCJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuXHJcbmNvbnN0IGFsZ29yaXRobSA9ICdhZXMtMTkyLWNiYyc7XHJcbmNvbnN0IHBhc3N3b3JkID0gJ2luU0d5YzgzJztcclxuY29uc3Qga2V5ID0gY3J5cHRvLnNjcnlwdFN5bmMocGFzc3dvcmQsICdzYWx0JywgMjQpO1xyXG5jb25zdCBpdiA9IEJ1ZmZlci5hbGxvYygxNiwgMCk7XHJcblxyXG5mdW5jdGlvbiBlbmNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyaXYoYWxnb3JpdGhtLCBrZXksIGl2KTtcclxuICAgIGxldCBjcnlwdGVkOiBzdHJpbmcgPSBjaXBoZXIudXBkYXRlKHRleHQsICd1dGY4JywgJ2hleCcpO1xyXG4gICAgY3J5cHRlZCArPSBjaXBoZXIuZmluYWwoJ2hleCcpO1xyXG4gICAgcmV0dXJuIGNyeXB0ZWQ7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2VuY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KGFsZ29yaXRobSwga2V5LCBpdik7XHJcbiAgICBsZXQgZGVjOiBzdHJpbmcgPSBkZWNpcGhlci51cGRhdGUodGV4dCwgJ2hleCcsICd1dGY4Jyk7XHJcbiAgICBkZWMgKz0gZGVjaXBoZXIuZmluYWwoJ3V0ZjgnKTtcclxuICAgIHJldHVybiBkZWM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2RlY3J5cHQgPT4gJywgZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlxyXG4gKiBzdHJpbmcgb3BlcmF0aW9uXHJcbiAqL1xyXG5lbnVtIFJhbmRvbVR5cGVzIHtcclxuICBDYXBpdGFsLFxyXG4gIE51bWJlcixcclxuICBTdHJpbmdcclxufVxyXG5cclxuLy8gcmV0dXJuIHN0cmluZyBvZiByYW5kb20gbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5OdW1iZXIsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNhcGl0YWwgY2hhcmFjdGVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbUNhcGl0YWxzKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICByZXR1cm4gcmFuZG9tKFJhbmRvbVR5cGVzLkNhcGl0YWwsIGxlbmd0aCk7XHJcbn1cclxuXHJcbi8vIHJldHVybiBzdHJpbmcgb2YgcmFuZG9tIGNoYXJhY3RlcnMgb3IgbnVtYmVycyB3aXRoIHNwZWNpZmllZCBsZW5ndGguXHJcbmZ1bmN0aW9uIHJhbmRvbVN0cmluZyhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJhbmRvbShSYW5kb21UeXBlcy5TdHJpbmcsIGxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbSh0eXBlOiBSYW5kb21UeXBlcywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGxldCByU3RyaW5nOiBzdHJpbmcgPSAnJztcclxuICBpZiAodHlwZSA9PT0gUmFuZG9tVHlwZXMuU3RyaW5nKSB7XHJcbiAgICByU3RyaW5nID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLk51bWJlcikge1xyXG4gICAgclN0cmluZyA9ICcwMTIzNDU2Nzg5JztcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFJhbmRvbVR5cGVzLkNhcGl0YWwpIHtcclxuICAgIHJTdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzdWx0OiBzdHJpbmcgPSAnJztcclxuICBmb3IgKGxldCBpID0gbGVuZ3RoOyBpID4gMDsgLS1pKSB7XHJcbiAgICByZXN1bHQgKz0gclN0cmluZ1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByU3RyaW5nLmxlbmd0aCldO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGVuY3J5cHQsXHJcbiAgZGVjcnlwdCxcclxuICByYW5kb21DYXBpdGFscyxcclxuICByYW5kb21OdW1iZXIsXHJcbiAgcmFuZG9tU3RyaW5nLFxyXG4gIFJhbmRvbVR5cGVzXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJveGZvcmQtZGljdGlvbmFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=