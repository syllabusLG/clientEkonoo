import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuelCarteComponent } from './versement-ponctuel-carte.component';

describe('VersementPonctuelCarteComponent', () => {
  let component: VersementPonctuelCarteComponent;
  let fixture: ComponentFixture<VersementPonctuelCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuelCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuelCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
