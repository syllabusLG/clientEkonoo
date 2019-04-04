import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancementAComponent } from './lancement-a.component';

describe('LancementAComponent', () => {
  let component: LancementAComponent;
  let fixture: ComponentFixture<LancementAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancementAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancementAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
