import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import * as moment from 'moment';
import { UsernameValidator } from '../validators/username';

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

  deleteUser(userID: number) {
    return this.http.delete(`${this.authAPI}/delete/${userID}`);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());  
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiry')
  }

  private setSession(payload) {
    const expiry = moment().add(payload.expiresIn, 'second');

    console.log(`Auth Service::${payload.access_token}`)

    localStorage.setItem('access_token', payload.access_token);
    localStorage.setItem('expiry', JSON.stringify(expiry.valueOf()));
  }

  login(user: Partial<User>) {
    return this.http.post(`${this.authAPI}/login`, user)
      .pipe(
        map((res: any) => { 
          console.log('Login response: ' + res.access_token)
          this.setSession(res)
        })
      );
    // Can possibly call shareReplay() to prevent the receiver of 
    // this Observable from accidentally triggering multiple POST
    // requests due to multiple subscriptions.
  }

  getExpiration() {
    const expiration = localStorage.getItem('expiry');
    const expiry = JSON.parse(expiration);
    return moment(expiry);
  }

}
