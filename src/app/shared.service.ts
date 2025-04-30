import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  counter = signal(0);
  testCounter = signal(0);
  test2Counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  incrementTestCounter() {
    this.testCounter.set(this.testCounter() + 1);
  }

  incrementTest2Counter() {
    this.test2Counter.set(this.test2Counter() + 1);
  }

} 