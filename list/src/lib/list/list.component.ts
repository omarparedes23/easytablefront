import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, LocalService } from '@easy/api';
import { Irestaurant } from '@easy/api';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'easy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  public restaurantsArray!: Irestaurant[];
  constructor(private apiservice: ApiService,private router: Router,private localStore: LocalService) {}
  ngOnInit(): void {
    this.obtenirlistaresto();
  }
  obtenirlistaresto() {
    this.apiservice.getRestaurants().subscribe((p) => {
      console.log(p);
      this.restaurantsArray = p;
    });
  }
  onLogin(resto:Irestaurant): void {
    //.id,resto.adresse,resto.presentation,resto.telephone,resto.email
    //id: number ,restoadresse: string, restopresentation: string,restotelephone: string ,restoemail: string 
    this.localStore.saveData('restoadresse',resto.adresse);
    this.localStore.saveData('restoid',resto.id.toString());
    this.localStore.saveData('restopresentation',resto.presentation);
    this.localStore.saveData('restotelephone',resto.telephone);
    this.localStore.saveData('restoemail',resto.email);

    this.router.navigateByUrl('login');
  }  

}
