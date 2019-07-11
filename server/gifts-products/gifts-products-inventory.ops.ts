import { Response } from '../interface';
import { DbCollection, ObjectID } from '../mongodb-ops';

async function GetInventory(res: Response) {
  try {
    const dbInventory = await DbCollection('gifts-inventory');
    const inventory = await dbInventory.find().toArray();
    return res.status(200).send(inventory);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

// qty by product; Todo: by colour, size, etc.
async function AdjustInventory(_id: string, qty: number, res: Response) {
  if (!_id || !qty) {
    return res.status(400).send('Invalid input.');
  }
  try {
    const dbInventory = await DbCollection('gifts-inventory');
    const rslt = await dbInventory.updateOne(
      {
        _id: new ObjectID(_id)
      },
      { $set: { modifiedOn: new Date(), qty: qty } },
      { upsert: true }
    );
    return res.status(200).send(rslt);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function ReserveInventory(id: string, cartItems: any) {
  if (!cartItems || cartItems.length <= 0) {
    throw 'The cart is empty.';
  }

  try {
    const success = [];
    const failed = [];

    const dbInventory = await DbCollection('gifts-inventory');
    for (let i = 0; i < cartItems.length; i++) {
      const result = await dbInventory.updateOne(
        {
          _id: new ObjectID(cartItems[i].product._id),
          qty: { $gte: cartItems[i].qty }
        },
        {
          $inc: { qty: -cartItems[i].qty },
          $push: {
            reservations: {
              qty: cartItems[i].qty,
              _id: new ObjectID(id),
              createdOn: new Date()
            }
          }
        }
      );
      if (result.result.nModified === 0) {
        failed.push(cartItems[i].product);
        break;
      } else {
        success.push(cartItems[i].product);
      }
    }

    if (failed.length > 0) {
      for (let i = 0; i < success.length; i++) {
        dbInventory.updateOne(
          {
            _id: success[i]._id,
            'reservations._id': id
          },
          {
            $inc: { qty: success[i].qty },
            $pull: { reservations: { _id: id } }
          }
        );
      }
      throw 'Not enough storage.';
    }
    return 'Success.';
  } catch (e) {
    throw e;
  }
}

async function DeleteInventoryReservation(_id: string) {
  try {
    const dbInventory = await DbCollection('gifts-inventory');
    let updateRslt = await dbInventory.updateOne(
      {
        'reservations._id': new ObjectID(_id)
      },
      {
        $pull: { reservations: { _id: new ObjectID(_id) } }
      }
    );
    if (updateRslt.result.nModified <= 0) {
      throw 'delete reservation failed.';
    }
    return updateRslt;
  } catch (e) {
    console.log(e);
    throw 'delete reservation failed with exception.';
  }
}

export {
  AdjustInventory,
  DeleteInventoryReservation,
  GetInventory,
  ReserveInventory
};
