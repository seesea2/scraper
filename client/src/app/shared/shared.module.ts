import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

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
    library.addIcons(faAnchor);
    library.addIcons(faChevronCircleUp);
    library.addIcons(faChevronDown);
    library.addIcons(faChevronRight);
    library.addIcons(faLeaf);
    library.addIcons(faKey);
    library.addIcons(faPaperPlane);
    library.addIcons(faShoppingCart);
    library.addIcons(faSignInAlt);
    library.addIcons(faSignOutAlt);
    library.addIcons(faTrash)
    library.addIcons(faUser);
    library.addIcons(faFileWord);
    library.addIcons(faHeart);
    library.addIcons(faSearch);
    library.addIcons(faPlay);
    library.addIcons(faCheck);
    library.addIcons(faPhone);
    library.addIcons(faEnvelope);
  }
}
