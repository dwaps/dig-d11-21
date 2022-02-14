import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .findAll()
      .subscribe(users => {
        this.users$.next(users);
      });
  }

}
