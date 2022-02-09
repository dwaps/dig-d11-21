import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [
    {
      title: 'Il était une fois',
      price: 56
    },
    {
      title: 'Il était deux fois',
      price: 3
    },
    {
      title: 'Il était trois fois',
      price: 999
    },
  ];
  book: any;

  onSelectedBook(e: {value: any}) {
    this.book = e.value;
  }
}
