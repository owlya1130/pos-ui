import { TestBed } from '@angular/core/testing';

import { ProductCatagoryService } from './product-catagory.service';

describe('ProductCatagoryService', () => {
  let service: ProductCatagoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCatagoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
