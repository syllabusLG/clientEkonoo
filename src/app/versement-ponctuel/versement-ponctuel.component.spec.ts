import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementPonctuelComponent } from './versement-ponctuel.component';

describe('VersementPonctuelComponent', () => {
  let component: VersementPonctuelComponent;
  let fixture: ComponentFixture<VersementPonctuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementPonctuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementPonctuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
