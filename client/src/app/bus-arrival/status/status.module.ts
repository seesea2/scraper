import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { StatusComponent } from './status.component';

const routes: Routes = [{ path: '', component: StatusComponent }];

@NgModule({
  declarations: [StatusComponent],
  imports: [SharedComponentsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusModule {}
