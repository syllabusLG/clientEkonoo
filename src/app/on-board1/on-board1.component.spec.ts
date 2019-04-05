import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoard1Component } from './on-board1.component';

describe('OnBoard1Component', () => {
  let component: OnBoard1Component;
  let fixture: ComponentFixture<OnBoard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
