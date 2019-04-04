import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AversionRisque4Component } from './aversion-risque4.component';

describe('AversionRisque4Component', () => {
  let component: AversionRisque4Component;
  let fixture: ComponentFixture<AversionRisque4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AversionRisque4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AversionRisque4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
