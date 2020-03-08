import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { join } from 'path';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import CheckOxfordEntries from './dictionary/dictionary';
import getBusArrival from './lta/bus-arrival';
import { getBusStopInfo, getNearbyBusStops } from './lta/bus-stops';

// Express server
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/dictionary/oxford/:word', (req: Request, res: Response) => {
  CheckOxfordEntries(req.params.word, res);
});
app.get('/lta/bus/busArrival/:busStopCode', (req: Request, res: Response) => {
  getBusArrival(req.params.busStopCode, res);
});
app.get('/lta/bus/busStop/:busStopCode', (req: Request, res: Response) => {
  getBusStopInfo(req.params.busStopCode, res);
});

app.get('/lta/bus/nearbyBusStops', (req: Request, res: Response) => {
  getNearbyBusStops(req.query.latitude, req.query.longitude, res);
});

app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});

// Server static files from /client
app.use(express.static(join(__dirname, '/client')));

// error handling - 1
app.all('/*', (req: Request, res: Response) => {
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});
app.all('/*', (req: Request, res: Response) => {
  return res.status(404).send({ message: 'Page not found.' });
});
// error handling - 2
app.use((req: Request, res: Response, next: NextFunction) => {
  return res
    .status(500)
    .send({ message: 'Issue happened. Please retry later!' });
});

app.listen(8080, () => {
  console.log('Listening HTTP on port 8080.');
});
