import { DbCollection, MongoDb, ObjectID } from '../mongodb-ops';
import { Request, Response } from '../interface';
import { encrypt } from '../string-ops';

(async () => {
  const db = await DbCollection('gifts-users');
  db.createIndex('uid', { unique: true });
})();

async function Login(req: Request, res: Response) {
  if (req.session && req.session.user) {
    return res.status(200).send({ uid: req.session.user.uid });
  }
  try {
    let dbUsers = await DbCollection('gifts-users');
    req.session.user = await dbUsers.findOne({
      uid: req.body.uid,
      pwd: encrypt(req.body.pwd)
    });
    if (!req.session.user) {
      return res.status(403).send('Incorrect username or password');
    }
    return res.status(200).send({ uid: req.session.user.uid });
  } catch (e) {
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
    let dbUsers = await DbCollection('gifts-users');
    let rslt = await dbUsers.insertOne({
      uid: req.body.uid,
      pwd: encrypt(req.body.pwd),
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      createdOn: new Date()
    });
    if (rslt.insertedCount === 1) {
      return res.status(200).send(rslt.ops[0]);
    } else {
      return res.status(500).send('Register failed. Please try again later.');
    }
  } catch (e) {
    // console.log(e);
    return res.status(500).send('Register failed. Please try again later.');
  }
}

async function DeleteUser(session: any, res: Response) {
  if (!session || !session.user) {
    return res.status(403).send('Login is required.');
  }
  try {
    let db = await MongoDb();
    db.collection('gifts-users').deleteOne({
      _id: session.user._id
    });
    session.user = null;
    return res.status(200).send({ result: 'User deleted.' });
  } catch (e) {
    return res.status(400).send(e);
  }
}

function UserInfo(session: any, res) {
  if (!bLogin(session)) {
    return res.status(403).send('User Not login.');
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
