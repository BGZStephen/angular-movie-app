import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx";

@Injectable()
export class MovieSearchService {

  private apiKey: string;
  private searchUrl: string;

  constructor(private http: Http) {
    this.apiKey = "5489df688c2d9f6395853fc5d7bb953f";
    console.log('movie service initialised');
  }

  getPopular() {
    this.searchUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='+this.apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    return this.http.get(this.searchUrl)
    .map(res => res.json());
  }

}
