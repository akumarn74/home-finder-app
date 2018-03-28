import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomeListingComponent } from './home-listing/home-listing.component';
import { HomeCardComponent } from './home-card/home-card.component';

import { HomeService } from './services/home.service';
import { UtilService } from './services/util.service';
import { HomeFormListComponent } from './home-form-list/home-form-list.component';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeListingComponent,
    HomeCardComponent,
    HomeFormListComponent,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HomeService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
