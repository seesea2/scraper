import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OxfordDict } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getOxfordDefinition(word: string) {
    return this.http.get<OxfordDict>(`/api/dictionary/oxford/${word}`);
  }
}
