import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = environment.urlApi + '/todos';

  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private http: HttpClient,
  ) {}

  public loadUserTodos(userId: number) {
    this.http
      .get<Todo[]>(this.baseUrl + "?userId=" + userId)
      .subscribe(todos => {
        this.todos$.next(todos);
      });
  }

  public deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
