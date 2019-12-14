import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '@core/services/users.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid: string;
  pwd: string;
  errMsg: string;

  constructor(private usersService: UsersService, private location: Location) {}

  ngOnInit() {
    this.uid = '';
    this.pwd = '';
    this.errMsg = '';
  }

  login(uid: string, pwd: string) {
    this.usersService.login(uid, pwd).subscribe(
      (data: any) => {
        this.errMsg = '';

        this.usersService.sendLoginStatus(true);
        this.location.back();
      },
      (err: any) => {
        this.errMsg = err.result;
        this.usersService.sendLoginStatus(false);
      }
    );
  }
}
