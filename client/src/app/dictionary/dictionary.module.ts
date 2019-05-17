import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { OxfordComponent } from './oxford/oxford.component';

const routes: Routes = [{ path: '', component: OxfordComponent }];

@NgModule({
  declarations: [OxfordComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class DictionaryModule {}
