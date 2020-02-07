import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerSpy: any;
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ],
    });
    service = TestBed.get(CalculatorService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should test that the log method of logger service was called', () => {
    service.add(2, 2);
    expect(loggerSpy.log).toHaveBeenCalled();
  });

  it('should mock a return value for the method log of loggerService', () => {
    loggerSpy.log.and.returnValue('LOGGED');
    expect(loggerSpy.log()).toEqual('LOGGED');
  });
  it('should subtract two numbers', () => {
    const result = service.subtract(3, 1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    expect(result).toBe(2);
  });
});
