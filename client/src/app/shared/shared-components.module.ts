import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontawesomeIcons } from './ng-fontawesome-icons';

import { TestingLinksComponent } from './testing-links/testing-links.component';
import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [
    CategoriesTreeComponent,
    SendMessageComponent,
    TestingLinksComponent
  ],
  imports: [SharedModule],
  exports: [
    SharedModule,
    CategoriesTreeComponent,
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
