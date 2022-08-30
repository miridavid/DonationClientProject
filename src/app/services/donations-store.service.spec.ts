import { TestBed } from '@angular/core/testing';

import { DonationsStoreService } from './donations-store.service';

describe('DonationsStoreService', () => {
  let service: DonationsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
