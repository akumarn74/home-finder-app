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

  @ViewChild('newHomeForm') newHomeForm: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];

  constructor(
    private homeService: HomeService,
    private utilService: UtilService
  ) { } 
 
  ngOnInit() {
  }

  onHomeSubmit(data) {
    this.homeService.addHome(data);
    this.newHomeForm.reset();
  }

}