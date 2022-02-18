import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books = [
    { id: 1, title: 'Biographie de Coco' },
    { id: 2, title: 'Biographie de Jaco' },
    { id: 3, title: 'Biographie de Pedro' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
