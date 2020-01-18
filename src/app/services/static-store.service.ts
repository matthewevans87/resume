import { Injectable } from "@angular/core";
import { Resume, Term } from "../models/resume";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StaticStoreService {
  constructor(private httpClient: HttpClient) {}

  private termsDictionary$: ReplaySubject<{ [termName: string]: Term }>;
  private resume$: ReplaySubject<Resume>;

  public getResume(): Observable<Resume> {
    if (null == this.resume$) {
      this.resume$ = new ReplaySubject<Resume>(1);
      this.httpClient.get<Resume>("assets/resume.json").subscribe(this.resume$);
    }
    return this.resume$;
  }

  public getTermsDictionary(): Observable<{ [termName: string]: Term }> {
    if (null == this.termsDictionary$) {
      this.termsDictionary$ = new ReplaySubject<{ [termName: string]: Term }>(
        1
      );
      this.httpClient
        .get<Term[]>("assets/terms.json")
        .pipe(
          map(terms => {
            const termsDictionary: { [termName: string]: Term } = {};
            terms.forEach(term => {
              termsDictionary[term.name.toLowerCase()] = term;
            });
            return termsDictionary;
          })
        )
        .subscribe(this.termsDictionary$);
    }
    return this.termsDictionary$;
  }
}
