import { TestBed } from '@angular/core/testing';

import { UserGeneralEventInfoService } from './user-general-event-info.service';

describe('UserGeneralEventInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGeneralEventInfoService = TestBed.get(UserGeneralEventInfoService);
    expect(service).toBeTruthy();
  });
});
