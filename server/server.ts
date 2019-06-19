import * as express from 'express';
import * as session from 'express-session';
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import { join } from 'path';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { Request, Response, NextFunction } from './interface';
import apiRouter from './api-router';

// Express server
const app = express();
// const HOST = 'localhost';
// const HOST = 'insg.xyz';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'insg-yc-ly-17',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // millseconds of 24hrs  }
    }
  })
);

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response) => {
  console.log('in root');
  console.log('req.baseUrl: ', req.baseUrl);
  console.log('req.host: ', req.host);
  console.log('req.hostname: ', req.hostname);
  console.log('req.originalUrl: ', req.originalUrl);
  console.log('req.path: ', req.path);
  console.log('req.app: ', req.app);
  console.log('req.url: ', req.url);
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});

// Server static files from /client
app.use(express.static(join(__dirname, '/client')));

// error handling - 1
app.all('/*', (req: Request, res: Response) => {
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});
// error handling - 2
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send('Issue happened. Please retry later!');
});

// Start up the Node https server default port
const httpsOptions = {
  cert: fs.readFileSync(join(__dirname, '/cert/insg.crt')),
  key: fs.readFileSync(join(__dirname, '/cert/insg.key'))
};
// app.set('domain', HOST);
const https_server = https.createServer(httpsOptions, app);
https_server.listen(443, () => {
  console.log(`Node server listening on https port 443`);
});

// redirect http request to https server
http
  .createServer((req: Request, res: Response) => {
    try {
      res.writeHead(301, {
        Location: `https://${req.host}:443${req.url}`
      });
      res.end();
    } catch (e) {
      console.log('issue to redirect: ', req.headers, req.rawHeaders, req.url);
      if (res) {
        res.sendStatus(400);
      }
    }
  })
  .listen(80);
