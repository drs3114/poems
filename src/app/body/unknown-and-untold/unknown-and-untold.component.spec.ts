import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownAndUntoldComponent } from './unknown-and-untold.component';

describe('UnknownAndUntoldComponent', () => {
  let component: UnknownAndUntoldComponent;
  let fixture: ComponentFixture<UnknownAndUntoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownAndUntoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownAndUntoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
