import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { first, mapTo, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataUserGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(): Observable<true> {
    return this.authService.user$.pipe(
      first(),
      switchMap((user: User|null): Observable<true> => {
        if (!user) {
          return this.authService.getConnectedUser().pipe(mapTo(true))
        }
        else {
          return of(true);
        }
      })
    );
  }

}
