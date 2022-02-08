import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  private sub: Subscription|null = null;

  constructor(
    private todoService: TodoService,
  ) {}

  ngOnInit() {
    this.sub = this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  ngOnDestroy() {
    this.sub!.unsubscribe();
  }

}
