import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiscalit1Component } from './fiscalit1.component';

describe('Fiscalit1Component', () => {
  let component: Fiscalit1Component;
  let fixture: ComponentFixture<Fiscalit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fiscalit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiscalit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
