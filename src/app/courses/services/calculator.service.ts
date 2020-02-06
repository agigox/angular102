import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(firstNumber: number, secondNumber: number): number {
    this.logger.log('Addition operation called');
    return firstNumber + secondNumber;

  }
  subtract(firstNumber: number, secondNumber: number): number {
    this.logger.log('Subtraction operation called');
    return firstNumber - secondNumber;

  }

}
