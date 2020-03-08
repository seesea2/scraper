import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { DictionaryService } from '../dictionary.service';
import CheckEntriesResult from '../oxford-interface';

@Component({
  selector: 'app-oxford',
  templateUrl: './oxford.component.html',
  styleUrls: ['./oxford.component.css']
})
export class OxfordComponent implements OnInit {
  faPlay = faPlay;
  checkEntriesResult: CheckEntriesResult;
  errMsg: string;
  inquiring: boolean;

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit() {
    this.checkEntriesResult = { lexicalEntries: [] };
    this.errMsg = '';
    this.inquiring = false;
  }

  getOxfordDefinition(word: string) {
    this.errMsg = '';
    this.checkEntriesResult = { lexicalEntries: [] };
    if (!(word || '').trim()) {
      return (this.errMsg = 'Please input a word.');
    }
    this.inquiring = true;
    this.dictionaryService
      .getOxfordDefinition(word.trim().toLowerCase())
      .subscribe(
        definition => {
          this.checkEntriesResult = definition;
          this.inquiring = false;
        },
        err => {
          this.checkEntriesResult = { lexicalEntries: [] };
          this.errMsg = err.result;
          this.inquiring = false;
        }
      );
  }

  playAudio(audioFile: string) {
    let audio = new Audio();
    audio.src = audioFile;
    audio.load();
    audio.play();
  }
}
