import { TestBed } from '@angular/core/testing';

import { CocktailsCatalogService } from './cocktails-catalog.service';

describe('CocktailsCatalogService', () => {
  let service: CocktailsCatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = TestBed.inject(CocktailsCatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
