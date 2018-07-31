import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicResumeComponent } from './academic-resume.component';

describe('AcademicResumeComponent', () => {
  let component: AcademicResumeComponent;
  let fixture: ComponentFixture<AcademicResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
