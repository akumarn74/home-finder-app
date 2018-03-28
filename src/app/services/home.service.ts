import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {

  public newHomeSubject = new Subject<any>();

  constructor(private http: Http) { }

  /**
   * To get all the data
   * and to return the response in form of json
   *  
   */
  getAllhomes() {
    return this.http.get('data/homeList.json').map(res => res.json());

  }

  /**
   * 
   * @param data
   * 
   * Added another function to get communicated 
   * betweeen components and services
   * through Subject
   */
  addHome(data) {
    data.image = 'home-default';
    this.newHomeSubject.next(data);
  }
}
 