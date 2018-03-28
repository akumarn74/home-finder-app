import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getAllhomes() {
    return this.http.get('data/homeList.json').map(res => res.json());

  }

}
 