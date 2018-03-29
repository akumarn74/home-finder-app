import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingComponent } from './home-listing.component';
import { SortByPipe } from '../pipes/sort-by.pipe';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { HomeCardComponent } from '../home-card/home-card.component';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UtilService } from '../services/util.service';

describe('HomeListingComponent', () => {
  let component: HomeListingComponent;
  let fixture: ComponentFixture<HomeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListingComponent,
      SortByPipe,
      HomeCardComponent ],

      imports:[FormsModule,
        HttpClientModule,
        HttpModule],

      providers:[HomeService,UtilService]


    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
