
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //provides ngfor ngif
import { StudentService } from '../student';

@Component({
  selector: 'app-student', //cmpnt name
  standalone: true, //component is alone
  imports: [CommonModule], //makes ngfor available for temp
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent implements OnInit { //cmpnt imple onit

  students: any[] = []; //student array empty

  constructor(private studentService: StudentService) { } //di service instance

  ngOnInit(): void { //load data here
    this.students = this.studentService.getStudents(); //calls service to retrieve data
    console.log (this.students)
  }
}