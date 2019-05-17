import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSidenavModule
} from '@angular/material';

import { BrowseComponent } from './browse.component';

@Component({ selector: 'categories-tree', template: '' })
class CategoriesTreeComponent {}

describe('BrowseComponent', () => {
  let component: BrowseComponent;
  let fixture: ComponentFixture<BrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseComponent, CategoriesTreeComponent],
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatSidenavModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
