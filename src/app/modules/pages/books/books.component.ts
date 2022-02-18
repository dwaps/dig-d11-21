import { Component } from '@angular/core';
import { CheckSavedInterface } from '../../core/guards/check-saved.guard';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements CheckSavedInterface {

  constructor() { }

  isDirty() {
    return confirm('Voulez-vous vraiment quitter cette page ?');
  }

}
