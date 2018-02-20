import { TestBed, inject } from '@angular/core/testing';

import { PlayerstatisticsService } from './playerstatistics.service';

describe('PlayerstatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerstatisticsService]
    });
  });

  it('should be created', inject([PlayerstatisticsService], (service: PlayerstatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
