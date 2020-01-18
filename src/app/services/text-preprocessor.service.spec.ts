import { TestBed } from '@angular/core/testing';

import { TextPreprocessorService } from './text-preprocessor.service';

describe('TextPreprocessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextPreprocessorService = TestBed.get(TextPreprocessorService);
    expect(service).toBeTruthy();
  });
});
