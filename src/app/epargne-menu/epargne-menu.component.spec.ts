import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneMenuComponent } from './epargne-menu.component';

describe('EpargneMenuComponent', () => {
  let component: EpargneMenuComponent;
  let fixture: ComponentFixture<EpargneMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpargneMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
