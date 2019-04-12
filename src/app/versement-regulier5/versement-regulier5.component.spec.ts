import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulier5Component } from './versement-regulier5.component';

describe('VersementRegulier5Component', () => {
  let component: VersementRegulier5Component;
  let fixture: ComponentFixture<VersementRegulier5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulier5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulier5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
