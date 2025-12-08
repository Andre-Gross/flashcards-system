import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { addDoc, Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Flashcard } from '../interfaces/flashcard.interface';
import { ListFlashcardCollectionElement } from '../interfaces/list-flashcard-collection-element-interface';


/**
 * Service to manage flashcard collections and individual flashcards in Cloud Firestore.
 * 
 * Handles CRUD operations (Create, Read, Update, Delete) for:
 * 1. Flashcard Collections (root level)
 * 2. Flashcards (sub-collection level)
 */
@Injectable({
    providedIn: 'root',
})


export class FlashcardsService {

    private firestore = inject(Firestore);

    /** Path to the root collection in Firestore. */
    private readonly FLASHCARDS_COLLECTION_PATH = 'flashcard-collections';


    /**
     * Retrieves the list of all flashcard collections.
     * 
     * @returns {Observable<ListFlashcardCollectionElement[]>} An observable stream of collection objects, including their document IDs.
     */
    getCollectionList(): Observable<ListFlashcardCollectionElement[]> {
        const colRef = collection(this.firestore, this.FLASHCARDS_COLLECTION_PATH);

        return collectionData(colRef, { idField: 'id' }) as Observable<ListFlashcardCollectionElement[]>;
    }


    /**
     * Retrieves all flashcards within a specific collection.
     * 
     * @param {string} collectionId - The ID of the parent collection.
     * @returns {Observable<Flashcard[]>} An observable stream of flashcards, including their document IDs.
     */
    getFlashcards(collectionId: string): Observable<Flashcard[]> {
        const colRef = collection(this.firestore, this.getSubCollectionPath(collectionId));

        return collectionData(colRef, { idField: 'id' }) as Observable<Flashcard[]>;
    }


    /**
     * Adds a new flashcard to a specific collection.
     * 
     * @param {string} collectionId - The ID of the collection where the card should be added.
     * @param {string} front - The text/content for the front of the card.
     * @param {string} back - The text/content for the back of the card.
     * @returns {Promise<string>} A promise that resolves to the ID of the newly created flashcard document.
     */
    async addFlashcard(collectionId: string, front: string, back: string): Promise<string> {
        const colRef = collection(this.firestore, this.getSubCollectionPath(collectionId));

        const docRef = await addDoc(colRef, { front, back });

        return docRef.id;
    }


    /**
     * Deletes a specific flashcard from a collection.
     * 
     * @param {string} collectionId - The ID of the collection containing the card.
     * @param {string} flashcardId - The ID of the flashcard to delete.
     * @returns {Promise<void>} A promise that resolves when the deletion is complete.
     */
    async deleteFlashcard(collectionId: string, flashcardId: string): Promise<void> {
        const docRef = doc(this.firestore, this.getSubCollectionPath(collectionId), flashcardId);
        await deleteDoc(docRef);
    }


    /**
     * Updates specific fields of an existing flashcard.
     * 
     * @param {string} collectionId - The ID of the collection containing the card.
     * @param {string} flashcardId - The ID of the flashcard to update.
     * @param {Partial<Flashcard>} data - An object containing the fields to update (e.g., only { front: 'New Text' }).
     * @returns {Promise<void>} A promise that resolves when the update is complete.
     */
    async updateFlashcard(collectionId: string, flashcardId: string, data: Partial<Flashcard>): Promise<void> {
        const docRef = doc(this.firestore, this.getSubCollectionPath(collectionId), flashcardId);
        await updateDoc(docRef, data);
    }


    /**
     * Helper method to construct the Firestore path for the flashcards sub-collection.
     * 
     * @param {string} collectionId - The ID of the collection.
     * @returns {string} The full path string (e.g., 'flashcard-collections/123/flashcards').
     */
    private getSubCollectionPath(collectionId: string): string {
        return `${this.FLASHCARDS_COLLECTION_PATH}/${collectionId}/flashcards`;
    }
}
