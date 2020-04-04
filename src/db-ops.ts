import { join } from "path";
import { Database, OPEN_CREATE, OPEN_READWRITE, verbose } from "sqlite3";

let database: Database = null;

export function dbRW() {
    if (!database) {
        const sqlite3 = verbose();
        const dbFile = join(__dirname, "./scraper.db3");
        database = new sqlite3.Database(
            dbFile,
            OPEN_READWRITE | OPEN_CREATE,
            err => {
                if (err) {
                    console.log("dbRW error", err);
                    database = undefined;
                }
            }
        );
    }
    return database;
}

export function dbClose() {
    if (database) {
        database.close(err => {
            if (err) {
                console.error(err);
            }
        });
        database = undefined;
    }
}
