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
    // the id can be uid or email.
    const id = (req.body.id || '').trim();
    const pwd = encrypt(req.body.pwd);
    let sql = '';

    if (!id || !pwd) {
      return res
        .status(400)
        .send({ result: 'username and password required.' });
    }

    sql = `select * from giftsStaffs 
          where (uid="${id}" or email="${id}") and pwd="${pwd}" 
          and coalesce(inactive,0) <> 1;`;
    req.session.staff = await SqliteGet(sql);
    if (req.session.staff) {
      return res.status(200).send({ uid: req.session.staff.uid, bStaff: true });
    }

    sql = `select * from giftsUsers 
            where (uid="${id}" or email="${id}") and pwd="${pwd}" 
            and coalesce(inactive,0) <> 1;`;
    req.session.user = await SqliteGet(sql);
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

async function DisableAccount(session: any, res: Response) {
  if (!session || !session.user) {
    return res.status(403).send('Login is required.');
  }
  try {
    let rslt = SqliteRun(
      `update giftsUsers set inactive=1 where email="${session.user.email}"`
    );
    if (rslt) {
      session.user = null;
      return res.status(200).send({ result: 'Account disabled.' });
    }
    return res.status(500).send({ text: 'Error. Please try again later.' });
  } catch (e) {
    return res.status(400).send(e);
  }
}

function UserInfo(session: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(403).send({ text: 'User not login.' });
  }
  return res.status(200).send({
    uid: session.staff ? session.staff.uid : session.user.uid,
    email: session.staff ? session.staff.email : session.user.email
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

export { bLogin, DisableAccount, Login, Logout, Register, UserInfo };
