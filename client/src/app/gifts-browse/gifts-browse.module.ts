import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { BrowseComponent } from './browse.component';

const giftsBrowseRoutes: Routes = [
  { path: '', children: [{ path: '', component: BrowseComponent }] }
];

@NgModule({
  declarations: [BrowseComponent],
  imports: [SharedComponentsModule, RouterModule.forChild(giftsBrowseRoutes)]
})
export class GiftsBrowseModule {}
