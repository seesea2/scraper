import { Request, Response } from '../interface';
import { SqliteRun } from '../db-ops/sqlite-ops';
import { encrypt } from '../string-ops/crypto';

async function newStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    // return res.status(401).send({ message: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ message: 'Operation not allowed.' });
  // }

  try {
    if (!req.body.id) {
      return res.status(400).send({ message: 'ID is empty.' });
    }
    let fields = 'uname';
    let values = '"' + req.body.id + '"';
    if (!req.body.pwd) {
      return res.status(400).send({ message: 'PWD is empty.' });
    }
    fields += ',pwd';
    values += ',"' + encrypt(req.body.pwd) + '"';
    if (!req.body.firstName) {
      return res.status(400).send({ message: 'first name is empty.' });
    }
    fields += ',firstname';
    values += ',"' + req.body.firstName + '"';
    if (!req.body.lastName) {
      return res.status(400).send({ message: 'last name is empty.' });
    }
    fields += ',lastname';
    values += ',"' + req.body.lastName + '"';

    const sql = `insert into giftsStaffs (${fields}) values (${values})`;
    let result = await SqliteRun(sql);
    if (result === true) {
      return res.status(200).send({ message: 'ok' });
    }
    res.status(200).send({ message: 'failed' + result });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

async function disableStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ message: 'Operation not allowed.' });
  // }

  try {
    if (!req.body.staff_id) {
      return res.status(400).send({ message: 'staff_id is empty.' });
    }

    const sql = `update giftsStaffs set inactive=1 where staff_id=${req.body.staff_id}`;
    let result = await SqliteRun(sql);
    if (result === true) {
      return res.status(200).send({ message: 'ok' });
    }
    res.status(200).send({ message: 'failed' });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

async function deleteStaff(req: Request, res: Response) {
  if (!req.session || !req.session.staff) {
    return res.status(401).send({ message: 'Unauthorized.' });
  }
  // if (req.session.staff.class != 'administrator') {
  // return res.status(403).send({ message: 'Operation not allowed.' });
  // }

  try {
    if (!req.query.staff_id) {
      return res.status(400).send({ message: 'staff_id is empty.' });
    }

    const sql = `delete from giftsStaffs where staff_id=${req.query.staff_id}`;
    let result = await SqliteRun(sql);
    if (result === true) {
      return res.status(200).send({ message: 'ok' });
    }
    res.status(200).send({ message: 'failed' });
  } catch (e) {
    // console.log(e);
    res.status(500).send(e);
  }
}

export { disableStaff, deleteStaff, newStaff };
