import { TestBed } from '@angular/core/testing';

import { AbonneServiceService } from './abonne-service.service';

describe('AbonneServiceService', () => {
  let service: AbonneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
