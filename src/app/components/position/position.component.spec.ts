import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionComponent } from './position.component';
import { ResponsibilityComponent } from '../responsibility/responsibility.component';
import { ProjectComponent } from '../project/project.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { AccomplishmentComponent } from '../accomplishment/accomplishment.component';

describe('PositionComponent', () => {
    let component: PositionComponent;
    let fixture: ComponentFixture<PositionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PositionComponent, ResponsibilityComponent, ProjectComponent, TestimonialComponent, AccomplishmentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PositionComponent);
        component = fixture.componentInstance;
        component.position = {

        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
