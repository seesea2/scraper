import { SqliteGet, SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

import { Request, Response } from '../interface';
import { encrypt } from '../string-ops/crypto';

async function Login(req: Request, res: Response) {
  if (req.session && req.session.staff) {
    return res.status(200).send({ staff_id: req.session.staff.staff_id, bStaff: true });
  }
  if (req.session && req.session.user) {
    return res.status(200).send({ uname: req.session.user.uname, email: req.session.user.email });
  }
  try {
    // the id can be uname or email.
    const id = (req.body.id || '').trim();
    const pwd = encrypt(req.body.pwd);
    let sql = '';

    if (!id || !pwd) {
      return res
        .status(400)
        .send({ message: 'username and password required.' });
    }

    sql = `select * from giftsStaffs 
          where (staff_id="${id}" or email="${id}") and pwd="${pwd}" 
          and coalesce(inactive,0) <> 1;`;
    req.session.staff = await SqliteGet(sql);
    if (req.session.staff) {
      return res.status(200).send({ staff_id: req.session.staff.staff_id, bStaff: true });
    }

    sql = `select * from giftsUsers 
            where (uname="${id}" or email="${id}") and pwd="${pwd}" 
            and coalesce(inactive,0) <> 1;`;
    req.session.user = await SqliteGet(sql);
    if (req.session.user) {
      return res.status(200).send({ uname: req.session.user.uname, email: req.session.user.email });
    }
    return res.status(401).send({ message: 'Incorrect username or password' });
  } catch (e) {
    // console.log(e);
    return res.status(500).send({ message: 'Server error.' });
  }
}

function Logout(req: Request, res: Response) {
  if (req.session && req.session.staff) {
    req.session.staff = null;
  }
  if (req.session && req.session.user) {
    req.session.user = null;
  }
  return res.status(200).send({ message: 'ok' });
}

async function Register(body: any, res: Response) {
  if (!body.email || !body.pwd) {
    return res.status(400).send({ message: 'Invalid input.' });
  }
  try {
    let fields = 'email,pwd,createdOn';
    let values = `"${body.email}","` + encrypt(body.pwd) + '",' + Date.now();
    let rslt = await SqliteRun(
      `insert into giftsUsers (${fields}) values (${values})`
    );
    if (rslt) {
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'Register failed. Please try again later.' });
  } catch (e) {
    return res.status(500).send({ message: 'Register failed. Please try again later.' });
  }
}

async function DisableAccount(session: any, res: Response) {
  if (!session || !session.user) {
    return res.status(401).send({ message: 'Login is required.' });
  }
  try {
    let rslt = SqliteRun(
      `update giftsUsers set inactive=1 where user_id="${session.user.user_id}"`
    );
    if (rslt) {
      session.user = null;
      return res.status(200).send({ message: 'Account disabled.' });
    }
    return res.status(500).send({ message: 'Error. Please try again later.' });
  } catch (e) {
    return res.status(400).send(e);
  }
}

function UserInfo(session: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(401).send({ message: 'User not login.' });
  }
  if (session.staff) {
    return res.status(200).send({
      staff_id: session.staff.staff_id,
      email: session.staff.email
    });

  } else {
    return res.status(200).send({
      uname: session.user.uname,
      email: session.user.email
    });

  }
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
