import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _urlAuthApi = '/api/auth';

  public user$ = new BehaviorSubject<User|null>(null);
  public isLoggedIn$ = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) { }

  public getConnectedUser() {
    return this.http
      .get<User>(`${this._urlAuthApi}/connected`)
      .pipe(
        tap(user => {
          this.user$.next(user);
          this.isLoggedIn$.next(!!user);
        })
      );
  }

  public signup(user: User) {
    return this.http.post<User>(`${this._urlAuthApi}/signup`, user);
  }

  public login(user: User) {
    return this.http
      .post<User>(`${this._urlAuthApi}/login`, user)
      .pipe(
        tap(user => {
          this.user$.next(user);
          this.isLoggedIn$.next(!!user);
        })
      );
  }

  public logout() {
    return this.http
      .delete(`${this._urlAuthApi}/logout`)
      .pipe(
        tap(() => {
          this.user$.next(null);
          this.isLoggedIn$.next(false);
        })
      );
  }
}
