import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/services/users.service';
import { CartApiService } from '../../core/services/cart-api.service';

@Component({
  selector: 'gifts-navbar',
  templateUrl: './gifts-navbar.component.html',
  styleUrls: ['./gifts-navbar.component.css']
})
export class GiftsNavbarComponent implements OnInit {
  bLoginStatus: boolean;
  cartItemCount: number;

  constructor(
    private usersService: UsersService,
    private cartApiService: CartApiService
  ) {
    this.usersService.bLogin$.subscribe(data => {
      this.bLoginStatus = data;
    });
    this.cartApiService.cartItemCount$.subscribe(data => {
      this.cartItemCount = data;
    });
  }

  ngOnInit() {}

  logout() {
    this.usersService.logout(false);
  }
}
