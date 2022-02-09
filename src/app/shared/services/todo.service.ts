import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlApiTodos = environment.urlApi + '/todos';
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.getTodos();
  }

  public getTodos() {
    this.http
      .get<Todo[]>(this.urlApiTodos)
      .subscribe((todos) => this.todos$.next(todos));
  }

  public createTodo(todo: Todo) {
    this.http
      .post<Todo>(this.urlApiTodos, todo)
      .subscribe(todo => this.todos$.next([...this.todos$.value, todo]));
  }

  public updateTodo(todo: Todo) {
    this.http
      .put<Todo>(`${this.urlApiTodos}/${todo.id}`, todo)
      .subscribe(todo => {
        const todos = this.todos$.value;
        todos.splice(
          todos.findIndex(t => t.id == todo.id),
          1, todo
        );
        this.todos$.next(todos);
      });
  }

  public deleteTodo(id: string) {
    this.http
      .delete<Todo>(this.urlApiTodos + '/' + id)
      .subscribe(() => this.todos$.next(
        this.todos$.value.filter(t => t.id != id)
      ));
  }
}
