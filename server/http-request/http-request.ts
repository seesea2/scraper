import * as axios from 'axios';

import { Request, Response } from '../interface';

function Get(req: Request, res: Response) {
  let url: string = req.body.url;
  let headers = {};

  if (req.body.headers) {
    headers = {
      headers: req.body.headers
    };
  }
  if (req.body.parameters) {
    url += '?';
    for (let i = 0; i < req.body.parameters.length; ++i) {
      url += req.body.parameters[i] + '=' + req.body.parameterValue[i] + '&';
    }
  }
  axios.get(url, headers).then(response => {
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
