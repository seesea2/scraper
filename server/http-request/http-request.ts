import Axios from 'axios';

import { Request, Response } from '../interface';

function Delete(body: any, res: Response) {
  let url = body.url;
  if (body.querys && body.querys.length > 0) {
    url += '?';
    for (let i = 0; i < body.querys.length; ++i) {
      url += body.query[i];
      url += '=';
      url += body.queryValue[i];
    }
  }
  Axios.delete(url)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(e => {
      res.status(400).send(e);
    });
}
function Post(req: Request, res: Response) {
  console.log('in get details');

  console.log('req.headers', req.headers);
  console.log('req.params', req.params);
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  let headers = {};

  return res.status(200).send(req);
  let url: string = req.body.url;
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
  Axios.get(url, headers).then(response => {
    res.send(response.data);
  });
}
function Put(req: Request, res: Response) {
  Axios.put(req.body.url).then(response => {
    res.send(response.data);
  });
}
function Get(req: Request, res: Response) {
  Axios.post(req.body.url).then(response => {
    res.send(response.data);
  });
}

export { Delete, Get, Post, Put };
