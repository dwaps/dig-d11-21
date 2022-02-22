import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  hasErrors(control: AbstractControl|null, key: string) {
    if (control && control.errors) {
      return control.errors[key];
    }
    return null;
  }

  submit() {
  }

}
