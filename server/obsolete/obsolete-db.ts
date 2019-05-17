// import { Database, OPEN_READONLY, OPEN_READWRITE } from 'sqlite3';

// const DB = './dist/db.db';

// export function AsyncGet(sql): Promise<any> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db: Database = new Database(DB, OPEN_READONLY, open_err => {
//         if (open_err) {
//           return reject(open_err);
//         }
//         db.get(sql, (err, row) => {
//           if (err) {
//             return reject(err);
//           }
//           resolve(row);
//         });
//         db.close();
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// export function AsyncAll(sql): Promise<[]> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db: Database = new Database(DB, OPEN_READONLY, open_err => {
//         if (open_err) {
//           return reject(open_err);
//         }
//         db.all(sql, (err, rows) => {
//           if (err) {
//             return reject(err);
//           }
//           resolve(rows);
//         });
//         db.close();
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// export function AsyncRun(sql): Promise<boolean> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db: Database = new Database(DB, OPEN_READWRITE, open_err => {
//         if (open_err) {
//           return reject(open_err);
//         }
//         db.run(sql, [], err => {
//           if (err) {
//             return reject(err);
//           }
//           resolve(true);
//         });
//         db.close();
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// export function AsyncPrepareRun(sql, params): Promise<boolean> {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const db: Database = new Database(DB, OPEN_READWRITE, open_err => {
//         if (open_err) {
//           return reject(open_err);
//         }
//         db.serialize(() => {
//           const stmt = db.prepare(sql, err => {
//             if (err) {
//               return reject(err);
//             }
//           });
//           for (let i = 0; i < params.length; i++) {
//             stmt.run(params[i]);
//           }
//           stmt.finalize(err => {
//             if (err) {
//               return reject(err);
//             }
//             resolve(true);
//           });
//         });
//         db.close();
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// }
