import { TestBed, inject } from '@angular/core/testing';

import { PlayerheroService } from './playerhero.service';

describe('PlayerheroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerheroService]
    });
  });

  it('should be created', inject([PlayerheroService], (service: PlayerheroService) => {
    expect(service).toBeTruthy();
  }));
});
