import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Knowledge5Component } from './knowledge5.component';

describe('Knowledge5Component', () => {
  let component: Knowledge5Component;
  let fixture: ComponentFixture<Knowledge5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Knowledge5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Knowledge5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
