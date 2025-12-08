import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDoc, Firestore, collection, collectionData, deleteDoc, doc, setDoc } from '@angular/fire/firestore';
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
        const docRef = await addDoc(collection(this.firestore, this.returnFlashcardCollectionPath(collectionId)), {
            front: front,
            back: back
        });
        return docRef.id;
    }


    async deleteFlashcard(collectionId: string, flashcardId: string): Promise<void> {
        await deleteDoc(doc(this.firestore, this.returnFlashcardCollectionPath(collectionId), flashcardId));

        console.log('Flashcard deleted successfully');
    }


    async updateFlashcard(collectionId: string, flashcardId: string, front: string, back: string): Promise<void> {
        const data = {
            front: front,
            back: back
        };

        await setDoc(doc(this.firestore, this.returnFlashcardCollectionPath(collectionId), flashcardId), data);

        console.log('Flashcard updated successfully');
    }


    returnFlashcardCollectionPath(collectionId: string): string {
        return `flashcard-collections/${collectionId}/flashcards`;
    }
}
