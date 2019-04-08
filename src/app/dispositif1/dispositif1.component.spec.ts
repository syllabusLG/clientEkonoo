import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif1Component } from './dispositif1.component';

describe('Dispositif1Component', () => {
  let component: Dispositif1Component;
  let fixture: ComponentFixture<Dispositif1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
