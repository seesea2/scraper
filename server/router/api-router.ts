import { Router } from 'express';
import { Request, Response } from '../interface';

import { busRouter } from './lta';
import dictionaryRouter from './dictionary';
import giftsRouter from './gifts';
import httpRouter from './http-request';
import SendEmail from '../email/email.ops';

const apiRouter = Router();

// url: /api
apiRouter.use('/lta/bus', busRouter);
apiRouter.use('/dictionary', dictionaryRouter);
apiRouter.use('/gifts', giftsRouter);
// apiRouter.use('/http', httpRouter);

// msg from users; forward it via nodemailer.
apiRouter.post('/msg', (req: Request, res: Response) => {
  SendEmail(req.body, res);
});

// error handling
apiRouter.all('/*', (req: Request, res: Response) => {
  return res.status(400).send('Invalid Request');
});

export default apiRouter;
