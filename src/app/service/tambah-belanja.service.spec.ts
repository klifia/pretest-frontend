import { TestBed } from '@angular/core/testing';

import { TambahBelanjaService } from './tambah-belanja.service';

describe('TambahBelanjaService', () => {
  let service: TambahBelanjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahBelanjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
