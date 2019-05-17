import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutComponent } from './checkout.component';
import { MatStepperModule, MatFormFieldModule } from '@angular/material';

describe('CheckoutComponent', () => {
  let component: CartCheckoutComponent;
  let fixture: ComponentFixture<CartCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartCheckoutComponent],
      imports: [MatStepperModule, MatFormFieldModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
