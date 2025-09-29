import { Component,OnInit } from '@angular/core'; //imports decorator and lifecyclehook
import { CommonModule } from '@angular/common'; //structural dir nfor
import { UserService } from '../user'; //brings service for api calls
@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent implements OnInit {

  
  users: any[] = []; //empty array
  constructor(private userService: UserService) { } //implements di

  ngOnInit(): void { //fetching data from a service.
    this.userService.getUsers().subscribe(data => {
        console.log(data); 
        this.users = data;
      });
  }
}
