import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { HomeComponent } from './home.component';

@Component({ selector: 'lunchfun-pals', template: '' })
class PalsComponent {}
@Component({ selector: 'lunchfun-stats', template: '' })
class StatsComponent {}
@Component({ selector: 'lunchfun-records', template: '' })
class RecordsComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PalsComponent,
        StatsComponent,
        RecordsComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
