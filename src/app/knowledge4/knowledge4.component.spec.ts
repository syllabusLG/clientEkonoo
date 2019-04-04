import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge4Component } from './knowledge4.component';

describe('Knowledge4Component', () => {
  let component: Knowledge4Component;
  let fixture: ComponentFixture<Knowledge4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
