import { Routes } from '@angular/router'; //imports routes
import { Home } from './home/home'; // imports home component
import { About } from './about/about'; //imports about component

export const routes: Routes = [ //exports array of routeobjects
    { path: '', component: Home },
    { path: 'about', component: About},
];
