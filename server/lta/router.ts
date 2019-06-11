import { Router } from 'express';

import { Request, Response } from '../interface';
import { getBusArrival } from './bus-arrival';

const busRouter = Router();

busRouter.get('/busArrival/:id', (req: Request, res: Response) => {
  getBusArrival(res, req.body.busStopCode, req.body.serviceNo);
});

export { busRouter };
