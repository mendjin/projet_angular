import { TestBed } from '@angular/core/testing';

import { MotivationServiceService } from './motivation-service.service';

describe('MotivationServiceService', () => {
  let service: MotivationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
