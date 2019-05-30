import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutComponent } from './checkout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

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
