import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentComponent } from './accomplishment.component';
import { HttpClientModule } from '@angular/common/http';

describe('AccomplishmentComponent', () => {
    let component: AccomplishmentComponent;
    let fixture: ComponentFixture<AccomplishmentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AccomplishmentComponent],
            imports: [
                HttpClientModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccomplishmentComponent);
        component = fixture.componentInstance;
        component.accomplishment = {
            description: 'way to go!'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
