import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoard2Component } from './on-board2.component';

describe('OnBoard2Component', () => {
  let component: OnBoard2Component;
  let fixture: ComponentFixture<OnBoard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
