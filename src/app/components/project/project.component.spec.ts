import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { AccomplishmentComponent } from '../accomplishment/accomplishment.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProjectComponent', () => {
    let component: ProjectComponent;
    let fixture: ComponentFixture<ProjectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectComponent, AccomplishmentComponent],
            imports: [
                HttpClientModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectComponent);
        component = fixture.componentInstance;
        component.project = {

        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
