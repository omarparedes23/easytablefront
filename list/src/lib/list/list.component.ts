import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, LocalService } from '@easy/api';
import { Irestaurant } from '@easy/api';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderComponent } from '@easy/header';

@Component({
  selector: 'easy-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent],
  providers: [ApiService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  public restaurantsArray$!: Observable<Irestaurant[]>;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    private localStore: LocalService
  ) {}
  ngOnInit(): void {
    this.restaurantsArray$ = this.apiservice.getRestaurants();
  }

  onLogin(resto:Irestaurant): void {
    this.localStore.saveData('restoid', resto.id.toString());
    this.localStore.saveData('nomresto', resto.nom);
    this.localStore.saveData('addressresto', resto.rue+" "+resto.ville+" "+resto.codePostal);
    this.localStore.saveData('telephoneresto', resto.telephone);
    this.router.navigateByUrl('login');
  }
}
