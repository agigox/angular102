import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
    service = TestBed.get(LoggerService);
  });

  it('should create the logger service', () => {
    expect(service).toBeTruthy();
  });
});
