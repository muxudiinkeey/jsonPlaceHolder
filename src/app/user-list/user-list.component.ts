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

private user: Iuser={
    
  'name': 'Axmed',
  'username': 'Calasow',
  'email': 'Sincere@april.biz',
  'address': {
    'street': 'Kulas Light',
    'suite': 'Apt. 556',
    'city': 'Gwenborough',
    'zipcode': '92998-3874',
    'geo': {
      'lat': '-37.3159',
      'lng': '81.1496'
    }
  },
  'phone': '1-770-736-8031 x56442',
  'website': 'hildegard.org',
  'company': {
    'name': 'Romaguera-Crona',
    'catchPhrase': 'Multi-layered client-server neural-net',
    'bs': 'harness real-time e-markets'
  }
}
ngOnInit(): void {
  this.onGetUsers();
  //this.onGetUser();
  //  this.onCreateUser();
  //this.onUpdateUser();
  //this.onPatchUser();
  //this.onDeleteUser();

}

onGetUsers(){
  this.userService.getUsers().subscribe((response=>{
    this.users = response;
    console.log(response  )
  }))
}
onGetUser(){
  this.userService.getUser().subscribe((response=>{
    this.users = this.users;
    console.log(response)
  
  }))
}
onCreateUser(){
  this.userService.CreateUser(this.user).subscribe((response=>{
    this.users = this.users;
    console.log(response)
    
  }))
}
onUpdateUser(){
  this.userService.updateUser(this.user).subscribe((response=>{
    this.users = this.users;
    console.log(response)
  }))
}
onPatchUser(){
  this.userService.updateUser(this.user).subscribe((response=>{
    this.users = this.users;
    console.log(response)
  }))
}
onDeleteUser(){
  this.userService.deleteUser(5).subscribe((response=>{
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


