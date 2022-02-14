import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.urlApi + '/users';
  private currentUser$ = new BehaviorSubject<User|null>(null);

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  public selectUser(user: User) {
    this.currentUser$.next(user);
  }
}
