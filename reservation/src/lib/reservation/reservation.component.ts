import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Iclient, Irestaurant, LocalService } from '@easy/api';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import {HeaderComponent} from '@easy/header';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'easy-reservation',
  standalone: true,
  imports: [CommonModule,HttpClientModule,HeaderComponent,ReactiveFormsModule,FormsModule],
  providers: [ApiService],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  public client$!: Observable<Iclient>;
  public restaurant$!: Observable<Irestaurant>;
  restoid!:string|null;
  clientid!:string|null;



  constructor(private apiservice: ApiService,private router: Router,private localStore: LocalService,private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.restoid =  this.localStore.getData('restoid');
    this.clientid =  this.localStore.getData('clientid');
    this.client$=this.apiservice.getClient(Number(this.clientid));
    this.restaurant$=this.apiservice.getRestaurant(Number(this.restoid));

    this.reservationForm = this.formBuilder.group({
      clientId: [null],
      dateReservation: [null],
      heureReservation: [null],
      nombrePersonnes: [null,Validators.required],
      tablerestaurantId: [null,Validators.required]
    });    

  }

  onSubmitForm() {
    this.reservationForm.value.clientId=this.clientid?.toString();
    this.apiservice.reserverTable(this.reservationForm).pipe(take(1)).subscribe(
      (data) => {console.log(data);
          this.localStore.saveData('datereservation', this.reservationForm.value.dateReservation);
          this.localStore.saveData('heurereservation', this.reservationForm.value.heureReservation);
          this.localStore.saveData('nombrepersonnes', this.reservationForm.value.nombrePersonnes);
    this.router.navigateByUrl('confirmation');
  },
  (error) => {
    console.log(error);
  }  
)

  }  
}
