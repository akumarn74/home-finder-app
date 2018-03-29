import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormListComponent } from './home-form-list.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../services/home.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { UtilService } from '../services/util.service';

describe('HomeFormListComponent', () => {
  let component: HomeFormListComponent;
  let fixture: ComponentFixture<HomeFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFormListComponent ],

      imports:[FormsModule,
        HttpClientModule,
        HttpModule],
      providers: [HomeService, UtilService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
