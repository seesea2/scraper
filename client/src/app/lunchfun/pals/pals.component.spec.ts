import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PalsComponent } from './pals.component';

describe('PalsComponent', () => {
  let component: PalsComponent;
  let fixture: ComponentFixture<PalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalsComponent],
      imports: [MatCardModule, MatCheckboxModule,MatFormFieldModule]
    });
    component = TestBed.get(PalsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
