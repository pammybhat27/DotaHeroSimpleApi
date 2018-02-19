import { TestBed, inject } from '@angular/core/testing';

import { DotaleagueService } from './dotaleague.service';

describe('DotaleagueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DotaleagueService]
    });
  });

  it('should be created', inject([DotaleagueService], (service: DotaleagueService) => {
    expect(service).toBeTruthy();
  }));
});
