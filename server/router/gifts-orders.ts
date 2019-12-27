import { Router } from 'express';

import { Request, Response } from '../interface';
import {
  GetUserOrders,
  GetStaffOrders,
  NewOrder
} from '../gifts-orders/gifts-orders.ops';

const giftsOrdersRouter = Router();

giftsOrdersRouter.get('/userOrders', (req: Request, res: Response) => {
  if (!req.session || !req.session.user) {
    return res.sendStatus(401);
  }
  GetUserOrders(req.session, res);
});

// all order for staffs' processing.
giftsOrdersRouter.get('/staffOrders', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff) {
    return res.sendStatus(401);
  }
  GetStaffOrders(req.session, res);
});

// new order from customer.
giftsOrdersRouter.post('', (req: Request, res: Response) => {
  NewOrder(req, res);
});

// update order status by staff follow-up.
giftsOrdersRouter.put('/updateStatus', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (!req.body.new_status || !req.body.sno || !req.body.order_no) {
    return res.status(400).send({ message: 'Failed. Pleaes review inputs.' });
  }

  const param = {
    1: req.body.order_no,
    2: req.body.sno,
    3: Date.now(),
    4: req.session.staff.id,
    5: req.body.new_status,
    6: req.body.note || null
  };
  return res.status(200).send({ message: 'ok' });
});

// staff to update contact info of the order.
giftsOrdersRouter.put('/updateContact', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (!req.body.order_no) {
    return res.status(400).send({ message: 'Order_no empty.' });
  } else if (
    !req.body.email ||
    !req.body.email.includes('@') ||
    !req.body.email.includes('.') ||
    req.body.email.includes('/') ||
    req.body.email.includes('\\')
  ) {
    return res.status(400).send({ message: 'Invalid email.' });
  } else if (!req.body.name) {
    return res.status(400).send({ message: 'Invalid name.' });
  }

  const param = {
    1: req.body.name,
    2: req.body.email,
    3: req.body.mobile || null,
    4: req.body.company || null,
    5: req.body.mobile2 || null,
    6: req.body.addr || null,
    7: req.body.order_no
  };
  return res.status(200).send({ message: 'ok' });
});

// staff to change order details e.g. price, qty, in case users changed mind.
// staff may change status of specific product of the order.
giftsOrdersRouter.put('/updateOrderItem', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }

  if (!req.body.order_no) {
    return res.status(400).send({ message: 'Failed. Invalid Order No.' });
  }
  if (!req.body.sno || req.body.sno === '') {
    return res.status(400).send({ message: 'Failed. Invalid Order Sno.' });
  }

  const param = {
    1: req.body.new_sale_price,
    2: req.body.new_qty,
    3: req.body.new_status,
    4: req.body.order_no,
    5: req.body.sno
  };
  return res.status(200).send({ message: 'ok' });
});

export default giftsOrdersRouter;
