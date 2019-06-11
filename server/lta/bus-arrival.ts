import Axios from 'axios';

import { Response } from '../interface';
import { BusArrivalReturn } from './bus-arrival-interface';

const ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';

const busArrivalUrl =
  'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';

const config = {
  headers: {
    AccountKey: ltaAccountKey
  }
};

function getBusArrival(res: Response, busStopCode: string, serviceNo?: string) {
  if (!busStopCode) {
    return res.status(400).send('Invalid BusStopCode.');
  }

  let url = busArrivalUrl + '?BusStopCode=' + busStopCode;
  if (serviceNo) {
    url += '&serviceNo=' + serviceNo;
  }
  Axios.get(url, config)
    .then(respose => {
      console.log(respose.status);
      console.log(respose.statusText);
      res.status(200).send(respose.data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

export { getBusArrival };
