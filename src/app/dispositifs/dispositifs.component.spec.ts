import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositifsComponent } from './dispositifs.component';

describe('DispositifsComponent', () => {
  let component: DispositifsComponent;
  let fixture: ComponentFixture<DispositifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
