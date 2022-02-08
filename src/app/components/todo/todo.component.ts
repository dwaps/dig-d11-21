import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  public todos: Todo[];

  constructor() {
    this.todos = [
      new Todo("Faire la vaisselle"),
      new Todo("Faire le ménage"),
      new Todo("Faire les courses"),
    ];
  }

}
