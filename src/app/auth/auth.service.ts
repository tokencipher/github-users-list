import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authAPI: string = '/api/auth';
  private accessToken: string;

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(`${this.authAPI}/create`, {user});
  } 

  updateUser(user: Partial<User>) {
    return this.http.put(`${this.authAPI}/update/${user.user_id}`, {user});
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.authAPI}/delete/${user.user_id}`);
  }

  login(user: Partial<User>) {
    return this.http.post(`${this.authAPI}/login`, user);
  }


}
