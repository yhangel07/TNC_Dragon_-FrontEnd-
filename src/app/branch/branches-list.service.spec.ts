import { TestBed } from '@angular/core/testing';

import { BranchesListService } from './branches-list.service';

describe('BranchesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchesListService = TestBed.get(BranchesListService);
    expect(service).toBeTruthy();
  });
});
