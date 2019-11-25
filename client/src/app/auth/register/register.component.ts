import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading: boolean;
  submitted: boolean;
  errMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private location: Location
  ) {}

  ngOnInit() {
    this.loading = false;
    this.submitted = false;
    this.errMsg = '';
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // uid: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get fg() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('Register onSubmit()');
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.errMsg = '';
    this.usersService.register(this.registerForm).subscribe(
      data => {
        console.log('Register successfully.', data);
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.errMsg = err.result;
      }
    );
  }

  cancel() {
    this.location.back();
  }
}
