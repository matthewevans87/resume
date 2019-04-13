import { Component, OnInit, Input } from '@angular/core';
import { AdditionalExperience } from 'src/app/models/resume';

@Component({
    selector: 'app-additional-experience',
    templateUrl: './additional-experience.component.html',
    styleUrls: ['./additional-experience.component.scss']
})
export class AdditionalExperienceComponent implements OnInit {

    @Input()
    public additionalExperience: AdditionalExperience;

    constructor() { }

    ngOnInit() {
    }

}
