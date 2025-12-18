// import { Component, Input, OnInit } from '@angular/core';
// import { IonCard, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { LongPressDirective } from 'src/app/long-press/long-press';



@Component({
    selector: 'app-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss'],
    standalone: true,
    imports: [IonCardContent, IonCard, LongPressDirective, IonCardTitle],
})

export class DeckComponent {
    @Input() deck: any;

    randomNumber: number;

    onLongPress() {
        console.log('Long press detected');
    }

    constructor() { 
        this.randomNumber = Math.floor(Math.random() * 30) + 10;
    }
}