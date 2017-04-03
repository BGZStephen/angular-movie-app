import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private searchString: string;

  constructor(private router: Router) { }

  searchMovies() {
    this.router.navigateByUrl('search/'+this.searchString)
  }
}
