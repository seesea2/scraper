import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'staffs-navbar',
  templateUrl: './staffs-navbar.component.html',
  styleUrls: ['./staffs-navbar.component.css']
})
export class StaffsNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  signOut() {
    return true;
  }
}
