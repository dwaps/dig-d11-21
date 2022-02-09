import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  public todo?: Todo;

  private sub: Subscription|null = null;

  constructor(
    private todoService: TodoService,
  ) {}

  ngOnInit() {
    this.sub = this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  onSelectTodo(todo: Todo|undefined) {
    this.todo = todo;
  }

  ngOnDestroy() {
    this.sub!.unsubscribe();
  }
}
