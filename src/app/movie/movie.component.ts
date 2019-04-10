import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie1={
      imdbID: "1",
      Title: "dark night",
      imdbRating: "7.8",
      Director: "Barry Jenkins",
      Writer: "hamada hamada", 
      Actors:["actor 1", "actor 2", "actor 3"],
      Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TeSBrkema7a22R_WAuvVaz03Pl83QwB9JpmkHyGsRMxfLbed",
      Released: "17 Apr 2012",
      Runtime: "57 min"
    }
    movie2={
        imdbID: "2",
        Title: "fast speed",
        imdbRating: "7.8",
        Director: "Barry Jenkins",
        Writer: "hamada hamada", 
        Actors:["actor 1", "actor 2", "actor 3"],
        Poster: "http://www.hans-zimmer.com/~hybrid/Balfe/FAST6V.jpg",
        Released: "17 Apr 2011",
        Runtime: "57 min"
      }
    movies;
    activeMovie;
  constructor() { }

  ngOnInit() {
    
    this.movies=[this.movie1, this.movie2];
    this.activeMovie=this.movies[0];
  }
  changeActiveMovie(imdbID){
    this.activeMovie=this.movies.find(obj => obj.imdbID === imdbID);

  }

}
