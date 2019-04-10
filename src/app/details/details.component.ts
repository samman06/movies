import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movieDetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  favorites=[];
  @Input() activeMovie;
  @Input() isfavouritePage;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.favorites=JSON.parse(localStorage.getItem("favorites")) || [];
  }

  addtoFavorite(movie){
    
    if(!this.favorites.find(obj => obj.imdbID === movie.imdbID)){
      this.favorites.push(movie)
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    }
  }
  
  deleteMovie(movie){
    this.activeMovie=movie;
    this.change.emit(movie);
  }

}
