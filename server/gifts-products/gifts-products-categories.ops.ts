import { Response } from '../interface';
import { SqliteAll, SqliteRun } from '../db-ops/sqlite-ops';

let globalCategories: any = [];
let globalSamplesOfCategories: any = [];
let globalCategoryJson: any[] = [];

async function GetCategories(res: Response) {
  if (globalCategories.length) {
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
    return res.status(400).send({ message: 'Invalid name.' });
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
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(200).send({ message: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteCategory(query: any, res: Response) {
  if (!query.category_id) {
    return res.status(400).send({ message: 'Invalid input.' });
  }

  try {
    let sql = `select count(*) from giftsProducts where category_id='${query.category_id}';`;
    let num = await SqliteAll(sql);
    if (num && num[0] > 0) {
      return res.status(403).send({ message: 'The category is not empty.' });
    }
    sql = `delete from giftsProductsCategories where category_id='${query.category_id}';`;
    let result = await SqliteRun(sql);
    if (result) {
      globalCategories = [];
      globalSamplesOfCategories = [];
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'failed' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function UpdateCategory(body: any, res: Response) {
  if (!body.category_id) {
    return res.status(400).send({ message: 'Invalid category_id.' });
  }
  if (!body.name) {
    return res.status(400).send({ message: 'Invalid category name.' });
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
        .send({ message: 'The category name already exists.' });
    }

    sql = `update giftsProductsCategories ${update} where category_id=${body.category_id}`;
    let result = await SqliteRun(sql);
    if (result) {
      globalCategories = [];
      globalSamplesOfCategories = [];
      return res.status(200).send({ message: 'ok' });
    }
    return res.status(500).send({ message: 'failed' });
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

interface CategoryJson {
  category_id: number;
  children: CategoryJson[];
}

async function arrangeCategories() {
  try {
    const sql = `select * from giftsProductsCategories;`;
    globalCategories = await SqliteAll(sql);

    globalCategoryJson = [];
    for (let i = 0; i < globalCategories.length; i++) {
      if (!globalCategories[i].parent_id) {
        globalCategoryJson.push({
          category_id: globalCategories[i].category_id,
          children: []
        });
        globalCategories[i].added = true;
      }
    }

    let processed = false;
    do {
      processed = false;
      globalCategories.forEach((element: any) => {
        if (element.added) {
          return;
        }
        globalCategoryJson.forEach(arrangedCategory => {
          processed = processed || testChildParent(element, arrangedCategory);
        });
      });
      // console.log(processed);
    } while (processed);

    // console.log('arranged categories: ', globalCategoryJson);
  } catch (e) {
    console.log(e);
  }
}

function testChildParent(child: any, parent: CategoryJson): boolean {
  if (child.parent_id === parent.category_id) {
    parent.children.push({
      category_id: child.category_id,
      children: []
    });
    child.added = true;
    return true;
  }

  let rslt = false;
  for (let i = 0; i < parent.children.length; i++) {
    rslt = testChildParent(child, parent.children[i]);
    if (rslt) {
      parent.children[i].children.push({
        category_id: child.category_id,
        children: []
      });
      child.added = true;
      return true;
    }
  }
  return false;
}

arrangeCategories();
