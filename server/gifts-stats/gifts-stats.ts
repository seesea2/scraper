import { Router } from 'express';

import { Request, Response } from '../interface';

const statsRouter = Router();

statsRouter.get('/salesman', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (
    !req.body.salesmanType ||
    !req.body.topNo ||
    !req.body.fromDate ||
    !req.body.toDate
  ) {
    return res.status(400).send('Failed. Invalid input.');
  }

  const params = {
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    topNo: req.body.topNo
  };
  return res.status(200).send({ result: 'ok' });
});

statsRouter.get('/turnover', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (!req.body.turnoverType || !req.body.fromDate || !req.body.toDate) {
    return res.status(400).send('Failed. Invalid input.');
  }

  const params = {
    type: req.body.turnoverType,
    $fromDate: req.body.fromDate,
    $toDate: req.body.toDate
  };
  return res.status(200).send({ result: 'ok' });
});

statsRouter.get('/bestseller', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (
    !req.body.best_seller_type ||
    !req.body.topNo ||
    !req.body.fromDate ||
    !req.body.toDate
  ) {
    return res.status(400).send('Failed. Invalid input.');
  }

  const params = {
    $fromDate: req.body.fromDate,
    $toDate: req.body.toDate,
    $topNo: req.body.topNo
  };
  return res.status(200).send({ result: 'ok' });
});

statsRouter.get('/buyer', (req: Request, res: Response) => {
  if (!req.session || !req.session.staff.id) {
    return res.sendStatus(401);
  }
  if (
    !req.body.buyerType ||
    !req.body.topNo ||
    !req.body.fromDate ||
    !req.body.toDate
  ) {
    return res.status(400).send('Failed. Invalid input.');
  }

  const param = {
    $fromDate: req.body.fromDate,
    $toDate: req.body.toDate,
    $topNo: req.body.topNo
  };
  return res.status(200).send({ result: 'ok' });
});

export { statsRouter };
