import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulier2Component } from './versement-regulier2.component';

describe('VersementRegulier2Component', () => {
  let component: VersementRegulier2Component;
  let fixture: ComponentFixture<VersementRegulier2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulier2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
