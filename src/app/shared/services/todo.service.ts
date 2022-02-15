import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = environment.urlApi + '/todos';

  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {}

  public loadUserTodos(userId: number) {
    this.http
      .get<Todo[]>(this.baseUrl + "?userId=" + userId)
      .subscribe(todos => {
        this.todos$.next(todos);
      });
  }

  public createTodo(todo: Todo) {
    todo.userId = this.userService.currentUser$.value!.id;
    todo.completed = false;
    return this.http.post(this.baseUrl, todo);
  }

  public deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
