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
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (!this.authService.isConnected()) {
          this.router.navigateByUrl('/home');
          resolve(false);
        }
        resolve(true);
      }, 3000);
    });
  }

  canActivateChild() {
    if (!this.authService.isConnected()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
