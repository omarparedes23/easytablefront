import { Route } from '@angular/router';
import {HomeComponent} from '@easy/home';


export const appRoutes: Route[] = [
    { path: '',pathMatch:'full',component: HomeComponent}
];
