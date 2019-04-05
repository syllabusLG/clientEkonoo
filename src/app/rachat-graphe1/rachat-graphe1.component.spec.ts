import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RachatGraphe1Component } from './rachat-graphe1.component';

describe('RachatGraphe1Component', () => {
  let component: RachatGraphe1Component;
  let fixture: ComponentFixture<RachatGraphe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachatGraphe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachatGraphe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
