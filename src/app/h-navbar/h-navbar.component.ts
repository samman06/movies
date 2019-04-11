import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.css']
})
export class HNavbarComponent implements OnInit {

  show:boolean = false;
  constructor() { }
  

  toggleCollapse() {
    this.show = !this.show
  }
  ngOnInit() {
  }

}
