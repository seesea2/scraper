import { Router } from 'express';
import { Request, Response } from './interface';

import { busRouter } from './lta/router';
import httpRouter from './http-request/router';
import {
  dictionaryRouter,
  lunchfunRouter
} from './lunchfun-and-dictionary/router';
import giftsRouter from './api-gifts-router';
import SendEmail from './email/email.ops';

const apiRouter = Router();

// url: /api
apiRouter.use('/dictionary', dictionaryRouter);
apiRouter.use('/http', httpRouter);
apiRouter.use('/lunchfun', lunchfunRouter);
apiRouter.use('/lta/bus', busRouter);
apiRouter.use('/gifts', giftsRouter);

// msg from users; forward it via nodemailer.
apiRouter.post('/msg', (req: Request, res: Response) => {
  SendEmail(req.body, res);
});

// error handling
apiRouter.all('/*', (req: Request, res: Response) => {
  return res.status(400).send('Invalid Request');
});

export default apiRouter;
