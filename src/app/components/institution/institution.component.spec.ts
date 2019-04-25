import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionComponent } from './institution.component';

describe('InstitutionComponent', () => {
    let component: InstitutionComponent;
    let fixture: ComponentFixture<InstitutionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InstitutionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InstitutionComponent);
        component = fixture.componentInstance;
        component.institution = {
            name: 'some institution'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
