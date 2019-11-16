export interface Category {
  name: string;
  parent: string;
  category: string;
}

export interface CategoryWithSamples {
  _id: { category: string };
  products: [];
}

export interface Product {
  id: number;
  _id: any;
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

export class CategoryNode {
  name: string;
  parent: string;
  category: string;
  children: null | CategoryNode[];
}

export class CategoryFlatNode {
  constructor(
    public expandable: boolean,
    public name: string,
    public category: string,
    public level: number
  ) {}
}

export interface InventoryItem {
  _id: string;
  qty: number;
}
