import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { GiftsHomeComponent } from './gifts-home.component';

@Component({ selector: 'home-carousel', template: '' })
class HomeCarouselComponent {}
@Component({ selector: 'home-about', template: '' })
class HomeAboutComponent {}
@Component({ selector: 'home-categories', template: '' })
class HomeCategoriesComponent {}
@Component({ selector: 'home-contact', template: '' })
class HomeContactComponent {}

describe('HomeComponent', () => {
  let component: GiftsHomeComponent;
  let fixture: ComponentFixture<GiftsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GiftsHomeComponent,
        HomeCarouselComponent,
        HomeAboutComponent,
        HomeCategoriesComponent,
        HomeContactComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
