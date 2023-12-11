import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Irestaurant } from './Irestaurant';
import { Iclient } from './Iclient';
import { Ireservation } from './Ireservation';
import { Icompte } from './Icompte';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private urlApi = 'http://localhost:9000/employees';
  private urlApirestaurants = 'http://localhost:9000/restaurant/restaurants';
  //private urlApirestaurants =   'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/restaurant/restaurants';
  
  //private urlApiclients = 'http://localhost:9000/clients';
    private urlApiclient = 'http://localhost:9000/client/1';
  //private urlApiclient =    'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/client/1';

  private urlApireserver = 'http://localhost:9000/reservation/reserver';
  //private urlApireserver =     'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/reservation/reserver';

    private urlApisignup = 'http://localhost:9000/client/creerCompte';
  //private urlApisignup =     'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/client/creerCompte';

  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/restaurant
  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT
  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApirestaurants);
  }
  getRestaurant(id: number): Observable<Irestaurant> {
    return this.http.get<Irestaurant>(
      `http://localhost:9000/restaurant/${id}`
    );
  }
  getClient(id: number): Observable<Iclient> {
    return this.http.get<Iclient>(
      `http://localhost:9000/client/${id}`
    );
  }
  authentifierClient(email: string, motdepasse: string) {
    return this.http.get<Iclient>(
      `http://localhost:9000/client/${email}/${motdepasse}`
    );
  }
  reserverTable(reservationform: FormGroup) {
    return this.http.post<Ireservation>(
      this.urlApireserver,
      reservationform.value
    );
  }
  enregistrerClient(signupform: FormGroup) {
    return this.http.post<Icompte>(this.urlApisignup, signupform.value);
  }
}
