import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from 'src/app/models/resume';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

    @Input() public testimonial: Testimonial;
    constructor() { }

    ngOnInit() {
    }

}
