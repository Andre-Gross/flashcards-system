import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlashcardComponent } from './flashcard.component';

describe('FlashcardComponent', () => {
  let component: FlashcardComponent;
  let fixture: ComponentFixture<FlashcardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FlashcardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
