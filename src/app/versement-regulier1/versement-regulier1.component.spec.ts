import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulier1Component } from './versement-regulier1.component';

describe('VersementRegulier1Component', () => {
  let component: VersementRegulier1Component;
  let fixture: ComponentFixture<VersementRegulier1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulier1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
