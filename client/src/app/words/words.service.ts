import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Word {
  word: string;
  frequence: number;
}

@Injectable({
  providedIn: "root"
})
export class WordsService {
  constructor(private http: HttpClient) {}

  getWords(offset?: number) {
    if (offset && offset > 0) {
      return this.http.get<Word[]>("/api/scraper/words?offset=" + offset);
    } else {
      return this.http.get<Word[]>("/api/scraper/words");
    }
  }
  getWordsTotal() {
    return this.http.get<{ qty: number }>("/api/scraper/words/total");
  }
}
