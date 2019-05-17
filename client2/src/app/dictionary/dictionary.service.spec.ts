import { TestBed } from '@angular/core/testing';

import { DictionaryService } from './dictionary.service';

describe('DictionaryService', () => {
  let dictionaryService: DictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryService]
    });
    dictionaryService = TestBed.get(DictionaryService);
  });

  it('should be created', () => {
    expect(dictionaryService).toBeTruthy();
  });

  it('should return definition', () => {
    dictionaryService.getOxfordDefinition('test').subscribe(definition => {
      expect(definition).toBeTruthy();
    });
  });
});
