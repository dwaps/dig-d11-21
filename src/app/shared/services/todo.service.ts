import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() {
    setTimeout(() => {
      this.todos$.next([
        new Todo("Faire la vaisselle"),
        new Todo("Faire le ménage"),
        new Todo("Faire les courses"),
      ]);
    }, 5000);
  }
}
