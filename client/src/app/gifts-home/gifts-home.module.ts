import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentsModule } from '@shared/shared-components.module';
import { GiftsHomeComponent } from './gifts-home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';

const giftsHomeRoutes: Routes = [{ path: '', component: GiftsHomeComponent }];

@NgModule({
  declarations: [
    GiftsHomeComponent,
    AboutComponent,
    ContactComponent,
    HomeCategoriesComponent,
    HomeCarouselComponent
  ],
  imports: [
    SharedComponentsModule,
    NgbCarouselModule,
    RouterModule.forChild(giftsHomeRoutes)
  ],
  exports: [GiftsHomeComponent]
})
export class GiftsHomeModule {}
