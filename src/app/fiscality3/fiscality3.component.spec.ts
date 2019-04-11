import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiscality3Component } from './fiscality3.component';

describe('Fiscality3Component', () => {
  let component: Fiscality3Component;
  let fixture: ComponentFixture<Fiscality3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fiscality3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiscality3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
