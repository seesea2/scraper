import Axios from 'axios';

import { Response } from '../interface';
import { busStopsUrl, headerConfig } from './lta';
import { BusStopInfo } from './bus-stops-interface';

let busStops: BusStopInfo[] = [];

async function getBusStops(skip?: number): Promise<BusStopInfo[]> {
  try {
    let url = busStopsUrl;
    if (skip) {
      url += `?$skip=${skip}`;
    }
    let response = await Axios.get(url, headerConfig);
    if (response.status != 200) {
      throw { status: response.status };
    }
    return response.data.value;
  } catch (e) {
    throw e;
  }
}

let skip = 0;

async function getAllBusStops() {
  let newBusStops: BusStopInfo[] = [];
  try {
    do {
      newBusStops = await getBusStops(skip);
      skip += 500;
      let temp = busStops;
      busStops = temp.concat(newBusStops);
    } while (newBusStops.length === 500);
    console.log('total bus stops: ' + busStops.length);
  } catch (e) {
    busStops = [];
    getAllBusStops();
  }
}

getAllBusStops();

function getBusStopInfo(busStopCode: string, res: Response) {
  if (!busStopCode) {
    return res.status(400).send('Invalid Bus Stop Code.');
  }
  for (let i = 0; i < busStops.length; i++) {
    if (busStopCode === busStops[i].BusStopCode) {
      return res.status(200).send(busStops[i]);
    }
  }

  return res.status(400).send('Bus Stop Info not found.');
}

export default getBusStopInfo;
