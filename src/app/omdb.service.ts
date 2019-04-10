import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OMDBService {


  API_KEY="a8bdaa6f";
  movieTitle;
  constructor(private http:HttpClient) {

   }

  getMovie(movieTitle): Observable<any>{
    this.movieTitle=movieTitle;
    return this.http.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&t=${this.movieTitle}`);
  }

}
