import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AppComponent } from "./app.component";

@Component({
  selector: 'my-web-component',
  template: `
    <h1>{{ titleWrapper() }}</h1>
    <app-root [title]="titleWrapper()" />,
  `,
  imports: [AppComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent {
  // The title input is being passed from your WrapperComponent to AppComponent
  titleWrapper = input<string>('Wrapper Component Title');
}