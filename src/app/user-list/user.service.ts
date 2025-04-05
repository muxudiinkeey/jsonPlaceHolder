import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
http = inject (HttpClient);
getUsers():Observable<Iuser[]>{
return this.http.get<Iuser[]>(this.apiUrl);
}
getUser():Observable<Iuser>{
return this.http.get<Iuser>(`${this.apiUrl}/${2}` );
}
CreateUser(user: Iuser):Observable<Iuser>{
return this.http.get<Iuser>(`${this.apiUrl}/${2}` );
}
}

/* 
nooca koowaad
  constructor(private http:HttpClient){}
  

  getUsers(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUser(): Observable<Iuser>{
    return this.http.get<Iuser>('https://jsonplaceholder.typicode.com/users/1');
  } */
