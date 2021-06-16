import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="bigspring-flashcards"
  supportedLanguages: any[];
  selectedLanguage: string;
  constructor(){
    this.supportedLanguages = ['en', 'fr'];
    this.selectedLanguage = this.supportedLanguages[0];
  }

  onLanguageChanged(language: string) {
    this.selectedLanguage = language;
  }
}
