import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user :  User = {
    name: "",
    email: "",
    password: "",
    confirmpassword: ""   
  }

  constructor (private Users:UsersService , private router : Router){}

  handleSignUp(){
    this.Users.SignUp(this.user).subscribe(data => {
      console.log(data)
      this.router.navigate(['/login'])
    })
  }






}
