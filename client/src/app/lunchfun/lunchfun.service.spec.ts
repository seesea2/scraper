import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { LunchfunService } from './lunchfun.service';

describe('LunchfunService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: LunchfunService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(LunchfunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
