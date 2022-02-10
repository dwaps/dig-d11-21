import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo: Todo = new Todo();

  constructor(
    private todoService: TodoService
  ) {}

  createTodo(e: Event, form: HTMLFormElement) {
    e.preventDefault();
    this.todoService.createTodo(this.todo);
    form.reset();
  }
}
