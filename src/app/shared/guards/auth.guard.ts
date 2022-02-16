import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if (!this.authService.isConnected()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

  canActivateChild() {
    if (!this.authService.isConnected()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
