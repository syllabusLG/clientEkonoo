import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuel3Component } from './versement-ponctuel3.component';

describe('VersementPonctuel3Component', () => {
  let component: VersementPonctuel3Component;
  let fixture: ComponentFixture<VersementPonctuel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
