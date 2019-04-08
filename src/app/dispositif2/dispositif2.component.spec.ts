import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif2Component } from './dispositif2.component';

describe('Dispositif2Component', () => {
  let component: Dispositif2Component;
  let fixture: ComponentFixture<Dispositif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
