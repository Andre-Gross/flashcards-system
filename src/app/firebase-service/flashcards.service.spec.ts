import { TestBed } from '@angular/core/testing';

import { FlashcardsService } from './flashcards.service';

describe('Flashcards', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
