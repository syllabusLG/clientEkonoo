import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RisquesComponent } from './risques.component';

describe('RisquesComponent', () => {
  let component: RisquesComponent;
  let fixture: ComponentFixture<RisquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
