import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faLeaf,
  faSearch,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import { GoBackButtonComponent } from './go-back-button/go-back-button.component';

@NgModule({
  declarations: [GoBackButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // NgbModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    // NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    GoBackButtonComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faLeaf, faSearch, faChevronLeft);
  }
}
