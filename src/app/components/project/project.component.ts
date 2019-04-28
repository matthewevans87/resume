import { Component, OnInit, Input } from '@angular/core';
import { Project, Technology } from 'src/app/models/resume';
import { Observable } from 'rxjs';
import { StaticStoreService } from 'src/app/services/static-store.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    @Input() public project: Project;

    public technologies$: Observable<Technology[]>;

    constructor(
        private staticStoreService: StaticStoreService
    ) { }

    ngOnInit() {
        this.technologies$ = this.staticStoreService.getTermsDictionary()
            .pipe(
                map(termsDictionary => {
                    return this.project.technologyNames.map(term => {
                        let tech = termsDictionary[term.toLowerCase()] as Technology;
                        if (!tech) {
                            tech = {
                                name: term
                            };
                        }
                        return tech;
                    });
                })
            );
    }



}
