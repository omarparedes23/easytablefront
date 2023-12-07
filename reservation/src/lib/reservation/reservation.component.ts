import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Iclient, LocalService } from '@easy/api';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'easy-reservation',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [ApiService],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  
  public client$!: Observable<Iclient>;
  
  restoid!:string|null;
  restoadresse!:string|null;
  restopresentation!:string|null;
  restotelephone!:string|null;
  restoemail!:string|null;
  

  constructor(private apiservice: ApiService,private router: Router,private localStore: LocalService) {}
  ngOnInit(): void {
    this.restoid =  this.localStore.getData('restoid');
    this.restoadresse =  this.localStore.getData('restoadresse');
    this.restopresentation =  this.localStore.getData('restopresentation');
    this.restotelephone =  this.localStore.getData('restotelephone');
    this.restoemail =  this.localStore.getData('restoemail');
    this.client$=this.apiservice.getClient(1);
   
      
  }
}
