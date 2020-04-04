import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import {
  wordsFrequence,
  wordsTotal,
  urlsScanned,
  urlsTotal
} from "./scraper";

// Express server
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/scraper/words", (req: Request, res: Response) => {
  wordsFrequence(req.query, res);
});
app.get("/api/scraper/words/total", (req: Request, res: Response) => {
  wordsTotal(res);
});

app.get("/api/scraper/urls/scanned", (req: Request, res: Response) => {
  urlsScanned(res);
});
app.get("/api/scraper/urls/total", (req: Request, res: Response) => {
  urlsTotal(res);
});

// error handling - 1
app.all("/*", (req: Request, res: Response) => {
  return res.status(404).send({ message: "Invalid url."});
});
// error handling - 2
app.use((req: Request, res: Response, next: NextFunction) => {
  return res
    .status(500)
    .send({ message: "Server Issue." });
});

app.listen(8888, () => {
  console.log("Scraper listening HTTP on port 8888.");
});
