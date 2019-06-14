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
export default { getBusStopInfo, getNearbyBusStops };
