import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { httpOptions } from '../http-interface';

@Injectable({
  providedIn: 'root'
})
export class StaffsAdminService {
  constructor(private httpClient: HttpClient) {}

  newStaff(formGroup: FormGroup): Observable<any> {
    let user = {
      uid: formGroup.controls.uid.value.trim(),
      pwd: formGroup.controls.pwd.value,
      firstName: formGroup.controls.firstName.value.trim(),
      lastName: formGroup.controls.lastName.value.trim(),
      email: formGroup.controls.email.value.trim(),
      address: formGroup.controls.address.value.trim()
    };
    console.log(user);
    return this.httpClient.post(
      '/api/gifts/staffs/admin/newStaff',
      user,
      httpOptions
    );
  }
}
