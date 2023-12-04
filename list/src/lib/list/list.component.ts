import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@easy/api';
import { Irestaurant } from '@easy/api';
import { HttpClientModule } from '@angular/common/http';

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
  constructor(private apiservice: ApiService) {}
  ngOnInit(): void {
    this.obtenirlistaresto();
  }
  obtenirlistaresto() {
    this.apiservice.getRestaurants().subscribe((p) => {
      console.log(p);
      this.restaurantsArray = p;
    });
  }
}
