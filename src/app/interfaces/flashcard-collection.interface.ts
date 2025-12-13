import { Flashcard } from './flashcard.interface';

export interface FlashcardCollection {
    ownerId: string;
    editorIds?: string[];
    subscriberIds?: string[];
    title: string;
    description?: string;
    flashcards?: Flashcard[];
}
