import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif3Component } from './dispositif3.component';

describe('Dispositif3Component', () => {
  let component: Dispositif3Component;
  let fixture: ComponentFixture<Dispositif3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
