import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accomplishment } from '../models/resume';
import { Observable } from 'rxjs';
import { StackExchange } from '../models/stack-exchange';

@Injectable({
    providedIn: 'root'
})
export class AccomplishmentsService {

    constructor(private httpClient: HttpClient) { }

    public GetStackExchangeUser(name: string, site: string): Observable<StackExchange.User> {
        const url = `https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=${name}&site=${site}`;
        return this.httpClient.get<StackExchange.User>(url)
            .pipe();
    }
}
