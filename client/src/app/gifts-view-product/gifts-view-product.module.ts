import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ViewProductComponent } from './view-product.component';

const routes: Routes = [{ path: '', component: ViewProductComponent }];

@NgModule({
  declarations: [ViewProductComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class GiftsViewProductModule {}
