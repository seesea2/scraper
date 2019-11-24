import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLinksComponent } from './testing-links.component';

describe('TestingLinksComponent', () => {
  let component: TestingLinksComponent;
  let fixture: ComponentFixture<TestingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
