import { TestBed } from '@angular/core/testing';

import { SlipService } from './slip.service';

describe('SlipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlipService = TestBed.get(SlipService);
    expect(service).toBeTruthy();
  });
});
