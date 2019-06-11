// import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

interface RequestInterface extends Request {
  session: any;
}

export { RequestInterface as Request, Response, NextFunction };
