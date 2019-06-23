import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

import { GiftsRootComponent } from './root.component';

@Component({ selector: 'gifts-navbar', template: '' })
class GiftsNavbarComponent {}

describe('RootComponent', () => {
  let component: GiftsRootComponent;
  let fixture: ComponentFixture<GiftsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiftsRootComponent, GiftsNavbarComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
