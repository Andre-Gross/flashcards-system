import { FlashcardInterface } from './flashcard.interface';

export interface CollectionInterface {
    ownerId: string;
    subscriberIds: string[];
    title: string;
    description?: string;
    flashcards: FlashcardInterface[];
}
