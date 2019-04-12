import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulier4Component } from './versement-regulier4.component';

describe('VersementRegulier4Component', () => {
  let component: VersementRegulier4Component;
  let fixture: ComponentFixture<VersementRegulier4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulier4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulier4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
