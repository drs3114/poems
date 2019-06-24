import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayAwakeWithMeComponent } from './stay-awake-with-me.component';

describe('StayAwakeWithMeComponent', () => {
  let component: StayAwakeWithMeComponent;
  let fixture: ComponentFixture<StayAwakeWithMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayAwakeWithMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayAwakeWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
