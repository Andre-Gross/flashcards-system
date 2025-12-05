import { Injectable, inject } from '@angular/core';
import { collection, getDocs, Firestore, query } from '@angular/fire/firestore';

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
    }
}
