import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./material/material.module";
import { GoBackButtonComponent } from "./go-back-button/go-back-button.component";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import {
  faAnchor,
  faChevronLeft,
  faHeart,
  faLeaf,
  faPlay,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [GoBackButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    GoBackButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(faIconLib: FaIconLibrary) {
    faIconLib.addIcons(
      faAnchor,
      faChevronLeft,
      faHeart,
      faLeaf,
      faPlay,
      faSearch
    );
  }
}
