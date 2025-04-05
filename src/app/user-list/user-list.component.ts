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
constructor(private userService: UserService){}
users: Iuser[]=[]
ngOnInit(): void {
    this.OngetUsers();
    this.OngetUser();
    
}
OngetUsers(){
  this.userService.getUsers().subscribe(
    (response)=> console.log(response),
    (error:any) => console.log(error),
    ()=>console.log('dhaan users')
  )
  
};

OngetUser(){
  this.userService.getUser().subscribe(
    (response)=> console.log(response),
    (error:any) => console.log(error),
    ()=>console.log('hal users')
  )
  
};

}
