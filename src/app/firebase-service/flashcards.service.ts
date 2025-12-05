import { Injectable, inject } from '@angular/core';
import { collection, doc, getDoc, getDocs, Firestore, query } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FlashcardsService {
    firestore = inject(Firestore);

    async listFlashcardCollections() {
        const q = query(collection(this.firestore, 'flashcard-collections'));
        const querySnapshot = await getDocs(q);
        let idsOfFlashcardCollections: String[] = [];
        querySnapshot.forEach((doc) => {
            idsOfFlashcardCollections.push(doc.id);
        });
            return idsOfFlashcardCollections;
    }


    async returnFlashcardCollectionData(id: string) {
        const docSnap = await getDoc(this.getDocRef(id));
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return "Collection not found";
        }
    }


    getDocRef(id: string) {
        return doc(this.firestore, "flashcard-collections", id);
    }
}
