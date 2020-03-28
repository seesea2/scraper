import { Response } from "express";
import Axios from "axios";
import * as cheerio from "cheerio";

import { dbRW, dbClose } from "../db-ops";

interface WordFrequence {
  word: string;
  frequence: number;
}

try {
  dbRW().run(
    `create table if not exists urls(url TEXT UNIQUE PRIMARY KEY,
      domain TEXT, scanDateStr TEXT, scanDate INTEGER);`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );

  dbRW().run(
    `create table if not exists words(word TEXT UNIQUE PRIMARY KEY, frequence INTEGER);`,
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
} catch (err) {
  console.error(err);
}

async function scrapeUrls(
  url: string,
  cheerioStatic: CheerioStatic
): Promise<string[]> {
  if (!url || !cheerioStatic) {
    return [];
  }

  if (url[url.length - 1] === "/") {
    url = url.substring(0, length - 1);
  }

  return new Promise((resolve, reject) => {
    let urls = [];
    cheerioStatic("html *").each(function() {
      try {
        if (this.type != "tag") {
          return;
        }

        let obj = cheerioStatic(this);
        let href = obj.attr("href");
        href = (href || " ").trim();
        if (
          !href ||
          href == "/" ||
          href === "//" ||
          href.includes("http:") ||
          href.includes("#") ||
          href.includes(".css") ||
          href.includes(".pdf") ||
          href.includes("resources") ||
          href.includes("?")
        ) {
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
      } catch (err) {
        reject();
      }
    });
    resolve(urls);
  });
}

async function scrapeWords(
  url: string,
  cheerioStatic: CheerioStatic
): Promise<WordFrequence[]> {
  if (!url || !cheerioStatic) {
    return [];
  }

  return new Promise((resolve, reject) => {
    let wordsObj = [];
    cheerioStatic("body *").each(function() {
      if (this.type != "tag") return;

      let obj = cheerioStatic(this);
      if (!obj || obj.html().indexOf("<") != -1) return;
      let text = obj.text();
      if (!text) return;

      let words = text.split(" ");
      words.forEach(word => {
        word = word.trim();
        if (!word || word.length <= 2 || !word.match(/^[a-zA-Z]+$/)) return;

        word = word.toLocaleLowerCase();
        for (let item of wordsObj) {
          if (item.word === word) {
            return item.frequence++;
          }
        }
        wordsObj.push({ word: word, frequence: 1 });
      });
    });
    resolve(wordsObj);
  });
}

async function scrape(url: string): Promise<boolean> {
  if (!url) return false;

  console.log("scraping: ", url);
  try {
    url = url.trim();
    if (!url.includes("//")) {
      url = "https://" + url;
    }

    let dateStr = new Date().toLocaleString();
    let date = Date.now();
    let sql = `update urls set scanDateStr="${dateStr}", scanDate=${date}
      where url="${url}" and scanDate is null;`;
    dbRW().run(sql, err => {
      if (err) {
        console.error(new Date(), err);
        console.error(new Date(), sql);
        dbClose();
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

    await scrapeUrls(url, cheerioLoad).then(urls => {
      urls.forEach(element => {
        let urlSplits = element.split("/");
        let domain = "";
        for (let split of urlSplits) {
          if (split.includes(".")) {
            domain = split;
            break;
          }
        }
        let sql = `insert or ignore into urls(url,domain) values("${element}","${domain}");`;
        dbRW().run(sql, err => {
          if (err) {
            console.error(new Date(), sql, err);
            dbClose();
          }
        });
      });
    });
    await scrapeWords(url, cheerioLoad).then(words => {
      words.forEach(element => {
        let sql = `insert into words(word,frequence) values("${element.word}",${element.frequence})
        on conflict(word) do update set frequence=frequence+${element.frequence};`;
        dbRW().run(sql, err => {
          if (err) {
            console.error(new Date(), sql, err);
            dbClose();
          }
        });
      });
    });
    return true;
  } catch (error) {
    // console.error(new Date(), "scrape function error", error);
    return false;
  }
}

export function wordsFrequence(query: any, res: Response) {
  let offset = 0;
  if (query && query.offset && query.offset > 0) {
    offset = query.offset;
  }

  const sql = `select * from words order by frequence desc limit 50 offset ${offset};`;
  try {
    dbRW().all(sql, (err, rows) => {
      if (err) {
        dbClose();
        res.status(200).json([]);
        return;
      }
      res.status(200).json(rows);
    });
  } catch (err) {
    console.error(new Date(), err);
    dbClose();
  }
}

export function wordsTotal(res: Response) {
  const sql = `select count(*) as qty from words;`;

  try {
    dbRW().get(sql, (err, row) => {
      if (err) {
        dbClose();
        res.status(200).send({ qty: 0 });
        return;
      }
      res.status(200).send(row);
    });
  } catch (err) {
    console.error(new Date(), err);
    dbClose();
  }
}

async function scrapeLoop() {
  try {
    await scrape("www.slashdot.org");
    await scrape("www.bbc.com");
    await scrape("news.sky.com");
    await scrape("https://www.theguardian.com/international");

    while (1) {
      let sql = `SELECT url from urls where domain in 
        (SELECT domain from urls group by domain ORDER by max(scanDate) limit 1)`;
      await new Promise((resolve, reject) => {
        dbRW().get(sql, async (err, row) => {
          if (err || !row) {
            console.error(new Date(), err);
            dbClose();
            reject(false);
            return;
          }
          let scrapeRslt = await scrape(row.url);
          setTimeout(() => {
            resolve(scrapeRslt);
          }, 3000);
        });
      });
    }
  } catch (err) {
    dbClose();
    console.error(err);
  }
}

scrapeLoop();
