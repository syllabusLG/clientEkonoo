import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge3Component } from './knowledge3.component';

describe('Knowledge3Component', () => {
  let component: Knowledge3Component;
  let fixture: ComponentFixture<Knowledge3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
