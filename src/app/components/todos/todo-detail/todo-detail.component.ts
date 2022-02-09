import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  @Input() todo?: Todo;
}
