import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifItemDetailsComponent } from './dispositif-item-details.component';

describe('DispositifItemDetailsComponent', () => {
  let component: DispositifItemDetailsComponent;
  let fixture: ComponentFixture<DispositifItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositifItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
