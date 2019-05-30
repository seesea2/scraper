import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTreeModule } from '@angular/material/tree';

import { CategoriesTreeComponent } from './categories-tree.component';

describe('CategoriesTreeComponent', () => {
  let component: CategoriesTreeComponent;
  let fixture: ComponentFixture<CategoriesTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesTreeComponent],
      imports: [MatTreeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
