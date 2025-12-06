import { Flashcard } from './flashcard.interface';

export interface CollectionInterface {
    ownerId: string;
    subscriberIds: string[];
    title: string;
    description?: string;
    flashcards: Flashcard[];
}
