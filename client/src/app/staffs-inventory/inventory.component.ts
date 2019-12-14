import { Component, OnInit } from '@angular/core';

import { ProductsApiService } from '@core/services/products-api.service';
import { InventoryItem, Product } from '@core/products-interface';

@Component({
  selector: 'staffs-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  products: Product[];
  inventory: InventoryItem[];

  constructor(private productsApi: ProductsApiService) {}

  ngOnInit() {
    this.products = [];
    this.inventory = [];
    this.getProducts();
    this.getInventory();
  }

  getProducts() {
    this.productsApi.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  getInventory() {
    this.productsApi.getInventory().subscribe(data => {
      console.log('Inventory: ', data);
      this.inventory = data;
    });
  }

  updateInventory(_id: any, qty: string) {
    console.log(_id, qty);
    let qtyInt = parseInt(qty);
    this.productsApi.updateInventory(_id, qtyInt).subscribe(data => {
      console.log('updateInventory: ', data);
    });

    this.getInventory();
  }

  getQuantity(_id: string) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i]._id === _id) {
        return this.inventory[i].qty;
      }
    }

    return 0;
  }
}
