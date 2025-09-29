import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AttendanceListComponent } from './components/attendance-list/attendance-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendance', component: AttendanceListComponent },
  { path: '**', redirectTo: '' } // fallback to home
];
