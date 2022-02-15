import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user';
import { TodoService } from 'src/app/shared/services/todo.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  user!: User;
  formCreateTodo = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(
    private todoService: TodoService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser$.value!;
  }

  onSubmit() {
    const form = this.formCreateTodo;
    if (form.touched && form.valid) {
      this.todoService.createTodo(form.value).subscribe(() => {
        if (this.user) {
          this.todoService.loadUserTodos(this.user.id);
        }
        form.reset();
      });
    }
  }

}
