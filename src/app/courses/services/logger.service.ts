import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string): void {
    console.log('feature branch commit 1');
    console.log('feature branch commit 2');
    console.log('feature branch commit 3');
    console.log(message);
  }
}
