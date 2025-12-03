import { Component } from '@angular/core';
import { FlashcardsService } from '../firebase-service/flashcards.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

    constructor(private flashcardsService: FlashcardsService) {
        flashcardsService.getFlashcardCollections();
    }

}
