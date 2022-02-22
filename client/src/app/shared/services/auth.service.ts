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
}
