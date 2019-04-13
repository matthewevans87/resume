import { Component, OnInit, Input } from '@angular/core';
import { Position } from 'src/app/models/resume';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

    @Input('position') public position: Position;
    constructor() { }

    ngOnInit() {
    }

}
