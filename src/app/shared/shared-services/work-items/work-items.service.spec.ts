import { TestBed, inject } from '@angular/core/testing';

import { WorkItemsService } from './work-items.service';

describe('WorkItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkItemsService]
    });
  });

  it('should be created', inject([WorkItemsService], (service: WorkItemsService) => {
    expect(service).toBeTruthy();
  }));
});
