import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl: string = 'https://api.github.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

}