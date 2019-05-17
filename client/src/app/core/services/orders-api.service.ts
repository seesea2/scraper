import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {
  constructor(private httpClient: HttpClient) {}

  getOrder(orderId: string) {
    return this.httpClient.get<any>('/api/gifts/users/order');
  }
}
