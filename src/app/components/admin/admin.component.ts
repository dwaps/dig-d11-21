import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  submitForm(form: NgForm) {
    if (form.valid && form.touched) {
      console.log(form.value);
      form.reset();
    }
  }

}
