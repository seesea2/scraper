import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

import { Word, WordsService } from "./words.service";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  wordsTotal: number;
  words: Word[];

  // MatPaginator Inputs
  size: number = 100;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private svc: WordsService) {}

  ngOnInit(): void {
    this.wordsTotal = 0;
    this.words = [];

    this.svc.getWordsTotal().subscribe(num => {
      this.wordsTotal = num.qty;
    });
    this.svc.getWords().subscribe(words => {
      this.words = words;
    });
  }

  refreshWords(event?: PageEvent) {
    this.svc.getWords(event.pageIndex * this.size).subscribe(words => {
      this.words = words;
    });
    return event;
  }
}
