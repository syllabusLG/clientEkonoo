import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif4Component } from './dispositif4.component';

describe('Dispositif4Component', () => {
  let component: Dispositif4Component;
  let fixture: ComponentFixture<Dispositif4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
