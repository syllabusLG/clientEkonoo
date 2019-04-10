import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitDetailsComponent } from './mes-produit-details.component';

describe('MesProduitDetailsComponent', () => {
  let component: MesProduitDetailsComponent;
  let fixture: ComponentFixture<MesProduitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProduitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProduitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
