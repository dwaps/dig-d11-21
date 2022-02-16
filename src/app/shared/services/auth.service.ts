import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userConnected$ = new BehaviorSubject<boolean>(false);

  public connectUser(user: User) {
    delete user.password;
    user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";
    localStorage.setItem('user', JSON.stringify(user));
    this.userConnected$.next(true);
  }

  public disconnectUser() {
    localStorage.removeItem('user');
    this.userConnected$.next(false);
  }

  public userIsConnected() {
    return this.userConnected$.value;
  }

}
