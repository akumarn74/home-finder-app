import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {

  public newHomeSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllhomes() {
    return this.http.get('data/homeList.json').map(res => res.json());

  }

  addHome(data) {
    data.image = 'home-default';
    this.newHomeSubject.next(data);
  }
}
 