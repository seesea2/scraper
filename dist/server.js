"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var scraper_1 = require("./scraper");
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/api/words", function (req, res) {
    scraper_1.wordsFrequence(req.query, res);
});
app.get("/api/words/total", function (req, res) {
    scraper_1.wordsTotal(res);
});
app.get("/api/urls/scanned", function (req, res) {
    scraper_1.urlsScanned(res);
});
app.get("/api/urls/total", function (req, res) {
    scraper_1.urlsTotal(res);
});
app.all("/*", function (req, res) {
    return res.status(404).send({ message: "Invalid url." });
});
app.use(function (req, res, next) {
    return res
        .status(500)
        .send({ message: "Server Issue." });
});
app.listen(8888, function () {
    console.log("Scraper is listening HTTP on port 8888.");
});
//# sourceMappingURL=server.js.map