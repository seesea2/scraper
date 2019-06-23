import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GiftsNavbarComponent } from './gifts-navbar.component';

describe('GiftsNavbarComponent', () => {
  let component: GiftsNavbarComponent;
  let fixture: ComponentFixture<GiftsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GiftsNavbarComponent],
      imports: [MatBadgeModule, MatToolbarModule, MatButtonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
