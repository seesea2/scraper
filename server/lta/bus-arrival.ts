import Axios from 'axios';

import { Response } from '../interface';
import { busArrivalUrl, headerConfig } from './lta';

function getBusArrival(busStopCode: string, res: Response) {
  if (!busStopCode) {
    return res.status(400).send('Invalid BusStopCode.');
  }

  let url = `${busArrivalUrl}?BusStopCode=${busStopCode}`;
  Axios.get(url, headerConfig)
    .then(respose => {
      res.status(200).send(respose.data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

export default getBusArrival;
