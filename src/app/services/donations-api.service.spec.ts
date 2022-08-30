import { TestBed } from '@angular/core/testing';

import { DonationsApiService } from './donations-api.service';

describe('DonationsApiService', () => {
  let service: DonationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
