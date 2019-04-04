import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancementBComponent } from './lancement-b.component';

describe('LancementBComponent', () => {
  let component: LancementBComponent;
  let fixture: ComponentFixture<LancementBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancementBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancementBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
