import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SendHttpRoutingModule } from './send-http-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, SendHttpRoutingModule]
})
export class SendHttpModule {}
