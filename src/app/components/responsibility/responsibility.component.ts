import { Component, OnInit, Input } from '@angular/core';
import { Responsibility } from 'src/app/models/resume';

@Component({
    selector: 'app-responsibility',
    templateUrl: './responsibility.component.html',
    styleUrls: ['./responsibility.component.scss']
})
export class ResponsibilityComponent implements OnInit {

    @Input('responsibility') public responsibility: Responsibility;
    constructor() { }

    ngOnInit() {
    }

}
