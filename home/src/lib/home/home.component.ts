import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'easy-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor( private router1: Router) {}
ngOnInit(): void {
  console.log("list");
}
  onListeResto():void{
    this.router1.navigateByUrl('list');

  }
}
