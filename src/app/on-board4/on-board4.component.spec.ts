import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoard4Component } from './on-board4.component';

describe('OnBoard4Component', () => {
  let component: OnBoard4Component;
  let fixture: ComponentFixture<OnBoard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
