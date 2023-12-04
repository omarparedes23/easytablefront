import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irestaurant } from '@easy/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private urlApi = 'http://localhost:9000/employees';
  private urlApi = 'http://localhost:9000/restaurants';
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApi);
  }
}
