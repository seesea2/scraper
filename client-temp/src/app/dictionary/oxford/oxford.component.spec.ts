import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { OxfordComponent } from './oxford.component';

describe('OxfordComponent', () => {
  let component: OxfordComponent;
  let fixture: ComponentFixture<OxfordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OxfordComponent],
      imports: [MatCardModule, MatFormFieldModule, MatProgressSpinnerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
