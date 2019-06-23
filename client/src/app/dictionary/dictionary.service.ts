import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OxfordDefinition } from './oxford-definition';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  getOxfordDefinition(word: string) {
    return this.httpClient.get<OxfordDefinition>(
      `/api/dictionary/oxford/${word}`
    );
  }
}
