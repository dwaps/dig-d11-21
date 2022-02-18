import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
