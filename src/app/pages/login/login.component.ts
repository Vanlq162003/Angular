import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user :  User = {
    email: "",
    password: "",
  }
  
  constructor (private Users:UsersService , private router : Router){}

  handleSignIn(){
    this.Users.SignIn(this.user).subscribe(data => {
      console.log(data)
      localStorage.setItem('user', JSON.stringify(data));
      // this.router.navigate(['/home'])
    })
  }
}
