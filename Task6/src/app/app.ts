import { Component } from '@angular/core';

import { UserComponent } from './user/user'; // <-- You added this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UserComponent], // <-- You added this
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'user-api-app';
}




