import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Flashcard } from '../interfaces/flashcard.interface';
import { ListFlashcardCollectionElement } from '../interfaces/list-flashcard-collection-element-interface';

@Injectable({
    providedIn: 'root',
})


export class FlashcardsService {

    private firestore = inject(Firestore);

    private readonly FLASHCARDS_COLLECTION_PATH = 'flashcard-collections';


    getCollectionList(): Observable<ListFlashcardCollectionElement[]> {
        const colRef = collection(this.firestore, this.FLASHCARDS_COLLECTION_PATH);

        return collectionData(colRef, { idField: 'id' }) as Observable<ListFlashcardCollectionElement[]>;
    }


    getFlashcards(collectionId: string): Observable<Flashcard[]> {
        const colRef = collection(this.firestore, this.getSubCollectionPath(collectionId));

        return collectionData(colRef, { idField: 'id' }) as Observable<Flashcard[]>;
    }


    async addFlashcard(collectionId: string, front: string, back: string): Promise<string> {
        const colRef = collection(this.firestore, this.getSubCollectionPath(collectionId));

        const docRef = await addDoc(colRef, { front, back });

        return docRef.id;
    }


    async deleteFlashcard(collectionId: string, flashcardId: string): Promise<void> {
        const docRef = doc(this.firestore, this.getSubCollectionPath(collectionId), flashcardId);
        await deleteDoc(docRef);
    }


    async updateFlashcard(collectionId: string, flashcardId: string, data: Partial<Flashcard>): Promise<void> {
        const docRef = doc(this.firestore, this.getSubCollectionPath(collectionId), flashcardId);
        await updateDoc(docRef, data);
    }


    private getSubCollectionPath(collectionId: string): string {
        return `${this.FLASHCARDS_COLLECTION_PATH}/${collectionId}/flashcards`;
    }
}
