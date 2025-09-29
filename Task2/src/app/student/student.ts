import { Component } from '@angular/core'; //brings in component decorator

 
@Component({ //decorator how to create and render the component.
  selector: 'app-student', //custom htmltag

  templateUrl: './student.html', //extrnlhtml file
  styleUrl: './student.css' // extrnl cssfile
})
export class Student { //def typscrp logic cmpnt
 
  name: string = "Arjun";
  age: number = 20;
   updateStudent() { //method in cmpnt
    this.name = "ARJU";
    this.age = 23;
   }
 
}