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
      return res.status(200).send({ result: 'ok' });
    }
    res.status(200).send({ result: 'failed' + result });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

async function disableStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    return res.status(401).send({ result: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ result: 'Operation not allowed.' });
  // }

  try {
    if (!req.body.staff_id) {
      return res.status(400).send({ result: 'staff_id is empty.' });
    }

    const sql = `update giftsStaffs set inactive=1 where staff_id=${req.body.staff_id}`;
    let result = await SqliteRun(sql);
    if (result === true) {
      return res.status(200).send({ result: 'ok' });
    }
    res.status(200).send({ result: 'failed' });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

async function deleteStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    return res.status(401).send({ result: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ result: 'Operation not allowed.' });
  // }

  try {
    if (!req.query.staff_id) {
      return res.status(400).send({ result: 'staff_id is empty.' });
    }

    const sql = `delete from giftsStaffs where staff_id=${req.query.staff_id}`;
    let result = await SqliteRun(sql);
    if (result === true) {
      return res.status(200).send({ result: 'ok' });
    }
    res.status(200).send({ result: 'failed' });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

export { disableStaff, deleteStaff, newStaff };
