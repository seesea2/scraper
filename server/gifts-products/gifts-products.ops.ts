import { SqliteAll, SqliteGet, SqliteRun } from '../db-ops/sqlite-ops';
import { Response } from '../interface';

async function GetProducts(params: any, res: Response) {
  try {
    let sql = ''
    if (params.product_id) {
       sql = `select * from giftsProducts where product_id=${params.product_id};`;
    } else {
       sql = `select * from giftsProducts where (inactive is null or inactive<>1) limit 50;`;
    }
    const products = await SqliteAll(sql);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetProductsByCategory(query: any, res: Response) {
  if (!query.category_id) {
    return res.status(400).send({ message: 'Invalid category.' });
  }
  try {
    let sql = `select * from giftsProducts where category_id='${query.category_id}' limit 50`;
    let products = await SqliteAll(sql);
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddProduct(body: any, res: Response) {
  if (!body.name) {
    return res.status(400).send({ message: 'Invalid name.' });
  }

  try {
    let fields = 'name';
    let values = '"' + body.name + '"';
    // console.log(typeof body.price);
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
    if (body.category_id) {
      fields += ',category_id';
      values += ',' + body.category_id;
    }
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
    values += ',' + Date.now();

    const sql = `insert into giftsProducts (${fields}) values (${values});`;
    let result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'failed' });
  } catch (e) {
    // console.log(e);
    return res.status(500).send(e);
  }
}

async function UpdateProduct(body: any, res: Response) {
  if (!body.product_id) {
    return res.status(400).send({ message: 'Invalid product_id.' });
  }

  try {
    let changes: string = `name='${body.name}'`;
    if (body.img) {
      changes += `,img='${body.img}'`;
    }
    if (body.price) {
      changes += `,price=${body.price}`;
    }
    if (body.category_id) {
      changes += `,category_id=${body.category_id}`;
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
    changes += `,modifiedOn=${Date.now()}`;
    const sql = `update giftsProducts set ${changes} where product_id=${body.product_id}`;
    let result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteProduct(query: any, res: Response) {
  if (!query.product_id) {
    return res.status(400).send({ message: 'Invalid product id.' });
  }

  try {
    const sql = `update giftsProducts set inactive=1 where product_id=${query.product_id};`;
    const result = await SqliteRun(sql);
    if (result) {
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export {
  AddProduct,
  DeleteProduct,
  GetProductsByCategory,
  GetProducts,
  UpdateProduct
};
