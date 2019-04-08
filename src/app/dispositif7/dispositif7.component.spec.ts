import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif7Component } from './dispositif7.component';

describe('Dispositif7Component', () => {
  let component: Dispositif7Component;
  let fixture: ComponentFixture<Dispositif7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
