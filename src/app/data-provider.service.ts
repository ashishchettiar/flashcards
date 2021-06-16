import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Card } from './model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  flashcards: any[];
  firebase: AngularFireDatabase
  constructor(db: AngularFireDatabase) { 
    this.flashcards = [];
    this.firebase = db;
  }

  // error handling
  // trnsaction messages
  // update and delete functionality
  subscribeToFlashcards(): Observable<any>
  {
    return this.firebase.list('/flashcards').valueChanges();
  }

  addFlashcard(cards: Card[])
  {
    console.log(`Saving new cards to firebase ${JSON.stringify(cards)} `)
    this.firebase.list('/flashcards').push(cards);
  }
}
