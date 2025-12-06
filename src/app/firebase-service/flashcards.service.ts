import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Flashcard } from '../interfaces/flashcard.interface';
import { ListFlashcardCollectionElement } from '../interfaces/list-flashcard-collection-element-interface';

@Injectable({
    providedIn: 'root',
})

export class FlashcardsService {
    private firestore = inject(Firestore);

    getCollectionList(collectionPath: string): Observable<ListFlashcardCollectionElement[]> {
        const colRef = collection(this.firestore, collectionPath);
        
        return collectionData(colRef, { idField: 'id' }).pipe(
            map(docs => docs as ListFlashcardCollectionElement[])
        );
    }


    getFlashcards(collectionId: string): Observable<Flashcard[]> {
        const path = `flashcard-collections/${collectionId}/flashcards`;
        const colRef = collection(this.firestore, path);
        
        return collectionData(colRef) as Observable<Flashcard[]>;
    }


    setFlashCardObject(obj: any): Flashcard {
        return {
            frontside: obj.frontside || "",
            backside: obj.backside || "",
        };
    }
}
