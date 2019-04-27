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
            name: 'C#',
            url: 'csharpurl'
        };
        termsDictionary['typescript'] = {
            name: 'TypeScript',
            url: 'typescripturl'
        };

        const staticStoreService: StaticStoreService = TestBed.get(StaticStoreService);
        spyOn(staticStoreService, 'getTermsDictionary').and.returnValue(of(termsDictionary));

        const service: TermLinkGenerationService = TestBed.get(TermLinkGenerationService);


        const text = 'Bob said C# and TypeScript are both good.';
        const linkedText = service.InjectLinksForTerms(text);

        linkedText.toPromise().then(
            (resolve) => {
                expect(resolve).toEqual('Bob said <a href="csharpurl" target="_blank">C#</a> and <a href="typescripturl" target="_blank">TypeScript</a> are both good.');
                done();
            },
            (reject) => { }
        );

    });


    it('should termify text', (done) => {

        const inputString = 'Implemented patent US7050803B2; application visualized cell network sectors and automatically calculated sector neighbors in a given geographic region';

        const termsDictionary: { [termName: string]: Term } = {};
        termsDictionary['c#'] = {
            name: 'US7050803B2',
            url: 'US7050803B2url'
        };

        let expected = inputString;
        Object.getOwnPropertyNames(termsDictionary)
            .forEach(term => {
                expected = expected.replace(
                    termsDictionary[term].name,
                    `<a href="${termsDictionary[term].url}" target="_blank">${termsDictionary[term].name}</a>`
                );
            });

        const staticStoreService: StaticStoreService = TestBed.get(StaticStoreService);
        spyOn(staticStoreService, 'getTermsDictionary').and.returnValue(of(termsDictionary));
        const termLinkGenerationService: TermLinkGenerationService = TestBed.get(TermLinkGenerationService);
        const linkedText = termLinkGenerationService.InjectLinksForTerms(inputString);

        linkedText.toPromise().then(
            (resolve) => {
                expect(resolve).toEqual(expected);
                done();
            },
            (reject) => { }
        );

    });



});
