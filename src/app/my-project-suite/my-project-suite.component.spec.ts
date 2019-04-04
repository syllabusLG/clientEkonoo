import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectSuiteComponent } from './my-project-suite.component';

describe('MyProjectSuiteComponent', () => {
  let component: MyProjectSuiteComponent;
  let fixture: ComponentFixture<MyProjectSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
