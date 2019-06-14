import Axios from 'axios';

import { Response } from '../interface';
import { busArrivalUrl, headerConfig } from './lta';
import { checkBusStopLocally } from './bus-stops';

function getBusArrival(busStopCode: string, res: Response) {
  busStopCode = busStopCode.trim();
  if (!busStopCode) {
    return res.status(400).send('Invalid BusStopCode.');
  }

  let busStopInfo = checkBusStopLocally(busStopCode);
  if (!busStopInfo) {
    return res.status(400).send('Bus Stop not found.');
  }

  let url = `${busArrivalUrl}?BusStopCode=${busStopCode}`;
  Axios.get(url, headerConfig)
    .then(respose => {
      res
        .status(200)
        .send({ busStopInfo: busStopInfo, busArrival: respose.data });
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

export default getBusArrival;
