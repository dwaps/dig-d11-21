import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  editingTodo: boolean = false;

  constructor(
    private todoService: TodoService
  ) {}

  deleteTodo(id?: string) {
    if (id) {
      this.todoService.deleteTodo(id);
    }
  }

  editTodo(newTxt: string) {
    this.editingTodo = !this.editingTodo;
    if (!this.editingTodo) {
      this.todo.message = newTxt;
      this.todoService.updateTodo(this.todo);
    }
  }
}
