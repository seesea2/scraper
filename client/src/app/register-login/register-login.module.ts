import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RegisterLoginRoutingModule } from './register-login-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule, RegisterLoginRoutingModule],
  exports: [LoginComponent, RegisterComponent]
})
export class RegisterLoginModule {}
