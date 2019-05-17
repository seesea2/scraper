import * as express from 'express';
import { Response, NextFunction } from 'express';

interface Request extends express.Request {
  session: any;
}

export { Request, Response, NextFunction };
