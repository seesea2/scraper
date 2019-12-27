import { Request, Response } from '../interface';
import { SqliteAll, SqliteGet, SqliteRun } from '../db-ops/sqlite-ops';
import { bLogin } from '../gifts-users/gifts-users.ops';
import { CartItem, Customer } from '../gifts-users/users-interface';
import { randomString } from '../string-ops/random';
import { ReserveInventory } from '../gifts-products/gifts-products-inventory.ops';

async function GetUserOrders(session: any, res: Response) {
  try {
    let sql = `select * from giftsOrders where user_id=${session.user.user_id}`;
    const orders = await SqliteAll(sql);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetStaffOrders(session: any, res: Response) {
  try {
    let sql = `select * from giftsOrders`;
    const orders = await SqliteAll(sql);
    return res.status(200).send(orders);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function NewOrder(req: Request, res: Response) {
  try {
    let fields = 'order_id,createdOn';

    let order_id = 'SG_' + randomString(7);
    let values = `"${order_id}",${Date.now()}`;

    let sql = `insert into giftsOrders (${fields}) values (${values});`;
    let rslt = SqliteRun(sql);
    // let insertRslt = dbOrders.insertOne({
    //   shipping: {
    //     name: customer.name,
    //     mobile: customer.mobile,
    //     address: customer.address,
    //     message: customer.message
    //   },
    //   payment: { method: 'visa', transaction_id: '2312213312XXXTD' },
    //   cartItems: cartItems
    // });
    if (!rslt) {
      return res.status(500).send({ message: 'Error, please retry later.' });
    }

    let reserveRslt = await ReserveInventory(order_id, req.body.products);
    if (!reserveRslt) {
      return res
        .status(500)
        .send({ message: 'Error, failed to reserve inventory.' });
    }

    return res.status(200).send({ message: 'Order successfully.' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

// async function GetCart(session: any, res: Response) {
//   try {
//     let sql = `select * from giftsOrders where user_id=${req.session.user.user_id}`;
//     const orders = await SqliteAll(sql);
//     let cart = await db
//       .collection('gifts-carts')
//       .find({ _id: req.session.user[0]._id })
//       .toArray();

//     return res.status(200).send(cart);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// }

// async function UpdateCartQty(req: Request, res: Response) {
//   if (!bLogin(req.session)) {
//     res.status(403).send('User not login.');
//   }
//   if (!req.body.productId || !req.body.quantity) {
//     return res.status(400).send('Invalid input.');
//   }

//   try {
//     const db = await MongoDb();
//     let rslt = await db.collection('gifts-carts').updateOne(
//       {
//         _id: req.session.user[0]._id,
//         'products.productId': req.body.productId
//       },
//       {
//         $set: {
//           'products.$.quantity': req.body.quantity,
//           modifiedOn: new Date()
//         }
//       }
//     );
//     console.log(rslt);
//     return res.sendStatus(200);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// }

// async function DeleteCart(req: Request, res: Response) {
//   if (!bLogin(req.session)) {
//     return res.status(400).send('User not login.');
//   }

//   try {
//     const db = await MongoDb();
//     await db
//       .collection('gifts-carts')
//       .deleteOne({ _id: req.session.user[0]._id });
//     return res.sendStatus(200);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// }

// async function DeleteCartProduct(req: Request, res: Response) {
//   if (!bLogin(req.session)) {
//     return res.status(400).send('User not login.');
//   }

//   try {
//     const db = await MongoDb();
//     await db.collection('gifts-carts').updateOne(
//       { _id: req.session.user[0]._id },
//       {
//         $set: { modifiedOn: new Date() },
//         $pull: {
//           products: {
//             productId: req.body.productId,
//             quantity: req.body.quantity
//           }
//         }
//       }
//     );
//     return res.sendStatus(200);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// }

// async function CartCheckout(req: Request, res: Response) {
//   if (!bLogin(req.session)) {
//     return res.status(400).send('User not login.');
//   }

//   try {
//     const db = await MongoDb();
//     await db.collection('gifts-carts').updateOne(
//       { _id: req.session.user[0]._id },
//       {
//         $set: { modifiedOn: new Date() },
//         $pull: {
//           products: {
//             productId: req.body.productId,
//             quantity: req.body.quantity
//           }
//         }
//       }
//     );
//     return res.sendStatus(200);
//   } catch (e) {
//     return res.status(500).send(e);
//   }
// }

// export { DeleteCart, DeleteCartProduct, GetCart, UpdateCartQty };
export { GetUserOrders, GetStaffOrders, NewOrder };
