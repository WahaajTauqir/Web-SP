import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './authlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let currentUser;
    this.authService.getCurrentUser().subscribe(user => {
      currentUser = user;
    });

    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/login-signup']);
      return false;
    }
  }
}
