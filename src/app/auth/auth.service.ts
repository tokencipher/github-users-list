import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authAPI: string = '/api/auth';
  accessToken: string;

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(`${this.authAPI}/create`, {user});
  } 

  updateUser(user: Partial<User>) {
    return this.http.put(`${this.authAPI}/update/${user.user_id}`, {user});
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.authAPI}/delete/${user.user_id}`);
  }

  private setSession(payload) {
    const expiry = moment().add(payload.expiresIn, 'second');

    localStorage.setItem('access_token', payload.access_token);
    localStorage.setItem("expiry", JSON.stringify(expiry.valueOf()));
  }

  login(user: Partial<User>) {
    return this.http.post(`${this.authAPI}/login`, user)
      .pipe(
        map((res: any) => this.setSession)
      );
    // Can possibly call shareReplay() to prevent the receiver of 
    // this Observable from accidentally triggering multiple POST
    // requests due to multiple subscriptions.
  }


}
