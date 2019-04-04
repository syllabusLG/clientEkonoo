import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneIndividuelComponent } from './epargne-individuel.component';

describe('EpargneIndividuelComponent', () => {
  let component: EpargneIndividuelComponent;
  let fixture: ComponentFixture<EpargneIndividuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpargneIndividuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
