import { Component, OnInit, Input } from '@angular/core';
import { Home } from './../home'

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  // binding to decorator input and assigning to local property name as 'home'
  @Input ('home')home : Home //this is declared aswe have used interface; 

  constructor() { }

  ngOnInit() {
    // Use of what kind of interface we can use as an example and imported at top level
    // let bedrooms = this.home.bedrooms; 
    // let kitchen = this.home;
  }
}
