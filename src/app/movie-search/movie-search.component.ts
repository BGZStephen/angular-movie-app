import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Movie } from "../models/movie"
import { MovieSearchService } from "../services/movie-search.service"
import "rxjs/Rx";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private movieSearchService: MovieSearchService, private activatedRoute: ActivatedRoute) { }

  movies: Movie[];

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['searchString'])
    .subscribe((searchString) => {
      this.movieSearchService.searchMovie(searchString)
      .subscribe(movies => {
        console.log(movies)
        this.movies = movies.results;
      })
    })
  }

}
