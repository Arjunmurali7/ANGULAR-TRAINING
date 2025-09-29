
import { Injectable } from '@angular/core'; //used to tell Angular that this class can be used as a service

@Injectable({ //Angular will  register this service in the root injector
  providedIn: 'root'
})
export class StudentService { //make it available

  constructor() { }

  private students = [
    { id: 1, name: 'Arjun', major: 'Computer Science' },
    { id: 2, name: 'Ronaldo', major: 'Physics' },
    { id: 3, name: 'Neymar', major: 'Mathematics' },
    { id: 4, name: 'Messi', major: 'Biology' }
  ];

  getStudents() {
    return this.students;
  }
}