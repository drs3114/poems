import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldIComponent } from './should-i.component';

describe('ShouldIComponent', () => {
  let component: ShouldIComponent;
  let fixture: ComponentFixture<ShouldIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
