import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// tslint:disable-next-line: nx-enforce-module-boundaries
import { defineCustomElements, applyPolyfills } from '@nxlp/ui/loader';

defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

applyPolyfills().then(() => {
  defineCustomElements();
});
