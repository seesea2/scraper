"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var sqlite3_1 = require("sqlite3");
var database = null;
function dbRW() {
    if (!database) {
        var sqlite3 = sqlite3_1.verbose();
        var dbFile = path_1.join(__dirname, "./scraper.db3");
        database = new sqlite3.Database(dbFile, sqlite3_1.OPEN_READWRITE | sqlite3_1.OPEN_CREATE, function (err) {
            if (err) {
                console.log("dbRW error", err);
                database = undefined;
            }
        });
    }
    return database;
}
exports.dbRW = dbRW;
function dbClose() {
    if (database) {
        database.close(function (err) {
            if (err) {
                console.error(err);
            }
        });
        database = undefined;
    }
}
exports.dbClose = dbClose;
//# sourceMappingURL=db-ops.js.map