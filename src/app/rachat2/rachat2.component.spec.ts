import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rachat2Component } from './rachat2.component';

describe('Rachat2Component', () => {
  let component: Rachat2Component;
  let fixture: ComponentFixture<Rachat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rachat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rachat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
