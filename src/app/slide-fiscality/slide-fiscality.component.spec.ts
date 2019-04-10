import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFiscalityComponent } from './slide-fiscality.component';

describe('SlideFiscalityComponent', () => {
  let component: SlideFiscalityComponent;
  let fixture: ComponentFixture<SlideFiscalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFiscalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFiscalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
