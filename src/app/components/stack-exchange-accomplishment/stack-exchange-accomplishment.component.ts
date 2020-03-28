import { Component, OnInit } from '@angular/core';
import { AccomplishmentsService } from 'src/app/services/accomplishments.service';
import { StackExchange } from 'src/app/models/stack-exchange';
import { Observable } from 'rxjs';
import { StaticStoreService } from 'src/app/services/static-store.service';

@Component({
    selector: 'app-stack-exchange-accomplishment',
    templateUrl: './stack-exchange-accomplishment.component.html',
    styleUrls: ['./stack-exchange-accomplishment.component.scss']
})
export class StackExchangeAccomplishmentComponent implements OnInit {

    public stackExchangeUser$: Observable<StackExchange.User>;
    constructor(private accomplishmentsService: AccomplishmentsService, private staticStoreService: StaticStoreService) { }

    ngOnInit() {
        this.staticStoreService.getResume().subscribe(resume=>{
            if(!resume.candidate.stackOverflowUsername) return;
            this.stackExchangeUser$ =
                this.accomplishmentsService.GetStackExchangeUser(resume.candidate.stackOverflowUsername, StackExchange.SITE);
        })
    }

}
