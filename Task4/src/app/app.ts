
import { Component } from '@angular/core'; // imp components

import { StudentComponent } from './student/student'; // imports student componenet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { //makes it aviable for outside the file
  title = 'student-services-app';
}