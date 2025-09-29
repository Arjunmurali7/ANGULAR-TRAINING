import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Employee, EmployeeService } from '../employee';

@Component({
  selector: 'app-employee-list',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'] 
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];  //empty array to store and display arry

  constructor(private employeeService: EmployeeService) { }//InjectstheEmployeeServicetoaccessemployeedata

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();  //get list of emp and store in array
  }

  deleteEmployee(id: string): void { //delete function
    if (confirm('Are you sure you want to delete?')) {
      this.employeeService.deleteEmployee(id);
      this.employees = this.employeeService.getEmployees();
    }
  }
}
