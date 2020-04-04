"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var axios_1 = require("axios");
var cheerio = require("cheerio");
var cron_1 = require("cron");
var db_ops_1 = require("./db-ops");
function initDb() {
    try {
        db_ops_1.dbRW().run("create table if not exists urls(url TEXT UNIQUE PRIMARY KEY,\n             domain TEXT, scanDateStr TEXT, scanDate INTEGER);", function (err) {
            if (err) {
                db_ops_1.dbClose();
                console.error(err);
            }
        });
        db_ops_1.dbRW().run("create table if not exists words(word TEXT UNIQUE PRIMARY KEY, frequence INTEGER);", function (err) {
            if (err) {
                db_ops_1.dbClose();
                console.error(err);
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}
initDb();
function scrapeUrls(url, cheerioStatic) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!url || !cheerioStatic) {
                return [2, []];
            }
            if (url[url.length - 1] === "/") {
                url = url.substring(0, length - 1);
            }
            return [2, new Promise(function (resolve, reject) {
                    var urls = [];
                    cheerioStatic("html *").each(function () {
                        try {
                            if (this.type != "tag") {
                                return;
                            }
                            var obj = cheerioStatic(this);
                            var href = obj.attr("href");
                            href = (href || "").trim();
                            if (!href ||
                                href == "/" ||
                                href === "//" ||
                                href.includes("http:") ||
                                href.includes("#") ||
                                href.includes(".css") ||
                                href.includes(".pdf") ||
                                href.includes("resources") ||
                                href.includes("?")) {
                                return;
                            }
                            if (href[0] == "/" && href[1] == "/") {
                                href = "https:" + href;
                            }
                            if (href[href.length - 1] === "/") {
                                href = href.substring(0, href.length - 1);
                            }
                            if (!href.includes("//")) {
                                href = url + "/" + href;
                            }
                            if (!urls.includes(href)) {
                                urls.push(href);
                            }
                        }
                        catch (err) {
                            reject();
                        }
                    });
                    resolve(urls);
                })];
        });
    });
}
function scrapeWords(url, cheerioStatic) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!url || !cheerioStatic) {
                return [2, []];
            }
            return [2, new Promise(function (resolve, reject) {
                    var wordsObj = [];
                    cheerioStatic("body *").each(function () {
                        if (this.type != "tag")
                            return;
                        var obj = cheerioStatic(this);
                        if (!obj || obj.html().indexOf("<") != -1)
                            return;
                        var text = obj.text();
                        if (!text)
                            return;
                        var words = text.split(" ");
                        words.forEach(function (word) {
                            word = word.trim();
                            if (!word || word.length <= 2 || !word.match(/^[a-zA-Z]+$/))
                                return;
                            word = word.toLocaleLowerCase();
                            for (var _i = 0, wordsObj_1 = wordsObj; _i < wordsObj_1.length; _i++) {
                                var item = wordsObj_1[_i];
                                if (item.word === word) {
                                    return item.frequence++;
                                }
                            }
                            wordsObj.push({ word: word, frequence: 1 });
                        });
                    });
                    resolve(wordsObj);
                })];
        });
    });
}
function scrape(url) {
    return __awaiter(this, void 0, void 0, function () {
        var dateStr, date, sql_1, config, urlResponse, cheerioLoad, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!url)
                        return [2, false];
                    console.log("scraping: ", url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    url = url.trim();
                    if (!url.includes("//")) {
                        url = "https://" + url;
                    }
                    dateStr = new Date().toLocaleString();
                    date = Date.now();
                    sql_1 = "update urls set scanDateStr=\"" + dateStr + "\", scanDate=" + date + "\n                  where url=\"" + url + "\" and scanDate is null;";
                    db_ops_1.dbRW().run(sql_1, function (err) {
                        if (err) {
                            console.error(new Date(), err);
                            console.error(new Date(), sql_1);
                            db_ops_1.dbClose();
                        }
                    });
                    config = {
                        headers: {
                            "Content-Length": 0,
                            "Content-Type": "text/plain"
                        }
                    };
                    return [4, axios_1.default(url, config)];
                case 2:
                    urlResponse = _a.sent();
                    cheerioLoad = cheerio.load(urlResponse.data);
                    return [4, scrapeUrls(url, cheerioLoad).then(function (urls) {
                            urls.forEach(function (element) {
                                var urlSplits = element.split("/");
                                var domain = "";
                                for (var _i = 0, urlSplits_1 = urlSplits; _i < urlSplits_1.length; _i++) {
                                    var split = urlSplits_1[_i];
                                    if (split.includes(".")) {
                                        domain = split;
                                        break;
                                    }
                                }
                                var sql = "insert or ignore into urls(url,domain) values(\"" + element + "\",\"" + domain + "\");";
                                db_ops_1.dbRW().run(sql, function (err) {
                                    if (err) {
                                        console.error(new Date(), sql, err);
                                        db_ops_1.dbClose();
                                    }
                                });
                            });
                        })];
                case 3:
                    _a.sent();
                    return [4, scrapeWords(url, cheerioLoad).then(function (words) {
                            words.forEach(function (element) {
                                var sql = "insert into words(word,frequence) values(\"" + element.word + "\"," + element.frequence + ")\n        on conflict(word) do update set frequence=frequence+" + element.frequence + ";";
                                db_ops_1.dbRW().run(sql, function (err) {
                                    if (err) {
                                        console.error(new Date(), sql, err);
                                        db_ops_1.dbClose();
                                    }
                                });
                            });
                        })];
                case 4:
                    _a.sent();
                    return [2, true];
                case 5:
                    error_1 = _a.sent();
                    return [2, false];
                case 6: return [2];
            }
        });
    });
}
function wordsFrequence(query, res) {
    var offset = 0;
    if (query && query.offset && query.offset > 0) {
        offset = query.offset;
    }
    var sql = "select * from words order by frequence desc limit 50 offset " + offset + ";";
    try {
        db_ops_1.dbRW().all(sql, function (err, rows) {
            if (err) {
                db_ops_1.dbClose();
                res.status(200).json([]);
                return;
            }
            res.status(200).json(rows);
        });
    }
    catch (err) {
        console.error(new Date(), err);
        db_ops_1.dbClose();
    }
}
exports.wordsFrequence = wordsFrequence;
function wordsTotal(res) {
    var sql = "select count(*) as qty from words;";
    try {
        db_ops_1.dbRW().get(sql, function (err, row) {
            if (err) {
                db_ops_1.dbClose();
                res.status(200).send({ qty: 0 });
                return;
            }
            res.status(200).send(row);
        });
    }
    catch (err) {
        console.error(new Date(), err);
        db_ops_1.dbClose();
    }
}
exports.wordsTotal = wordsTotal;
function urlsTotal(res) {
    var sql = "select count(*) as qty from urls;";
    try {
        db_ops_1.dbRW().get(sql, function (err, row) {
            if (err) {
                db_ops_1.dbClose();
                res.status(200).send({ qty: 0 });
                return;
            }
            res.status(200).send(row);
        });
    }
    catch (err) {
        console.error(new Date(), err);
        db_ops_1.dbClose();
    }
}
exports.urlsTotal = urlsTotal;
function urlsScanned(res) {
    var sql = "select count(*) as qty from urls where scanDate is not null;";
    try {
        db_ops_1.dbRW().get(sql, function (err, row) {
            if (err) {
                db_ops_1.dbClose();
                res.status(200).send({ qty: 0 });
                return;
            }
            res.status(200).send(row);
        });
    }
    catch (err) {
        console.error(new Date(), err);
        db_ops_1.dbClose();
    }
}
exports.urlsScanned = urlsScanned;
function scrapeSchedule() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, scrape("www.slashdot.org")];
                case 1:
                    _a.sent();
                    return [4, scrape("www.bbc.com")];
                case 2:
                    _a.sent();
                    return [4, scrape("news.sky.com")];
                case 3:
                    _a.sent();
                    return [4, scrape("https://www.theguardian.com/international")];
                case 4:
                    _a.sent();
                    new cron_1.CronJob("0/15 * * * * *", function () {
                        var sql = "SELECT url from urls where domain in \n          (SELECT domain from urls group by domain ORDER by max(scanDate) limit 1)";
                        try {
                            db_ops_1.dbRW().get(sql, function (err, row) {
                                if (err || !row) {
                                    console.error(new Date(), err);
                                    db_ops_1.dbClose();
                                    return;
                                }
                                scrape(row.url);
                            });
                        }
                        catch (err) {
                            db_ops_1.dbClose();
                        }
                    }, null, true, "Asia/Singapore");
                    return [2];
            }
        });
    });
}
scrapeSchedule();
//# sourceMappingURL=scraper.js.map