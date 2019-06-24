import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhBraveSoldierComponent } from './oh-brave-soldier.component';

describe('OhBraveSoldierComponent', () => {
  let component: OhBraveSoldierComponent;
  let fixture: ComponentFixture<OhBraveSoldierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhBraveSoldierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhBraveSoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
