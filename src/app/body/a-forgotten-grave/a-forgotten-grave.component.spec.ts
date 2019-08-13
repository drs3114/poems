import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AForgottenGraveComponent } from './a-forgotten-grave.component';

describe('AForgottenGraveComponent', () => {
  let component: AForgottenGraveComponent;
  let fixture: ComponentFixture<AForgottenGraveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AForgottenGraveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AForgottenGraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
