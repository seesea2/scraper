import { Component, OnInit } from '@angular/core';

import { DictionaryService } from '../dictionary.service';
import CheckEntriesResult from '../oxford-interface';

@Component({
  selector: 'app-oxford',
  templateUrl: './oxford.component.html',
  styleUrls: ['./oxford.component.css']
})
export class OxfordComponent implements OnInit {
  checkEntriesResult: CheckEntriesResult;
  errMsg: string;
  bChecking: boolean;

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit() {
    this.checkEntriesResult = { lexicalEntries: [] };
    this.errMsg = '';
    this.bChecking = false;
  }

  getOxfordDefinition(word: string) {
    if (!(word || '').trim()) {
      return (this.errMsg = 'Please input a word.');
    }
    this.bChecking = true;
    this.dictionaryService
      .getOxfordDefinition(word.trim().toLowerCase())
      .subscribe(
        definition => {
          this.checkEntriesResult = definition;
          this.errMsg = '';
          this.bChecking = false;
        },
        err => {
          this.checkEntriesResult = { lexicalEntries: [] };
          this.errMsg = err;
          this.bChecking = false;
        }
      );
  }
}
