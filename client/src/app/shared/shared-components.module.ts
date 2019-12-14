import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared.module';
import { MaterialModule } from './material.module';
import { fontawesomeIcons } from './ng-fontawesome-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { TestingLinksComponent } from './testing-links/testing-links.component';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';
import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [
    CategoriesTreeComponent,
    GoBackButtonComponent,
    SendMessageComponent,
    TestingLinksComponent
  ],
  imports: [SharedModule, MaterialModule],
  exports: [
    SharedModule,
    MaterialModule,
    CategoriesTreeComponent,
    GoBackButtonComponent,
    SendMessageComponent,
    TestingLinksComponent
  ]
})
export class SharedComponentsModule {
  constructor(library: FaIconLibrary) {
    fontawesomeIcons.forEach(icon => {
      library.addIcons(icon);
    });
  }
}
