import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/angular/standalone';
import { LongPressDirective } from 'src/app/long-press/long-press';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, LongPressDirective],
})

export class FlashcardComponent  implements OnInit {
  frontText = "Was ist der lateinische Name für Darmbein?";
  backText = "Os ilium.";
  showingFront = true;

  toggleText() {
    this.showingFront = !this.showingFront;
  }

  onSwipeLeft() {
    console.log('Swiped left - Next flashcard');  
  }

  onSwipeRight() {
    console.log('Swiped Right - Next flashcard');  
  }

  constructor() { }

  ngOnInit() {}

}
