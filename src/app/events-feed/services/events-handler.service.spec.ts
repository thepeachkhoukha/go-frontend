import { TestBed } from '@angular/core/testing';

import { EventsHandlerService } from './events-handler.service';

describe('EventsHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsHandlerService = TestBed.get(EventsHandlerService);
    expect(service).toBeTruthy();
  });
});
