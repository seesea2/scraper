import { NgModule } from '@angular/core';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { MaterialModule } from '@shared/material.module';
import { GiftsRoutingModule } from './gifts-routing.module';
import { AuthModule } from '../auth/auth.module';

import { GiftsNavbarComponent } from './gifts-navbar/gifts-navbar.component';
import { RouterOutletComponent } from './router-outlet/router-outlet.component';

@NgModule({
  declarations: [GiftsNavbarComponent, RouterOutletComponent],
  imports: [SharedComponentsModule, MaterialModule, GiftsRoutingModule, AuthModule],
  exports: []
})
export class GiftsModule {}
