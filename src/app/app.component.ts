import { Component, effect, inject, input } from '@angular/core';
import { SharedService } from './shared.service';
import { injectCdBlink } from './shared/inject-cd-blink';
import { TestComponent } from "./test/test.component";
import { Test2Component } from './test2/test2.component';

@Component({
  selector: 'app-root',
  imports: [TestComponent, Test2Component],
  template: `
    <div style="border: 3px solid rgb(10, 145, 43); padding: 16px; margin: 8px;">
      <h1>{{ titleApp() }}</h1>
      <p>Counter: {{ shared.counter() }}</p>
      <button (click)="shared.increment()">Increment</button> -
      <button (click)="shared.incrementTestCounter()">Increment Test Counter</button> -
      <button (click)="shared.incrementTest2Counter()">Increment Test2 Counter</button>

      <app-test [title]="titleApp()"></app-test>
      <app-test2 [title]="title2App()"></app-test2>
    </div>
  `,
  standalone: true
})
export class AppComponent {
  titleApp = input<string>('App Component Title');
  title2App = input<string>('App Component Title 2');
  shared = inject(SharedService);

  constructor() {
    const blink = injectCdBlink();
    effect(() => {
      this.shared.counter();
      console.log('App Component effect');
      blink();
    });
  }
}
