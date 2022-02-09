import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent {
  @Input() public todos: Todo[] = [];
  @Output('selectTodo')
  emitter = new EventEmitter<Todo|undefined>();

  createTodo(todoTxt: string) {}

  selectTodo(todo?: Todo) {
    this.emitter.emit(todo);
  }
}
