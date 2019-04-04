import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePictureVersoComponent } from './take-picture-verso.component';

describe('TakePictureVersoComponent', () => {
  let component: TakePictureVersoComponent;
  let fixture: ComponentFixture<TakePictureVersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePictureVersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePictureVersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
