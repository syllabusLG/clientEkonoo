import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulier3Component } from './versement-regulier3.component';

describe('VersementRegulier3Component', () => {
  let component: VersementRegulier3Component;
  let fixture: ComponentFixture<VersementRegulier3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulier3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulier3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
