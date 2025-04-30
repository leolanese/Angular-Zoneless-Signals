import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedService {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }
} 