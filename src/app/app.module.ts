import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSearchService } from "./services/movie-search.service";
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieIndividualComponent } from './movie-individual/movie-individual.component'
import { routing } from "./app.routes";
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieIndividualComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MovieSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
