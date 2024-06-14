import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './AppModule'; // Import AppModule here

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
