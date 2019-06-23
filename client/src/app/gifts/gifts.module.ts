import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GiftsRoutingModule } from './gifts-routing.module';

import { GiftsRootComponent } from './root.component';
import { GiftsNavbarComponent } from './gifts-navbar/gifts-navbar.component';

@NgModule({
  declarations: [GiftsRootComponent, GiftsNavbarComponent],
  imports: [SharedModule, GiftsRoutingModule],
  exports: [GiftsRootComponent]
})
export class GiftsModule {}
