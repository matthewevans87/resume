import { Component, OnInit, Input } from '@angular/core';
import { Accomplishment } from 'src/app/models/resume';
import { TermLinkGenerationService } from 'src/app/services/term-link-generation.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-accomplishment',
    templateUrl: './accomplishment.component.html',
    styleUrls: ['./accomplishment.component.scss']
})
export class AccomplishmentComponent implements OnInit {

    public accomplishmentDescription$: Observable<string>;

    @Input() public accomplishment: Accomplishment;
    constructor(private termLinkGenerationService: TermLinkGenerationService) { }

    ngOnInit() {
        this.accomplishmentDescription$ = this.termLinkGenerationService
            .InjectLinksForTerms(this.accomplishment.description);
    }

}
