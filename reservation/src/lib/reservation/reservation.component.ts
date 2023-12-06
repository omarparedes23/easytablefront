import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalService } from '@easy/api';

@Component({
  selector: 'easy-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent implements OnInit {
  
  restoid!:string|null;
  restoadresse!:string|null;
  restopresentation!:string|null;
  restotelephone!:string|null;
  restoemail!:string|null;
  

  constructor(private localStore: LocalService) {}
  ngOnInit(): void {
    this.restoid =  this.localStore.getData('restoid');
    this.restoadresse =  this.localStore.getData('restoadresse');
    this.restopresentation =  this.localStore.getData('restopresentation');
    this.restotelephone =  this.localStore.getData('restotelephone');
    this.restoemail =  this.localStore.getData('restoemail');
   
      
  }
}
