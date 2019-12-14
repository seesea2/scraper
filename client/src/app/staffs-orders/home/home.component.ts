import { Component, OnInit } from '@angular/core';

import { Order } from '@core/order-interface';
import { OrdersApiService } from '@core/services/orders-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orders: Order[];
  constructor(private ordersApi: OrdersApiService) {}

  ngOnInit() {
    this.ordersApi.getActiveOrders().subscribe(
      data => {
        this.orders = data;
      },
      err => {
        this.orders = [];
      }
    );
  }
}
