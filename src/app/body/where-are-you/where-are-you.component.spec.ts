import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereAreYouComponent } from './where-are-you.component';

describe('WhereAreYouComponent', () => {
  let component: WhereAreYouComponent;
  let fixture: ComponentFixture<WhereAreYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereAreYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereAreYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
