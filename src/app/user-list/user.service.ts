import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Iuser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'
http = inject (HttpClient);
/* getUsers():Observable<Iuser[]>{
return this.http.get<Iuser[]>(this.apiUrl);
} */
getUsers():Observable<Iuser[]>{
return this.http.get<Iuser[]>(this.apiUrl)
.pipe(
  tap(users=> console.log(users))
);

}

getUser():Observable<Iuser>{
  return this.http.get<Iuser>(`${this.apiUrl}/${2}` );
  
  }
  

/* getUser():Observable<Iuser>{
return this.http.get<Iuser>(`${this.apiUrl}/${2}` );

}

CreateUser(user: Iuser):Observable<Iuser>{
return this.http.post<Iuser>(`${this.apiUrl}`, user );
}
updateUser(user: Iuser):Observable<Iuser>{
return this.http.put<Iuser>(`${this.apiUrl}`, user );
}
patchUser(user: Iuser):Observable<Iuser>{
return this.http.patch<Iuser>(`${this.apiUrl}/${user.id}`, user );
}
deleteUser(id: number):Observable<unknown>{
return this.http.delete<unknown>(`${this.apiUrl}/${id}`);
} */


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
