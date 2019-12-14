import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedComponentsModule, AuthRoutingModule],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
