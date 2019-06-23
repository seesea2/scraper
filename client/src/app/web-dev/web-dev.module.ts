import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WebDevRoutingModule } from './web-dev-routing.module';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ContactComponent, HomeComponent],
  imports: [SharedModule, WebDevRoutingModule]
})
export class WebDevModule {}
