import { TestBed, inject } from '@angular/core/testing';

import { DotaUserService } from './dota-user.service';

describe('DotaUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DotaUserService]
    });
  });

  it('should be created', inject([DotaUserService], (service: DotaUserService) => {
    expect(service).toBeTruthy();
  }));
});
