import { MongoClient, Db, ObjectID } from 'mongodb';

const MONGO_URL =
  'mongodb+srv://admin:admin@cluster0-dxwkg.mongodb.net/insg?retryWrites=true';

let database: Db;

async function InitDb(): Promise<Db> {
  try {
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true
    });
    return (database = client.db('insg'));
  } catch (e) {
    throw 'Database connection failed.';
  }
}

async function MongoDb(): Promise<Db> {
  if (database) {
    return database;
  }

  try {
    await InitDb();
    return database;
  } catch (e) {
    throw e;
  }
}

async function DbCollection(name: string) {
  if (database) {
    return database.collection(name);
  }

  try {
    await InitDb();
    return database.collection(name);
  } catch (e) {
    throw e;
  }
}

export { DbCollection, MongoDb, ObjectID };
