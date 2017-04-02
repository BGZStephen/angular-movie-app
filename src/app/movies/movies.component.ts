import { Component, OnInit } from '@angular/core';
import { MovieSearchService } from "../services/movie-search.service"
import { Movie } from "../models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  private movies: Movie[];

  // private popularMovies:

  constructor(private movieSearch: MovieSearchService) {
    this.movieSearch.getPopular().subscribe(res => {
      console.log(res.results)
      this.movies = res.results;
    })
  }
}
