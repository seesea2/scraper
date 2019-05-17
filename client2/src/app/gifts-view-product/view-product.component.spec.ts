import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ViewProductComponent } from './view-product.component';
import { MatProgressSpinnerModule, MatCardModule, MatFormFieldModule } from '@angular/material';

describe('ViewProductComponent', () => {
  let component: ViewProductComponent;
  let fixture: ComponentFixture<ViewProductComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ ViewProductComponent ],
        imports: [ MatProgressSpinnerModule, MatCardModule, MatFormFieldModule, FormsModule ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
