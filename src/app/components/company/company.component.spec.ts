import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComponent } from './company.component';
import { PositionComponent } from '../position/position.component';
import { ResponsibilityComponent } from '../responsibility/responsibility.component';
import { ProjectComponent } from '../project/project.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { AccomplishmentComponent } from '../accomplishment/accomplishment.component';

describe('CompanyComponent', () => {
    let component: CompanyComponent;
    let fixture: ComponentFixture<CompanyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompanyComponent, PositionComponent, ResponsibilityComponent, ProjectComponent, TestimonialComponent, AccomplishmentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyComponent);
        component = fixture.componentInstance;
        component.company = {
            name: 'some company'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
