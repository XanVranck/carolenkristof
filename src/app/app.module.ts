import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CountDown} from "ng2-date-countdown";
import { InfoComponent } from './info/info.component';
import { CountdownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountDown,
    InfoComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
