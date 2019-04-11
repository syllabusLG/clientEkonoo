import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuel4Component } from './versement-ponctuel4.component';

describe('VersementPonctuel4Component', () => {
  let component: VersementPonctuel4Component;
  let fixture: ComponentFixture<VersementPonctuel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
