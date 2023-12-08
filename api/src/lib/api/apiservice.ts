import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irestaurant } from './Irestaurant';
import { Iclient } from './Iclient';
import { Ireservation } from './Ireservation';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private urlApi = 'http://localhost:9000/employees';
  //private urlApirestaurants = 'http://localhost:9000/restaurants';
  private urlApirestaurants = 'http://localhost:9000/restaurant/restaurants';
  private urlApiclients = 'http://localhost:9000/clients';
  private urlApiclient = 'http://localhost:9000/client/1';
  private urlApireserver='http://localhost:9000/reservation/reserver'

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApirestaurants);
  }
  getRestaurant(id: number): Observable<Irestaurant> {
    return this.http.get<Irestaurant>(`http://localhost:9000/restaurant/${id}`);
  }
  getClient(id: number): Observable<Iclient> {
    return this.http.get<Iclient>(`http://localhost:9000/client/${id}`);
  }
  authentifierClient(email: string, motdepasse: string) {
    return this.http.get<Iclient>(
      `http://localhost:9000/client/${email}/${motdepasse}`
    );
  }
  reserverTable(reservationform: FormGroup) {
    return this.http.post<Ireservation>(this.urlApireserver,reservationform.value);
    /*.subscribe(data => {
      //this.postId = data.id;
      console.log(data);
  })    */
  } 
  //////////////
  /*
  {
    "clientId":1,        
    "dateReservation":"01-01-2024",
    "heureReservation":"23:52",
    "nombrePersonnes":15,
   "tablerestaurantId":1
  }  */  
  ////////////////////

}
