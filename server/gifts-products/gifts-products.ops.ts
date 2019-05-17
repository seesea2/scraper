import { DbCollection, MongoDb, ObjectID } from '../mongodb-ops';
import { Request, Response } from '../interface';

async function GetProduct(params: any, res: Response) {
  if (!params._id) {
    return res.status(400).send('Invalid product no.');
  }

  try {
    const db = await MongoDb();
    const product = await db
      .collection('gifts-products')
      .findOne({ _id: new ObjectID(params._id) });
    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function GetProductsByCategory(req: Request, res: Response) {
  try {
    const dbCollection = await DbCollection('gifts-products');
    let docs = null;
    if (req.query.category) {
      const regex = new RegExp(['^', req.query.category.trim()].join(''), 'i');
      docs = await dbCollection.find({ category: regex }).toArray();
    } else {
      docs = await dbCollection.find().toArray();
    }
    return res.status(200).send(docs);
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function AddProduct(body: any, res: Response) {
  if (!body.name) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const db = await MongoDb();
    await db.collection('gifts-products').insertOne({
      name: body.name,
      img: body.img,
      price: body.price,
      category: body.category,
      color: body.color,
      packaging: body.packaging,
      material: body.material,
      size: body.size,
      note: body.note,
      retailer: body.retailer,
      createdOn: new Date()
    });
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function UpdateProduct(body: any, res: Response) {
  if (!body._id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const dbProducts = await DbCollection('gifts-products');
    await dbProducts.updateOne(
      { _id: new ObjectID(body._id) },
      {
        $set: {
          modifiedOn: new Date(),
          name: body.name,
          img: body.img,
          price: body.price,
          category: body.category,
          color: body.color,
          packaging: body.packaging,
          material: body.material,
          size: body.size,
          note: body.note,
          retailer: body.retailer
        }
      }
    );
    return res.status(200).send({ result: 'ok' });
  } catch (e) {
    return res.status(500).send(e);
  }
}

async function DeleteProduct(query: any, res: Response) {
  if (!query._id) {
    return res.status(400).send('Invalid input.');
  }

  try {
    const db = await MongoDb();
    await db
      .collection('gifts-products')
      .deleteOne({ _id: new ObjectID(query._id) });
    return res.status(200).send({ result: 'ok' });
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
