import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user-list/user.service';
import { Iuser } from '../user';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
users: Iuser[]=[];
userService = inject(UserService);
activateRoute = inject (ActivatedRoute)
user: Iuser[]=[];
ngOnInit(): void {
    this.onGetUser();
}
  onGetUser(){
    this.userService.getUser().subscribe((response=>{
      this.users = this.users;
      console.log(response)
    
    }))
  }


}
