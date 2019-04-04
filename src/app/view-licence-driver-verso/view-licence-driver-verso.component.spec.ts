import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLicenceDriverVersoComponent } from './view-licence-driver-verso.component';

describe('ViewLicenceDriverVersoComponent', () => {
  let component: ViewLicenceDriverVersoComponent;
  let fixture: ComponentFixture<ViewLicenceDriverVersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLicenceDriverVersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLicenceDriverVersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
