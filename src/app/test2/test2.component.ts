import { Component, inject, input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-test2',
  imports: [],
  template: `
    <div style="border: 3px solid #1976d2; padding: 16px; margin: 8px;">
      <h1>{{ titleTest2() }}</h1>
      <p>Counter: {{ shared.counter() }}</p>
      <button (click)="shared.increment()">Increment</button>
    </div>
  `,
  standalone: true
})
export class Test2Component {
  titleTest2 = input<string>('Test2 Component');
  shared = inject(SharedService);
}
