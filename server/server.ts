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
  console.log(req.headers['host'], req.url);
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
});
app.get('/mail', (req: Request, res: Response) => {
  let host = req.headers['host'].replace(':443', ':444');
  res.writeHead(301, {
    Location: `https://${host}${req.url}`
  });
  res.end();
});

// Server static files from /client
app.use(express.static(join(__dirname, '/client')));
app.use(
  express.static(join(__dirname, '/client/assets'), { dotfiles: 'allow' })
);

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
  cert: fs.readFileSync(join(__dirname, './sslforfree/certificate.crt')),
  key: fs.readFileSync(join(__dirname, './sslforfree/private.key')),
  ca: fs.readFileSync(join(__dirname, './sslforfree/ca_bundle.crt'))
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
      let host = req.headers['host'].replace(':8000', ':443');
      console.log(host);
      res.writeHead(301, {
        Location: `https://${host}${req.url}`
      });
      res.end();
    } catch (e) {
      console.log('Error to redirect: ', req.headers, req.rawHeaders, req.url);
      if (res) {
        res.sendStatus(400);
      }
    }
  })
  .listen(8000);
