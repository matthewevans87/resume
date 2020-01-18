import { Component, OnInit, Input } from "@angular/core";
import { Accomplishment } from "src/app/models/resume";
import { TermLinkGenerationService } from "src/app/services/term-link-generation.service";
import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { TextPreprocessorService } from "src/app/services/text-preprocessor.service";

@Component({
  selector: "app-accomplishment",
  templateUrl: "./accomplishment.component.html",
  styleUrls: ["./accomplishment.component.scss"]
})
export class AccomplishmentComponent implements OnInit {
  public accomplishmentDescription$: Observable<string>;

  @Input() public accomplishment: Accomplishment;
  constructor(private service: TextPreprocessorService) {}

  ngOnInit() {
    this.accomplishmentDescription$ = this.service.Preprocess(
      this.accomplishment.description
    );
  }
}
