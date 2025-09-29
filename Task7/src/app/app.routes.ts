import { Routes} from '@angular/router';
import { Home } from './home/home';
import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeFormComponent } from './employee-form/employee-form';


export const routes: Routes = [ 
    {path:"",component:Home},
    {path:'employees',component:EmployeeListComponent},
    {path:'employees/add',component:EmployeeFormComponent},
    {path:'employees/edit/:id',component:EmployeeFormComponent},
    {path:'**',redirectTo:""}
];
