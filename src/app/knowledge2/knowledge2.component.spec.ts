import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge2Component } from './knowledge2.component';

describe('Knowledge2Component', () => {
  let component: Knowledge2Component;
  let fixture: ComponentFixture<Knowledge2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
