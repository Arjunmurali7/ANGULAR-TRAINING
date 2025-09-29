import { Injectable } from '@angular/core'; //inject service wherever needed
    export interface Employee {
      id: string;
      name: string;
      position: string;
      email: string;     
    }

    @Injectable({
      providedIn: 'root'
    })
    export class EmployeeService {

      private employees: Employee[] = [ //An in-memory array of employee objects.
        { id: 'emp101', name: 'Arjun Murali', position: 'Software Engineer', email: 'arjun@gmail.com' },
        { id: 'emp102', name: 'Madhav', position: 'Project Manager', email: 'madhav@gmail.com' },
        { id: 'emp103', name: 'Anandhu', position: 'Designer', email: 'anandhu@gmail.com' }
      ];
      
      //get method return emp array
      getEmployees(): Employee[] {
        return this.employees;
      }
      
      //find by id
      getEmployee(id: string): Employee | undefined {
        return this.employees.find(emp => emp.id === id);
      }

    addEmployee(employee: Omit<Employee, 'id'>): void {  //should cntain all fields , omit ->id is generated inside
  const newId = 'emp' + Date.now();  //unique id
  const newEmployee: Employee = {
    id: newId,
    name: employee.name,
    position: employee.position,
    email: employee.email
  };
  this.employees.push(newEmployee);  //add new created emp
}

       //update existing emp
      updateEmployee(updatedEmployee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
        if (index !== -1) {
          this.employees[index] = updatedEmployee;
        }
      }
      
      //delete employee by id
      deleteEmployee(id: string): void {
        this.employees = this.employees.filter(emp => emp.id !== id); //create new array without deleted element.
      }
    }
            