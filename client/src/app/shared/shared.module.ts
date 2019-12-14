import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { fontawesomeIcons } from './ng-fontawesome-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
// import { SendMessageComponent } from './send-message/send-message.component';
import { TestingLinksComponent } from './testing-links/testing-links.component';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';

@NgModule({
  declarations: [
    // CategoriesTreeComponent,
    // SendMessageComponent,
    TestingLinksComponent,
    GoBackButtonComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    MatListModule,
    NgBootstrapModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    NgBootstrapModule,
    ReactiveFormsModule,
    // CategoriesTreeComponent,
    // SendMessageComponent,
    GoBackButtonComponent,
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
