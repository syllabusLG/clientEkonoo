import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiscality4Component } from './fiscality4.component';

describe('Fiscality4Component', () => {
  let component: Fiscality4Component;
  let fixture: ComponentFixture<Fiscality4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fiscality4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiscality4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
