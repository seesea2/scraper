import { Response } from '../interface';
import { SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

let globalCategories: any = [];
let globalSamplesOfCategories: any = [];

async function GetCategories(res: Response) {
  if (globalCategories.length > 0) {
    return res.status(200).send(globalCategories);
  }
  try {
    const sql = `select * from giftsProductsCategories;`;
    globalCategories = await SqliteAll(sql);
    return res.status(200).send(globalCategories);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetSamplesOfCategories(res: Response) {
  if (globalSamplesOfCategories.length > 0) {
    return res.status(200).send(globalSamplesOfCategories);
  }
  try {
    let sql = `SELECT * from giftsProducts as g
              where (
                select count(*) from giftsProducts as g1
                where g1.category_id = g.category_id and g1.createdOn >= g.createdOn
              ) <= 3;`;
    globalSamplesOfCategories = await SqliteAll(sql);
    return res.status(200).send(globalSamplesOfCategories);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddCategory(body: any, res: Response) {
  if (!body.name) {
    return res.status(400).send('Invalid name.');
  }

  try {
    let fields = 'name';
    let values = '"' + body.name + '"';
    if (body.details) {
      fields += ',details';
      values += ',"' + body.details + '"';
    }
    fields += ',createdOn';
    values += ',' + Date.now();
    const sql = `insert into giftsProductsCategories (${fields}) values (${values})`;
    let result = await SqliteRun(sql);
    if (result) {
      globalCategories = [];
      globalSamplesOfCategories = [];
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(200).send({ result: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteCategory(query: any, res: Response) {
  if (!query.category_id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    let sql = `select count(*) from giftsProducts where category_id='${query.category_id}';`;
    let num = await SqliteAll(sql);
    if (num && num[0] > 0) {
      return res.status(403).send({ result: 'The category is not empty.' });
    }
    sql = `delete from giftsProductsCategories where category_id='${query.category_id}';`;
    let result = await SqliteRun(sql);
    if (result) {
      globalCategories = [];
      globalSamplesOfCategories = [];
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send({ result: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function UpdateCategory(body: any, res: Response) {
  if (!body.category_id) {
    return res.status(400).send('Invalid category_id.');
  }
  if (!body.name) {
    return res.status(400).send('Invalid category name.');
  }

  let update = `set name='${body.name}'`;
  if (body.details) {
    update += `,details='${body.details}'`;
  }
  if (body.parent_id) {
    update += `,parent_id=${body.parent_id}`;
  } else {
    update += `,parent_id=0`;
  }

  try {
    let sql = `select count(*) cnt from giftsProductsCategories where name='${body.name}'`;
    let num = await SqliteAll(sql);
    if (num && num[0].cnt > 0) {
      return res
        .status(400)
        .send({ result: 'The category name already exists.' });
    }

    sql = `update giftsProductsCategories ${update} where category_id=${body.category_id}`;
    let result = await SqliteRun(sql);
    if (result) {
      globalCategories = [];
      globalSamplesOfCategories = [];
      return res.status(200).send({ result: 'ok' });
    }
    return res.status(500).send({ result: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export {
  AddCategory,
  DeleteCategory,
  GetCategories,
  GetSamplesOfCategories,
  UpdateCategory
};
