import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDoc, Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
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


    async addFlashcard(collectionId: string, front: string, back: string): Promise<string> {
        const docRef = await addDoc(collection(this.firestore, `flashcard-collections/${collectionId}/flashcards`), {
            front: front,
            back: back
        });
        return docRef.id;
    }


    async updateFlashcard(collectionId: string, flashcardId: string, front: string, back: string): Promise<void> {
        const data = {
            front: front,
            back: back
        };

        await setDoc(doc(this.firestore, `flashcard-collections/${collectionId}/flashcards`, flashcardId), data);
        
        console.log('Flashcard updated successfully');
    }
}
