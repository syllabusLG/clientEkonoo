import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AversionRisque2Component } from './aversion-risque2.component';

describe('AversionRisque2Component', () => {
  let component: AversionRisque2Component;
  let fixture: ComponentFixture<AversionRisque2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AversionRisque2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AversionRisque2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
