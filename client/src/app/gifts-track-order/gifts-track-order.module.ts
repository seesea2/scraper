import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TrackOrderComponent } from './track-order.component';

const TrackOrderRouter: Routes = [{ path: '', component: TrackOrderComponent }];
@NgModule({
  declarations: [TrackOrderComponent],
  imports: [ SharedModule, RouterModule.forChild(TrackOrderRouter)]
})
export class GiftsTrackOrderModule {}
