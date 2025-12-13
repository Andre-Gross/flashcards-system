import { Component } from '@angular/core';
import { Component, inject } from '@angular/core';

import { FlashcardsService } from '../firebase-service/flashcards.service';
import { FlashcardCollection } from '../interfaces/flashcard-collection.interface';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false,
})

export class HomePage {
    private flashcardsService = inject(FlashcardsService);
    decklist: FlashcardCollection[] = [];

    constructor() {
        this.flashcardsService.getCollectionList().subscribe(data => {
            this.decklist = [];
            data.forEach((element: any) => {
                this.decklist.push({
                    deckId: element.id,
                    ownerId: element.ownerId,
                    editorIds: element.editorIds,
                    subscriberIds: element.subscriberIds,
                    title: element.title,
                    description: element.description,
                    flashcards: element.flashcards,
                });
            });
        });
    }
}
