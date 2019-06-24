import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRagingConchComponent } from './the-raging-conch.component';

describe('TheRagingConchComponent', () => {
  let component: TheRagingConchComponent;
  let fixture: ComponentFixture<TheRagingConchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheRagingConchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheRagingConchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
