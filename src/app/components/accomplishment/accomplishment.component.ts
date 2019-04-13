import { Component, OnInit, Input } from '@angular/core';
import { Accomplishment } from 'src/app/models/resume';

@Component({
    selector: 'app-accomplishment',
    templateUrl: './accomplishment.component.html',
    styleUrls: ['./accomplishment.component.scss']
})
export class AccomplishmentComponent implements OnInit {

    @Input() public accomplishment: Accomplishment;
    constructor() { }

    ngOnInit() {
    }

}
