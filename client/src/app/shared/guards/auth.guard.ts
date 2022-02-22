import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate() {
    return this.authService.isLoggedIn$.pipe(
      first(),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('/login')
        }
      })
    );
  }

}
