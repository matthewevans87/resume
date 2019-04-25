import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalExperienceComponent } from './additional-experience.component';
import { ProjectComponent } from '../project/project.component';
import { AccomplishmentComponent } from '../accomplishment/accomplishment.component';

describe('AdditionalExperienceComponent', () => {
    let component: AdditionalExperienceComponent;
    let fixture: ComponentFixture<AdditionalExperienceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdditionalExperienceComponent, ProjectComponent, AccomplishmentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdditionalExperienceComponent);
        component = fixture.componentInstance;
        component.additionalExperience = {
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
