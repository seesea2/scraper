import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { StatusComponent } from './status.component';

const routes: Routes = [{ path: '', component: StatusComponent }];

@NgModule({
  declarations: [StatusComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusModule {}
