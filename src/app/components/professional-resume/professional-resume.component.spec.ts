import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalResumeComponent } from './professional-resume.component';

describe('ProfessionalResumeComponent', () => {
  let component: ProfessionalResumeComponent;
  let fixture: ComponentFixture<ProfessionalResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
