import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceDriverComponent } from './view-licence-driver.component';

describe('ViewLicenceDriverComponent', () => {
  let component: ViewLicenceDriverComponent;
  let fixture: ComponentFixture<ViewLicenceDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
