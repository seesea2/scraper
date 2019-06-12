import { Router } from 'express';

import { Request, Response } from '../interface';
import { getBusArrival } from './bus-arrival';

// url: /api/lta/bus
const busRouter = Router();

busRouter.get('/busArrival/:busStopCode', (req: Request, res: Response) => {
  getBusArrival(req.params.busStopCode, res);
});

export { busRouter };
