import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from './../services/home.service';
import { UtilService } from './../services/util.service';


@Component({
  selector: 'app-home-form-list',
  templateUrl: './home-form-list.component.html',
  styleUrls: ['./home-form-list.component.css']
})
export class HomeFormListComponent implements OnInit {

  // To do the form reset after submittimg 
  @ViewChild('newHomeForm') newHomeForm: NgForm;

  // to display the drop down with array of strings assigned
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
  
  /**
   * 
   * @param homeService 
   * @param utilService 
   */
  constructor(  // Injecting the services 
    private homeService: HomeService,
    private utilService: UtilService
  ) { } 
 
  ngOnInit() {
  }

  /**
   * On Form submission adding additional home if the data available 
   * @param data 
   * 
   * reset for the form
   */
  onHomeSubmit(data) { 
    this.homeService.addHome(data);
    this.newHomeForm.reset();
  }

}