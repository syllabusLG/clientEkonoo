import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneRetraiteColComponent } from './epargne-retraite-col.component';

describe('EpargneRetraiteColComponent', () => {
  let component: EpargneRetraiteColComponent;
  let fixture: ComponentFixture<EpargneRetraiteColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpargneRetraiteColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneRetraiteColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
