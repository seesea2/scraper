import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faLeaf,
  faSignInAlt,
  faSignOutAlt,
  faUser,
  faKey,
  faAnchor,
  faFileWord,
  faPaperPlane,
  faChevronDown,
  faShoppingCart,
  faChevronRight,
  faTrash,
  faHeart,
  faSearch,
  faPlay,
  faCheck,
  faChevronCircleUp,
  faPhone,
  faEnvelope,
  faMapMarker,
  faAlignJustify,
  faInfo,
  faIdCard,
  faIdCardAlt,
  faEnvelopeOpen,
  faMobileAlt,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedin,
  faWeixin
} from '@fortawesome/free-brands-svg-icons';

import { NgBootstrapModule } from './ng-bootstrap.module';
import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';

import { CategoriesTreeComponent } from './categories-tree/categories-tree.component';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [CategoriesTreeComponent, SendMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBootstrapModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [CookieService],
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
    SendMessageComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAlignJustify,
      faAnchor,
      faCheck,
      faChevronCircleUp,
      faChevronDown,
      faChevronRight,
      faDesktop,
      faEnvelope,
      faEnvelopeOpen,
      faFileWord,
      faHeart,
      faIdCardAlt,
      faLeaf,
      faMapMarker,
      faMobileAlt,
      faKey,
      faPaperPlane,
      faPhone,
      faPlay,
      faSearch,
      faShoppingCart,
      faSignInAlt,
      faSignOutAlt,
      faTrash,
      faUser,
      faInfo
    );
    library.addIcons(faFacebook, faTwitter, faWhatsapp, faLinkedin, faWeixin);
  }
}
