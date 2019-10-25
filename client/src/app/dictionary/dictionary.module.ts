import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DictionaryRoutingModule } from './dictionary-routing.module';

import { OxfordComponent } from './oxford/oxford.component';

@NgModule({
  declarations: [OxfordComponent],
  imports: [SharedModule, DictionaryRoutingModule]
})
export class DictionaryModule {}
