import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irestaurant } from './Irestaurant';
import { Iclient } from './Iclient';
//@easy/api

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private urlApi = 'http://localhost:9000/employees';
  private urlApirestaurants = 'http://localhost:9000/restaurants';
  private urlApiclients = 'http://localhost:9000/clients';
  private urlApiclient = 'http://localhost:9000/client/1';
  
  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApirestaurants);
  }
  getClient(id:number): Observable<Iclient> {
    return this.http.get<Iclient>(`http://localhost:9000/client/${id}`);
  }  
}
