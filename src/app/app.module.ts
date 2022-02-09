import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoDetailComponent } from './components/todos/todo-detail/todo-detail.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosListComponent } from './components/todos/todos-list/todos-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodosComponent,
    TodosListComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
