// import { DbCollection, MongoDb, ObjectID } from '../mongodb-ops';
import { SqliteGet, SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

import { Request, Response } from '../interface';
import { encrypt } from '../string-ops/crypto';

async function Login(req: Request, res: Response) {
  if (req.session && req.session.staff) {
    return res.status(200).send({ uid: req.session.staff.uid, bStaff: true });
  }
  if (req.session && req.session.user) {
    return res.status(200).send({ uid: req.session.user.uid });
  }
  try {
    const uid = (req.body.uid || '').trim();
    const pwd = encrypt(req.body.pwd);
    if (!uid || !pwd) {
      return res
        .status(400)
        .send({ result: 'username and password required.' });
    }
    req.session.staff = await SqliteGet(
      `select * from giftsStaffs where uid="${uid}" and pwd="${pwd}"`
    );
    if (req.session.staff) {
      return res.status(200).send({ uid: req.session.staff.uid, bStaff: true });
    }

    req.session.user = await SqliteGet(
      `select * from giftsUsers where uid="${uid}" and pwd="${pwd}"`
    );
    if (req.session.user) {
      return res.status(200).send({ uid: req.session.user.uid });
    }
    return res.status(403).send('Incorrect username or password');
  } catch (e) {
    console.log(e);
    return res.status(500).send('server error.');
  }
}

function Logout(req: Request, res: Response) {
  if (req.session && req.session.staff) {
    req.session.staff = null;
  }
  if (req.session && req.session.user) {
    req.session.user = null;
  }
  return res.status(200).send({ result: 'ok' });
}

async function Register(body: any, res: Response) {
  if (!body.email || !body.pwd) {
    return res.status(400).send('Invalid input.');
  }
  try {
    let fields = 'email,pwd,createdOn';
    let values = `"${body.email}","` + encrypt(body.pwd) + '",' + Date.now();
    let rslt = await SqliteRun(
      `insert into giftsUsers (${fields}) values (${values})`
    );
    if (rslt) {
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send('Register failed. Please try again later.');
  } catch (e) {
    return res.status(500).send('Register failed. Please try again later.');
  }
}

async function DeleteUser(session: any, res: Response) {
  if (!session || !session.user) {
    return res.status(403).send('Login is required.');
  }
  try {
    SqliteRun(`delete from giftsUsers where uid="${session.user.uid}"`);
    session.user = null;
    return res.status(200).send({ result: 'User deleted.' });
  } catch (e) {
    return res.status(400).send(e);
  }
}

function UserInfo(session: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(403).send('User not login.');
  }
  return res.status(200).send({
    uid: session.user.uid,
    email: session.user.email
  });
}

function bLogin(session: any) {
  if (session) {
    if (session.staff) {
      return true;
    }
    if (session.user) {
      return true;
    }
  }
  return false;
}

export { bLogin, Login, Logout, Register, DeleteUser, UserInfo };
