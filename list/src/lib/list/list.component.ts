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
  onLogin(restoid: number ,restoadresse: string, restopresentation: string,restotelephone: string ,restoemail: string ): void {
    this.localStore.saveData('restoadresse',restoadresse)
    this.localStore.saveData('restoid',restoid.toString())
    this.localStore.saveData('restopresentation',restopresentation)
    this.localStore.saveData('restotelephone',restotelephone)
    this.localStore.saveData('restoemail',restoemail)


    //console.log(restoid);
    console.log(restoadresse);
    //console.log(restopresentation);
    //console.log(restotelephone);
    //console.log(restoemail);


    this.router.navigateByUrl('login');
  }  

}
