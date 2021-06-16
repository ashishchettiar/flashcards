import { Component, Input, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Card } from '../model/flashcard';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  flashcards: any[];
  @Input() selectedLanguage: string;

  constructor(private dataService: DataProviderService) { 
    this.flashcards = [];
    this.selectedLanguage = 'en';
  }

  ngOnInit(): void {
    this.dataService.subscribeToFlashcards().subscribe(cards => {
      // Language selection
      // Update logic
      cards.forEach((c: any) => {
        this.flashcards.push(...c.filter((x: any) => x.language === this.selectedLanguage));
      });
      console.log(this.flashcards);
    });  
  }
}
