import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  counter = signal(0);
  testCounter = signal(0);
  test2Counter = signal(0);

  increment() {
    this.counter.update(v => v + 1);
  }

  incrementTestCounter() {
    this.testCounter.update(v => v + 1);
  }

  incrementTest2Counter() {
    this.test2Counter.update(v => v + 1);
  }


} 