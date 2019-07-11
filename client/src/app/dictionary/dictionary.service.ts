import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import CheckEntriesResult from './oxford-interface';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getOxfordDefinition(word: string) {
    return this.httpClient.get<CheckEntriesResult>(
      `/api/dictionary/oxford/${word}`
    );
  }
}
