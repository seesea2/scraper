import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';

import { httpOptions } from '../http-interface';
import {
  Category,
  CategoryWithSamples,
  InventoryItem,
  Product
} from '../products-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>('/api/gifts/products/categories');
  }

  getCategoriesWithSamples() {
    return this.http.get<CategoryWithSamples[]>('/api/gifts/products/samples');
  }

  getProducts(category?: string) {
    if (category) {
      const params = new HttpParams().set('category', category);
      return this.http.get<Product[]>('/api/gifts/products', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        params: params
      });
    } else {
      return this.http.get<Product[]>('/api/gifts/products');
    }
  }

  getOneProduct(id: string) {
    if (!id) {
      return;
    }
    const params = new HttpParams().set('_id', id);
    return this.http.get<Product>('/api/gifts/products/product', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: params
    });
  }

  getInventory() {
    return this.http.get<InventoryItem[]>('/api/gifts/products/inventory');
  }

  updateInventory(_id: string, qty: number) {
    return this.http.put(
      '/api/gifts/products/inventory',
      { _id: _id, qty: qty },
      httpOptions
    );
  }
}
