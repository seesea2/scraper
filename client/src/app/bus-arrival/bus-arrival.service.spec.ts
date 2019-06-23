import { TestBed } from '@angular/core/testing';

import { BusArrivalService } from './bus-arrival.service';

describe('BusArrivalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusArrivalService = TestBed.get(BusArrivalService);
    expect(service).toBeTruthy();
  });
});
