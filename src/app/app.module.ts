import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './layout/default/default.component';
import { FullscreenComponent } from './layout/fullscreen/fullscreen.component';
import { ContentComponent } from './layout/default/content/content.component';
import { FooterComponent } from './layout/default/footer/footer.component';
import { HeaderComponent } from './layout/default/header/header.component';
import { SidebarComponent } from './layout/default/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FullscreenComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
