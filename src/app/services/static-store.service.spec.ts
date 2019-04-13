import { TestBed } from '@angular/core/testing';

import { StaticStoreService } from './static-store.service';

describe('StaticStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticStoreService = TestBed.get(StaticStoreService);
    expect(service).toBeTruthy();
  });
});
