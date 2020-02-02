import { TestBed } from '@angular/core/testing';

import { ServiceConatctService } from './service-conatct.service';

describe('ServiceConatctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceConatctService = TestBed.get(ServiceConatctService);
    expect(service).toBeTruthy();
  });
});
