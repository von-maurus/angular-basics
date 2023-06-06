import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// NgModule is a decorator, a function to adding meta data to a class. in this case, AppModule.
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // for services
  bootstrap: [AppComponent] // only applies to the root component in this case.
})
export class AppModule { }
