import { Component, effect, inject, input } from '@angular/core';
import { SharedService } from '../shared.service';
import { injectCdBlink } from '../shared/inject-cd-blink';

@Component({
  selector: 'app-test2',
  imports: [],
  template: `
    <div style="border: 3px solid #1976d2; padding: 16px; margin: 8px;">
      <h1>{{ titleTest2() }}</h1>
      <p>Counter: {{ shared.counter() }}</p>
      <button (click)="shared.increment()">Increment</button>

      <p>Test2 Counter: {{ shared.test2Counter() }}</p>
      <button (click)="shared.incrementTest2Counter()">Increment Test2 Counter</button>
    </div>
  `,
  standalone: true
})
export class Test2Component {
  titleTest2 = input<string>('Test2 Component');
  shared = inject(SharedService);

  constructor() {
    const blink = injectCdBlink();
    effect(() => {
      this.shared.test2Counter();
      console.log('Test2Component effect');
      blink();
    });
  }
}
