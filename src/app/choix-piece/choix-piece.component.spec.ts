import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPieceComponent } from './choix-piece.component';

describe('ChoixPieceComponent', () => {
  let component: ChoixPieceComponent;
  let fixture: ComponentFixture<ChoixPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
