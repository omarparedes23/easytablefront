import { Route } from '@angular/router';
import { ConfirmationComponent } from '@easy/confirmation';
import { HomeComponent } from '@easy/home';
import { ListComponent } from '@easy/list';
import { LoginComponent } from '@easy/login';
import { MenuComponent } from '@easy/menu';
import { ReservationComponent } from '@easy/reservation';
import { SignupComponent } from '@easy/signup';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: 'home' },
];
