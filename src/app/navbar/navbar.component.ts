import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() movies;
  @Input() activeMovie;
  @Output() change=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeMovie(movie){
    this.activeMovie=movie;
    this.change.emit(movie.imdbID);
  }

}
