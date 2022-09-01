import { TestBed } from '@angular/core/testing';

import { MemberLevelService } from './member-level.service';

describe('MemberLevelService', () => {
  let service: MemberLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
