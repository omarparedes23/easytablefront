import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '@easy/header';

@Component({
  selector: 'easy-signup',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {}
