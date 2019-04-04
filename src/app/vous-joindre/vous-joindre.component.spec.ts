import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VousJoindreComponent } from './vous-joindre.component';

describe('VousJoindreComponent', () => {
  let component: VousJoindreComponent;
  let fixture: ComponentFixture<VousJoindreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VousJoindreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VousJoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
