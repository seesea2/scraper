import { Response } from "express";
import Axios from "axios";
import * as cheerio from "cheerio";
import { CronJob } from "cron";

import { dbRead, dbWrite, dbReset } from "../db-ops";

function scrapeUrl(url: string, cheerioStatic: CheerioStatic) {
  if (!url) return;

  if (!cheerioStatic) return;

  if (url[url.length - 1] === "/") {
    url = url.substring(0, length - 1);
  }

  let title = cheerioStatic("title").text() || "";
  cheerioStatic("html *").each(function() {
    if (this.type != "tag") return;

    let obj = cheerioStatic(this);
    let href = obj.attr("href");
    if (!href) return;

    if (href.includes("http:")) return;
    if (href.includes("#")) return;
    if (href.includes(".css")) return;
    if (href.includes(".pdf")) return;
    if (href.includes("resources")) return;
    if (href.includes("?")) return;

    if (href === "/") {
      href = "";
    } else if (href[href.length - 1] === "/") {
      href = href.substring(0, href.length - 1);
    }

    let sql = "";
    if (href.includes("//")) {
      sql = `insert or ignore into urls(web,url) values("${title}","${href}")`;
    } else if (!href || href[0] === "/") {
      sql = `insert or ignore into urls(web,url) values("${title}","${url}${href}")`;
    } else {
      sql = `insert or ignore into urls(web,url) values("${title}","${url}/${href}")`;
    }
    try {
      dbWrite().run(sql, err => {
        if (err) {
          dbReset();
        }
      });
    } catch (err) {
      dbReset();
    }
  });
}

function scrapeWords(url: string, cheerioStatic: CheerioStatic) {
  if (!url || !cheerioStatic) return;

  cheerioStatic("body *").each(function() {
    if (this.type != "tag") return;

    let obj = cheerioStatic(this);
    if (obj.html().indexOf("<") != -1) return;

    let text = obj.text();
    if (!text) return;

    let words = text.split(" ");
    words.forEach(word => {
      word = word.trim();
      if (!word) return;
      if (!word.match(/^[a-zA-Z]+$/)) return;

      word = word.toLocaleLowerCase();
      const sql = `insert into words(word,frequence) values("${word}",1)
        on conflict(word) do update set frequence=frequence+1`;
      try {
        dbWrite().run(sql, err => {
          if (err) {
            dbReset();
          }
        });
      } catch (err) {
        dbReset();
      }
    });
  });
}

async function scrape(url: string) {
  if (!url) return;
  if (!url.includes("//")) {
    url = "https://" + url;
  }

  try {
    console.log(new Date(), "scraping: ", url);
    let dateStr = new Date().toLocaleString();
    let date = Date.now();
    let sql = `insert into urls(url,scanDateStr,scanDate) 
      values("${url}","${dateStr}",${date})
      on conflict(url) do update set scanDateStr="${dateStr}",scanDate=${date}`;
    dbWrite().run(sql, err => {
      if (err) {
        console.error(new Date(), err);
        console.error(new Date(), sql);
        dbReset();
      }
    });

    let config = {
      headers: {
        "Content-Length": 0,
        "Content-Type": "text/plain"
      }
    };
    const urlResponse = await Axios(url, config);
    let cheerioLoad = cheerio.load(urlResponse.data);
    scrapeUrl(url, cheerioLoad);
    scrapeWords(url, cheerioLoad);
    return;
  } catch (error) {
    console.error(new Date(), "scrape function error");
  }
}

new CronJob(
  "0 */2 * * * *",
  () => {
    let sql = "select url from urls where scanDate is null;";
    dbRead().get(sql, (err, row) => {
      if (err) {
        console.error(new Date(), err);
        dbReset();
        return;
      }
      scrape(row.url);
    });
  },
  null,
  true,
  "Asia/Singapore"
);

export function wordsFrequence(query: any, res: Response) {
  let offset = 0;
  if (query && query.offset && query.offset > 0) {
    offset = query.offset;
  }
  const sql = `select * from words order by frequence desc limit 50 offset ${offset};`;

  try {
    dbRead().all(sql, (err, rows) => {
      if (err) {
        dbReset();
        res.status(200).json([]);
        return;
      }
      res.status(200).json(rows);
    });
  } catch (err) {
    console.error(new Date(), err);
  }
}

export function wordsTotal(res: Response) {
  const sql = `select count(*) as qty from words;`;

  try {
    dbRead().get(sql, (err, row) => {
      if (err) {
        dbReset();
        res.status(200).send({ qty: 0 });
        return;
      }
      res.status(200).send(row);
    });
  } catch (err) {
    console.error(new Date(), err);
  }
}
