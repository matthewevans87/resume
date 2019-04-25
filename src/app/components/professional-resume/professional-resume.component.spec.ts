import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdditionalExperienceComponent } from '../additional-experience/additional-experience.component';
import { CompanyComponent } from '../company/company.component';
import { InstitutionComponent } from '../institution/institution.component';
import { PositionComponent } from '../position/position.component';
import { ProjectComponent } from '../project/project.component';
import { ProfessionalResumeComponent } from './professional-resume.component';
import { ResponsibilityComponent } from '../responsibility/responsibility.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { AccomplishmentComponent } from '../accomplishment/accomplishment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';


describe('ProfessionalResumeComponent', () => {
    let component: ProfessionalResumeComponent;
    let fixture: ComponentFixture<ProfessionalResumeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfessionalResumeComponent, CompanyComponent, InstitutionComponent, AdditionalExperienceComponent, PositionComponent, ProjectComponent, ResponsibilityComponent, TestimonialComponent, AccomplishmentComponent],
            imports: [
                RouterTestingModule,
                HttpClientModule
            ]
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
