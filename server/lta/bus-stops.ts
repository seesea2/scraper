import Axios from 'axios';

import { Response } from '../interface';
import { busStopsUrl, headerConfig } from './lta';
import { BusStopInfo } from './bus-stops-interface';

let busStops: BusStopInfo[] = [];

async function getBusStopsFromLta(skip?: number): Promise<BusStopInfo[]> {
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

async function getAllBusStops() {
  try {
    let skip = 0;
    let newBusStops: BusStopInfo[] = [];
    do {
      newBusStops = await getBusStopsFromLta(skip);
      let temp = busStops;
      busStops = temp.concat(newBusStops);
      skip += 500;
    } while (newBusStops.length === 500);
    console.log('Total bus stops: ' + busStops.length);
  } catch (e) {
    busStops = [];
    getAllBusStops();
  }
}
getAllBusStops();

function checkBusStopLocally(busStopCode: string) {
  if (!busStopCode) {
    return;
  }
  for (let i = 0; i < busStops.length; i++) {
    if (busStopCode === busStops[i].BusStopCode) {
      return busStops[i];
    }
  }
  return;
}

function getBusStopInfo(busStopCode: string, res: Response) {
  if (!busStopCode) {
    return res.status(400).send('Invalid Bus Stop Code.');
  }
  let busStopInfo = checkBusStopLocally(busStopCode);
  if (busStopInfo) {
    return res.status(200).send(busStopInfo);
  }
  return res.status(400).send('Bus Stop Info not found.');
}

function getNearbyBusStops(latitude, longitude, res: Response) {
  if (!latitude || !longitude) {
    return res.status(400).send('Invalid coordinate.');
  }

  let nearbyStops = [];
  const R = 6371;
  for (let i = 0; i < busStops.length; i++) {
    let dLat = ((busStops[i].Latitude - latitude) * Math.PI) / 180;
    let dLong = ((busStops[i].Longitude - longitude) * Math.PI) / 180;

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((busStops[i].Latitude * Math.PI) / 180) *
        Math.cos((latitude * Math.PI) / 180) *
        Math.sin(busStops[i].Longitude / 2) *
        Math.sin(longitude / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let dist = R * c * 1000;
    if (Math.abs(dist) < 300) {
      nearbyStops.push(busStops[i]);
    }
  }
  res.status(200).send(nearbyStops);
}
export default {
  busStops,
  checkBusStopLocally,
  getBusStopInfo,
  getNearbyBusStops
};
