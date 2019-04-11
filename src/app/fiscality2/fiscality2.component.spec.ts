import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiscality2Component } from './fiscality2.component';

describe('Fiscality2Component', () => {
  let component: Fiscality2Component;
  let fixture: ComponentFixture<Fiscality2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fiscality2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiscality2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
