import { TestBed, inject } from '@angular/core/testing';

import { RecentplayermatchesService } from './recentplayermatches.service';

describe('RecentplayermatchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentplayermatchesService]
    });
  });

  it('should be created', inject([RecentplayermatchesService], (service: RecentplayermatchesService) => {
    expect(service).toBeTruthy();
  }));
});
