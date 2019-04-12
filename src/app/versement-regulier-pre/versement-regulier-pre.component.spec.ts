import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementRegulierPreComponent } from './versement-regulier-pre.component';

describe('VersementRegulierPreComponent', () => {
  let component: VersementRegulierPreComponent;
  let fixture: ComponentFixture<VersementRegulierPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementRegulierPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementRegulierPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
