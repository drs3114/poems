import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IVeLostMyVoiceComponent } from './i-ve-lost-my-voice.component';

describe('IVeLostMyVoiceComponent', () => {
  let component: IVeLostMyVoiceComponent;
  let fixture: ComponentFixture<IVeLostMyVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IVeLostMyVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IVeLostMyVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
