import { Component, OnInit } from '@angular/core';

import { DictionaryService } from '../dictionary.service';
import { OxfordDefinition } from '../oxford-definition';

@Component({
  selector: 'app-oxford',
  templateUrl: './oxford.component.html',
  styleUrls: ['./oxford.component.css']
})
export class OxfordComponent implements OnInit {
  definitionArray: string[];
  errMsg: string;
  bChecking: boolean;

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit() {
    this.definitionArray = [];
    this.errMsg = '';
    this.bChecking = false;
  }

  getOxfordDefinition(word: string) {
    if (!(word || '').trim()) {
      return (this.errMsg = 'Please input a word.');
    }
    this.bChecking = true;
    // this.dictionaryService.getOxfordDefinition(word, (err, definition) => {
    //   this.errMsg = err;
    //   this.oxfordDefinition = definition;
    //   this.bChecking = false;
    // });
    this.dictionaryService.getOxfordDefinition(word.trim()).subscribe(
      definition => {
        this.definitionArray = this.formatDefinition(definition);
        this.errMsg = '';
        this.bChecking = false;
      },
      err => {
        this.definitionArray = [];
        this.errMsg = err;
        this.bChecking = false;
      }
    );
  }

  private formatDefinition(oxfordDefinition: OxfordDefinition): string[] {
    let formatedDefinition: string[] = [];

    oxfordDefinition.results.forEach(result => {
      result.lexicalEntries.forEach(lexicalEntry => {
        lexicalEntry.entries.forEach(entry => {
          entry.senses.forEach(sense => {
            if (sense.definitions) {
              sense.definitions.forEach(definition => {
                formatedDefinition.push(definition);
              });
            }
            if (sense.subsenses) {
              sense.subsenses.forEach(subsense => {
                if (subsense.definitions) {
                  subsense.definitions.forEach(definition => {
                    formatedDefinition.push(definition);
                  });
                }
              });
            }
          });
        });
      });
    });

    return formatedDefinition;
  }
}
