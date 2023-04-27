import { TestBed } from '@angular/core/testing';

import { BelanjaService } from './belanja.service';

describe('BelanjaService', () => {
  let service: BelanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BelanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
