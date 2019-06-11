import * as axios from 'axios';

import { Request, Response } from '../interface';

function Get(req: Request, res: Response) {
  axios.get(req.body.url).then(response => {
    res.send(response.data);
  });
}
function Put(req: Request, res: Response) {
  axios.put(req.body.url).then(response => {
    res.send(response.data);
  });
}
function Delete(req: Request, res: Response) {
  axios.delete(req.body.url).then(response => {
    res.send(response.data);
  });
}
function Post(req: Request, res: Response) {
  axios.post(req.body.url).then(response => {
    res.send(response.data);
  });
}

export { Delete, Get, Post, Put };
