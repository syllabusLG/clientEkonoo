import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitHistoriqueNavComponent } from './mes-produit-historique-nav.component';

describe('MesProduitHistoriqueNavComponent', () => {
  let component: MesProduitHistoriqueNavComponent;
  let fixture: ComponentFixture<MesProduitHistoriqueNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProduitHistoriqueNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProduitHistoriqueNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
