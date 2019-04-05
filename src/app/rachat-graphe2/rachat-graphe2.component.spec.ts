import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RachatGraphe2Component } from './rachat-graphe2.component';

describe('RachatGraphe2Component', () => {
  let component: RachatGraphe2Component;
  let fixture: ComponentFixture<RachatGraphe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachatGraphe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachatGraphe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
