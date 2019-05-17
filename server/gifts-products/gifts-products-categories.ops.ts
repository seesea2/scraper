import { Response } from '../interface';
import { ObjectID, DbCollection } from '../mongodb-ops';

let globalCategories = [];
let globalSamplesOfCategories = [];

async function GetCategories(res: Response) {
  try {
    const categories = await GetCategoriesByLevel(0);
    return res.status(200).send(categories);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetSamplesOfCategories(res: Response) {
  if (globalSamplesOfCategories.length > 0) {
    return res.status(200).send(globalSamplesOfCategories);
  }
  try {
    globalSamplesOfCategories = await GetSamples();
    return res.status(200).send(globalSamplesOfCategories);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddCategory(body: any, res: Response) {
  if (!body.name || !body.category) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const dbCollection = await DbCollection('gifts-products-catalog');
    await dbCollection.insertOne({ name: body.name, category: body.category });
    globalCategories = [];
    globalSamplesOfCategories = [];
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteCategory(query: any, res: Response) {
  if (!query._id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const dbCollection = await DbCollection('gifts-products-catalog');
    await dbCollection.deleteOne({ _id: new ObjectID(query._id) });
    globalCategories = [];
    globalSamplesOfCategories = [];
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

// @level:
// 0 - all;  1 - 1st level;  2 - 2nd and above levels
async function GetCategoriesByLevel(level: number) {
  if (globalCategories.length <= 0) {
    try {
      globalCategories = await GetCategoriesFromDb();
    } catch (e) {
      throw e;
    }
  }

  if (level === 0) {
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

async function GetCategoriesFromDb() {
  try {
    const dbCollection = await DbCollection('gifts-products-catalog');
    globalCategories = await dbCollection
      .find()
      .sort('category', 1)
      .toArray();
    return globalCategories;
  } catch (e) {
    throw { errMsg: 'Get categories from database failed.' };
  }
}

async function GetSamples() {
  try {
    const dbCollection = await DbCollection('gifts-products');
    let docs = null;
    docs = await dbCollection
      .aggregate([
        { $sort: { _id: -1 } },
        {
          $group: {
            _id: { category: '$category' },
            products: {
              $push: {
                _id: '$_id',
                category: '$category',
                img: '$img'
              }
            }
          }
        },
        {
          $project: {
            _id: '$_id',
            products: {
              $slice: [
                '$products',
                4 // max number of elements returned from the start of the array
              ]
            }
          }
        }
      ])
      .toArray();
    return docs;
  } catch (e) {
    console.log(e);
    return { errMsg: 'Get products failed.' };
  }
}

export { AddCategory, DeleteCategory, GetCategories, GetSamplesOfCategories };
