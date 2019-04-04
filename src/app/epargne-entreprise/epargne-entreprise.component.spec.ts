import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneEntrepriseComponent } from './epargne-entreprise.component';

describe('EpargneEntrepriseComponent', () => {
  let component: EpargneEntrepriseComponent;
  let fixture: ComponentFixture<EpargneEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpargneEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
