import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
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
    return this.http.get<User[]>(`${this.usersAPI}/users`)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  createUser(user: User) {
    return this.http.post(`${this.usersAPI}/user`, {user})
      .pipe(
        catchError(this.handleError<User>('createUser'))
      );
  }

  deleteUser(userID: number) {
    return this.http.delete(`${this.usersAPI}/user/${userID}`)
      .pipe(
        catchError(this.handleError<User>('deleteUser'))
      )
  }

  updateUser(userID: number, user: Partial<User>) {
    return this.http.patch(`${this.usersAPI}/user/${userID}`, {user})
      .pipe(
        catchError(this.handleError<User>('updateUser'))
      )
  }

  checkUsername(username: string) {
    return this.http.get(`${this.usersAPI}/user/${username}`).pipe(
      map(res => res),
      catchError(this.handleError<User>('checkUsername'))
    );
  }

  /**
   * Handle HTTP operation that failed.
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
