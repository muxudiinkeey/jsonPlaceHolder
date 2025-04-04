import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject (HttpClient);
  url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.url);
  }
}
