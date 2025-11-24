import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnFlashcardsComponentComponent } from './learn-flashcards-component.component';

describe('LearnFlashcardsComponentComponent', () => {
  let component: LearnFlashcardsComponentComponent;
  let fixture: ComponentFixture<LearnFlashcardsComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnFlashcardsComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnFlashcardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
