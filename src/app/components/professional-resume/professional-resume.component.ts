import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { Observable } from 'rxjs';
import { StaticStoreService } from 'src/app/services/static-store.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-professional-resume',
    templateUrl: './professional-resume.component.html',
    styleUrls: ['./professional-resume.component.scss']
})
export class ProfessionalResumeComponent implements OnInit {
    public resume$: Observable<Resume>;
    constructor(private staticStoreService: StaticStoreService, private route: ActivatedRoute, private titleService: Title) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.staticStoreService.name = params.name || "resume";
            this.resume$ = this.staticStoreService.getResume();
        });
    }
}