import { FlashcardsService } from '../firebase-service/flashcards.service';

import { Component, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false,
})
export class HomePage {
    private flashcardsService = inject(FlashcardsService);
    private destroyRef = inject(DestroyRef);


    constructor() {}


    ngOnInit() {
        this.flashcardsService.getCollectionList('flashcard-collections')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((collections) => {
                console.log("List of flashcard collections: ", collections);
            });

        this.flashcardsService.getFlashcards("2Nd45CKgRGpBGhcLmKHv")
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((flashcards) => {
                console.log("Flashcards: ", flashcards);
            });
    }

}
