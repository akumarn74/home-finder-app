import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HomeService } from './../services/home.service'; //importinf external service to component
import 'rxjs/add/operator/map';  
import { error } from 'util';
import { Home } from '../home';
import { UtilService } from '../services/util.service';

// this is declared when it http request has done within the component
// import { homeList } from 'src/app/data/homeList' 

@Component({
  selector: 'app-home-listing', 
  templateUrl: './home-listing.component.html',
  styleUrls: ['./home-listing.component.css']
})
export class HomeListingComponent implements OnInit {

  homes: Array<Home> = [];
  error: string = '';
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];

  // This need to be declare here inorder to list the data from ext component data
  homeList: Array<any>; // Assigning an array to local 
  // error: string;

  constructor(
    private http: Http,
    private homeService: HomeService,
    private utilService: UtilService  // Injecting the service
  ) { }

  ngOnInit() {

    // commented out code is written within the component for get request of thee data
    // this.http.get('data/homeList.json')
    // .map(res => res.json()) 
    // .subscribe(
    //   data => this.homeList = data,
    //   error => this.error = error.statusText
    // )
    
    // pulling th data from service 
    this.homeService.getAllhomes()
      .subscribe(
        data => this.homeList = data,
        error => this.error = error.statusText
      )

      this.homeService.newHomeSubject
      .subscribe( 
        data => this.homeList = [data, ...this.homeList]
      )
  }
} 
