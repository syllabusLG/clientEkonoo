import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuel5Component } from './versement-ponctuel5.component';

describe('VersementPonctuel5Component', () => {
  let component: VersementPonctuel5Component;
  let fixture: ComponentFixture<VersementPonctuel5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuel5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
