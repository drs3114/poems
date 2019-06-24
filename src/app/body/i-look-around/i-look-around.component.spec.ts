import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ILookAroundComponent } from './i-look-around.component';

describe('ILookAroundComponent', () => {
  let component: ILookAroundComponent;
  let fixture: ComponentFixture<ILookAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ILookAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ILookAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
