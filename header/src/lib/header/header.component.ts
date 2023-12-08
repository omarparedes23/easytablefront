import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'easy-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onListeResto(): void {
    this.router.navigateByUrl('list');
  }
  onHome(): void {
    this.router.navigateByUrl('home');
  }
}
