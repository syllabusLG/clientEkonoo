import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge10Component } from './knowledge10.component';

describe('Knowledge10Component', () => {
  let component: Knowledge10Component;
  let fixture: ComponentFixture<Knowledge10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
