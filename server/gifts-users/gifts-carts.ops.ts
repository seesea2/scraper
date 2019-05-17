import { DbCollection, MongoDb, ObjectID } from '../mongodb-ops';
import { Request, Response } from '../interface';
import { randomString } from '../string-ops';

import { bLogin } from './gifts-users.ops';
import { CartItem } from './users-interface';
import {
  DeleteInventoryReservation,
  ReserveInventory
} from '../gifts-products/gifts-products-inventory.ops';
import { NewOrder } from '../gifts-orders/gifts-orders.ops';

async function GetCart(session: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(403).send('User not login');
  }

  try {
    const db = await DbCollection('gifts-carts');
    const cart = await db.findOne({ _id: new ObjectID(session.user._id) });
    console.log(cart);
    return res.status(200).send(cart);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddToCart(session: any, body: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(403).send('User not login');
  }

  try {
    const db = await DbCollection('gifts-carts');
    let rslt = await db.updateOne(
      { _id: new ObjectID(session.user._id) },
      { $pull: { products: { productId: new ObjectID(body.product._id) } } }
    );
    rslt = await db.updateOne(
      { _id: new ObjectID(session.user._id) },
      {
        $push: {
          products: {
            productId: new ObjectID(body.product._id),
            quantity: body.qty,
            name: body.product.name,
            price: body.product.price
          }
        }
      },
      { upsert: true }
    );
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function UpdateCartQty(req: Request, res: Response) {
  if (!bLogin(req.session)) {
    res.status(403).send('User not login.');
  }
  if (!req.body.productId || !req.body.qty) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const db = await MongoDb();
    const rslt = await db.collection('gifts-carts').updateOne(
      {
        _id: req.session.user._id,
        'products.productId': req.body.productId
      },
      {
        $set: {
          'products.$.qty': req.body.qty,
          modifiedOn: new Date()
        }
      }
    );
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteCart(session: any, res: Response) {
  if (!bLogin(session)) {
    return res.status(400).send('User not login.');
  }

  try {
    const db = await DbCollection('gifts-carts');
    db.deleteOne({ _id: new ObjectID(session.user._id) });
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteInCart(session: any, _id: string, res: Response) {
  if (!bLogin(session)) {
    return res.status(400).send('User not login.');
  }

  try {
    const db = await DbCollection('gifts-carts');
    let rslt = await db.updateOne(
      { _id: new ObjectID(session.user._id) },
      { $pull: { products: { productId: new ObjectID(_id) } } }
    );
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function CartCheckout(req: Request, res: Response) {
  if (
    !req.body.cart ||
    !req.body.cart.customer ||
    !req.body.cart.customer.name ||
    !req.body.cart.customer.mobile ||
    !req.body.cart.customer.address
  ) {
    return res.status(400).send('Invalid customer information.');
  }
  if (req.body.cart.total <= 0) {
    return res.status(400).send('No product to checkout.');
  }

  let bMember: boolean = bLogin(req.session);

  let id = '';
  if (bMember) {
    id = req.session.user._id;
  } else {
    id = randomString(20);
  }
  const cartItems: CartItem[] = req.body.cart.cartItems;
  const customer = req.body.cart.customer;

  try {
    // reserve inventory, it throw error in case of failure.
    await ReserveInventory(id, cartItems);

    let insertRslt = await NewOrder(customer, cartItems);
    if (insertRslt.result.n <= 0) {
      await DeleteInventoryReservation(id);
      throw 'Create new order failed.';
    }

    let updateRslt = await DeleteInventoryReservation(id);
    console.log(updateRslt);

    if (bMember) {
      const dbCarts = await DbCollection('gifts-carts');
      let deleteRslt = await dbCarts.deleteOne({ _id: new ObjectID(id) });
    }

    return res.status(200).send({ orderId: id });
  } catch (e) {
    console.error(e);
    return res.status(500).send(e);
  }
}

export {
  AddToCart,
  CartCheckout,
  DeleteCart,
  DeleteInCart,
  GetCart,
  UpdateCartQty
};
