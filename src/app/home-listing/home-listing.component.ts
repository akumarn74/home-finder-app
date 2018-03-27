import { Component, OnInit } from '@angular/core';
import { homeList } from './../home-listing-data/homeList'

@Component({
  selector: 'app-home-listing',
  templateUrl: './home-listing.component.html',
  styleUrls: ['./home-listing.component.css']
})
export class HomeListingComponent implements OnInit {

  homeList: Array<any> = homeList; // Assigning an array to local 

  constructor() { }

  ngOnInit() {
  }

}
