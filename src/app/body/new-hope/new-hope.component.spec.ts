import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHopeComponent } from './new-hope.component';

describe('NewHopeComponent', () => {
  let component: NewHopeComponent;
  let fixture: ComponentFixture<NewHopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
