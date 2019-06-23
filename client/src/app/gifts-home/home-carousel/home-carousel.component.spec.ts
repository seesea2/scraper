import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { HomeCarouselComponent } from './home-carousel.component';

@Component({ selector: 'ngb-carousel', template: '' })
class NgbCarouselComponent {}

describe('MainCarouselComponent', () => {
  let component: HomeCarouselComponent;
  let fixture: ComponentFixture<HomeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCarouselComponent, NgbCarouselComponent],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
