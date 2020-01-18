import { Injectable } from "@angular/core";
import { TermLinkGenerationService } from "./term-link-generation.service";
import { Observable, of } from "rxjs";
import * as marked from "marked";
import { switchMap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TextPreprocessorService {
  constructor(private termLinkGenerationService: TermLinkGenerationService) {}

  public Preprocess(text: string): Observable<string> {
    return of(text).pipe(
      switchMap(rawText =>
        this.termLinkGenerationService.InjectLinksForTerms(rawText)
      ),
      map(injectedText => {
        const renderer = new marked.Renderer();
        renderer.paragraph = function(text) {
          return `${text}`;
        };

        return marked(injectedText, { renderer: renderer });
      }),
      map(markdownedText => {
        const e = document.createElement("div");
        e.innerHTML = markdownedText;
        var elements = e.querySelectorAll("a");
        elements.forEach(a => {
          a.target = "_blank";
        });
        return e.innerHTML;
      })
    );
  }
}
