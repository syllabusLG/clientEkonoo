import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge9Component } from './knowledge9.component';

describe('Knowledge9Component', () => {
  let component: Knowledge9Component;
  let fixture: ComponentFixture<Knowledge9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
