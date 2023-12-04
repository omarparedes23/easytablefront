import { Route } from '@angular/router';
import { HomeComponent } from '@easy/home';
import { ListComponent } from '@easy/list';
import { LoginComponent } from "@easy/login";


export const appRoutes: Route[] = [
    { path: 'home',component: HomeComponent},
    { path: 'list',component: ListComponent},
    { path: 'login',component: LoginComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
