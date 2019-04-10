import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitObjectifComponent } from './mes-produit-objectif.component';

describe('MesProduitObjectifComponent', () => {
  let component: MesProduitObjectifComponent;
  let fixture: ComponentFixture<MesProduitObjectifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProduitObjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProduitObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
