import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
  ) {}

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

}
