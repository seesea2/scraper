import Axios from 'axios';

import { Response } from '../interface';

const ltaAccountKey = '6sVzf9zXRaCgkJUdjxIw2A==';
const config = {
  headers: {
    AccountKey: ltaAccountKey
  }
};

const busArrivalUrl =
  'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2';

function getBusArrival(busStopCode: string, res: Response) {
  if (!busStopCode) {
    return res.status(400).send('Invalid BusStopCode.');
  }

  let url = `${busArrivalUrl}?BusStopCode=${busStopCode}`;
  Axios.get(url, config)
    .then(respose => {
      res.status(200).send(respose.data);
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

export { getBusArrival };
