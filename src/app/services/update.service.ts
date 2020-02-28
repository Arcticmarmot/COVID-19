import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_H5 = 'g2/getOnsInfo?name=disease_h5';
const API_OTHER = 'g2/getOnsInfo?name=disease_other';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient ) {
  }

  update_h5(): Observable<any> {
    return this.http.get(API_H5);
  }
  update_other(): Observable<any> {
    return this.http.get(API_OTHER);
  }

}
