import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomeListingComponent } from './home-listing/home-listing.component';
import { HomeCardComponent } from './home-card/home-card.component';

import { HomeService } from './services/home.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeListingComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
