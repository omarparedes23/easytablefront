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
  //urlIp: string = 'http://127.0.0.1:9000';
  urlIp: string = 'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT';

  //private urlApi = 'http://127.0.0.1:9000/employees';

  //private urlApirestaurants = 'http://localhost:9000/restaurant/restaurants';
  //private urlApirestaurants =   'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/restaurant/restaurants';
  //private urlApirestaurants =    'http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT/restaurant/restaurants';
  private urlApirestaurants = this.urlIp + '/restaurant/restaurants';

  //private urlApiclients = 'http://localhost:9000/clients';
  //private urlApiclient = 'http://localhost:9000/client/1';
  //private urlApiclient =    'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/client/1';
  //private urlApiclient =    'http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT/client/1';
  private urlApiclient = this.urlIp + '/client/1';

  //private urlApireserver = 'http://localhost:9000/reservation/reserver';
  //private urlApireserver =     'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/reservation/reserver';
  //private urlApireserver =    'http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT/reservation/reserver';
  private urlApireserver = this.urlIp + '/reservation/reserver';

  //private urlApisignup = 'http://localhost:9000/client/creerCompte';
  //private urlApisignup =     'http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/client/creerCompte';
  //private urlApisignup =    'http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT/client/creerCompte';
  private urlApisignup = this.urlIp + '/client/creerCompte';

  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT/restaurant
  //http://localhost:9000/restaurant/${id}

  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT
  //http://52.47.152.220:8080/easytable-0.0.1-SNAPSHOT
  //http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT
  //http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT
  //http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApirestaurants);
  }
  getRestaurant(id: number): Observable<Irestaurant> {
    return this.http.get<Irestaurant>(this.urlIp + `/restaurant/${id}`);
  }
  getClient(id: number): Observable<Iclient> {
    return this.http.get<Iclient>(this.urlIp + `/client/${id}`);
  }
  authentifierClient(email: string, motdepasse: string) {
    return this.http.get<Iclient>(
      this.urlIp + `/client/${email}/${motdepasse}`
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
