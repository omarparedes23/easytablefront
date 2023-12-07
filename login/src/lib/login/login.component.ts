import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {HeaderComponent} from '@easy/header';

@Component({
  selector: 'easy-login',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router){}
  onReservation():void{
    this.router.navigateByUrl('reservation');
  }
}
