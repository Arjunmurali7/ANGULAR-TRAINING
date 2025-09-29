import { Component } from '@angular/core'; //decorator

import {Student} from './student/student'; // imports components
@Component({ //decorater ties together all
  selector: 'app-root', //custom tag entrypoint
  imports: [Student], //allow router and cpnt in root cpnt
  templateUrl: './app.html', //root cmpnt html file
  styleUrl: './app.css' // styles for cmpnt
})
export class App { //define root class
   title = ('student-app'); //apptitle
}