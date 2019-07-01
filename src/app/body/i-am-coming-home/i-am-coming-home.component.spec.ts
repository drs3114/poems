import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmComingHomeComponent } from './i-am-coming-home.component';

describe('IAmComingHomeComponent', () => {
  let component: IAmComingHomeComponent;
  let fixture: ComponentFixture<IAmComingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmComingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmComingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
