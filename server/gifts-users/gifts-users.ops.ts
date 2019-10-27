// import { DbCollection, MongoDb, ObjectID } from '../mongodb-ops';
import { SqliteGet, SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

import { Request, Response } from '../interface';
import { encrypt } from '../string-ops/crypto';

async function Login(req: Request, res: Response) {
  if (req.session && req.session.user) {
    return res.status(200).send({ uid: req.session.user.uid });
  }
  try {
    const uid = req.body.uid;
    const pwd = encrypt(req.body.pwd);
    req.session.user = await SqliteGet(
      // `select * from giftsStaffs where id=${uid} and pwd=${}`
      `select * from giftsStaffs where uid="${uid}" and pwd="${pwd}"`
    );
    if (!req.session.user) {
      return res.status(403).send('Incorrect username or password');
    }
    return res.status(200).send({ uid: req.session.user.uid });
  } catch (e) {
    console.log(e);
    return res.status(500).send('server error.');
  }
}

function Logout(req: Request, res: Response) {
  if (req.session && req.session.user) {
    req.session.user = null;
  }
  return res.status(200).send({ result: 'ok' });
}

async function Register(req: Request, res: Response) {
  if (
    !req.body.uid ||
    !req.body.pwd ||
    !req.body.email ||
    !req.body.firstName ||
    !req.body.lastName
  ) {
    return res.status(400).send('Invalid input.');
  }
  try {
    let rslt = await SqliteRun(
      `insert into giftsStaffs (id, pwd) value(${req.body.uid}, ${encrypt(
        req.body.pwd
      )}, ${req.body.email}      ${new Date()}`
    );
    if (rslt) {
      return res.status(200).send({ result: 'ok' });
    } else {
      return res.status(500).send('Register failed. Please try again later.');
    }
  } catch (e) {
    return res.status(500).send('Register failed. Please try again later.');
  }
}

async function DeleteUser(session: any, res: Response) {
  if (!session || !session.user) {
    return res.status(403).send('Login is required.');
  }
  try {
    SqliteRun(`delete from giftsStaffs where id=${session.user.id}`);
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
    _id: session.user._id,
    uid: session.user.uid,
    email: session.user.email
  });
}

function bLogin(session: any) {
  if (!session || !session.user) {
    return false;
  }
  return true;
}

export { bLogin, Login, Logout, Register, DeleteUser, UserInfo };
