import { Response } from '../interface';
import { ObjectID, DbCollection } from '../mongodb-ops';
import { SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

let globalCategories = [];
let globalSamplesOfCategories = [];

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
    globalSamplesOfCategories = await SqliteAll('');
    return res.status(200).send(globalSamplesOfCategories);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddCategory(body: any, res: Response) {
  if (!body.name) {
    return res.status(400).send('Invalid input.');
  }

  try {
    let fields = 'name,parent,category';
    let values = '"' + body.name + '"';
    if (body.parent) {
      values += ',"' + body.parent + '"';
      values += ',"' + body.parent + '/' + body.name + '"';
    } else {
      values += ',""';
      values += ',"/' + body.name + '"';
    }
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
  if (!query.category) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const sql = `delete from giftsProductsCategories where category='${query.category}';`;
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
  if (!body.org || !body.newName) {
    return res.status(400).send('Invalid input.');
  }

  try {
    // liych rename for children
    const sql1 = `select * from giftsProductsCategories where parent='${body.org.category}';`;
    let children = await SqliteAll(sql1);
    if (children) {
      children.forEach(child => {});
    }

    const sql = `update giftsProductsCategories set name='${
      body.newName
    }',category='${(body.org.parent || '') +
      '/' +
      body.newName}' where category='${body.org.category}';`;
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

// @level:
// 0 - all;  1 - 1st level;  2 - 2nd and above levels
async function GetCategoriesByLevel(level: number | null) {
  if (globalCategories.length <= 0) {
    try {
      globalCategories = await SqliteAll(
        'select * from giftsProductsCategories;'
      );
    } catch (e) {
      throw e;
    }
  }

  if (!level) {
    return globalCategories;
  }
  const returnCategories = [];
  globalCategories.forEach(cat => {
    console.log(cat.category.match(new RegExp('/', 'g')));
    if (cat.category.match(new RegExp('/', 'g')).length <= level) {
      returnCategories.push(cat);
    }
  });
  return returnCategories;
}
GetCategoriesByLevel(0);

export {
  AddCategory,
  DeleteCategory,
  GetCategories,
  GetSamplesOfCategories,
  UpdateCategory
};
