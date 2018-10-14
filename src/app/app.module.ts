import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { FullscreenComponent } from './layout/fullscreen/fullscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FullscreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
