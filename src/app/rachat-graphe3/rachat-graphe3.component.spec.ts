import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RachatGraphe3Component } from './rachat-graphe3.component';

describe('RachatGraphe3Component', () => {
  let component: RachatGraphe3Component;
  let fixture: ComponentFixture<RachatGraphe3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachatGraphe3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachatGraphe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
