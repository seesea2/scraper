import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GiftsRoutingModule } from './gifts-routing.module';
import { AuthModule } from '../auth/auth.module';

import { GiftsRootComponent } from './root.component';
import { GiftsNavbarComponent } from './gifts-navbar/gifts-navbar.component';

@NgModule({
  declarations: [GiftsRootComponent, GiftsNavbarComponent],
  imports: [SharedModule, GiftsRoutingModule, AuthModule],
  exports: [GiftsRootComponent]
})
export class GiftsModule {}
