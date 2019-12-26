import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgBootstrapModule } from './ng-bootstrap.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWeixin
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    // NgBootstrapModule,
    NgbModule,
    // NgbCarouselModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    // NgBootstrapModule,
    NgbModule,
    FontAwesomeModule,
    // NgbCarouselModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    const icons = [faWhatsapp, faFacebook, faTwitter, faLinkedin, faWeixin];
    // icons.forEach(icon => {
    library.addIcons(icons[0]);
    //, faFacebook, faTwitter, faLinkedin, faWeixin);
    // });
  }
}
