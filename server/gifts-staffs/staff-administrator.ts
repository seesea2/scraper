import { Request, Response } from '../interface';
import { SqliteRun } from '../db-ops/sqlite-ops';
import { encrypt } from '../string-ops/crypto';

async function newStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    // return res.status(401).send({ result: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ result: 'Operation not allowed.' });
  // }

  try {
    if (!req.body.uid) {
      return res.status(400).send({ result: 'uid is empty.' });
    }
    let fields = 'uid';
    let values = '"' + req.body.uid + '"';
    if (!req.body.pwd) {
      return res.status(400).send({ result: 'pwd is empty.' });
    }
    fields += ',pwd';
    values += ',"' + encrypt(req.body.pwd) + '"';
    if (!req.body.firstName) {
      return res.status(400).send({ result: 'first name is empty.' });
    }
    fields += ',firstname';
    values += ',"' + req.body.firstName + '"';
    if (!req.body.lastName) {
      return res.status(400).send({ result: 'last name is empty.' });
    }
    fields += ',lastname';
    values += ',"' + req.body.lastName + '"';

    const sql = `insert into giftsStaffs (${fields}) values (${values})`;
    let result = await SqliteRun(sql);
    if (result === true) {
      res.status(200).send({ result: 'ok' });
    } else {
      res.status(200).send({ result: 'failed' });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export { newStaff };
