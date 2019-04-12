import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuel2Component } from './versement-ponctuel2.component';

describe('VersementPonctuel2Component', () => {
  let component: VersementPonctuel2Component;
  let fixture: ComponentFixture<VersementPonctuel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
