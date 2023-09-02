import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { CardComponent } from './shared/card/card.component';
import { MobilesComponent } from './pages/mobiles/mobiles.component';
import { CarsComponent } from './pages/cars/cars.component';
import { ChocolatesComponent } from './pages/chocolates/chocolates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    CardComponent,
    MobilesComponent,
    CarsComponent,
    ChocolatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
