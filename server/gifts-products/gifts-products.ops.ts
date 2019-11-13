import { SqliteAll, SqliteGet, SqliteRun } from '../db-ops/sqlite-ops';
import { DbCollection } from '../mongodb-ops';
import { Request, Response } from '../interface';

async function GetProduct(params: any, res: Response) {
  if (!params.id) {
    return res.status(400).send('Invalid product no.');
  }

  try {
    const sql = `select * from giftsProducts where id=${params.id};`;
    const product = await SqliteGet(sql);
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetProductsByCategory(query: any, res: Response) {
  if (!query.category) {
    return res.status(400).send({ result: 'Invalid category.' });
  }
  try {
    let ind = query.category.lastIndexOf('/');
    let name = query.category.substring(ind + 1, query.category.lenght);
    let parent = null;
    if (ind !== 0) {
      parent = query.category.substring(0, ind);
    }
    let sql: string = `select * from giftsProducts where name='${name}' and parent='${parent}'`;
    let products = await SqliteAll(sql);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddProduct(body: any, res: Response) {
  if (!body.name) {
    return res.status(400).send('Invalid name.');
  }

  try {
    let fields = '';
    let values = '';
    fields = 'name';
    values = '"' + body.name + '"';
    console.log(typeof body.price);
    if ((body.price || 0) <= 0) {
      body.price = 0;
    }
    fields += ',price';
    values += ',' + body.price;
    if ((body.qty || 0) <= 0) {
      body.qty = 0;
    }
    fields += ',qty';
    values += ',' + body.qty;
    if (!body.colour) {
      body.colour = '';
    }
    fields += ',colour';
    values += ',"' + body.colour + '"';
    if (!body.category) {
      body.category = '';
    }
    fields += ',category';
    values += ',"' + body.category + '"';
    if (!body.img) {
      body.img = '';
    }
    fields += ',img';
    values += ',"' + body.img + '"';
    if (!body.packaging) {
      body.packaging = '';
    }
    fields += ',packaging';
    values += ',"' + body.packaging + '"';
    if (!body.note) {
      body.note = '';
    }
    fields += ',note';
    values += ',"' + body.note + '"';
    if (!body.material) {
      body.material = '';
    }
    fields += ',material';
    values += ',"' + body.material + '"';
    if (!body.retailer) {
      body.retailer = '';
    }
    fields += ',retailer';
    values += ',"' + body.retailer + '"';
    fields += ',createdOn';
    // values += ',' + new Date().getTime();
    values += ',' + Date.now();

    const sql = `insert into giftsProducts (${fields}) values (${values});`;
    let result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send({ result: 'failed' });
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
}

async function UpdateProduct(body: any, res: Response) {
  if (!body.id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    let changes: string = `name='${body.name}'`;
    if (body.img) {
      changes += `,img='${body.img}'`;
    }
    if (body.price) {
      changes += `,price=${body.price}`;
    }
    if (body.category) {
      changes += `,category='${body.category}'`;
    }
    if (body.colour) {
      changes += `,colour='${body.colour}'`;
    }
    if (body.packaging) {
      changes += `,packaging='${body.packaging}'`;
    }
    if (body.material) {
      changes += `,material='${body.material}'`;
    }
    if (body.size) {
      changes += `,size='${body.size}'`;
    }
    if (body.note) {
      changes += `,note='${body.note}'`;
    }
    if (body.retailer) {
      changes += `,retailer='${body.retailer}'`;
    }
    changes += `,modifiedOn='${Date.now()}'`;
    const sql = `update giftsProducts set ${changes} where id=${body.id}`;
    let result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send({ result: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteProduct(query: any, res: Response) {
  if (!query.id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const sql = `update giftsProducts set inactive=1 where id=${query.id};`;
    const result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send({ result: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export {
  AddProduct,
  DeleteProduct,
  GetProductsByCategory,
  GetProduct,
  UpdateProduct
};
