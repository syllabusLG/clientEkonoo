import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge6Component } from './knowledge6.component';

describe('Knowledge6Component', () => {
  let component: Knowledge6Component;
  let fixture: ComponentFixture<Knowledge6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
