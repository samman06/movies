import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favMovies;
  activeFavMovie;
  isfavouritePage=true;
  
  constructor() { }

  ngOnInit() {
    this.favMovies=JSON.parse(localStorage.getItem("favorites"))||[];
    if(this.favMovies.length>0)
      this.activeFavMovie=this.favMovies[0];
    
  }

  changeActiveMovie(imdbID){
    this.activeFavMovie=this.favMovies.find(obj => obj.imdbID === imdbID);
  }


  deleteMovies(movie){
    let filteredMovies = this.favMovies.filter(function(value){
       return value.imdbID != movie.imdbID;
    })
    this.favMovies = filteredMovies;
    localStorage.setItem("favorites", JSON.stringify(filteredMovies))
    if(this.favMovies.length>0)
      this.activeFavMovie=this.favMovies[0];
  }

}
