import { Component, inject, input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-test',
  imports: [],
  template: `
    <div style="border: 3px solid rgb(175, 7, 7); padding: 16px; margin: 8px;">
      <h1>{{ titleTest1() }}</h1>
      <p>Counter: {{ shared.counter() }}</p>
      <button (click)="shared.increment()">Increment</button>
    </div>
  `,
  standalone: true
})
export class TestComponent {
  titleTest1 = input<string>('Test Component');
  shared = inject(SharedService);
}
