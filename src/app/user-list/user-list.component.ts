import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Iuser } from './user';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
userService = inject (UserService);
users: Iuser[]=[]
ngOnInit(): void {
    this.OngetUsers();
    
}
OngetUsers(){
  this.userService.getUsers().subscribe((result=>{
    
    this.users = result;
   

  }))
}
}
