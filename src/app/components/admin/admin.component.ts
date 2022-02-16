import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


enum Categories {
  TOMATO = "Tomate",
  CREAM = "Crème",
  SPECIAL = "Spéciale"
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categories: Array<Categories|string> = [
    Categories.TOMATO,
    Categories.CREAM,
    Categories.SPECIAL,
  ];

  formCreatePizza = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
  });

  ngOnInit() {
    console.log(this.formCreatePizza.get('category')!.value);
  }

  submitForm() {
    if (this.formCreatePizza.valid) {
      console.log(this.formCreatePizza.value);
      this.formCreatePizza.reset();
    }
  }

}
