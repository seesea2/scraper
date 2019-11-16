interface Product {
  id: number;
  _id: string;
  name: string;
  price: number;
  img: string[];
  category: string;
  packaging: string;
  material: string;
  size: string;
  note: string;
  retailer: string;
  modifiedOn: Date;
}

export default Product;
