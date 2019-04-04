import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge8Component } from './knowledge8.component';

describe('Knowledge8Component', () => {
  let component: Knowledge8Component;
  let fixture: ComponentFixture<Knowledge8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
