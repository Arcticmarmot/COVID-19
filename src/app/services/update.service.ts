import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {merge, Observable, of} from 'rxjs';
import {concat, map, mergeAll} from 'rxjs/operators';

const API_H5 = 'g2/getOnsInfo?name=disease_h5';
const API_OTHER = 'g2/getOnsInfo?name=disease_other';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient ) {
  }
  update(): Observable<any> {
    return this.update_h5().pipe(
      concat(this.update_other())
    );
  }
  update_h5(): Observable<any> {
    return this.http.get(API_H5);
  }
  update_other(): Observable<any> {
    return this.http.get(API_OTHER);
  }

}
