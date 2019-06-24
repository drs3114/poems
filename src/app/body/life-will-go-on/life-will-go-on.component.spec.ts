import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeWillGoOnComponent } from './life-will-go-on.component';

describe('LifeWillGoOnComponent', () => {
  let component: LifeWillGoOnComponent;
  let fixture: ComponentFixture<LifeWillGoOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeWillGoOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeWillGoOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
