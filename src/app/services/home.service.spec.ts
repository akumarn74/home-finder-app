import { TestBed, inject } from '@angular/core/testing';

import { HomeService } from './home.service';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        HttpModule ],

      providers: [HomeService]
    });
  });

  it('should be created', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
