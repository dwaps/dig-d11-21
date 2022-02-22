import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn$ = this.authService.isLoggedIn$;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
