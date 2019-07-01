import * as express from 'express';
import * as session from 'express-session';
import * as https from 'https';
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
  return res.status(200).sendFile(join(__dirname, '/client/index.html'));
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
  cert: fs.readFileSync(join(__dirname, './sslforfree/cert.pem')),
  key: fs.readFileSync(join(__dirname, './sslforfree/privkey.pem')),
  ca: fs.readFileSync(join(__dirname, './sslforfree/chain.pem'))
};
const https_server = https.createServer(httpsOptions, app);
https_server.listen(444, () => {
  console.log(`Node server listening on https port 444`);
});
