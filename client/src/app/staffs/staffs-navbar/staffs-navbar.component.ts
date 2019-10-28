import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'staffs-navbar',
  templateUrl: './staffs-navbar.component.html',
  styleUrls: ['./staffs-navbar.component.css']
})
export class StaffsNavbarComponent implements OnInit {
  bLogin: boolean;

  constructor(private usersService: UsersService) {
    usersService.bLogin$.subscribe(data => {
      this.bLogin = data;
    });
  }

  ngOnInit() {}

  logout() {
    this.usersService.logout();
  }
}
