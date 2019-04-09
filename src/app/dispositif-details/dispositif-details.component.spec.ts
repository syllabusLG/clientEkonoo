import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifDetailsComponent } from './dispositif-details.component';

describe('DispositifDetailsComponent', () => {
  let component: DispositifDetailsComponent;
  let fixture: ComponentFixture<DispositifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
