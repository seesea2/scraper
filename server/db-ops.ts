import { join } from "path";
import { Database, OPEN_READONLY, OPEN_READWRITE, verbose } from "sqlite3";

const DB = join(__dirname, "/../db.db3");

let sqlite3 = verbose();
let db_r: Database = undefined;
let db_rw: Database = undefined;

function dbReset() {
  if (db_r) {
    db_r.close();
    db_r = undefined;
  }
  if (db_rw) {
    db_rw.close();
    db_rw = undefined;
  }
}

function dbRead() {
  if (!db_r) {
    try {
      db_r = new sqlite3.Database(DB, OPEN_READONLY);
    } catch (err) {
      console.log("dbRead:", err);
    }
  }
  return db_r;
}

function dbWrite() {
  if (!db_rw) {
    try {
      db_rw = new sqlite3.Database(DB, OPEN_READWRITE);
    } catch (err) {
      console.log("dbWrite:", err);
    }
  }
  return db_rw;
}

export { dbReset, dbWrite, dbRead };
