import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss'],
    standalone: true,
})
export class DeckComponent implements OnInit {
    @Input() deck: any;

    constructor() { }

    ngOnInit() { } 

}