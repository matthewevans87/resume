import { Component, OnInit, Input } from '@angular/core';
import { Institution, Certificate } from 'src/app/models/resume';
import * as _ from 'lodash';

@Component({
    selector: 'app-institution',
    templateUrl: './institution.component.html',
    styleUrls: ['./institution.component.scss']
})
export class InstitutionComponent implements OnInit {

    @Input('institution') public institution: Institution;
    constructor() { }

    ngOnInit() {

    }


    public get certificatesByType(): any {

        const certsByType = _(this.institution.certificates).groupBy('type').map(certsInGroup => {
            return {
                type: certsInGroup[0].type,
                certificates: certsInGroup
            };
        }).value();
        return certsByType;
    }


}
