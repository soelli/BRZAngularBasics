import { TestBed } from '@angular/core/testing';

import { CommonlibService } from './commonlib.service';

describe('CommonlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonlibService = TestBed.get(CommonlibService);
    expect(service).toBeTruthy();
  });
});
