import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Iuser } from './user';
import { HttpBackend, HttpClient } from '@angular/common/http';

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
  this.onGetUsers();
  this.onGetUser();
}

onGetUsers(){
  this.userService.getUsers().subscribe((response=>{
    this.users = response;
    console.log(response)
  }))
}
onGetUser(){
  this.userService.getUser().subscribe((response=>{
    this.users = this.users;
    console.log(response)
  }))
}
onCreateUser(){
  this.userService.getUser().subscribe((response=>{
    this.users = this.users;
    console.log(response)
  }))
}
}
/*
constructor(private userService: UserService){}
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
  
}; */


