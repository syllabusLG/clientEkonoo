import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoard5Component } from './on-board5.component';

describe('OnBoard5Component', () => {
  let component: OnBoard5Component;
  let fixture: ComponentFixture<OnBoard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
