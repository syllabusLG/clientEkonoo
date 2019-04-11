import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitSettingComponent } from './mes-produit-setting.component';

describe('MesProduitSettingComponent', () => {
  let component: MesProduitSettingComponent;
  let fixture: ComponentFixture<MesProduitSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesProduitSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesProduitSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
