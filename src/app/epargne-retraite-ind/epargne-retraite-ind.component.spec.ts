import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneRetraiteIndComponent } from './epargne-retraite-ind.component';

describe('EpargneRetraiteIndComponent', () => {
  let component: EpargneRetraiteIndComponent;
  let fixture: ComponentFixture<EpargneRetraiteIndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpargneRetraiteIndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneRetraiteIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
