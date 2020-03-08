import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OxfordComponent } from './oxford/oxford.component';

const routes: Routes = [{ path: '', component: OxfordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DictionaryRoutingModule {}
