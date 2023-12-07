import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HeaderComponent} from '@easy/header';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,HeaderComponent],
  selector: 'easy-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'easy';
  
}
