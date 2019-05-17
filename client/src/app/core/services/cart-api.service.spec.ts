import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CartApiService } from './cart-api.service';

describe('CartApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: CartApiService = TestBed.get(CartApiService);
    expect(service).toBeTruthy();
  });
});
