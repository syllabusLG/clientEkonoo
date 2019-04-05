import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoard3Component } from './on-board3.component';

describe('OnBoard3Component', () => {
  let component: OnBoard3Component;
  let fixture: ComponentFixture<OnBoard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
