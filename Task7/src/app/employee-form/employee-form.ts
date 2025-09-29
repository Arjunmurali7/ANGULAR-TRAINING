   import { Component, OnInit } from '@angular/core'; //imports lifecycle interface onit
    import { ActivatedRoute, Router } from '@angular/router'; //navigate
    import { Employee, EmployeeService } from '../employee'; //imps emp mod and emp serv
    import { FormsModule } from '@angular/forms'; //Enablestwo-waydatabindingandformhandling.

    import { CommonModule } from '@angular/common';//ProvidescommondirectiveslikengIf,ngFor.


    @Component({
      selector: 'app-employee-form',
      templateUrl: './employee-form.html',
      imports: [CommonModule, FormsModule]
    })
    export class EmployeeFormComponent implements OnInit {
      
      //form data
      employee: Omit<Employee, 'id'> | Employee = { name: '', position: '', email: '' };
      isEditMode = false;  //edit or add

      constructor( //Injects services:
        private employeeService: EmployeeService,  //emp data
        private router: Router,  //navigation
        private route: ActivatedRoute  //current route
      ) { }

      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');  //get id parameter from current url
        if (id) {
          this.isEditMode = true;  //id exist then edit works
          const existingEmployee = this.employeeService.getEmployee(id);
          if (existingEmployee) {
            this.employee = { ...existingEmployee }; //copy data into emp variable
          }
        }
      }

      onSubmit(): void { //form submission
        if (this.isEditMode) {
          this.employeeService.updateEmployee(this.employee as Employee);
        } else {
          this.employeeService.addEmployee(this.employee);
        }
        this.router.navigate(['/employees']);
      }
    }