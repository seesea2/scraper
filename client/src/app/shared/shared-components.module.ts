import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { fontawesomeIcons } from './ng-fontawesome-icons';
import {
  // FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import { TestingLinksComponent } from './testing-links/testing-links.component';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';

@NgModule({
  declarations: [TestingLinksComponent, GoBackButtonComponent],
  imports: [SharedModule, MaterialModule],
  exports: [
    SharedModule,
    MaterialModule,
    TestingLinksComponent,
    GoBackButtonComponent
  ]
})
export class SharedComponentsModule {
  constructor(library: FaIconLibrary) {
    fontawesomeIcons.forEach(icon => {
      library.addIcons(icon);
    });
  }
}
