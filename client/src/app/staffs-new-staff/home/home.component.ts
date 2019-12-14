import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffsAdminService } from '@core/services/staffs-admin.service';

@Component({
  selector: 'new-staff-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newStaffForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private staffAdmin: StaffsAdminService
  ) {}

  ngOnInit() {
    this.newStaffForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      uid: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(2)]],
      telephone: [''],
      mobile: [''],
      address: ['']
    });
  }

  submit() {
    this.staffAdmin.newStaff(this.newStaffForm).subscribe(
      data => {
        console.log('data: ' + data);
      },
      err => {
        console.log('err: ' + err);
      }
    );
  }
}
