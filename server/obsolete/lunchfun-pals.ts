import { Response } from '../interface';
import { DbCollection } from '../mongodb-ops';

let lunchPals = [];

async function refreshPals() {
  try {
    const palsCollection = await DbCollection('lunchfun-pals');
    lunchPals = await palsCollection
      .find()
      .sort({ name: 1 })
      .toArray();
  } catch (e) {
    throw e;
  }
}

async function GetPals(res: Response) {
  if (lunchPals.length > 0) {
    return res.status(200).send(lunchPals);
  }

  try {
    await refreshPals();
    return res.status(200).send(lunchPals);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddPal(name: string, res: Response) {
  if (!name) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const palsCollection = await DbCollection('lunchfun-pals');
    palsCollection.insertOne({ name: name });
    refreshPals();
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeletePal(name: string, res: Response) {
  if (!name) {
    return res.status(400).send('Invalid name to delete.');
  }

  try {
    const palsCollection = await DbCollection('lunchfun-pals');
    palsCollection.deleteOne({ name: name });
    refreshPals();
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetPalsAttendance(res: Response) {
  try {
    const collection = await DbCollection('lunchfun-records');
    const attendances = await collection
      .aggregate([
        { $unwind: '$attendees' },
        { $group: { _id: '$attendees', attendance: { $sum: 1 } } },
        { $project: { name: '$_id', attendance: '$attendance' } }
      ])
      .toArray();
    return res.status(200).send(attendances);
  } catch (e) {
    return res.status(500).send(e);
  }
}

export { AddPal, DeletePal, GetPals, GetPalsAttendance };
