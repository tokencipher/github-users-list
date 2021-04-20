import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.http.get<User[]>(`${this.usersAPI}/users`);
  }

  createUser(user: User) {
    return this.http.post(`${this.usersAPI}/user`, {user});
  }

  deleteUser(userID: number) {
    return this.http.delete(`${this.usersAPI}/user/${userID}`);
  }

  updateUser(userID: number, user: Partial<User>) {
    return this.http.patch(`${this.usersAPI}/user/${userID}`, {user});
  }

  checkUsername(username: string) {
    return this.http.get(`${this.usersAPI}/user/${username}`).pipe(
      map(res => res)
    );
  }

}
