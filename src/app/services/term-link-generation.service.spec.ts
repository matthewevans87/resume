import { TestBed } from '@angular/core/testing';

import { TermLinkGenerationService } from './term-link-generation.service';
import { Term } from '../models/resume';
import { HttpClientModule } from '@angular/common/http';
import { StaticStoreService } from './static-store.service';
import { of } from 'rxjs';

describe('TermLinkGenerationService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientModule
        ]
    }));

    it('should be created', () => {
        const service: TermLinkGenerationService = TestBed.get(TermLinkGenerationService);
        expect(service).toBeTruthy();
    });

    it('should find terms', () => {
        const service: TermLinkGenerationService = TestBed.get(TermLinkGenerationService);

        const terms: Array<Term> = [
            {
                name: 'bob'
            },
            {
                name: 'hello foo'
            },
            {
                name: 'hello world'
            },
            {
                name: 'hello world foo'
            },
            {
                name: 'world'
            },
            {
                name: 'world foo'
            }
        ];

        const termsStartingWithHello = service.getTermsStartingWith('hello world', terms);

        expect(termsStartingWithHello).toContain(terms[2]);
        expect(termsStartingWithHello).toContain(terms[3]);
        expect(termsStartingWithHello.length).toBe(2);


        const termsStartingWithBob = service.getTermsStartingWith('bob', terms);

        expect(termsStartingWithBob).toContain(terms[0]);
        expect(termsStartingWithBob.length).toBe(1);


        const termsStartingWithWorld = service.getTermsStartingWith('world', terms);

        expect(termsStartingWithWorld).toContain(terms[4]);
        expect(termsStartingWithWorld).toContain(terms[5]);
        expect(termsStartingWithWorld.length).toBe(2);

    });



    it('should termify text', (done) => {

        const termsDictionary: { [termName: string]: Term } = {};
        termsDictionary['c#'] = {
            name: 'C#'
        };
        termsDictionary['typescript'] = {
            name: 'TypeScript'
        };

        const staticStoreService: StaticStoreService = TestBed.get(StaticStoreService);
        const service: TermLinkGenerationService = TestBed.get(TermLinkGenerationService);

        spyOn(staticStoreService, 'getTermsDictionary').and.returnValue(of(termsDictionary));

        const text = 'Bob said C# and ASP.NET Core Web API are both good.';
        const linkedText = service.InjectLinksForTerms(text);

        linkedText.toPromise().then(
            (resolve) => {
                expect(resolve).toEqual('Bob said <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"> C# </a> and <a href="https://github.com/aspnet/Mvc"> ASP.NET Core Web API </a> are both good.');
                done();
            },
            (reject) => { }
        );

    });

});
