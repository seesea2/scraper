import { TestBed } from '@angular/core/testing';

import { StaffsAdminService } from './staffs-admin.service';

describe('StaffsAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffsAdminService = TestBed.get(StaffsAdminService);
    expect(service).toBeTruthy();
  });
});
