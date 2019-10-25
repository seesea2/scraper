import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  sendMessageFormGroup = new FormGroup({
    name: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });
  msgRslt: string;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.msgRslt = '';
  }

  sendMessage() {
    let params = {
      name: this.sendMessageFormGroup.controls.name.value,
      mobile: this.sendMessageFormGroup.controls.mobile.value,
      email: this.sendMessageFormGroup.controls.email.value,
      message: this.sendMessageFormGroup.controls.message.value
    };
    alert('send')
    this.usersService.sendMessage(params).subscribe(data => {
      this.msgRslt = 'Message sent.';
      alert('ok');
    });
  }
}
