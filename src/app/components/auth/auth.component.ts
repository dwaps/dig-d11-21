import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  public error!: string;
  public isSignupFormView = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig?.path == 'signup') {
      this.form.addControl('name', this.fb.control('', Validators.required));
      this.isSignupFormView = true;
    }
  }

  hasErrors(control: AbstractControl|null, key: string) {
    if (control && control.errors) {
      return control.errors[key];
    }
    return null;
  }

  submit() {
    if (this.form.valid) {
      if (this.isSignupFormView) {
        // INSCRIPTION
      }
      else {
        // CONNEXION
      }
    }
  }

}
