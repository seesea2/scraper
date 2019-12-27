import * as express from 'express';
import * as session from 'express-session';
import { createServer } from 'https';
import { join } from 'path';
import { readFileSync } from 'fs';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { Request, Response, NextFunction } from './interface';
import apiRouter from './router/api-router';
import { randomString } from './string-ops/random';

// Express server
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: randomString(20),
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
app.all('/*', (req: Request, res: Response) => {
  return res.status(404).send({ message: 'Page not found.' });
});
// error handling - 2
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send({ message: 'Issue happened. Please retry later!' });
});

app.listen(8080, () => {
  console.log('Listening HTTP on port 8080.');
});

const httpsOptions = {
  key: readFileSync(join(__dirname, '/../localhost.key')),
  cert: readFileSync(join(__dirname, '/../localhost.crt'))
};
createServer(httpsOptions, app).listen(8443, () => {
  console.log('Listening HTTPS on port 8443.');
});
