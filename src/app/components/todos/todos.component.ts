import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  user!: User;
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
