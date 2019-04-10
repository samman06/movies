import { Component, OnInit, Input } from '@angular/core';
import { OMDBService } from '../omdb.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title;
  movie;
  @Input() movies;
  @Input() activeMovie;
  addForm = new FormGroup({
    movieTitle: new FormControl('',Validators.required),
  });

  constructor(private omdbService:OMDBService) { }
  ngOnInit() {

  }

  getMovie(){
    this.title=this.addForm.value.movieTitle;
    this.omdbService.getMovie(this.title).subscribe(res=>{
        if(!this.movies.find(obj => obj.imdbID === res.imdbID)){
          this.movie={
            imdbID: res.imdbID,
            Title: res.Title,
            imdbRating: res.imdbRating,
            Director: res.Director,
            Writer: res.Writer, 
            Actors: res.Actors.split(","),
            Poster: res.Poster,
            Released: res.Released,
            Runtime: res.Runtime
          }
          this.movies.push(this.movie);
        }
    });
  }

}
