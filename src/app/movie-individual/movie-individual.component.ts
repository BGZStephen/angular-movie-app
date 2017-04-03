import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Movie } from "../models/movie"
import { MovieSearchService } from "../services/movie-search.service"
import "rxjs/Rx";

@Component({
  selector: 'app-movie-individual',
  templateUrl: './movie-individual.component.html',
  styleUrls: ['./movie-individual.component.css']
})
export class MovieIndividualComponent implements OnInit {

  constructor(private movieSearchService: MovieSearchService, private activatedRoute: ActivatedRoute) {
  }

  movie: Movie[];

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.movieSearchService.searchMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        console.log(this.movie)
      })
    })
  }
}
