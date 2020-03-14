import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryComponent } from './dictionary.component';

@NgModule({
  declarations: [DictionaryComponent],
  imports: [CommonModule, SharedModule, DictionaryRoutingModule]
})
export class DictionaryModule {}
