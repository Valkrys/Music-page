import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { HeaderComponent } from './header/header.component';
import { BottomOverviewComponent } from './bottom-overview/bottom-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyHomeComponent,
    HeaderComponent,
    BottomOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
