import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid: string;
  pwd: string;
  errMsg: string;

  constructor(private usersService: UsersService, private location: Location) {
    // console.log('routes.url : ', router);
  }

  ngOnInit() {
    this.uid = '';
    this.pwd = '';
    this.errMsg = '';
  }

  login(uid: string, pwd: string) {
    this.usersService.login(uid, pwd).subscribe(
      data => {
        this.errMsg = '';
        // console.log('login succeed: ', data);

        this.usersService.sendLoginStatus(true);
        if (data.bStaff) {
          // this.router.navigate(['/staffs']);
        } else {
          // this.router.navigate(['/gifts']);
        }
        this.location.back();
      },
      err => {
        this.errMsg = err;
        console.error('login failed, ', err);
        this.usersService.sendLoginStatus(false);
      }
    );
  }
}
