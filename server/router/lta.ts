import { Router } from 'express';

import { Request, Response } from '../interface';
import getBusArrival from '../lta/bus-arrival';
import { getBusStopInfo, getNearbyBusStops } from '../lta/bus-stops';

// url: /api/lta/bus
const busRouter = Router();

busRouter.get('/busArrival/:busStopCode', (req: Request, res: Response) => {
  getBusArrival(req.params.busStopCode, res);
});

busRouter.get('/busStop/:busStopCode', (req: Request, res: Response) => {
  getBusStopInfo(req.params.busStopCode, res);
});

busRouter.get('/nearbyBusStops', (req: Request, res: Response) => {
  getNearbyBusStops(req.query.latitude, req.query.longitude, res);
});

export { busRouter };
