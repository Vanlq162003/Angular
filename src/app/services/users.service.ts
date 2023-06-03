import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  SignUp(user:User){
    const newUser = {...user , role : "user" , confirmpassword : undefined}
    return this.http.post(`http://localhost:3000/signup` , newUser)
  }

}
