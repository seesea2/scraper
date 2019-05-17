import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHomeComponent } from './cart-home.component';
import {
  MatListModule,
  MatFormFieldModule,
  MatCardModule
} from '@angular/material';

describe('HomeComponent', () => {
  let component: CartHomeComponent;
  let fixture: ComponentFixture<CartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartHomeComponent],
      imports: [MatListModule, MatFormFieldModule, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
