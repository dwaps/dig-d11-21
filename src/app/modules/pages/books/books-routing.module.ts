import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckSavedGuard } from '../../core/guards/check-saved.guard';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    canDeactivate: [CheckSavedGuard],
    children: [
      { path: '', component: BookListComponent },
      { path: ':id', component: BookDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
