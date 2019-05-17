import { Response } from '../interface';
import { DbCollection, ObjectID } from '../mongodb-ops';

async function GetRecords(res: Response, qty?: number) {
  try {
    const collection = await DbCollection('lunchfun-records');
    const records = await collection
      .find({})
      .sort({ createdOn: -1 })
      .limit(qty | 30)
      .toArray();
    return res.status(200).send(records);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddRecord(payer: string, attendees: string[], res: Response) {
  if (!payer || !attendees || attendees.length <= 0) {
    return res.status(400).send('Invalid params to add.');
  }

  try {
    const collection = await DbCollection('lunchfun-records');
    await collection.insertOne({
      payer: payer,
      attendees: attendees,
      createdOn: new Date()
    });
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    console.log(e);
    return res.status(500).send('Error at server. Please try again later.');
  }
}

async function DeleteRecord(_id: string, res: Response) {
  if (!_id) {
    return res.status(400).send('Invalid record to delete.');
  }

  try {
    const collection = await DbCollection('lunchfun-records');
    collection.deleteOne({ _id: new ObjectID(_id) });
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export { AddRecord, DeleteRecord, GetRecords };
