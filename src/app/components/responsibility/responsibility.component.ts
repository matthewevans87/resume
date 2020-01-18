import { Component, OnInit, Input } from "@angular/core";
import { Responsibility } from "src/app/models/resume";
import { TextPreprocessorService } from "src/app/services/text-preprocessor.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-responsibility",
  templateUrl: "./responsibility.component.html",
  styleUrls: ["./responsibility.component.scss"]
})
export class ResponsibilityComponent implements OnInit {
  public responsibilityDescription$: Observable<string>;
  @Input("responsibility") public responsibility: Responsibility;
  constructor(private service: TextPreprocessorService) {}

  ngOnInit() {
    this.responsibilityDescription$ = this.service.Preprocess(
      this.responsibility.description
    );
  }
}
