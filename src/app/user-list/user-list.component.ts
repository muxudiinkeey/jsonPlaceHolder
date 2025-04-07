import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Iuser } from '../user';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  users: Iuser[] = [];
  ngOnInit(): void {
    this.onGetUsers();
  }
  onGetUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }
}
