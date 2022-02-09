import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Input()
  books: any[] = [];

  @Output('selectBook')
  selectBookEmitter = new EventEmitter<{value: any}>();

  selectedBook(book: any) {
    this.selectBookEmitter.emit({
      value: book
    });
  }
}
