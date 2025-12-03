import { Injectable, inject } from '@angular/core';
import { collection, getDocs, Firestore, query } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FlashcardsService {
    firestore = inject(Firestore);

    async getFlashcardCollections() {
        const q = query(collection(this.firestore, 'flashcard-collections'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
}
