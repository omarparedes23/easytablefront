import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@easy/header';

@Component({
  selector: 'easy-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
