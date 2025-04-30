import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WrapperComponent } from './app/wrapper.component';

bootstrapApplication(WrapperComponent, appConfig).then(appRef => {
  const wrapper = createCustomElement(WrapperComponent, { injector: appRef.injector });
  customElements.define('my-web-component', wrapper);
});