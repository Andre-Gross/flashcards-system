import { Component, OnInit } from '@angular/core';
import { FlashcardComponent } from './flashcard/flashcard.component';

@Component({
  selector: 'app-learn-flashcards',
  templateUrl: './learn-flashcards.component.html',
  styleUrls: ['./learn-flashcards.component.scss'],
  imports: [FlashcardComponent],
})
export class LearnFlashcardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
