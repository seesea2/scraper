import { Response } from '../interface';
import { SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

async function GetInventory(res: Response) {
  try {
    let sql = `select coalesce(i.qty, 0) as inventory, p.* from giftsProducts as p 
                left JOIN giftsInventory as i
                on p.product_id=i.product_id;`;
    const inventory = await SqliteAll(sql);
    return res.status(200).send(inventory);
  } catch (e) {
    return res.status(500).send(e);
  }
}

// qty by product now; Todo: qty by each colour, size etc.
async function AdjustInventory(body: any, res: Response) {
  if (!body.product_id || !body.qty) {
    return res.status(400).send({ message: 'Invalid input.' });
  }
  try {
    let time = Date.now();
    let sql = `insert into giftsInventory (product_id,qty,modifiedOn) 
                values(${body.product_id},${body.qty},${time})
                on CONFLICT(product_id) do update set qty=${body.qty}, modifiedOn=${time};`;
    const rslt = await SqliteRun(sql);
    if (rslt) {
      return res.status(200).send({ message: 'OK' });
    }
    return res.status(500).send({ message: 'Failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function ReserveInventory(order_id: string, products: any) {
  if (!order_id || !products || products.length <= 0) {
    throw 'The order is empty.';
  }

  try {
    const success = [];
    const failed = [];
    let sql = '';

    let dbReserve = false;
    let dbInventory = false;
    for (let i = 0; i < products.length; i++) {
      let orderQty = products[i].qty;
      sql = `insert into giftsReservation (product_id,order_id,qty,createdOn) 
            values (${
              products[i].product_id
            },"${order_id}",${orderQty},${Date.now()});`;
      dbReserve = await SqliteRun(sql);
      if (!dbReserve) {
        break;
      }
      sql = `update giftsInventory set qty=qty-${orderQty} where product_id=${products[i].product_id};`;
      dbInventory = await SqliteRun(sql);
      if (!dbInventory) {
        failed.push(products[i]);
        break;
      } else {
        success.push(products[i]);
      }
    }

    if (failed.length) {
      for (let i = 0; i < success.length; i++) {
        sql = `update giftsInventory set qty=qty+${success[i].qty} where product_id=${success[i].product_id};`;
        dbInventory = await SqliteRun(sql);
        if (dbInventory) {
          sql = `delete from giftsReservation where order_id="${order_id}" and product_id=${success[i].product_id};`;
          dbReserve = await SqliteRun(sql);
          if (!dbReserve) {
            dbReserve = await SqliteRun(sql);
          }
        }
      }
    }
    if (success.length != products.length) {
      throw 'Reserve from Inventory failed.';
    }
    return true;
  } catch (e) {
    throw e;
  }
}

// async function DeleteInventoryReservation(product_id: number) {
//   try {
//     let sql = `;`;
//     const dbInventory = await DbCollection('gifts-inventory');
//     let updateRslt = await dbInventory.updateOne(
//       {
//         'reservations._id': new ObjectID(_id)
//       },
//       {
//         $pull: { reservations: { _id: new ObjectID(_id) } }
//       }
//     );
//     if (updateRslt.result.nModified <= 0) {
//       throw 'delete reservation failed.';
//     }
//     return updateRslt;
//   } catch (e) {
//     console.log(e);
//     throw 'delete reservation failed with exception.';
//   }
// }

export {
  AdjustInventory,
  // DeleteInventoryReservation,
  GetInventory,
  ReserveInventory
};
