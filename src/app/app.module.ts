import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchService } from "./services/movie-search.service"

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
