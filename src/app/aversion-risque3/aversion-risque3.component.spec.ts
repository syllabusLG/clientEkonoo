import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AversionRisque3Component } from './aversion-risque3.component';

describe('AversionRisque3Component', () => {
  let component: AversionRisque3Component;
  let fixture: ComponentFixture<AversionRisque3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AversionRisque3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AversionRisque3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
