export interface Order {
  id: number;
  user: { userId: number; address: string; telephone: string };
  productsList: { productId: number; price: number }[];
  note: string;
  createdOn: Date;
}
