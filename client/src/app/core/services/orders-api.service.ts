import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../order-interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {
  constructor(private httpClient: HttpClient) {}

  getOrder(orderId: string) {
    this.httpClient.get<Order>('/api/gifts/users/order').subscribe(
      data => {
        return data;
      },
      err => {
        return;
      }
    );
  }

  getActiveOrders() {
    return this.httpClient.get<Order[]>('/api/gifts/users/order');
  }
}
