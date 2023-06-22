import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const currentUser = localStorage.getItem('user');

    // if (currentUser && currentUser.role === 'user') {
    //   // Người dùng có vai trò "user", không được phép truy cập vào đường dẫn "admin"
    //   return this.router.createUrlTree(['/unauthorized']); // Chuyển hướng đến trang unauthorized
    // }

    // Cho phép truy cập vào đường dẫn khác
    return true;
  }
}
