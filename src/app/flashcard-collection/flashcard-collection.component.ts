import { Component, OnInit } from '@angular/core';
import {CollectionComponent} from '../collection/collection.component';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-flashcard-collection',
  templateUrl: './flashcard-collection.component.html',
  styleUrls: ['./flashcard-collection.component.scss'],
  imports: [IonContent, CollectionComponent] 
})
export class FlashcardCollectionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}