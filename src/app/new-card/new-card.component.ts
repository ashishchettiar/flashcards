import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card, Flashcard } from '../model/flashcard'
import { DataProviderService } from '../data-provider.service';
import { debounce, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  debounceInterval = 1000;
  myForm: FormGroup;
  @Input() supportedLanguages: any[];
  
  constructor(private fb: FormBuilder, private dataService: DataProviderService) { 
    this.supportedLanguages = [];
    this.myForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.myForm.valueChanges.pipe(debounceTime(this.debounceInterval)).subscribe(form => {
      if(form.answer !== "" && form.question !== "")
      {
        console.log(`Saving new flashcard ${JSON.stringify(form)}`);
        this.saveFlashcard(form);
      }
    });
  }

  saveFlashcard(form: any)
  {
    let cards: Card[] = [];
    this.supportedLanguages.forEach(language => {
      var c = {
        language: language,
        question: form.question,
        answer: form.answer
      };
      cards.push(c);
    });
    
    console.log(`Created flashcard object ${JSON.stringify(cards)}`);
    this.dataService.addFlashcard(cards);
  }
}
