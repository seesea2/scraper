import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { StaffsNavbarComponent } from './staffs-navbar.component';

describe('StaffsNavbarComponent', () => {
  let component: StaffsNavbarComponent;
  let fixture: ComponentFixture<StaffsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StaffsNavbarComponent],
      imports: [MatToolbarModule, MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});