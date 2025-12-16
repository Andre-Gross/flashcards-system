// import { Component, Input, OnInit } from '@angular/core';
// import { IonCard, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { GestureController, IonCard, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';


@Component({
    selector: 'app-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss'],
    standalone: true,
    imports: [IonCardContent, IonCardHeader, IonCard],
})
export class DeckComponent {
    @Input() deck: any;

    @ViewChild('card', { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

    private longPressTimer: any;
    private readonly longPressMinDuration: number = 400; 

    constructor(private el: ElementRef, private gestureCtrl: GestureController) {}

    ngAfterViewInit() {
        const gesture = this.gestureCtrl.create({
        el: this.card.nativeElement,
        gestureName: 'long-press',
        threshold: 0, 
        
        onStart: () => this.onPressStart(), 
        
        onEnd: () => this.onPressEnd(), 
        
        onMove: () => this.onPressMove(),
        });

        gesture.enable();
   }

    private onPressStart() {
        this.longPressTimer = setTimeout(() => {
        this.onLongPressDetected();
        }, this.longPressMinDuration);
    }

    private onPressEnd() {
        clearTimeout(this.longPressTimer);
    }

    private onPressMove() {
        clearTimeout(this.longPressTimer);
    }

    private onLongPressDetected() {
        console.log('--- LONG PRESS DETECTED ---');
    }
}