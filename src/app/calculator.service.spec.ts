import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    /*
    const logger = new LoggerService();
    spyOn(logger, 'log');
    const service = new CalculatorService(logger);
    */
    const logger = jasmine.createSpyObj('LoggerService', ['log']);
    const service = new CalculatorService(logger);
    logger.log.and.returnValue('Hello Allo');
    const result = service.add(2, 2);
    expect(logger.log).toHaveBeenCalled();
    //expect(logger.log('rrr')).toBe('Hello Allo');
    expect(logger.log()).toEqual('Hello Allo');
    expect(result).toBe(4);




    // pending();
  });
  it('should subtract two numbers', () => {
    const service = new CalculatorService(new LoggerService());
    const result = service.subtract(3, 1);
    expect(result).toBe(2);
    // pending();
  });
});
