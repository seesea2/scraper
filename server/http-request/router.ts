import { Router } from 'express';

import { Request, Response } from '../interface';
import { Delete, Get, Post, Put } from './http-request';

const httpRouter = Router();

httpRouter.post('', (req: Request, res: Response) => {
  if (req.body.type === 'DELETE') {
    Delete(req.body, res);
  } else if (req.body.type === 'GET') {
    Get(req.body, res);
  } else if (req.body.type === 'POST') {
    Post(req.body, res);
  } else if (req.body.type === 'PUT') {
    Put(req.body, res);
  }
});

export default httpRouter;
