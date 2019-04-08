import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif6Component } from './dispositif6.component';

describe('Dispositif6Component', () => {
  let component: Dispositif6Component;
  let fixture: ComponentFixture<Dispositif6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
