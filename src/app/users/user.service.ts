import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersAPI: string = '/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersAPI + '/users');
  }

  addUser(user: User) {
    return this.http.post(this.usersAPI + '/user', {user});
  }

  deleteUser(userID: number) {
    return this.http.delete(this.usersAPI + '/user/' + userID);
  }

}
