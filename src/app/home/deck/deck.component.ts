import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { GestureHandlerDirective } from 'src/app/gesture-handler/gesture-handler';



@Component({
    selector: 'app-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss'],
    standalone: true,
    imports: [IonCardContent, IonCard, GestureHandlerDirective, IonCardTitle],
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