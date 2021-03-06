import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/resume';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    @Input('company') public company: Company;

    @Input('isFirst') public isFirst: boolean;

    constructor() { }

    ngOnInit() { }
}
