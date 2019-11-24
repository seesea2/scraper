import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { fontawesomeIcons } from './ng-fontawesome-icons';
import { MaterialModule } from './material.module';

import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { TestingLinksComponent } from './testing-links/testing-links.component';

@NgModule({
  declarations: [
    CategoriesTreeComponent,
    SendMessageComponent,
    TestingLinksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    FontAwesomeModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgBootstrapModule,
    MaterialModule,
    ReactiveFormsModule,
    CategoriesTreeComponent,
    SendMessageComponent,
    TestingLinksComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    fontawesomeIcons.forEach(icon => {
      library.addIcons(icon);
    });
  }
}
