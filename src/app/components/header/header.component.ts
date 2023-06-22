import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  checkUserExistsInLocalStorage(): boolean {
    const user = localStorage.getItem('user');
    return !!user; // Trả về true nếu user tồn tại, ngược lại trả về false
  }
  Logout(){
    localStorage.removeItem('user')
  }
}
