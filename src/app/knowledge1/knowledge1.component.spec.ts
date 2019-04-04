import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge1Component } from './knowledge1.component';

describe('Knowledge1Component', () => {
  let component: Knowledge1Component;
  let fixture: ComponentFixture<Knowledge1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
