import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/shared/interfaces/todo';
import { User } from 'src/app/shared/interfaces/user';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  user!: User|null;
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(
    private todoService: TodoService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = this.userService.currentUser$.value;
    this.todos$ = this.todoService.todos$;
    if (this.user) {
      this.todoService.loadUserTodos(this.user.id);
    }
    else {
      this.router.navigateByUrl('/users');
    }
  }

}
