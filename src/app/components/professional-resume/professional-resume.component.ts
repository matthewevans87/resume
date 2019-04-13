import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { StaticStoreService } from 'src/app/services/static-store.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-professional-resume',
    templateUrl: './professional-resume.component.html',
    styleUrls: ['./professional-resume.component.scss']
})
export class ProfessionalResumeComponent implements OnInit {
    public resume$: Observable<Resume>;
    constructor(private staticStoreService: StaticStoreService) { }

    ngOnInit() {
        this.resume$ = this.staticStoreService.getResume();
    }
}
