// This is JIT compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Main module of angular for all modules. 
import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// This is AOT compilation
// import { platformBrowser } from '@angular/platform-browser';
// platformBrowser()