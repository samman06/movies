import { FavoritesComponent } from './favorites/favorites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [{path:'', component:MovieComponent}, {path:'favorites', component:FavoritesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
