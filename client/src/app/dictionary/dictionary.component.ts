import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { DictionaryService } from './dictionary.service';
import { OxfordDict } from './dictionary';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  faPlay = faPlay;
  oxfordDict: OxfordDict;
  errMsg: string;
  inquiring: boolean;

  constructor(private dictSvc: DictionaryService) {}

  ngOnInit(): void {
    this.oxfordDict = { lexicalEntries: [] };
    this.errMsg = '';
    this.inquiring = false;
  }

  getOxfordDefinition(word: string) {
    this.errMsg = '';
    this.oxfordDict = { lexicalEntries: [] };
    if (!(word || '').trim()) {
      return (this.errMsg = 'Please input a word.');
    }
    this.inquiring = true;
    this.dictSvc.getOxfordDefinition(word.trim().toLowerCase()).subscribe(
      definition => {
        this.oxfordDict = definition;
        this.inquiring = false;
      },
      err => {
        this.oxfordDict = { lexicalEntries: [] };
        this.errMsg = JSON.stringify(err.result);
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
