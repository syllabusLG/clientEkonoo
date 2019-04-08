import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispositif5Component } from './dispositif5.component';

describe('Dispositif5Component', () => {
  let component: Dispositif5Component;
  let fixture: ComponentFixture<Dispositif5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dispositif5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dispositif5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
