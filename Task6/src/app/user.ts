import { Injectable } from '@angular/core'; //Marks the class as a service that can be injected into other components or services.
import { HttpClient } from '@angular/common/http'; //Angular's built-in HTTP client for making API requests.
import { Observable } from 'rxjs';//Represents asynchronous data streams. HttpClient returns data as an Observable.

@Injectable({
  providedIn: 'root' //registers services globally
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users' //apiUrl stores the endpoint for fetching user data.
  constructor(private http: HttpClient)//Injects the HttpClient into the service
  {}
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl) //request
  }
  
}  
