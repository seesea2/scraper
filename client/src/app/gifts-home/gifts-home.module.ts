import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
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
  imports: [SharedModule, RouterModule.forChild(giftsHomeRoutes)],
  exports: [GiftsHomeComponent]
})
export class GiftsHomeModule {}
