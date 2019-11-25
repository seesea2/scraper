import { Component, OnInit } from '@angular/core';

import { ProductsApiService } from '../../core/services/products-api.service';
import { Product, Category } from '../../core/products-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productSvc: ProductsApiService) {}

  ngOnInit() {
    this.products = [];
    this.getProducts();
  }

  getProducts() {
    this.productSvc.getProducts().subscribe(
      data => {
        data.forEach(p => {
          console.log(`${p.name}   ${p.img}`);
        });
        this.products = data;
      },
      err => {
        this.products = [];
      }
    );
  }
}
