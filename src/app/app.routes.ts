import { Routes, RouterModule } from "@angular/router"
import { MoviesComponent } from "./movies/movies.component";
import { MovieIndividualComponent } from "./movie-individual/movie-individual.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";


const APP_ROUTES: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'search/:searchString', component: MovieSearchComponent},
  {path: 'movie/:id', component: MovieIndividualComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES)
