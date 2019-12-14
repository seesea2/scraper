import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { BrowseComponent } from './browse.component';

const giftsBrowseRoutes: Routes = [
  { path: '', children: [{ path: '', component: BrowseComponent }] }
];

@NgModule({
  declarations: [BrowseComponent],
  imports: [SharedModule, RouterModule.forChild(giftsBrowseRoutes)]
})
export class GiftsBrowseModule {}
