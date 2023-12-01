import { Route } from '@angular/router';
import {HomeComponent} from '@easy/home';
import {ListComponent} from '@easy/list';


export const appRoutes: Route[] = [
    { path: 'home',component: HomeComponent},
    { path: 'list',component: ListComponent}
];
