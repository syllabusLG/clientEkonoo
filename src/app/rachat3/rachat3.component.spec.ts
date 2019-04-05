import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rachat3Component } from './rachat3.component';

describe('Rachat3Component', () => {
  let component: Rachat3Component;
  let fixture: ComponentFixture<Rachat3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rachat3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rachat3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
