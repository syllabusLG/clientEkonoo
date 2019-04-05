import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rachat1Component } from './rachat1.component';

describe('Rachat1Component', () => {
  let component: Rachat1Component;
  let fixture: ComponentFixture<Rachat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rachat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rachat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
