import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleBoyComponent } from './little-boy.component';

describe('LittleBoyComponent', () => {
  let component: LittleBoyComponent;
  let fixture: ComponentFixture<LittleBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
