import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StickerComponent } from './component/sticker/sticker.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
