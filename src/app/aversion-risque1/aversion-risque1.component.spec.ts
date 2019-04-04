import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AversionRisque1Component } from './aversion-risque1.component';

describe('AversionRisque1Component', () => {
  let component: AversionRisque1Component;
  let fixture: ComponentFixture<AversionRisque1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AversionRisque1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AversionRisque1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
