import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge7Component } from './knowledge7.component';

describe('Knowledge7Component', () => {
  let component: Knowledge7Component;
  let fixture: ComponentFixture<Knowledge7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
