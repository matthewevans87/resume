import { Injectable } from '@angular/core';
import { StaticStoreService } from './static-store.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Term } from '../models/resume';

@Injectable({
    providedIn: 'root'
})
export class TermLinkGenerationService {

    private sortedTerms: Observable<Array<Term>>;

    constructor(private staticStoreService: StaticStoreService) {

        this.sortedTerms = this.staticStoreService.getTermsDictionary()
            .pipe(
                map(termDictionary => {
                    return Object.getOwnPropertyNames(termDictionary)
                        .map(name => termDictionary[name].name.toLowerCase())
                        .sort()
                        .map(termName => termDictionary[termName]);
                })
            );

    }

    public InjectLinksForTerms(text: string): Observable<string> {
        return this.sortedTerms
            .pipe(
                map(sortedTerms => {

                    const words = text.split(' ');
                    const matchingTerms: {
                        term: Term,
                        startIdx: number,
                        endIdx: number
                    }[] = [];

                    for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {

                        const word = words[wordIdx].toLowerCase();

                        const termsThatStartWithWord = this.getTermsStartingWith(word, sortedTerms)
                            .map(termStartingWithWord => {
                                return {
                                    wordsInTerm: termStartingWithWord.name.toLowerCase().split(' '),
                                    term: termStartingWithWord
                                };
                            })
                            .sort((a, b) => b.term.name.length - a.term.name.length);

                        const matchingTerm = termsThatStartWithWord
                            .filter(termObj => termObj.wordsInTerm.length <= words.slice(wordIdx).length)
                            .find(termObj => termObj.wordsInTerm.every((wordInTerm, idx) => words[wordIdx + idx].toLowerCase() === wordInTerm));

                        if (matchingTerm) {
                            matchingTerms.push({
                                term: matchingTerm.term,
                                startIdx: wordIdx,
                                endIdx: wordIdx + matchingTerm.wordsInTerm.length
                            });

                            wordIdx += matchingTerm.wordsInTerm.length;
                        }
                    }

                    matchingTerms.sort((a, b) => b.startIdx - a.startIdx).forEach(matchingTerm => {
                        const extracted = words.splice(matchingTerm.startIdx, matchingTerm.endIdx - matchingTerm.startIdx);
                        words.splice(matchingTerm.startIdx, 0, ...[`<a href="${matchingTerm.term.url}">`, ...extracted, '</a>']);
                    });

                    const result = words.join(' ');

                    return result;
                })
            );
    }

    public getTermsStartingWith(text: string, termList: Array<Term>, idx?: number): Array<Term> {
        if (termList.length === 0
            || (termList.length === 1 && !termList[0].name.toLowerCase().startsWith(text))) {
            return [];
        }

        idx = idx || Math.ceil((termList.length - 1) / 2);
        if (termList[idx].name.toLowerCase().startsWith(text)) {
            // check backwards
            let startingOffset = 0;
            while (idx - (startingOffset + 1) > 0 && termList[idx - (startingOffset + 1)].name.toLowerCase().startsWith(text)) {
                startingOffset++;
            }
            // check forwards
            let endingOffset = 0;
            while ((endingOffset + 1) + idx < termList.length && termList[idx + (endingOffset + 1)].name.toLowerCase().startsWith(text)) {
                endingOffset++;
            }

            return termList.slice(idx - startingOffset, idx + endingOffset + 1);
        } else {
            if (text > termList[idx].name.toLowerCase()) {
                return this.getTermsStartingWith(text, termList.slice(idx));
            } else {
                return this.getTermsStartingWith(text, termList.slice(0, idx));
            }
        }
    }

}
